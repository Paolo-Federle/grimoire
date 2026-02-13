import BaseTable from "./components/BaseTable";
import { allBooks } from "./Data/BookData";

export function sortByKey(list, key) {
    return list.sort((a, b) => {
        const valueA = a[key].toLowerCase();
        const valueB = b[key].toLowerCase();

        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Filtro per array di oggetti che elimina interi oggetti indesiderati (ad esempio per creare link a pagine)
export const filtreArrayOfObjects = (array, keyToFilter, valueToLeaveOut) =>
    array.filter(object => !valueToLeaveOut.includes(object[keyToFilter]))

// Add link to list of objects
// data = lista di dati da passare, keyname nome della chiave da usare per parte dinamica link (titolo, nome), baselink base del link fisso
export function addLink(data, keyName, baseLink) {
    return data.map(item => {
        const keyValue = item[keyName];
        return {
            ...item,
            link: `${baseLink}${slugify(keyValue)}`,
        };
    });
}

// rimuove un singolo campo da una lista di oggetti
export function rimuoviCampi(lista, campiDaRimuovere) {
    return lista.map(obj => {
        const nuovoOggetto = { ...obj };
        campiDaRimuovere.forEach(campo => {
            delete nuovoOggetto[campo];
        });
        return nuovoOggetto;
    });
}

export function slugify(text) {
    return text
        .toLowerCase()                       // convert to lowercase
        .replace(/[^\w\s]/g, '')             // remove punctuation (non-word, non-space chars)
        .replace(/\s+/g, '_');               // replace spaces with underscores
}

export function removeFieldsAndAddLink({ data, fieldsToRemove, urlPrefix, keyToUseForLinks }) {

    const cleaned = rimuoviCampi(data, fieldsToRemove);

    const flattened = cleaned.map(obj => {
        const newObj = { ...obj };
        Object.keys(newObj).forEach(key => {
            if (Array.isArray(newObj[key]) && newObj[key].length > 1) {
                newObj[key] = newObj[key].join(', ');
            }
        });
        return newObj;
    });

    return addLink(flattened, keyToUseForLinks, urlPrefix);
}


export function getFlipHtmlPageUrlsFromSource(source, allBooks) {
    if (typeof source !== 'string') return [];
  
    return source.split(',').map(part => {
      const trimmed = part.trim();
      const match = trimmed.match(/^([^\s]+)\s+(\d+)$/);
      if (!match) return { text: trimmed, url: null };
  
      const codeName = match[1];
      const sourcePage = parseInt(match[2], 10);
      if (isNaN(sourcePage)) return { text: trimmed, url: null };
  
      const book = allBooks.find(b => b['Code Name'] === codeName);
      if (!book || !book.LinkTo || book.PagesOffset === '') return { text: trimmed, url: null };
  
      const offset = parseInt(book.PagesOffset, 10);
      if (isNaN(offset)) return { text: trimmed, url: null };
  
      const pdfPage = sourcePage + offset;
      const spreadPage = pdfPage % 2 === 0 ? pdfPage : pdfPage - 1;
  
      return { text: trimmed, url: `${book.LinkTo}${spreadPage}` };
    });
  }
  

// search and substitute to delete "p" in book valor
// search: ("Book": "[^"]*?)\sp(?=\d+)
// substitute $1 


// da usare nella homepage
  // Pagine colorate per le razze
  // useEffect(() => {
  //   const getCategoryFromPath = (path) => {
  //     const categories = [
  //       'mortal',
  //       'vampire',
  //       'werewolf',
  //       'mage',
  //       'promethean',
  //       'changeling',
  //       'hunter',
  //       'geist',
  //       'mummy',
  //       'others'
  //     ];

  //     const pathSegments = path.split('/'); 
  //     const categoryIndex = pathSegments.findIndex(segment =>
  //       categories.includes(segment)
  //     );
  //     if (categoryIndex !== -1) {
  //       return pathSegments[categoryIndex]; 
  //     }

  //     return 'others'; 
  //   };

  //   const handlePageChange = () => {
  //     const currentCategory = getCategoryFromPath(window.location.href);
  //     let newCategoryStyle = '';

  //     switch (currentCategory) {
  //       case 'mage':
  //         newCategoryStyle = 'mage-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'vampire':
  //         newCategoryStyle = 'vampire-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'mortal':
  //         newCategoryStyle = 'mortals-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'werewolf':
  //         newCategoryStyle = 'werewolf-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'promethean':
  //         newCategoryStyle = 'promethean-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'changeling':
  //         newCategoryStyle = 'changeling-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'hunter':
  //         newCategoryStyle = 'hunter-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'geist':
  //         newCategoryStyle = 'geist-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       case 'mummy':
  //         newCategoryStyle = 'mummy-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //       default:
  //         newCategoryStyle = 'default-style';
  //         document.body.className = newCategoryStyle
  //         break;
  //     }

  //     setCategoryStyle(newCategoryStyle);
  //   };

  //   // Initial update based on current URL
  //   handlePageChange();

  // }, [location]);


//   ---------- FAVORITI

const FAVORITES_STORAGE_KEY = "grimoire_favorites_v1";

export function getCurrentRoutePath() {
  const hash = window.location.hash || ""; // es: "#/vampire/devotions"
  if (hash.startsWith("#/")) return hash.slice(1); // "/vampire/devotions"
  if (hash.startsWith("#")) return hash.slice(1);
  return window.location.pathname || "/";
}

function readStore() {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return { v: 1, items: [] };

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { v: 1, items: [] };
    if (!Array.isArray(parsed.items)) return { v: 1, items: [] };

    return { v: 1, items: parsed.items };
  } catch {
    return { v: 1, items: [] };
  }
}

function writeStore(store) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent("favorites:changed"));
}


