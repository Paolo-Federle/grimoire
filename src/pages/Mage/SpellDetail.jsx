import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent, isStructuredContent } from '../../components/StructuredContent';

function renderContentField(content) {
  if (!content) {
    return null;
  }

  if (isStructuredContent(content)) {
    return <StructuredContent content={content} />;
  }

  return (
    <p>
      <InlineContent content={content} prefix="spell-content" />
    </p>
  );
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
        {matchedSpell.Name} ({matchedSpell.Arcana})
      </h1>

      {renderContentField(matchedSpell.DescrizioneAlta)}
      {renderLabeledField('Practice', matchedSpell.Practice, 'practice')}
      {renderLabeledField('Action', matchedSpell.Action, 'action')}
      {renderLabeledField('Duration', matchedSpell.Duration, 'duration')}
      {renderLabeledField('Aspect', matchedSpell.Aspect, 'aspect')}
      {renderLabeledField('Cost', matchedSpell.Cost, 'cost')}
      {renderContentField(matchedSpell.DescrizioneMiddle)}

      {(matchedSpell.RoteName || matchedSpell.RoteDice) ? (
        <p>
          {matchedSpell.RoteName ? <b><InlineContent content={matchedSpell.RoteName} prefix="rote-name" /></b> : null}
          {matchedSpell.RoteName && matchedSpell.RoteDice ? <br /> : null}
          {matchedSpell.RoteDice ? <InlineContent content={matchedSpell.RoteDice} prefix="rote-dice" /> : null}
        </p>
      ) : null}

      {renderContentField(matchedSpell.RoteDescrizione)}
      {matchedSpell.Book ? <div><b>Book:</b> {BookLink(matchedSpell.Book)}</div> : null}
    </div>
  );
}
