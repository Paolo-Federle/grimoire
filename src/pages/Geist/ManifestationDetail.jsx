import React from 'react';
import { BookLink } from '../../components/BookLink';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';
import { normalizeDisplayText } from '../../utils';

const ELEMENTAL_KEYS = new Set([
  'cold wind',
  'grave-dirt',
  'pyre-flame',
  'tear-stained',
]);
const KEY_SKILL_PATTERN = /\(key skill\)/gi;

function normalizeName(value) {
  return String(value || '').trim().toLowerCase();
}

function dots(value) {
  if (value === null || value === undefined) return '';

  if (typeof value === 'string' && value.includes('-')) {
    const [start, end] = value.split('-').map((part) => Number(part.trim()));

    if (Number.isFinite(start) && Number.isFinite(end) && start > 0 && end > 0) {
      return `${'\u2022'.repeat(start)} - ${'\u2022'.repeat(end)}`;
    }

    return value;
  }

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return '';
  return '\u2022'.repeat(numericValue);
}

function hasValue(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim() !== '' && value !== 'N/A';
  if (Array.isArray(value)) return value.some(hasValue);
  return true;
}

function normalizeContentBlocks(value) {
  const blocks = Array.isArray(value) ? value : value ? [value] : [];

  return blocks.map((block) => {
    if (!block || typeof block !== 'object' || Array.isArray(block)) {
      return block;
    }

    return {
      ...block,
      type: typeof block.type === 'string' ? block.type.toLowerCase() : block.type,
    };
  });
}

function replaceKeySkill(value, skill) {
  if (!skill) return value;

  if (typeof value === 'string') {
    return value.replace(KEY_SKILL_PATTERN, skill);
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceKeySkill(item, skill));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [
        key,
        replaceKeySkill(entryValue, skill),
      ])
    );
  }

  return value;
}

function hasContentBlocks(value) {
  return normalizeContentBlocks(value).some((block) => {
    if (typeof block === 'string') return block.trim() !== '';
    return !!block;
  });
}

function stripRedundantElementalHeading(content) {
  const blocks = normalizeContentBlocks(content);
  const firstBlock = blocks[0];
  const firstText = typeof firstBlock?.text === 'string' ? firstBlock.text : '';

  if (firstBlock?.type === 'heading' && normalizeName(firstText).startsWith('the elemental')) {
    return blocks.slice(1);
  }

  return blocks;
}

