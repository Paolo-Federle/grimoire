import React from 'react';

function hasInlineHtml(value) {
  return typeof value === 'string' && /<[^>]+>/.test(value);
}

function renderLegacyInlineHtml(value, keyPrefix) {
  if (!hasInlineHtml(value) || typeof DOMParser === 'undefined') {
    return value;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<body>${value}</body>`, 'text/html');

  return renderInlineNodes(Array.from(doc.body.childNodes), keyPrefix);
}

function renderInlineNodes(nodes, keyPrefix) {
  return nodes.map((node, index) => renderInlineNode(node, `${keyPrefix}-${index}`));
}

function renderInlineNode(node, key) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const tagName = node.tagName.toLowerCase();
  const children = renderInlineNodes(Array.from(node.childNodes), key);

  if (tagName === 'br') {
    return <br key={key} />;
  }

  if (tagName === 'b' || tagName === 'strong') {
    return <strong key={key}>{children}</strong>;
  }

  if (tagName === 'i' || tagName === 'em') {
    return <em key={key}>{children}</em>;
  }

  return <React.Fragment key={key}>{children}</React.Fragment>;
}

function renderInlineContent(value, keyPrefix) {
  if (Array.isArray(value)) {
    return value.map((part, index) => renderInlinePart(part, `${keyPrefix}-${index}`));
  }

  if (value && typeof value === 'object') {
    return renderInlinePart(value, keyPrefix);
  }

  if (hasInlineHtml(value)) {
    return renderLegacyInlineHtml(value, keyPrefix);
  }

  return value ?? null;
}

export function InlineContent({ content, prefix = 'inline' }) {
  return <>{renderInlineContent(content, prefix)}</>;
}

function renderInlinePart(part, key) {
  if (typeof part === 'string') {
    return part;
  }

  if (!part || typeof part !== 'object') {
    return part ?? null;
  }

  if (part.type === 'lineBreak') {
    return <br key={key} />;
  }

  const content = renderInlineContent(part.text ?? part.content ?? '', key);

  if (part.type === 'bold') {
    return <strong key={key}>{content}</strong>;
  }

  if (part.type === 'italic') {
    return <em key={key}>{content}</em>;
  }

  return <React.Fragment key={key}>{content}</React.Fragment>;
}

function getTableData(block, tables) {
  if (block.type === 'table') {
    return {
      title: block.title,
      headers: block.headers || [],
      rows: block.rows || [],
    };
  }

  const tableIndex =
    typeof block.index === 'number'
      ? block.index
      : typeof block.placeholder === 'string'
        ? tables?.findIndex((table) => table?.Placeholder === block.placeholder)
        : -1;

  const tableData = tableIndex >= 0 ? tables?.[tableIndex]?.Data : null;

  if (!Array.isArray(tableData) || tableData.length === 0) {
    return null;
  }

  return {
    title: block.title,
    headers: tableData[0] || [],
    rows: tableData.slice(1),
  };
}

function renderTableCell(value, key) {
  if (typeof value === 'number') {
    return value;
  }

  return renderInlineContent(value, key);
}

function renderBlock(block, index, tables) {
  if (typeof block === 'string') {
    return <p key={index}>{renderInlineContent(block, `block-${index}`)}</p>;
  }

  if (!block || typeof block !== 'object') {
    return null;
  }

  if (block.type === 'html') {
    return <div key={index} dangerouslySetInnerHTML={{ __html: block.content || '' }} />;
  }

  if (block.type === 'paragraph') {
    return <p key={index}>{renderInlineContent(block.text ?? block.content ?? '', `paragraph-${index}`)}</p>;
  }

  if (block.type === 'heading') {
    const level = block.level >= 1 && block.level <= 3 ? block.level : 2;
    const HeadingTag = `h${level}`;
    return <HeadingTag key={index}>{renderInlineContent(block.text ?? '', `heading-${index}`)}</HeadingTag>;
  }

  if (block.type === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag key={index}>
        {(block.items || []).map((item, itemIndex) => (
          <li key={`${index}-${itemIndex}`}>{renderInlineContent(item, `list-${index}-${itemIndex}`)}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === 'line') {
    return (
      <div key={index}>
        {block.label ? <strong>{renderInlineContent(block.label, `line-label-${index}`)}</strong> : null}
        {block.label && block.text ? ' ' : null}
        {renderInlineContent(block.text ?? block.content ?? '', `line-${index}`)}
      </div>
    );
  }

  if (block.type === 'table' || block.type === 'tableRef') {
    const table = getTableData(block, tables);

    if (!table) {
      return null;
    }

    return (
      <div key={index}>
        {table.title ? <h3>{renderInlineContent(table.title, `table-title-${index}`)}</h3> : null}
        <table className="table-auto border-collapse border border-white w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-100">
              {table.headers.map((header, headerIndex) => (
                <th
                  key={`${index}-header-${headerIndex}`}
                  className="border border-white px-4 py-2 font-medium text-gray-700"
                >
                  {renderTableCell(header, `table-header-${index}-${headerIndex}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={`${index}-row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${index}-cell-${rowIndex}-${cellIndex}`} className="border border-white px-4 py-2">
                    {renderTableCell(cell, `table-cell-${index}-${rowIndex}-${cellIndex}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export function isStructuredContent(value) {
  if (!value) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every((block) => typeof block === 'string' || (block && typeof block === 'object' && !Array.isArray(block)));
  }

  return typeof value === 'object';
}

export default function StructuredContent({ content, tables = [] }) {
  const blocks = Array.isArray(content) ? content : [content];

  return <>{blocks.map((block, index) => renderBlock(block, index, tables))}</>;
}
