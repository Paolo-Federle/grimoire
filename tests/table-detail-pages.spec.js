import { PATHS } from '../src/pages/path';
// @ts-check
const { test, expect } = require('@playwright/test');

// npx playwright test tests/table-detail-pages.spec.js --project=chromium --workers=1 --headed

const BASE_URL = 'http://localhost:3000/grimoire';

const TABLE_PAGES = [
  { name: 'Locations', path: '#' + PATHS.LOCATIONS_BASE },
  { name: 'Derangement', path: '#' + PATHS.DERANGEMENTS },
  { name: 'Universal Merits', path: '#' + PATHS.UNIVERSAL_MERITS },
  // { name: 'Vampire Devotions', path: '#' + PATHS.VAMPIRE.DEVOTIONS },
  // { name: 'Vampire Disciplines', path: '#' + PATHS.VAMPIRE.DISCIPLINES },
  // { name: 'Mage Spells', path: '#' + PATHS.MAGE.SPELLS },
  // { name: 'Mage Artifacts', path: '#' + PATHS.MAGE.ARTIFACTS },
  // { name: 'Changeling Contracts', path: '#' + PATHS.CHANGELING.CONTRACTS },
];

const EXCLUDED_HEADER_KEYWORDS = [
  'book',
  'books',
  'source',
  'sources',
  'reference',
  'references',
  'ref',
  'page',
  'pages',
  'manual',
  'manuale',
];

function normalizeText(text) {
  return (text || '').replace(/\s+/g, ' ').trim();
}

function normalizeHeader(text) {
  return normalizeText(text).toLowerCase();
}