function LabeledField({ label, value, prefix }) {
  if (!hasValue(value)) return null;

  return (
    <div>
      <b>{label}:</b> <InlineContent content={value} prefix={prefix} />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mt-5 mb-2 font-semibold text-[#161616]">
      {children}
    </div>
  );
}

function AccordionSection({ title, children, defaultOpen = true }) {
  return (
    <details
      open={defaultOpen}
      className="mb-4 border border-[#c7c7c7] bg-[#f7f7f7] px-4 py-3"
    >
      <summary className="cursor-pointer font-serif text-[20px] font-bold text-[#161616]">
        {normalizeDisplayText(title)}
      </summary>
      <div className="mt-3 leading-7 text-[#161616]">
        {children}
      </div>
    </details>
  );
}

function MechanicsFields({ cost, dicePool, action, prefix, keySkill }) {
  if (!hasValue(cost) && !hasValue(dicePool) && !hasValue(action)) return null;

  return (
    <div className="mt-2 leading-5">
      <LabeledField label="Cost" value={replaceKeySkill(cost, keySkill)} prefix={`${prefix}-cost`} />
      <LabeledField label="Dice Pool" value={replaceKeySkill(dicePool, keySkill)} prefix={`${prefix}-dice-pool`} />
      <LabeledField label="Action" value={replaceKeySkill(action, keySkill)} prefix={`${prefix}-action`} />
    </div>
  );
}

function RollResults({ content, keySkill }) {
  if (!hasContentBlocks(content)) return null;

  return (
    <>
      <SectionLabel>Roll Results</SectionLabel>
      <StructuredContent content={normalizeContentBlocks(replaceKeySkill(content, keySkill))} />
    </>
  );
}

function DetailContent({ content, keySkill }) {
  if (!hasContentBlocks(content)) return null;

  return <StructuredContent content={normalizeContentBlocks(replaceKeySkill(content, keySkill))} />;
}

function RankContent({ combination, keySkill }) {
  const ranks = Array.isArray(combination?.Ranks) ? combination.Ranks : [];
  const visibleRanks = ranks.filter((rank) => hasContentBlocks(rank?.Content));

  if (!visibleRanks.length) return null;

  return (
    <div className="mt-5">
      <div className="grid gap-4">
        {visibleRanks.map((rank, index) => {
          const rankTitle = `${combination.Key} ${combination.Manifestation} ${dots(rank.dot)}`.trim();

          return (
            <div key={`${rank.dot}-${index}`} className="leading-7 text-[#161616]">
              <div className="font-semibold">
                {normalizeDisplayText(rankTitle)}
              </div>
              <DetailContent content={rank.Content} keySkill={keySkill} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function hasElementalSection(combination, manifestation) {
  return (
    ELEMENTAL_KEYS.has(normalizeName(combination?.Key)) &&
    (
      hasContentBlocks(manifestation?.ElementalContent) ||
      hasValue(manifestation?.ElementalCost) ||
      hasValue(manifestation?.ElementalDicePool) ||
      hasValue(manifestation?.ElementalAction) ||
      hasContentBlocks(manifestation?.ElementalRollResult)
    )
  );
}

function hasManifestationMechanics(manifestation) {
  return (
    hasValue(manifestation?.FullActivationCost) ||
    hasValue(manifestation?.DicePool) ||
    hasValue(manifestation?.Action)
  );
}

function hasElementalMechanics(manifestation) {
  return (
    hasValue(manifestation?.ElementalCost) ||
    hasValue(manifestation?.ElementalDicePool) ||
    hasValue(manifestation?.ElementalAction)
  );
}

export default function ManifestationDetail(props) {
  const detail = props.manifestationDetail;
  const combination = detail?.combination;
  const manifestation = detail?.manifestation;

  if (!combination) {
    return (
      <div className="longTextContainer">
        <h1>Manifestation not found</h1>
      </div>
    );
  }

  const title = `${combination.Manifestation} \u2014 ${combination.Key}`;
  const showElemental = hasElementalSection(combination, manifestation);
  const keySkill = combination.Skill || '';

  return (
    <div className="longTextContainer">
      <h1>{normalizeDisplayText(title)}</h1>

      {manifestation ? (
        <AccordionSection title={manifestation.Name}>
          <DetailContent content={manifestation.Content} keySkill={keySkill} />
          {hasManifestationMechanics(manifestation) ? (
            <h2 className="mt-4 font-serif text-[20px] font-bold text-[#161616]">
              {normalizeDisplayText(`${manifestation.Name} Activation`)}
            </h2>
          ) : null}
          <MechanicsFields
            cost={manifestation.FullActivationCost}
            dicePool={manifestation.DicePool}
            action={manifestation.Action}
            prefix="manifestation"
            keySkill={keySkill}
          />
          <RollResults content={manifestation.RollResult} keySkill={keySkill} />
        </AccordionSection>
      ) : null}

      {showElemental ? (
        <AccordionSection title={`The Elemental ${manifestation.Name}`}>
          <DetailContent content={stripRedundantElementalHeading(manifestation.ElementalContent)} keySkill={keySkill} />
          {hasElementalMechanics(manifestation) ? (
            <h2 className="mt-4 font-serif text-[20px] font-bold text-[#161616]">
              {normalizeDisplayText(`Elemental ${manifestation.Name} Activation`)}
            </h2>
          ) : null}
          <MechanicsFields
            cost={manifestation.ElementalCost}
            dicePool={manifestation.ElementalDicePool}
            action={manifestation.ElementalAction}
            prefix="elemental-manifestation"
            keySkill={keySkill}
          />
          <RollResults content={manifestation.ElementalRollResult} keySkill={keySkill} />
        </AccordionSection>
      ) : null}

      {hasContentBlocks(combination.Content) ? (
        <>
          <SectionLabel>{`${combination.Key} ${combination.Manifestation}`}</SectionLabel>
          <DetailContent content={combination.Content} keySkill={keySkill} />
        </>
      ) : null}

      <RankContent combination={combination} keySkill={keySkill} />

      {combination.Book ? (
        <div className="mt-5">
          <b>Book:</b> {BookLink(combination.Book)}
        </div>
      ) : null}
    </div>
  );
}
