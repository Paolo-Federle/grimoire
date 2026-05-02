import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent, isStructuredContent } from '../../components/StructuredContent';

function hasStructuralHtml(value) {
  return typeof value === 'string' && /<(p|ul|ol|li|h[1-6]|table|thead|tbody|tr|th|td)\b/i.test(value);
}

function hasTablePlaceholder(value) {
  return typeof value === 'string' && /\[TABLE\d+\]/.test(value);
}

function replacePlaceholders(text, tables = []) {
  if (typeof text !== 'string') {
    return '';
  }

  return tables.reduce((updatedText, table, index) => {
    const placeholder = table?.Placeholder || `[TABLE${index + 1}]`;

    if (!updatedText.includes(placeholder) || !Array.isArray(table?.Data) || table.Data.length === 0) {
      return updatedText;
    }

    const [headers = [], ...rows] = table.Data;
    const tableHtml = `
      <table class="table-auto border-collapse border border-white w-full text-sm text-left">
        <thead>
          <tr class="bg-gray-100">
            ${headers
              .map(
                (header) =>
                  `<th class="border border-white px-4 py-2 font-medium text-gray-700">${header}</th>`
              )
              .join('')}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  ${row
                    .map((cell) => `<td class="border border-white px-4 py-2">${cell}</td>`)
                    .join('')}
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    `;

    return updatedText.replace(placeholder, tableHtml);
  }, text);
}

function renderContentField(content, tables) {
  if (!content) {
    return null;
  }

  if (isStructuredContent(content)) {
    return <StructuredContent content={content} tables={tables} />;
  }

  if (typeof content === 'string' && !hasStructuralHtml(content) && !hasTablePlaceholder(content)) {
    return (
      <div>
        <InlineContent content={content} prefix="legacy-inline-content" />
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: replacePlaceholders(content, tables) }} />;
}

function renderLabeledField(label, value, prefix) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <b>{label}:</b> <InlineContent content={value} prefix={prefix} />
    </div>
  );
}

export default function SpellDetail({ spell }) {
  const matchedSpell = spell;

  if (!matchedSpell) {
    return null;
  }

  return (
    <div className="longTextContainer">
      <h1>
        {matchedSpell.Titolo} ({matchedSpell.Arcana})
      </h1>

      {renderContentField(matchedSpell.DescrizioneAlta, matchedSpell.Tables)}
      {renderLabeledField('Practice', matchedSpell.Practice, 'practice')}
      {renderLabeledField('Action', matchedSpell.Action, 'action')}
      {renderLabeledField('Duration', matchedSpell.Duration, 'duration')}
      {renderLabeledField('Aspect', matchedSpell.Aspect, 'aspect')}
      {renderLabeledField('Cost', matchedSpell.Cost, 'cost')}
      {renderContentField(matchedSpell.DescrizioneMiddle, matchedSpell.Tables)}

      {(matchedSpell.RoteName || matchedSpell.RoteDice) ? (
        <p>
          {matchedSpell.RoteName ? <b><InlineContent content={matchedSpell.RoteName} prefix="rote-name" /></b> : null}
          {matchedSpell.RoteName && matchedSpell.RoteDice ? <br /> : null}
          {matchedSpell.RoteDice ? <InlineContent content={matchedSpell.RoteDice} prefix="rote-dice" /> : null}
        </p>
      ) : null}

      {renderContentField(matchedSpell.RoteDescrizione, matchedSpell.Tables)}
      {matchedSpell.Book ? <div><b>Book:</b> {BookLink(matchedSpell.Book)}</div> : null}
    </div>
  );
}