function isExcludedHeader(headerText) {
  const normalized = normalizeHeader(headerText);
  return EXCLUDED_HEADER_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function looksLikeBookReference(text) {
  const value = normalizeText(text);
  if (!value) return false;

  const compactBookPattern =
    /^([A-Za-z][A-Za-z'’.\-]*\s?){1,5}\d{1,4}([–-]\d{1,4})?$/;

  const shortCodePattern =
    /^[A-Z][A-Za-z]{0,8}\s\d{1,4}([–-]\d{1,4})?$/;

  return compactBookPattern.test(value) || shortCodePattern.test(value);
}

function buildTargetUrl(href) {
  if (!href) return '';

  if (href.startsWith('http')) return href;
  if (href.startsWith('#/')) return `${BASE_URL}${href}`;
  if (href.startsWith('/#/')) return `http://localhost:3000${href}`;
  if (href.startsWith('/')) return `${BASE_URL}#${href}`;
  return `${BASE_URL}#/${href.replace(/^#?\/?/, '')}`;
}

function isLikelyDetailLink(href, linkText, columnName) {
  const targetUrl = buildTargetUrl(href);

  if (!targetUrl) return false;
  if (!targetUrl.includes('/grimoire#')) return false;
  if (isExcludedHeader(columnName)) return false;
  if (looksLikeBookReference(linkText)) return false;

  return true;
}

async function waitForAnyTableRows(page) {
  await page.waitForSelector('table tbody tr', { timeout: 15000 });
}

async function findAllTables(page) {
  const tables = page.locator('table');
  const count = await tables.count();
  const result = [];

  for (let i = 0; i < count; i++) {
    const table = tables.nth(i);
    const rowCount = await table.locator('tbody tr').count();

    if (rowCount > 0) {
      result.push({
        index: i,
        table,
        rowCount,
      });
    }
  }

  return result;
}

async function getHeaderMap(table) {
  const theadHeaders = table.locator('thead tr th');
  const theadCount = await theadHeaders.count();

  const result = [];

  if (theadCount > 0) {
    for (let i = 0; i < theadCount; i++) {
      const text = normalizeText(await theadHeaders.nth(i).innerText());
      result.push({
        index: i,
        text,
        normalized: normalizeHeader(text),
      });
    }
    return result;
  }

  const firstBodyRowHeaders = table.locator('tbody tr').first().locator('th');
  const bodyHeaderCount = await firstBodyRowHeaders.count();

  for (let i = 0; i < bodyHeaderCount; i++) {
    const text = normalizeText(await firstBodyRowHeaders.nth(i).innerText());
    result.push({
      index: i,
      text,
      normalized: normalizeHeader(text),
    });
  }

  return result;
}

async function extractRowLinks(table, pageName, tableIndex) {
  const headerMap = await getHeaderMap(table);
  const rows = table.locator('tbody tr');
  const rowCount = await rows.count();

  const links = [];

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const row = rows.nth(rowIndex);

    const tdCount = await row.locator('td').count();
    const thCount = await row.locator('th').count();

    const isFirstHeaderRow =
      rowIndex === 0 && tdCount === 0 && thCount > 0 && headerMap.length > 0;

    if (isFirstHeaderRow) {
      continue;
    }

    // Righe-sezione con TH e link, tipo Animalism / Auspex / Dominate
    if (tdCount === 0 && thCount > 0) {
      const thCells = row.locator('th');
      const thCellCount = await thCells.count();

      for (let colIndex = 0; colIndex < thCellCount; colIndex++) {
        const cell = thCells.nth(colIndex);
        const anchors = cell.locator('a');
        const anchorCount = await anchors.count();

        for (let a = 0; a < anchorCount; a++) {
          const link = anchors.nth(a);
          const href = (await link.getAttribute('href')) || '';
          const linkText = normalizeText(await link.innerText().catch(() => ''));
          const targetUrl = buildTargetUrl(href);

          const columnName = headerMap[0]?.text || 'Name';

          if (!isLikelyDetailLink(href, linkText, columnName)) {
            continue;
          }

          links.push({
            pageName,
            tableIndex,
            rowIndex,
            columnIndex: colIndex,
            columnName,
            linkText: linkText || '(senza testo)',
            href,
            targetUrl,
          });
        }
      }

      continue;
    }

    // Righe dati normali con TD
    if (tdCount === 0) {
      continue;
    }

    const cells = row.locator('td');
    const cellCount = await cells.count();

    for (let colIndex = 0; colIndex < cellCount; colIndex++) {
      const header = headerMap[colIndex];
      const columnName = header?.text || `column_${colIndex + 1}`;

      const cell = cells.nth(colIndex);
      const anchors = cell.locator('a');
      const anchorCount = await anchors.count();

      for (let a = 0; a < anchorCount; a++) {
        const link = anchors.nth(a);
        const href = (await link.getAttribute('href')) || '';
        const linkText = normalizeText(await link.innerText().catch(() => ''));
        const targetUrl = buildTargetUrl(href);

        if (!isLikelyDetailLink(href, linkText, columnName)) {
          continue;
        }

        links.push({
          pageName,
          tableIndex,
          rowIndex,
          columnIndex: colIndex,
          columnName,
          linkText: linkText || '(senza testo)',
          href,
          targetUrl,
        });
      }
    }
  }

  return links;
}

async function waitForDetailPage(page) {
  await page.waitForLoadState('domcontentloaded');

  await page.waitForFunction(() => {
    const root =
      document.querySelector('.longTextContainer') ||
      document.querySelector('main') ||
      document.body;

    return !!root && root.innerText.trim().length > 0;
  }, { timeout: 10000 });

  await page.waitForTimeout(150);
}

async function findVisibleTitle(page) {
  const selectors = [
    '.longTextContainer h1',
    'main h1',
    'h1',
    '.longTextContainer h2',
    'main h2',
    'h2',
    'h3',
  ];

  for (const selector of selectors) {
    const locator = page.locator(selector).first();
    const text = normalizeText(await locator.textContent().catch(() => ''));
    if (text) return text;
  }

  return '';
}

async function evaluateDetailPage(page) {
  const titleText = await findVisibleTitle(page);

  const rootLocator = page.locator('.longTextContainer, main, body').first();

  const fullText = normalizeText(
    await rootLocator.innerText().catch(() => '')
  );

  const cleanedText = normalizeText(
    fullText.replace(titleText || '', '')
  );

  const paragraphs = page.locator('.longTextContainer p, main p, p');
  const paragraphCount = await paragraphs.count().catch(() => 0);

  let meaningfulParagraphCount = 0;
  let longestParagraphLength = 0;

  for (let i = 0; i < paragraphCount; i++) {
    const text = normalizeText(await paragraphs.nth(i).innerText().catch(() => ''));

    if (!text) continue;

    const lower = text.toLowerCase();

    // esclude paragrafi troppo poveri o solo etichette
    if (
      lower === 'book' ||
      lower === 'action' ||
      lower === 'dice pool' ||
      lower === 'cost' ||
      lower === 'duration' ||
      lower === 'bloodline'
    ) {
      continue;
    }

    if (text.length >= 40) {
      meaningfulParagraphCount++;
    }

    if (text.length > longestParagraphLength) {
      longestParagraphLength = text.length;
    }
  }

  const informativeBlocks = page.locator(
    '.longTextContainer > div, main > div'
  );
  const informativeBlockCount = await informativeBlocks.count().catch(() => 0);

  let metadataBlockCount = 0;

  for (let i = 0; i < informativeBlockCount; i++) {
    const text = normalizeText(await informativeBlocks.nth(i).innerText().catch(() => ''));
    if (!text) continue;

    if (
      /^(dice pool|action|cost|duration|bloodline|book)\s*:/i.test(text)
    ) {
      metadataBlockCount++;
    }
  }

  const hasTitle = !!titleText;

  // Criterio più severo:
  // deve esserci almeno un vero blocco descrittivo,
  // non bastano metadati o tabelle
  const hasDescriptiveText =
    meaningfulParagraphCount >= 1 ||
    longestParagraphLength >= 100 ||
    cleanedText.length >= 180;

  const hasDetails = hasDescriptiveText;

  let reason = '';

  if (!hasTitle && !hasDetails) {
    reason = 'nessun titolo e nessun contenuto descrittivo significativo';
  } else if (!hasTitle) {
    reason = 'manca il titolo della pagina dettaglio';
  } else if (!hasDetails) {
    reason =
      `pagina troppo povera: cleanedText=${cleanedText.length}, paragrafi significativi=${meaningfulParagraphCount}, metadataBlocks=${metadataBlockCount}`;
  }

  return {
    hasTitle,
    hasDetails,
    reason,
  };
}

function formatFailureReport(tablePageName, failures) {
  const lines = [
    `Trovati ${failures.length} elementi con dettaglio mancante o insufficiente in "${tablePageName}":`,
    '',
  ];

  failures.forEach((f, i) => {
    lines.push(
      `[${i + 1}] Elemento: ${f.itemName}`,
      `    Tabella: ${f.tableNumber}`,
      `    Riga: ${f.rowNumber}`,
      `    Colonna: ${f.column}`,
      `    URL: ${f.url}`,
      `    Motivo: ${f.reason}`,
      ''
    );
  });

  return lines.join('\n');
}

test.describe('All table detail pages should not be empty', () => {
  test.setTimeout(420000);

  for (const tablePage of TABLE_PAGES) {
    test(`${tablePage.name}: all detail links should contain real content`, async ({ page }) => {
      const failures = [];

      await page.goto(`${BASE_URL}${tablePage.path}`, {
        waitUntil: 'domcontentloaded',
      });

      await waitForAnyTableRows(page);

      const tables = await findAllTables(page);

      expect(
        tables.length,
        `Nessuna tabella trovata in ${tablePage.name}`
      ).toBeGreaterThan(0);

      let links = [];

      for (const tableEntry of tables) {
        const tableLinks = await extractRowLinks(
          tableEntry.table,
          tablePage.name,
          tableEntry.index + 1
        );

        links = links.concat(tableLinks);
      }

      expect(
        links.length,
        `Nessun link di dettaglio trovato nelle tabelle di ${tablePage.name}`
      ).toBeGreaterThan(0);

      for (const item of links) {
        try {
          await page.goto(item.targetUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 20000,
          });

          await waitForDetailPage(page);

          const result = await evaluateDetailPage(page);

          if (!result.hasTitle || !result.hasDetails) {
            failures.push({
              itemName: item.linkText,
              tableNumber: item.tableIndex,
              rowNumber: item.rowIndex + 1,
              column: item.columnName,
              url: item.targetUrl,
              reason: result.reason,
            });
          }
        } catch (error) {
          failures.push({
            itemName: item.linkText,
            tableNumber: item.tableIndex,
            rowNumber: item.rowIndex + 1,
            column: item.columnName,
            url: item.targetUrl,
            reason: `errore durante apertura o lettura pagina: ${error.message}`,
          });
        }
      }

      if (failures.length > 0) {
        throw new Error(formatFailureReport(tablePage.name, failures));
      }
    });
  }
});