/**
 * Chiave univoca:
 * - se row.link esiste -> usa quella
 * - fallback: "<from>#<slug(titolo)>"
 */

export function getFavoriteKey(row, columns, from = getCurrentRoutePath()) {
if (row?.__favKey && typeof row.__favKey === "string") return row.__favKey;

  if (row?.link && typeof row.link === "string") return row.link;

  const cols = (columns || []).filter((c) => c && c !== "link");
  const firstCol = cols.length ? cols[0] : null;
  const title = firstCol && row?.[firstCol] ? String(row[firstCol]) : "unknown";

  return `${from}#${slugify(title)}`;
}

/**
 * Salva SOLO:
 * - key (univoco)
 * - link (se c’è)
 * - from (pagina origine)
 * - data: { colonna: valore }
 * - savedAt
 */
export function buildFavoriteItem(row, columns, from = getCurrentRoutePath(), titleIsLink = false) {
  const cols = (columns || []).filter((c) => c && c !== "link");

  const data = {};
  for (const col of cols) {
    const v = row?.[col];
    data[col] = Array.isArray(v) ? v.join(", ") : v;
  }

  const link = typeof row?.link === "string" ? row.link : null;

  return {
    key: getFavoriteKey(row, cols, from),
    from,
    data,
    savedAt: Date.now(),

    // ✅ titolo cliccabile SOLO se la tabella lo rende cliccabile
    titleIsLink: !!titleIsLink,
    linkUrl: titleIsLink ? link : null,
  };
}



export function isFavorite(row, columns, from = getCurrentRoutePath()) {
  const store = readStore();
  const key = getFavoriteKey(row, columns, from);
  return store.items.some((it) => it?.key === key);
}

export function toggleFavorite(row, columns, from = getCurrentRoutePath(), titleIsLink = false) {
  const store = readStore();
  const key = getFavoriteKey(row, columns, from);

  const idx = store.items.findIndex((it) => it?.key === key);

  if (idx !== -1) {
    store.items.splice(idx, 1);
    writeStore(store);
    return { isFavorite: false, key };
  }

  const item = buildFavoriteItem(row, columns, from, titleIsLink);
  store.items.unshift(item);
  writeStore(store);
  return { isFavorite: true, key, item };
}


export function listFavorites() {
  const store = readStore();
  return [...store.items].sort((a, b) => (b?.savedAt || 0) - (a?.savedAt || 0));
}

export function clearFavorites() {
  writeStore({ v: 1, items: [] });
}


export function getFavoritesCount() {
  const store = readStore();
  return Array.isArray(store.items) ? store.items.length : 0;
}