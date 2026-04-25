import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SpellsData } from '../../../Data/Mage/Arcana/allArcana';
import { deathOneData, deathTwoData, deathThreeData, deathFourData, deathFiveData } from '../../../Data/Mage/Arcana/DeathData';
import { fateOneData, fateTwoData, fateThreeData, fateFourData, fateFiveData } from '../../../Data/Mage/Arcana/FateData';
import { forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData } from '../../../Data/Mage/Arcana/ForceData';
import { lifeOneData, lifeTwoData, lifeThreeData, lifeFourData, lifeFiveData } from '../../../Data/Mage/Arcana/LifeData';
import { matterOneData, matterTwoData, matterThreeData, matterFourData, matterFiveData } from '../../../Data/Mage/Arcana/MatterData';
import { mindOneData, mindTwoData, mindThreeData, mindFourData, mindFiveData } from '../../../Data/Mage/Arcana/MindData';
import { primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData } from '../../../Data/Mage/Arcana/PrimeData';
import { spaceOneData, spaceTwoData, spaceThreeData, spaceFourData, spaceFiveData } from '../../../Data/Mage/Arcana/SpaceData';
import { spiritOneData, spiritTwoData, spiritThreeData, spiritFourData, spiritFiveData } from '../../../Data/Mage/Arcana/SpiritData';
import { timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData } from '../../../Data/Mage/Arcana/TimeData';
import SpellDetail from '../../../pages/Mage/SpellDetail';

const fateData = [...fateOneData, ...fateTwoData, ...fateThreeData, ...fateFourData, ...fateFiveData];
const forceData = [...forceOneData, ...forceTwoData, ...forceThreeData, ...forceFourData, ...forceFiveData];
const lifeData = [...lifeOneData, ...lifeTwoData, ...lifeThreeData, ...lifeFourData, ...lifeFiveData];
const matterData = [...matterOneData, ...matterTwoData, ...matterThreeData, ...matterFourData, ...matterFiveData];
const mindData = [...mindOneData, ...mindTwoData, ...mindThreeData, ...mindFourData, ...mindFiveData];
const primeData = [...primeOneData, ...primeTwoData, ...primeThreeData, ...primeFourData, ...primeFiveData];
const spaceData = [...spaceOneData, ...spaceTwoData, ...spaceThreeData, ...spaceFourData, ...spaceFiveData];
const spiritData = [...spiritOneData, ...spiritTwoData, ...spiritThreeData, ...spiritFourData, ...spiritFiveData];

function getSpellByTitle(title) {
  const spell = SpellsData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find spell fixture: ${title}`);
  }

  return spell;
}

function getFateSpellByTitle(title) {
  const spell = fateData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Fate spell fixture: ${title}`);
  }

  return spell;
}

function getForceSpellByTitle(title) {
  const spell = forceData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Force spell fixture: ${title}`);
  }

  return spell;
}

function getMatterSpellByTitle(title) {
  const spell = matterData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Matter spell fixture: ${title}`);
  }

  return spell;
}

function getMindSpellByTitle(title) {
  const spell = mindData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Mind spell fixture: ${title}`);
  }

  return spell;
}

function getLifeSpellByTitle(title) {
  const spell = lifeData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Life spell fixture: ${title}`);
  }

  return spell;
}

function getPrimeSpellByTitle(title) {
  const spell = primeData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Prime spell fixture: ${title}`);
  }

  return spell;
}

function getSpaceSpellByTitle(title) {
  const spell = spaceData.find((entry) => entry.Titolo === title);

  if (!spell) {
    throw new Error(`Unable to find Space spell fixture: ${title}`);
  }

  return spell;
}

function getStructuredSpellByTitle(title) {
  const spell = SpellsData.find(
    (entry) => entry.Titolo === title && Array.isArray(entry.DescrizioneMiddle)
  );

  if (!spell) {
    throw new Error(`Unable to find structured spell fixture: ${title}`);
  }

  return spell;
}

function getStructuredSpellByTitleAndArcana(title, arcana) {
  const spell = SpellsData.find(
    (entry) =>
      entry.Titolo === title &&
      entry.Arcana === arcana &&
      Array.isArray(entry.DescrizioneMiddle)
  );

  if (!spell) {
    throw new Error(`Unable to find structured spell fixture: ${title} (${arcana})`);
  }

  return spell;
}

function renderSpell(spell) {
  return render(
    <MemoryRouter>
      <SpellDetail spell={spell} />
    </MemoryRouter>
  );
}

function expectNoStructuralHtml(block) {
  if (typeof block === 'string') {
    expect(block).not.toContain('<p>');
    expect(block).not.toContain('</p>');
    expect(block).not.toContain('<ul>');
    expect(block).not.toContain('</ul>');
    expect(block).not.toContain('<li>');
    expect(block).not.toContain('</li>');
    return;
  }

  expect(block.type).not.toBe('html');

  if (typeof block.text === 'string') {
    expect(block.text).not.toContain('<p>');
    expect(block.text).not.toContain('</p>');
    expect(block.text).not.toContain('<ul>');
    expect(block.text).not.toContain('</ul>');
    expect(block.text).not.toContain('<li>');
    expect(block.text).not.toContain('</li>');
  }

  if (Array.isArray(block.items)) {
    block.items.forEach((item) => {
      if (typeof item === 'string') {
        expect(item).not.toContain('<p>');
        expect(item).not.toContain('</p>');
        expect(item).not.toContain('<ul>');
        expect(item).not.toContain('</ul>');
        expect(item).not.toContain('<li>');
        expect(item).not.toContain('</li>');
      }
    });
  }
}

function expectNoInlineHtml(value) {
  if (typeof value === 'string') {
    expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
  }
}

describe('SpellDetail special content rendering', () => {
  test('keeps known malformed list markers out of arcana spell content', () => {
    const brokenPatterns = [
      '</ul><li>',
      '<li></li>',
      'effects end immediately<p>',
      '</ul></p>',
      '22.</i></p>',
      '[TABLE1]*add 10 years per additional success',
      '[TABLE2]*Add x2 radius per five additional points of size',
      '[TABLE2] Homunculi exhibit exaggerated',
      '[TABLE1]Dots are lost from the victim',
    ];
    const textFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    SpellsData.forEach((spell) => {
      textFields.forEach((field) => {
        const value = spell[field];

        if (typeof value !== 'string') {
          return;
        }

        brokenPatterns.forEach((pattern) => {
          expect(value).not.toContain(pattern);
        });
      });
    });
  });

  test('renders Book values as source links in SpellDetail', () => {
    renderSpell(getSpellByTitle('Aim for the Dead'));

    const link = screen.getByRole('link', { name: 'Ban 56' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
    expect(link.getAttribute('href')).toBeTruthy();
    expect(screen.getByText('Book:')).toBeInTheDocument();
  });

  test('renders the zombie mini sheet without losing its stat block lines', () => {
    renderSpell(getSpellByTitle('Quicken Corpse'));

    expect(screen.getByText('Zombies')).toBeInTheDocument();
    expect(screen.getByText(/Attributes:/i)).toBeInTheDocument();
    expect(screen.getByText(/Power 1, Finesse 1, Resistance 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Size:/i)).toBeInTheDocument();
    expect(screen.getByText(/Indestructible/i)).toBeInTheDocument();
  });

  test('renders the revenant mini sheet without losing its unique rules text', () => {
    renderSpell(getSpellByTitle('Revenant'));

    expect(screen.getByText('Revenants')).toBeInTheDocument();
    expect(screen.getByText(/The revenant cannot regain Willpower points by any means/i)).toBeInTheDocument();
    expect(screen.getByText(/The revenant has a pool of Essence points equal to its Resolve \+5/i)).toBeInTheDocument();
    expect(screen.getByText(/Finally, the revenant has one spirit Numen/i)).toBeInTheDocument();
  });

  test('renders both rote blocks for the past-life special case in Mind', () => {
    renderSpell(getSpellByTitle('Past Life Regression'));

    expect(screen.getByText(/Mysterium Rote: Pre-Incarnation/i)).toBeInTheDocument();
    expect(screen.getByText(/Manipulation \+ Occult \+ Mind/i)).toBeInTheDocument();
    expect(screen.getByText(/Theosophical Rote: Path of the Augoeides/i)).toBeInTheDocument();
    expect(screen.getByText(/Presence \+ Occult \+ Mind/i)).toBeInTheDocument();
    expect(screen.getByText(/It's a long, drawn-out process/i)).toBeInTheDocument();
  });

  test('renders the Final Name benefits as a proper list', () => {
    const { container } = renderSpell(getSpellByTitle('Assuming the Name'));
    const items = Array.from(container.querySelectorAll('li'));

    expect(items).toHaveLength(4);
    expect(items[0].textContent).toMatch(/Virtue and Vice/);
    expect(items[1].textContent).toMatch(/aura appears fixed/i);
    expect(items[2].textContent).toMatch(/resonance appears/i);
    expect(items[3].textContent).toMatch(/sympathetic connections/i);
  });

  test('renders the corrected summoning text as two valid lists', () => {
    const { container } = renderSpell(getSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(container.querySelectorAll('ul'));
    const items = Array.from(container.querySelectorAll('li'));

    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Every additional success has one of the following effects/i)).toBeInTheDocument();
    expect(screen.getByText(/In addition, the following factors add to the necessary total/i)).toBeInTheDocument();
    expect(screen.getByText(/Add one success per Sleeper present/i)).toBeInTheDocument();
  });

  test('renders Goetic Evocation list and trailing paragraph text after the list', () => {
    const { container } = renderSpell(getSpellByTitle('Goetic Evocation'));
    const items = Array.from(container.querySelectorAll('li'));

    expect(items).toHaveLength(3);
    expect(items[0].textContent).toMatch(/\+1 Rank/);
    expect(screen.getByText(/Every two additional successes can give the demon one extra Numina/i)).toBeInTheDocument();
  });

  test('keeps the Shape Spirit example text intact after removing the stray closing tag', () => {
    renderSpell(getSpellByTitle('Shape Spirit'));

    expect(screen.getByText(/Nine Jade Thunder creates a spirit/i)).toBeInTheDocument();
    expect(screen.getByText(/The total target number for the spell is 16 successes/i)).toBeInTheDocument();
    expect(screen.getByText(/adding six successes to the target number for a total of 22/i)).toBeInTheDocument();
  });

  test('renders Future Legacy footnote and trailing text around the table', () => {
    const { container } = renderSpell(getSpellByTitle('Future Legacy'));

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/\*add 10 years per additional success/i)).toBeInTheDocument();
    expect(screen.getByText(/The drawback to this spell is that, once cast, the object cannot be retrieved/i)).toBeInTheDocument();
  });

  test('renders Living Library note and follow-up paragraph after the table', () => {
    const { container } = renderSpell(getSpellByTitle('Living Library'));

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The amount of information that can be stored depends on the successes gained/i)).toBeInTheDocument();
    expect(screen.getByText(/The target cannot access the stored information herself/i)).toBeInTheDocument();
  });

  test('renders Construct Homunculus Persona text after the second table', () => {
    const { container } = renderSpell(getSpellByTitle('Construct Homunculus Persona'));
    const tables = Array.from(container.querySelectorAll('table'));

    expect(tables.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/Homunculi exhibit exaggerated, simplistic personalities/i)).toBeInTheDocument();
    expect(screen.getByText(/The proto must be left to spend significant time with the role model/i)).toBeInTheDocument();
  });

  test('renders Blessing text correctly before and after the danger table', () => {
    const { container } = renderSpell(getSpellByTitle('Blessing'));

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/If the spell succeeds, the target is protected from the specified danger/i)).toBeInTheDocument();
    expect(screen.getByText(/Once the specified danger has been avoided, the spell ends/i)).toBeInTheDocument();
  });

  test('renders Augury and Divination closing limitations after their examples', () => {
    renderSpell(getSpellByTitle('Augury'));
    expect(screen.getByText(/The same person can be targeted with this spell only once every 24 hours/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Divination'));
    expect(screen.getAllByText(/The same person can be targeted with this spell only once every 24 hours/i).length).toBeGreaterThanOrEqual(1);
  });

  test('renders Shifting Sands follow-up paragraphs after the example block', () => {
    renderSpell(getSpellByTitle('Shifting Sands'));

    expect(screen.getByText(/This spell cannot undo any effects the mage suffered the first time he experienced the turn/i)).toBeInTheDocument();
    expect(screen.getByText(/Those other than the caster may feel a sense of d.j. vu about the situation/i)).toBeInTheDocument();
    expect(screen.getByText(/With Time 4, the mage can cast this spell upon others/i)).toBeInTheDocument();
  });

  test('renders Prophecy, Temporal Pocket, Temporal Stutter and Duplicate after structured conversion', () => {
    renderSpell(getSpellByTitle('Prophecy'));
    expect(screen.getByText(/Bahazid has learned that a certain boy is destined to become a great leader/i)).toBeInTheDocument();
    expect(screen.getByText(/The same target can be targeted with this spell only once every 24 hours/i)).toBeInTheDocument();

    const temporalPocketView = renderSpell(getSpellByTitle('Temporal Pocket'));
    expect(screen.getByText(/This spell enables a mage to withdraw into a personal temporal pocket/i)).toBeInTheDocument();
    expect(screen.getByText(/While existing within such a temporal pocket, the mage cannot interact with or be interacted with by others/i)).toBeInTheDocument();
    expect(screen.getByText(/The maximum target number the caster can aim for is equal to his Gnosis or Time/i)).toBeInTheDocument();
    expect(temporalPocketView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText('Time within Pocket')).toBeInTheDocument();
    expect(screen.getByText('Target Number')).toBeInTheDocument();

    renderSpell(getSpellByTitle('Temporal Stutter'));
    expect(screen.getByText(/Onlookers simply see those affected disappear for up to several seconds/i)).toBeInTheDocument();
    expect(screen.getByText(/Both mages are Size 5, so both must contend with knockdown/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Duplicate'));
    expect(screen.getByText(/Activating the stored spell is a reflexive action that costs one Mana/i)).toBeInTheDocument();
    expect(screen.getByText(/The Arrow gains four successes on his casting roll for Telekinetic Strike/i)).toBeInTheDocument();
  });

  test('renders the additional paragraph-only Time conversions without losing text', () => {
    renderSpell(getSpellByTitle('Tempus Fugit'));
    expect(screen.getByText(/The target will feel with absolute certainty that the correct time is that much later or earlier/i)).toBeInTheDocument();
    expect(screen.getByText(/If the target is a mage with Time 1 or greater/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle("Time's Mark"));
    expect(screen.getByText(/Using this spell on a book or a piece of paper with writing on it doesn.t tell how long ago the words were written/i)).toBeInTheDocument();
    expect(screen.getByText(/If the mage has Time 2, she can cast this spell without use of a conjunctional Arcanum/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Ephemeral Postcognition'));
    expect(screen.getByText(/Success in the casting of this spell grants a willworker insight into the immediate past of an ephemeral entity/i)).toBeInTheDocument();
    expect(screen.getByText(/Attempting to look into the Realms Supernal in this way is an act of hubris/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Borrow From the Future'));
    expect(screen.getByText(/The Storyteller takes note of the situation, type of action, and number of successes borrowed/i)).toBeInTheDocument();
    expect(screen.getByText(/He can.t erase his debt with a mere trip to the range to pop off a few failed shots/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Metabolic Suspension'));
    expect(screen.getByText(/the mage does not require any sustenance, does not need to breathe/i)).toBeInTheDocument();
    expect(screen.getByText(/cast a variant of this spell to suspend another.s body with an enchanted touch/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Prophetic Dream'));
    expect(screen.getByText(/The subject simply knows that she is experiencing \(and has experienced\) a dream about the future/i)).toBeInTheDocument();
    expect(screen.getByText(/The effects are similar to those of Time 3/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Present as Past'));
    expect(screen.getByText(/the mage.s player can require that every player who has a character affected by the spell.s Target factors declare what his character.s action will be/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 Defense per spellcasting success against attacks from those affected by the spell/i)).toBeInTheDocument();
  });

  test('renders the next batch of regular Time paragraph conversions without losing text', () => {
    renderSpell(getSpellByTitle('Flip of the Coin'));
    expect(screen.getByText(/automatically succeed \(or fail if he wishes\) at an uncontested action/i)).toBeInTheDocument();
    expect(screen.getByText(/this effect cannot be used in relation to combat/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Glimpsing the Future'));
    expect(screen.getByText(/roll twice for a single instant action his character performs in the following turn/i)).toBeInTheDocument();
    expect(screen.getByText(/With Time 3, this spell can be cast reflexively/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Postcognition'));
    expect(screen.getByText(/The mage declares the time and place that she wishes to view/i)).toBeInTheDocument();
    expect(screen.getByText(/The Duration of this spell is concentration/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Shield of Chronos'));
    expect(screen.getByText(/The mage becomes invisible to prophecy, divination and other forms of temporal scrying/i)).toBeInTheDocument();
    expect(screen.getByText(/By spending one Mana, the Duration can be made to last for one day/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Temporal Dodge'));
    expect(screen.getByText(/The mage gains one point of armor per dot she possesses in the Time Arcanum/i)).toBeInTheDocument();
    expect(screen.getByText(/this magical armor applies against attempts to grapple the caster/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Temporal Flow'));
    expect(screen.getByText(/If the target is unwilling, he may resist with a reflexive and contested Resolve \+ Gnosis roll/i)).toBeInTheDocument();
    expect(screen.getByText(/The effect lasts for one hour/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Worst Moment'));
    expect(screen.getByText(/The mage can either use this spell while physically at the location where she expects to attack her foes/i)).toBeInTheDocument();
    expect(screen.getByText(/The Banisher knows when to attack the target to gain the greatest tactical advantage/i)).toBeInTheDocument();
  });

  test('renders the new Time batch with paragraphs and lists without losing text', () => {
    renderSpell(getSpellByTitle('Counterspell'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    const accelerationView = renderSpell(getSpellByTitle('Acceleration'));
    const accelerationItems = Array.from(accelerationView.container.querySelectorAll('li'));
    expect(screen.getByText(/The benefits are as follows/i)).toBeInTheDocument();
    expect(accelerationItems).toHaveLength(3);
    expect(accelerationItems[0].textContent).toMatch(/For each Time dot the mage possesses/i);
    expect(screen.getByText(/With Time 4, the mage can cast this spell on others/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Erase History'));
    expect(screen.getByText(/This magic removes information about a target from the past/i)).toBeInTheDocument();
    expect(screen.getByText(/A mage can also perform “Erase History” through an Extended casting/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Faerie Glade'));
    expect(screen.getByText(/One success affects a five-foot square area and anything within it/i)).toBeInTheDocument();
    expect(screen.getByText(/A person who enters the area must succeed in a reflexive and contested Composure \+ Gnosis roll/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Rewrite History'));
    expect(screen.getByText(/Each success allows the mage to shift one dot from a mundane trait/i)).toBeInTheDocument();
    expect(screen.getByText(/When the spell expires, the caster.s real history is restored/i)).toBeInTheDocument();
  });

  test('renders the final remaining TimeData conversions without losing tables or ritual text', () => {
    const preciseDatingView = renderSpell(getSpellByTitle('Precise Dating'));
    expect(preciseDatingView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/one success allows the time of death to be dated to the correct minute/i)).toBeInTheDocument();
    expect(screen.getByText('Recent Objects')).toBeInTheDocument();

    const timeLimitView = renderSpell(getSpellByTitle('Time Limit'));
    expect(timeLimitView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/This spell is cast during item creation/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous owners may never again access the item.s powers/i)).toBeInTheDocument();

    const summoningView = renderSpell(getStructuredSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/The mage needs 10 successes to open the gateway/i)).toBeInTheDocument();
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();
  });

  test('renders the remaining TimeData string-to-block conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Momentary Flux'));
    expect(screen.getByText(/This spell tells the mage only if the specific event queried will lead to good or ill/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Perfect Timing'));
    expect(screen.getByText(/This does not include spellcasting rolls/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Library of Time'));
    expect(screen.getByText(/one Research roll per 15 minutes/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Rapid Fire'));
    expect(screen.getByText(/the mage may make use of the various autofire options/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Time Out of Mind'));
    expect(screen.getByText(/the spell only affects the mage.s mental state/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Create Potentiality'));
    expect(screen.getByText(/the failed action.s dice pool, retroactively/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Legacy of Power'));
    expect(screen.getByText(/the mage may send a single point of Mana from her current total forward into the future/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Temporal Lifeline'));
    expect(screen.getByText(/an invisible, ethereal .lifeline. connects the caster to that moment/i)).toBeInTheDocument();
  });

  test('renders the first SpiritData batch of structured conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitleAndArcana('Counterspell', 'Any one of the attacking spell’s Arcana at •'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Coaxing the Spirits'));
    expect(screen.getByText(/This bonus applies only to actions over which the object itself might conceivably have some sway/i)).toBeInTheDocument();
    expect(screen.getByText(/Harbinger has coaxed the spirit of his Chevy convertible/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle("Exorcist's Eye"));
    expect(screen.getByText(/pit its own successes directly against this spell.s successes/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Gremlins'));
    expect(screen.getByText(/This penalty only applies to an action over which the object itself might exert some control/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Otherworldly Instrument'));
    expect(screen.getByText(/This item may only be used by a ghost or spirit/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Spirit Tongue'));
    expect(screen.getByText(/The mage can see, hear and speak with spirits/i)).toBeInTheDocument();
    expect(screen.getByText(/The mage can see ghosts, too, but they appear hazy and indistinct/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Analyze Spirit'));
    expect(screen.getByText(/A single success on this spell allows the mage to determine a spirit.s Rank/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Ephemeral Shield'));
    expect(screen.getByText(/The mage gains one point of armor per dot he possesses in the Spirit Arcanum/i)).toBeInTheDocument();
    expect(screen.getByText(/this magical armor does not apply against an opponent.s attempts to achieve a grappling hold/i)).toBeInTheDocument();
  });

  test('renders the extended SpiritData batch of structured conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Grant the Second Sight'));
    expect(screen.getByText(/If the target is unwilling, he may resist with a reflexive contested Resolve \+ Gnosis roll/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Peer Across the Gauntlet'));
    expect(screen.getByText(/glimpsing across the Gauntlet can be performed as a reflexive action/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Place of Power'));
    expect(screen.getByText(/the local Gauntlet.s Strength by one point in either direction/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Read Spirit'));
    expect(screen.getByText(/their bans become more complex and difficult to read/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Sacramental Chain'));
    expect(screen.getByText(/One Essence point is channeled per success/i)).toBeInTheDocument();
    expect(screen.getByText(/With Prime 4, the caster can convert the Essence into Mana/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Spirit Guardian'));
    expect(screen.getByText(/The target number is one success per Rank of the spirit/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Materialize Spirit'));
    expect(screen.getByText(/Success forces the targeted spirit across the Gauntlet and into a manifest form/i)).toBeInTheDocument();
  });

  test('renders the final SpiritData conversions without losing tables, lists or example text', () => {
    const honeView = renderSpell(getStructuredSpellByTitle('Hone the Pack Spirit'));
    expect(honeView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The spell must affect at least 2 targets or a swarm to work at all/i)).toBeInTheDocument();
    expect(screen.getByText(/The creatures under her thrall are more competent at instinctual tasks/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Communion with the Messenger'));
    expect(screen.getByText(/The foci for this spell are all three of the hallmark Templar symbols/i)).toBeInTheDocument();
    expect(screen.getByText(/attempts at fooling the angels rarely work out well for the would-be trickster/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Spirit Manse'));
    expect(screen.getByText(/Nine Fox Thunder creates a Spirit Manse to host a meeting/i)).toBeInTheDocument();
    expect(screen.getByText(/The mage can control who comes or goes from his manse/i)).toBeInTheDocument();

    const summoningView = renderSpell(getStructuredSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();
  });

  test('renders the first SpaceData conversion batch without losing text', () => {
    renderSpell(getSpaceSpellByTitle('Counterspell'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    renderSpell(getSpaceSpellByTitle('Angle Vision'));
    expect(screen.getByText(/the spell can be used to direct the mage.s sight around a single corner or obstacle/i)).toBeInTheDocument();
    expect(screen.getByText(/The spell doesn.t magnify or illuminate whatever.s at the far end of his vision/i)).toBeInTheDocument();

    const astralBeaconView = renderSpell(getSpaceSpellByTitle('Astral Beacon'));
    expect(astralBeaconView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText('Astral Plane')).toBeInTheDocument();
    expect(screen.getByText(/Following the beacon, the Astral traveler can instantly reach the marked location/i)).toBeInTheDocument();
  });

  test('renders the final SpaceData conversions without losing tables, lists or example text', () => {
    const intrusionView = renderSpell(getSpaceSpellByTitle('Intrusion Warning'));
    expect(intrusionView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Mages can, at the time of casting, narrow the spell.s definition by declaring some things exempt from notice/i)).toBeInTheDocument();
    expect(screen.getByText(/Intrusion Warning does not endow the mage with any knowledge of what did pass the boundary/i)).toBeInTheDocument();

    const sympatheticTapView = renderSpell(getSpaceSpellByTitle('Sympathetic Tap'));
    expect(sympatheticTapView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The strength of the sympathetic connection being targeted determines the number of successes required/i)).toBeInTheDocument();

    const arcadeView = renderSpell(getSpaceSpellByTitle('Arcade'));
    expect(arcadeView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/This spell is an all-or-nothing proposition/i)).toBeInTheDocument();
    expect(screen.getByText(/Nearby enemies can attempt to step through, too/i)).toBeInTheDocument();

    renderSpell(getSpaceSpellByTitle('Walls in the Labyrinth'));
    expect(screen.getByText(/When combined with another spell \(which can be provided by a separate caster\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Pardy has cast Walls of the Labyrinth with four charges/i)).toBeInTheDocument();
    expect(screen.getByText(/When Bob comes into contact with the Ward/i)).toBeInTheDocument();

    const spaceSummoningView = renderSpell(getSpaceSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(spaceSummoningView.container.querySelectorAll('ul'));
    const items = Array.from(spaceSummoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();
  });

  test('renders the first MatterData conversion batch without losing text', () => {
    renderSpell(getMatterSpellByTitle('Breach Point'));
    expect(screen.getByText(/counts as an extra success of damage, solely for the purposes of overcoming the Durability/i)).toBeInTheDocument();

    renderSpell(getMatterSpellByTitle("Crafter's Eye"));
    expect(screen.getByText(/Success allows the mage to know what, if anything, is wrong with the object/i)).toBeInTheDocument();

    renderSpell(getMatterSpellByTitle('Dark Matter'));
    expect(screen.getByText(/The mage gains a \+1 dice bonus when studying dense\/very dense resonance/i)).toBeInTheDocument();

    renderSpell(getMatterSpellByTitle('Discern Composition'));
    expect(screen.getByText(/Success allows a mage to determine an object.s Durability, Size, and Structure ratings/i)).toBeInTheDocument();

    renderSpell(getMatterSpellByTitle('Find the Hidden Hoard'));
    expect(screen.getByText(/Extremely well-designed hidden compartments or rooms might levy a .1 or .2 dice penalty/i)).toBeInTheDocument();
  });

  test('renders the final MatterData conversions without losing tables, lists or follow-up text', () => {
    const conductivityView = renderSpell(getMatterSpellByTitle('Alter Conductivity'));
    expect(conductivityView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The number of objects that can be affected increases with each success/i)).toBeInTheDocument();
    expect(screen.getByText(/objects of up to Size 20 can be affected/i)).toBeInTheDocument();

    renderSpell(getMatterSpellByTitle('Counterspell'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();
    expect(screen.getByText(/World of Darkness Rulebook/i)).toBeInTheDocument();

    const medicationView = renderSpell(getMatterSpellByTitle('Manufacture Medication'));
    expect(medicationView.container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getByText(/By scoring additional successes during the creation process/i)).toBeInTheDocument();
    expect(screen.getByText(/The delay is fixed during manufacture/i)).toBeInTheDocument();

    const homunculusView = renderSpell(getMatterSpellByTitle('Construct Homunculus Form'));
    expect(homunculusView.container.querySelectorAll('table')).toHaveLength(4);
    expect(screen.getByText(/\*Add an additional two successes for each extra 25 years of life/i)).toBeInTheDocument();
    expect(screen.getByText(/Highly armored homunculi are sometimes referred to as golems/i)).toBeInTheDocument();

    const summoningView = renderSpell(getMatterSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();
  });

  test('renders additional MatterData table-heavy conversions without losing special text', () => {
    const shapeAirView = renderSpell(getMatterSpellByTitle('Shape Air'));
    expect(shapeAirView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/the mage affects a volume of air or gas based on his successes/i)).toBeInTheDocument();
    expect(screen.getByText(/a Dexterity \+ Crafts roll might be required to achieve a particularly complex shape/i)).toBeInTheDocument();

    const petrificationView = renderSpell(getMatterSpellByTitle('Petrification'));
    expect(petrificationView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/the subject.s body and any possessions he is wearing become hard stone/i)).toBeInTheDocument();
    expect(screen.getByText(/When the spell duration ends, the subject has no memory of being stone/i)).toBeInTheDocument();
  });

  test('renders the first LifeData conversions without losing text or table placement', () => {
    renderSpell(getLifeSpellByTitle('Analyze Life'));
    expect(screen.getByText(/Identifying a specific type of species requires a reflexive Intelligence \+ Animal Ken roll/i)).toBeInTheDocument();

    const senseLifeView = renderSpell(getLifeSpellByTitle('Sense Life'));
    expect(senseLifeView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The mage can detect life within his sensory range/i)).toBeInTheDocument();
    expect(screen.getByText(/Successes are also used to pierce any supernatural occlusion/i)).toBeInTheDocument();

    const transformBaseView = renderSpell(getLifeSpellByTitle('Transform Base Life'));
    expect(transformBaseView.container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getByText(/\*Add x2 radius per five additional points of size/i)).toBeInTheDocument();
    expect(screen.getByText(/To direct the swarm, the mage can cast the .Control Base Life. spell/i)).toBeInTheDocument();
  });

  test('renders the final LifeData conversions without losing lists, examples or follow-up text', () => {
    const summoningView = renderSpell(getLifeSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();

    renderSpell(getLifeSpellByTitle('Bind the Wayward Body'));
    expect(screen.getByText(/Peter, Paul and all the Apostles, be my witness to God.s power/i)).toBeInTheDocument();
    expect(screen.getByText(/The mage must say this prayer \(or whichever one she uses\) three times/i)).toBeInTheDocument();

    renderSpell(getLifeSpellByTitle('Control Reactions'));
    expect(screen.getByText(/Emotional Urging/i)).toBeInTheDocument();
    expect(screen.getByText(/Guardians who work closely with the Labyrinth are particularly fond of this rote/i)).toBeInTheDocument();

    const shapechangingView = renderSpell(getLifeSpellByTitle('Shapechanging'));
    expect(shapechangingView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The mage suffers dice penalties for Sizes significantly smaller than his own/i)).toBeInTheDocument();
    expect(screen.getByText(/In addition, increasing one.s Size can also levy dice penalties/i)).toBeInTheDocument();

    const regenerationView = renderSpell(getLifeSpellByTitle('Regeneration'));
    expect(regenerationView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Once this spell has been cast, the restored body part does not immediately appear/i)).toBeInTheDocument();
    expect(screen.getByText(/it cannot be made indefinite/i)).toBeInTheDocument();
  });

  test('renders the first ForceData conversions without losing text or table placement', () => {
    renderSpell(getForceSpellByTitle('Control Electricity'));
    expect(screen.getByText(/Each success can send a single line of power in a new direction/i)).toBeInTheDocument();

    renderSpell(getForceSpellByTitle('Control Fire'));
    expect(screen.getByText(/When fueling a fire, successes are allocated between size and heat/i)).toBeInTheDocument();
    expect(screen.getByText(/When dampening a fire, each success subtracts one from the damage it delivers/i)).toBeInTheDocument();

    const influenceView = renderSpell(getForceSpellByTitle('Influence Electricity'));
    expect(influenceView.container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getByText(/A simple success allows the electricity to affect one target/i)).toBeInTheDocument();
    expect(screen.getByText(/The source itself, however, limits the total number that can be affected/i)).toBeInTheDocument();
  });

  test('renders the final ForceData conversions without losing lists, tables or follow-up text', () => {
    const summoningView = renderSpell(getForceSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();

    const soundView = renderSpell(getForceSpellByTitle('Sound Mastery'));
    expect(soundView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Successes determine the sound.s volume/i)).toBeInTheDocument();
    expect(screen.getByText(/one success is usually enough to completely silence a one yard radius/i)).toBeInTheDocument();

    renderSpell(getForceSpellByTitle('Fiery Servant'));
    expect(screen.getByText(/The creature is only barely sentient/i)).toBeInTheDocument();
    expect(screen.getByText(/can be destroyed immediately by a fire extinguisher or a large bucket of water/i)).toBeInTheDocument();

    renderSpell(getForceSpellByTitle('Levitation'));
    expect(screen.getByText(/Success allows the mage to levitate and travel in any direction/i)).toBeInTheDocument();
    expect(screen.getByText(/If she is attacked or startled, a reflexive Resolve \+ Composure roll must be made/i)).toBeInTheDocument();
  });

  test('renders the first PrimeData conversions without losing text or table placement', () => {
    renderSpell(getPrimeSpellByTitle('Analyze Enchanted Item'));
    expect(screen.getByText(/extended Intelligence \+ Occult rolls can be made to examine the enchanted item/i)).toBeInTheDocument();

    const chronicleView = renderSpell(getPrimeSpellByTitle('Chronicle Resonance'));
    expect(chronicleView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/This spell.s Potency is used to determine how far back the mage can look/i)).toBeInTheDocument();
    expect(screen.getByText(/\*Each additional success adds three month to how far back the mage can look/i)).toBeInTheDocument();

    renderSpell(getPrimeSpellByTitle('Supernal Vision'));
    expect(screen.getByText(/The mage gains the Mage Sight/i)).toBeInTheDocument();
    expect(screen.getByText(/A \+1 dice bonus is gained on perception and scrutiny rolls to sense Awakened magic/i)).toBeInTheDocument();
  });

  test('renders the final PrimeData conversions without losing lists, tables or follow-up text', () => {
    renderSpell(getPrimeSpellByTitle('Counterspell'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    const summoningView = renderSpell(getPrimeSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();

    renderSpell(getPrimeSpellByTitle('Imbue Item'));
    expect(screen.getByText(/Imbued items are granted one or more magical powers/i)).toBeInTheDocument();
    expect(screen.getByText(/If the item is imbued with vulgar spells, it risks a Paradox whenever these powers are used/i)).toBeInTheDocument();

    renderSpell(getPrimeSpellByTitle('Ley Shift'));
    expect(screen.getByText(/Shifting a ley line is a three-stage process/i)).toBeInTheDocument();
    expect(screen.getByText(/As soon as the mage reaches the desired distance, she must finally anchor the line/i)).toBeInTheDocument();
  });

  test('renders the key MindData conversions without losing tables, lists or corrected rote wiring', () => {
    const auraView = renderSpell(getMindSpellByTitle('Aura Perception'));
    expect(auraView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/does not allow a mage to read a target/i)).toBeInTheDocument();
    expect(screen.getByText('Mental or Emotional Condition')).toBeInTheDocument();

    const maskView = renderSpell(getMindSpellByTitle('Mask of Normality'));
    expect(maskView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Common examples include the following/i)).toBeInTheDocument();
    expect(screen.getByText(/The spell can also update an object.s look/i)).toBeInTheDocument();

    const induceSleepView = renderSpell(getMindSpellByTitle('Induce Sleep'));
    expect(induceSleepView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Additional successes reduce the time required for the target to fall asleep/i)).toBeInTheDocument();
    expect(screen.getByText(/Mysterium Rote: Hypnos.s Subtle Grasp/i)).toBeInTheDocument();
    expect(screen.getByText(/Dice Pool: Manipulation \+ Persuasion \+ Mind/i)).toBeInTheDocument();

    const summoningView = renderSpell(getMindSpellByTitle('Summon Supernal Being'));
    const lists = Array.from(summoningView.container.querySelectorAll('ul'));
    const items = Array.from(summoningView.container.querySelectorAll('li'));
    expect(lists).toHaveLength(2);
    expect(items).toHaveLength(9);
    expect(screen.getByText(/The mage needs 10 successes to open the gateway/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluding the spell:/i)).toBeInTheDocument();
  });

  test('renders the advanced MindData conversions without losing special rote text, tables or follow-up paragraphs', () => {
    renderSpell(getMindSpellByTitle('Goetic Inversion'));
    expect(screen.getByText(/Example: Logos, a Master of the Mind Arcanum/i)).toBeInTheDocument();
    expect(screen.getByText(/Casting this spell is an act of hubris/i)).toBeInTheDocument();

    const livingLibraryView = renderSpell(getMindSpellByTitle('Living Library'));
    expect(livingLibraryView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/The amount of information that can be stored depends on the successes gained/i)).toBeInTheDocument();
    expect(screen.getByText(/The target cannot access the stored information herself/i)).toBeInTheDocument();

    const constructView = renderSpell(getMindSpellByTitle('Construct Homunculus Persona'));
    expect(constructView.container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getByText(/Homunculi exhibit exaggerated, simplistic personalities/i)).toBeInTheDocument();
    expect(screen.getByText(/The proto must be left to spend significant time with the role model/i)).toBeInTheDocument();

    const twilightTempleView = renderSpell(getMindSpellByTitle('Twilight Temple'));
    expect(twilightTempleView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Using the .Shadow Projection. spell/i)).toBeInTheDocument();
    expect(screen.getByText(/The Duration depends on casting successes/i)).toBeInTheDocument();
  });

  test('renders the Death batch of regular conversions without losing text or list structure', () => {
    renderSpell(getStructuredSpellByTitleAndArcana('Counterspell', 'Death •'));
    expect(screen.getByText(/Successes are subtracted from the target spell.s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Instill Mortality'));
    expect(screen.getByText(/Before using an item with a Mortality greater than zero/i)).toBeInTheDocument();
    expect(screen.getByText(/On an exceptional success, the object is destroyed/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Pain Harvest'));
    expect(screen.getByText(/The spell works only in the turbulent emotional aftermath/i)).toBeInTheDocument();
    expect(screen.getByText(/The mage may at any subsequent time relinquish control over an imbued spell/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Shadow Sculpting'));
    expect(screen.getByText(/A simple success allows a mage to shape a one-yard radius area of shadows/i)).toBeInTheDocument();
    expect(screen.getByText(/With Death 2, the mage can give shadows animation/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Corpse Unmasking'));
    expect(screen.getByText(/Corpse Unmasking cannot undo the transformation done by Corpse Mask/i)).toBeInTheDocument();
    expect(screen.getByText(/Dramatic Failure:/i)).toBeInTheDocument();
    expect(screen.getByText(/Exceptional Success:/i)).toBeInTheDocument();

    const deathSummoningView = renderSpell(
      SpellsData.find(
        (entry) =>
          entry.Titolo === 'Summon Supernal Being' &&
          entry.Arcana === 'Death •••' &&
          Array.isArray(entry.DescrizioneMiddle)
      )
    );
    const deathLists = Array.from(deathSummoningView.container.querySelectorAll('ul'));
    const deathItems = Array.from(deathSummoningView.container.querySelectorAll('li'));
    expect(deathLists).toHaveLength(2);
    expect(deathItems).toHaveLength(9);
    expect(screen.getByText(/The mage needs 10 successes to open the gateway/i)).toBeInTheDocument();
    expect(screen.getByText(/Every mage within 50. of this portal suffers a number of Health points of aggravated damage/i)).toBeInTheDocument();
  });

  test('renders the extended Death paragraph conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Dislodge the Soul'));
    expect(screen.getByText(/The mage must touch the target to enact this spell/i)).toBeInTheDocument();
    expect(screen.getByText(/the mage becomes addicted to what she sees through the gap/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell cannot be cast upon Awakened targets/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Ectoplasm'));
    expect(screen.getByText(/The mage can create ectoplasm from one of his orifices/i)).toBeInTheDocument();
    expect(screen.getByText(/The ectoplasm remains for one hour or for the rest of the scene/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Entropic Guard'));
    expect(screen.getByText(/The mage gains one point of armor per dot he possesses in the Death Arcanum/i)).toBeInTheDocument();
    expect(screen.getByText(/this magical armor does not apply against an opponent.s attempts to achieve a grappling hold/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Final Sight'));
    expect(screen.getByText(/The spell requires the presence of a corpse/i)).toBeInTheDocument();
    expect(screen.getByText(/An exceptional success might reveal an additional clue/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Quiet Grave'));
    expect(screen.getByText(/Subtract the spell.s Potency from any spell or power that would animate the corpse from within/i)).toBeInTheDocument();
    expect(screen.getByText(/It.s also possible to cast this spell using Space 2 to suppress reanimation in an area/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Soul Jar'));
    expect(screen.getByText(/Any receptacle that can be used to seal liquid can serve as a soul jar/i)).toBeInTheDocument();
    expect(screen.getByText(/With Death 3, the mage can attempt to cast this spell with indefinite Duration/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Devouring the Slain'));
    expect(screen.getByText(/this spell is an act of sorcerous cannibalism/i)).toBeInTheDocument();
    expect(screen.getByText(/Devouring the Slain can be used only on a given individual once/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Suppress Own Life'));
    expect(screen.getByText(/The mage determines a trigger that will wake him from this state/i)).toBeInTheDocument();
    expect(screen.getByText(/The Death 1 “Grim Sight” spell/i)).toBeInTheDocument();
  });

  test('renders the next Death cluster of paragraph conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Ghost Gate'));
    expect(screen.getByText(/One person of Size 5 or less can pass through the gate per turn/i)).toBeInTheDocument();
    expect(screen.getByText(/With Death 4, the mage can cast this spell as an instant action/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle("Martyr's Bequest"));
    expect(screen.getByText(/Successfully casting this spell, which may be used only by a mage who is unconscious due to damage/i)).toBeInTheDocument();
    expect(screen.getByText(/The caster.s body disintegrates completely upon the successful completion of this spell/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle("Orpheus' Lament"));
    expect(screen.getByText(/Casting this rote as described in the grimoire requires that the mage sings or plays an appropriately depressing song/i)).toBeInTheDocument();
    expect(screen.getByText(/characters who cannot hear are exempt from the effects of this spell/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Sever the Sleeping Soul'));
    expect(screen.getByText(/The mage must touch the target for the entirety of the spellcasting/i)).toBeInTheDocument();
    expect(screen.getByText(/the victim must be rendered incapable of moving or escaping/i)).toBeInTheDocument();
    expect(screen.getByText(/A soul can be restored using Spirit 3/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Shadow-Forged'));
    expect(screen.getByText(/Shadows pool around the mage and congeal into the desired form visualized in the Imago/i)).toBeInTheDocument();
    expect(screen.getByText(/A “Shadow-Forged” object reduced to zero Structure is considered unraveled/i)).toBeInTheDocument();
  });

  test('renders the late Death cluster of paragraph conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Enervation'));
    expect(screen.getByText(/The mage must first grab hold of the target/i)).toBeInTheDocument();
    expect(screen.getByText(/Each success subtracts one dot from the target.s Strength Attribute/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Ghost Familiar Pact'));
    expect(screen.getByText(/The target must purchase the Ghost Familiar Merit to secure the bond/i)).toBeInTheDocument();
    expect(screen.getByText(/a ghost familiar must be willing to accept the mage.s pact/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Ghostly Archive'));
    expect(screen.getByText(/the willworker may invest in dots of the Library Merit specifically tied to the shades of the dead/i)).toBeInTheDocument();
    expect(screen.getByText(/these dots stack on top of those/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Shadow Flesh'));
    expect(screen.getByText(/he becomes a mass of incorporeal shadows, retaining his human shape/i)).toBeInTheDocument();
    expect(screen.getByText(/By adding Matter 4 to the casting, the mage can cause all of his normal equipment/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle("Suppress Other's Life"));
    expect(screen.getByText(/If the target is attacked or harmed in any way during the time in which he appears to be dead/i)).toBeInTheDocument();
    expect(screen.getByText(/the target experiences nothing, as if he were merely in a deep sleep/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Undying Zeal'));
    expect(screen.getByText(/This spell is a prepared version of the “Revenant” spell/i)).toBeInTheDocument();
    expect(screen.getByText(/Storytellers and players should ensure that the character/i)).toBeInTheDocument();
    expect(screen.getByText(/is ready to die/i)).toBeInTheDocument();
  });

  test('renders the final DeathData conversions without losing special text or tables', () => {
    renderSpell(getStructuredSpellByTitle('Forensic Gaze'));
    expect(screen.getByText(/Forensic Gaze reveals only cause of death and not mitigating circumstances/i)).toBeInTheDocument();
    expect(screen.getByText(/It is possible to detect a vampire with this spell/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Touch of the Grave'));
    expect(screen.getByText(/pull a ghostly hammer out of a Twilight room/i)).toBeInTheDocument();
    expect(screen.getByText(/Objects drawn from Twilight possess Durability 1/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Healing the Dead Mind'));
    expect(screen.getByText(/The spell brings a ghost to a level of self-awareness/i)).toBeInTheDocument();
    expect(screen.getByText(/Some ghosts are self-aware to begin with/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Deathlike Journey'));
    expect(screen.getByText(/Deathlike Journey severs a mage.s soul and grants it a body of ephemera/i)).toBeInTheDocument();
    expect(screen.getByText(/Mages normally use this spell to uncover the secrets of the dead/i)).toBeInTheDocument();

    const transferView = renderSpell(getStructuredSpellByTitle('Transfer Anchor'));
    expect(transferView.container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getByText('Original Anchor')).toBeInTheDocument();
    expect(screen.getByText('Replacement Anchor')).toBeInTheDocument();
    expect(screen.getByText(/Users of this spell often cast it in conjunction with/i)).toBeInTheDocument();

    const hauntingView = renderSpell(getStructuredSpellByTitle('Haunting'));
    expect(hauntingView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Excess successes can increase Duration/i)).toBeInTheDocument();
    expect(screen.getByText(/With Death 5, a mage can create a haunting/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Grant Lifespan'));
    expect(screen.getByText(/The threads of life are of a certain length/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell can only be cast once per month per dot of Gnosis/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Steal Lifespan'));
    expect(screen.getByText(/A person.s actions in life can fray the thread or stretch it/i)).toBeInTheDocument();
    expect(screen.getByText(/It is a means mages can use to live beyond a normal mortal life span/i)).toBeInTheDocument();
  });

  test('renders the first FateData batch of paragraph conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitleAndArcana('Counterspell', 'Any one of the attacking spell’s Arcana at •'));
    expect(screen.getByText(/Successes are subtracted from the target spell’s Potency/i)).toBeInTheDocument();
    expect(screen.getByText(/Counterspell Prime allows him to counter covert spells/i)).toBeInTheDocument();

    const quantumFluxView = renderSpell(getStructuredSpellByTitle('Quantum Flux'));
    expect(screen.getByText(/may not result in any kind of bonus to dice pools/i)).toBeInTheDocument();
    expect(screen.getByText(/Zeno wants to drive his motorcycle up a ramp and jump over a fence/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Reading the Outermost Eddies'));
    expect(screen.getByText(/small turns of immediate or nearly immediate good fortune/i)).toBeInTheDocument();
    expect(screen.getByText(/Successive attempts to use this spell for the same goal are considered vulgar/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Synchronicity'));
    expect(screen.getByText(/The mage gains cryptic guidance from meaningful exercises of apparently random chance/i)).toBeInTheDocument();
    expect(screen.getByText(/she heads down to the local chess club/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Exceptional Luck'));
    expect(screen.getByText(/The mage gains the 9-again quality/i)).toBeInTheDocument();
    expect(screen.getByText(/this spell does not affect a chance die/i)).toBeInTheDocument();

    const fatesJusticeView = renderSpell(getStructuredSpellByTitle("Fate's Justice"));
    expect(screen.getByText(/Success works similar to The Evil Eye/i)).toBeInTheDocument();
    expect(screen.getByText(/the hit man fail his Athletics roll/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Loyal Possession'));
    expect(screen.getByText(/forces conspire to return to item to its rightful owner/i)).toBeInTheDocument();
    expect(screen.getByText(/A call comes in for delivery of a large sausage and mushroom pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/cannot continue to return until the item is brought outside the ward/i)).toBeInTheDocument();
  });

  test('renders the second FateData batch of paragraph conversions without losing text', () => {
    renderSpell(getStructuredSpellByTitle('Platonic Mechanism'));
    expect(screen.getByText(/This spell imbues a mechanical item with a perfect precision/i)).toBeInTheDocument();
    expect(screen.getByText(/dramatic failures associated with the “perfected” device are ignored/i)).toBeInTheDocument();
    expect(screen.getByText(/“perfected” computers never experience those occasional little inexplicable quirks/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Swearing an Oath'));
    expect(screen.getByText(/the opportunity to reflexively roll Resolve \+ Composure/i)).toBeInTheDocument();
    expect(screen.getByText(/The mage cannot swear more than one oath at a time/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('The Evil Eye'));
    expect(screen.getByText(/Success causes a number of dice to be removed from the subject’s dice pool/i)).toBeInTheDocument();
    expect(screen.getByText(/Break the Chains' spell, p. 159, can dispel the Evil Eye/i)).toBeInTheDocument();

    const alterOathView = renderSpell(getStructuredSpellByTitle('Alter Oath'));
    expect(screen.getByText(/The targeted oath’s Potency acts as dice penalties to the casting roll/i)).toBeInTheDocument();
    expect(screen.getByText(/Freya once swore to protect her friend Einar Strombeck from harm/i)).toBeInTheDocument();

    const alternateScenarioView = renderSpell(getStructuredSpellByTitle('Alternate Scenerio'));
    expect(screen.getByText(/he acts within a number of alternate-reality versions of the next turn/i)).toBeInTheDocument();
    expect(screen.getByText(/Blixa chooses to shoot and be shot/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Cursed Object'));
    expect(screen.getByText(/The Potency of this spell cannot exceed the caster’s total Fate dots/i)).toBeInTheDocument();
    expect(screen.getByText(/activities qualify as use of an item/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Fabricate Fortune'));
    expect(screen.getByText(/Those who are attuned to prophecy must overcome the Potency of this spell/i)).toBeInTheDocument();
    expect(screen.getByText(/reflexive, contested Composure \+ Gnosis roll may be made to resist/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Lucky Coin'));
    expect(screen.getByText(/the targeted object receives an equipment dice bonus equal to the spell’s successes/i)).toBeInTheDocument();
    expect(screen.getByText(/Sometimes a lucky object does not even need to be used by its owner/i)).toBeInTheDocument();
  });

  test('renders the expanded FateData conversions without losing list, table or follow-up text', () => {
    const interconnectionsView = renderSpell(getStructuredSpellByTitle('Interconnections'));
    expect(interconnectionsView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Success allows the mage to examine anyone in sensory range/i)).toBeInTheDocument();
    expect(screen.getByText(/supernatural occlusion/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle("Sharpshooter's Eye"));
    expect(screen.getByText(/Each success reduces one die of ranged combat penalties/i)).toBeInTheDocument();
    expect(screen.getByText(/If the target leaves his direct sight before he makes his shot/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell cannot be cast in combination with the Space 1/i)).toBeInTheDocument();

    renderSpell(getStructuredSpellByTitle('Sacrifice Fortune'));
    expect(screen.getByText(/This spell is cast immediately after the mage scores an exceptional success/i)).toBeInTheDocument();
    expect(screen.getByText(/adds one to a pool of points known as the Sacrifice Fortune pool/i)).toBeInTheDocument();
    expect(screen.getByText(/by paying seven points from his Sacrifice Fortune pool/i)).toBeInTheDocument();

    const studyView = renderSpell(getStructuredSpellByTitle('Study Final Name'));
    expect(studyView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/the mage gains insight into the owner of that Name/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell.s Duration is transitory if cast on the recorded Momentary Name/i)).toBeInTheDocument();

    renderSpell(getFateSpellByTitle('Fortunate Timing'));
    expect(screen.getByText(/This spell shifts the threads of Fate into a .proper. configuration/i)).toBeInTheDocument();
    expect(screen.getByText(/Repeated casting of this spell can tangle the threads of Fate/i)).toBeInTheDocument();

    const zoneView = renderSpell(getStructuredSpellByTitle('Zone of Extremity'));
    expect(zoneView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Within the Zone of Extremity, all failures become dramatic failures/i)).toBeInTheDocument();
    expect(screen.getByText(/the default Duration becomes prolonged/i)).toBeInTheDocument();

    const elegguaView = renderSpell(getStructuredSpellByTitle("Eleggua's Notice"));
    expect(elegguaView.container.querySelectorAll('li')).toHaveLength(2);
    expect(screen.getByText(/the rival suffers the following effects/i)).toBeInTheDocument();
    expect(screen.getByText(/Conditional Trigger effect/i)).toBeInTheDocument();

    const maledictionView = renderSpell(getStructuredSpellByTitle('Instill Malediction'));
    expect(maledictionView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/the Misfortune pool, is attached to the item/i)).toBeInTheDocument();
    expect(screen.getByText(/On an exceptional success, a random curse permanently instills itself in the item/i)).toBeInTheDocument();
  });

  test('renders the final FateData conversions without losing tables, lists or ritual text', () => {
    renderSpell(getStructuredSpellByTitle('Shared Fate'));
    expect(screen.getByText(/the subjects are bound to a single fate for its duration/i)).toBeInTheDocument();

    const fateSummoningView = renderSpell(getFateSpellByTitle('Summon Supernal Being'));
    expect(fateSummoningView.container.querySelectorAll('ul')).toHaveLength(2);
    expect(fateSummoningView.container.querySelectorAll('li')).toHaveLength(9);
    expect(screen.getByText(/The mage needs 10 successes to open the gateway/i)).toBeInTheDocument();
    expect(screen.getByText(/Whim, an Acanthus of the Mysterium, decides to call down a recondite being from Arcadia/i)).toBeInTheDocument();

    const giftView = renderSpell(getStructuredSpellByTitle('Gift of Fortune'));
    expect(giftView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Objects do not have volition of their own/i)).toBeInTheDocument();
    expect(screen.getByText(/Using this kind of magic for selfish or greedy ends/i)).toBeInTheDocument();

    const geasView = renderSpell(getStructuredSpellByTitle('Geas'));
    expect(geasView.container.querySelector('table')).toBeInTheDocument();
    expect(geasView.container.textContent).toMatch(/does not compel a target to perform a task/i);
    expect(geasView.container.textContent).toMatch(/greater longevity than most prolonged five dot spells/i);

    const swarmView = renderSpell(getStructuredSpellByTitle('Swarm of Locusts'));
    expect(swarmView.container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText(/Those Sleepers who witness the effects of the Swarm of Locusts/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell cannot be cast a second time within the same area/i)).toBeInTheDocument();

    const trueLoveView = renderSpell(getStructuredSpellByTitle('True Love'));
    expect(trueLoveView.container.querySelectorAll('li')).toHaveLength(3);
    expect(screen.getByText(/the lovers enjoy the following effects/i)).toBeInTheDocument();
    expect(screen.getByText(/This spell is always cast with a conditional Duration/i)).toBeInTheDocument();
  });

  test('renders table placeholders without losing surrounding text', () => {
    const { container } = renderSpell(getSpellByTitle('Curse of Withering'));

    expect(screen.getByText(/To trigger the curse, a victim must take willing possession/i)).toBeInTheDocument();
    expect(container.querySelector('table')).toBeInTheDocument();
    expect(screen.getByText('Interval')).toBeInTheDocument();
    expect(screen.getByText('Target Number')).toBeInTheDocument();
    expect(screen.getByText(/Dots are lost from the victim/i)).toBeInTheDocument();
  });

  test('preserves inline line breaks inside generated table cells', () => {
    const spell = getPrimeSpellByTitle('Dead Zone');

    const { container } = renderSpell(spell);
    const cellWithBreak = Array.from(container.querySelectorAll('td')).find((cell) =>
      cell.innerHTML.includes('<br>')
    );

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(cellWithBreak).toBeTruthy();
    expect(cellWithBreak.textContent).toContain('1-yard radius');
    expect(cellWithBreak.textContent).toContain('5 cubic yards');
  });

  test('stores pilot arcana entries as structured content without html fallback blocks', () => {
    const structuredTitles = [
      'Curse of Withering',
      'Blessing',
      'Assuming the Name',
      'Living Library',
      'Future Legacy',
      'Augury',
      'Divination',
      'Shifting Sands',
      'Prophecy',
      'Temporal Pocket',
      'Temporal Stutter',
      'Duplicate',
      'Tempus Fugit',
      "Time's Mark",
      'Ephemeral Postcognition',
      'Borrow From the Future',
      'Metabolic Suspension',
      'Prophetic Dream',
      'Present as Past',
      'Flip of the Coin',
      'Glimpsing the Future',
      'Postcognition',
      'Shield of Chronos',
      'Temporal Dodge',
      'Temporal Flow',
      'Worst Moment',
      'Counterspell',
      'Acceleration',
      'Erase History',
      'Faerie Glade',
      'Rewrite History',
      'Precise Dating',
      'Time Limit',
      'Summon Supernal Being',
      'Instill Mortality',
      'Pain Harvest',
      'Shadow Sculpting',
      'Corpse Unmasking',
      'Dislodge the Soul',
      'Ectoplasm',
      'Entropic Guard',
      'Final Sight',
      'Quiet Grave',
      'Soul Jar',
      'Devouring the Slain',
      'Suppress Own Life',
      'Ghost Gate',
      "Martyr's Bequest",
      "Orpheus' Lament",
      'Sever the Sleeping Soul',
      'Shadow-Forged',
      'Enervation',
      'Ghost Familiar Pact',
      'Ghostly Archive',
      'Shadow Flesh',
      "Suppress Other's Life",
      'Undying Zeal',
      'Quantum Flux',
      'Reading the Outermost Eddies',
      'Synchronicity',
      'Exceptional Luck',
      "Fate's Justice",
      'Loyal Possession',
      'Platonic Mechanism',
      'Swearing an Oath',
      'The Evil Eye',
      'Alter Oath',
      'Alternate Scenerio',
      'Cursed Object',
      'Fabricate Fortune',
      'Lucky Coin',
      'Interconnections',
      "Sharpshooter's Eye",
      'Sacrifice Fortune',
      'Study Final Name',
      'Zone of Extremity',
      "Eleggua's Notice",
      'Instill Malediction',
      'Shared Fate',
      'Gift of Fortune',
      'Geas',
      'Swarm of Locusts',
      'True Love',
    ];

    structuredTitles.forEach((title) => {
      const spell = getStructuredSpellByTitle(title);

      expect(typeof spell.DescrizioneMiddle).not.toBe('string');
      spell.DescrizioneMiddle.forEach(expectNoStructuralHtml);
    });
  });

  test('stores Temporal Pocket intro as structured content without html fallback blocks', () => {
    const spell = getSpellByTitle('Temporal Pocket');

    expect(Array.isArray(spell.DescrizioneAlta)).toBe(true);

    spell.DescrizioneAlta.forEach((block) => {
      expect(block.type).not.toBe('html');

      if (typeof block.text === 'string') {
        expect(block.text).not.toContain('<p>');
        expect(block.text).not.toContain('</p>');
      }
    });
  });

  test('stores Erase History intro as structured content without html fallback blocks', () => {
    const spell = getSpellByTitle('Erase History');

    expect(Array.isArray(spell.DescrizioneAlta)).toBe(true);
    spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
  });

  test('stores Corpse Unmasking intro as structured content without html fallback blocks', () => {
    const spell = getStructuredSpellByTitle('Corpse Unmasking');

    expect(Array.isArray(spell.DescrizioneAlta)).toBe(true);
    spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
  });

  test('stores Ectoplasm and Devouring the Slain intros as structured content without html fallback blocks', () => {
    ['Ectoplasm', 'Devouring the Slain'].forEach((title) => {
      const spell = getStructuredSpellByTitle(title);

      expect(Array.isArray(spell.DescrizioneAlta)).toBe(true);
      spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
    });
  });

  test('stores Synchronicity and Platonic Mechanism intros as structured content without html fallback blocks', () => {
    ['Synchronicity', 'Platonic Mechanism'].forEach((title) => {
      const spell = getStructuredSpellByTitle(title);

      expect(Array.isArray(spell.DescrizioneAlta)).toBe(true);
      spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
    });
  });

  test('removes structural html and table placeholders from all DeathData content fields', () => {
    const deathData = [...deathOneData, ...deathTwoData, ...deathThreeData, ...deathFourData, ...deathFiveData];
    const fields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    deathData.forEach((spell) => {
      expect(typeof spell.DescrizioneMiddle).not.toBe('string');

      fields.forEach((field) => {
        const value = spell[field];

        if (typeof value === 'string') {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<h2>|<\/h2>|<br>|\[TABLE\d+\]/);
          expectNoInlineHtml(value);
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expectNoInlineHtml(JSON.stringify(value));
        }
      });

      expect(spell.Tables).toBeUndefined();
      expectNoInlineHtml(JSON.stringify(spell));
    });
  });

  test('removes structural html and table placeholders from all TimeData middle descriptions', () => {
    const timeData = [...timeOneData, ...timeTwoData, ...timeThreeData, ...timeFourData, ...timeFiveData];

    timeData.forEach((spell) => {
      const value = spell.DescrizioneMiddle;

      expect(typeof value).not.toBe('string');

      if (Array.isArray(value)) {
        value.forEach(expectNoStructuralHtml);
        expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
        expect(JSON.stringify(value)).not.toContain('"tableRef"');
      }

      expect(spell.Tables).toBeUndefined();
      expectNoInlineHtml(JSON.stringify(spell));
    });
  });

  test('removes structural html, inline table placeholders and legacy table containers from all FateData content fields', () => {
    const fateData = [...fateOneData, ...fateTwoData, ...fateThreeData, ...fateFourData, ...fateFiveData];
    const fields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    fateData.forEach((spell) => {
      expect(typeof spell.DescrizioneMiddle).not.toBe('string');

      fields.forEach((field) => {
        const value = spell[field];

        if (typeof value === 'string') {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<h2>|<\/h2>|<br>|\[TABLE\d+\]/);
          expectNoInlineHtml(value);
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
          expectNoInlineHtml(JSON.stringify(value));
        }
      });

      expect(spell.Tables).toBeUndefined();
      expectNoInlineHtml(JSON.stringify(spell));
    });
  });

  test('stores the first SpiritData migration batch as structured content without html fallback blocks', () => {
    const structuredTitles = [
      'Coaxing the Spirits',
      'Counterspell',
      "Exorcist's Eye",
      'Gremlins',
      'Otherworldly Instrument',
      'Second Sight',
      'Spirit Tongue',
      'Analyze Spirit',
      'Cowing the Spirit',
      'Ephemeral Shield',
      'Grant the Second Sight',
      'Peer Across the Gauntlet',
      'Place of Power',
      'Read Spirit',
      'Sacramental Chain',
      'Spirit Guardian',
      'Materialize Spirit',
    ];

    structuredTitles.forEach((title) => {
      const spell = title === 'Counterspell'
        ? getStructuredSpellByTitleAndArcana(title, 'Any one of the attacking spell’s Arcana at •')
        : getStructuredSpellByTitle(title);

      if (spell.DescrizioneAlta) {
        expect(Array.isArray(spell.DescrizioneAlta) || typeof spell.DescrizioneAlta === 'string').toBe(true);
        if (Array.isArray(spell.DescrizioneAlta)) {
          spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
        }
      }

      expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      spell.DescrizioneMiddle.forEach(expectNoStructuralHtml);
    });
  });

  test('removes structural html from the current SpiritData migration batch', () => {
    const migratedTitles = new Set([
      'Coaxing the Spirits',
      'Counterspell',
      "Exorcist's Eye",
      'Gremlins',
      'Otherworldly Instrument',
      'Second Sight',
      'Spirit Tongue',
      'Analyze Spirit',
      'Cowing the Spirit',
      'Ephemeral Shield',
      'Grant the Second Sight',
      'Peer Across the Gauntlet',
      'Place of Power',
      'Read Spirit',
      'Sacramental Chain',
      'Spirit Guardian',
      'Materialize Spirit',
    ]);

    spiritData
      .filter((spell) => migratedTitles.has(spell.Titolo))
      .forEach((spell) => {
        expect(typeof spell.DescrizioneMiddle).not.toBe('string');

        if (Array.isArray(spell.DescrizioneAlta)) {
          spell.DescrizioneAlta.forEach(expectNoStructuralHtml);
        }

        if (Array.isArray(spell.DescrizioneMiddle)) {
          spell.DescrizioneMiddle.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(spell.DescrizioneMiddle)).not.toMatch(/\[TABLE\d+\]/);
        }
      });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all SpiritData content fields', () => {
    const fields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    spiritData.forEach((spell) => {
      expect(typeof spell.DescrizioneMiddle).not.toBe('string');

      fields.forEach((field) => {
        const value = spell[field];

        if (typeof value === 'string') {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<h2>|<\/h2>|<br>|\[TABLE\d+\]/);
          expectNoInlineHtml(value);
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
          expectNoInlineHtml(JSON.stringify(value));
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      if (spell.DicePool) {
        expectNoInlineHtml(spell.DicePool);
      }

      expect(spell.Tables).toBeUndefined();
      expectNoInlineHtml(JSON.stringify(spell));
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all SpaceData content fields', () => {
    const fields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    spaceData.forEach((spell) => {
      expect(typeof spell.DescrizioneMiddle).not.toBe('string');

      fields.forEach((field) => {
        const value = spell[field];

        if (typeof value === 'string') {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<h2>|<\/h2>|<br>|\[TABLE\d+\]/);
          expectNoInlineHtml(value);
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
          expectNoInlineHtml(JSON.stringify(value));
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      if (spell.DicePool) {
        expectNoInlineHtml(spell.DicePool);
      }

      expect(spell.Tables).toBeUndefined();
      expectNoInlineHtml(JSON.stringify(spell));
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all MatterData content fields', () => {
    const contentFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    matterData.forEach((spell) => {
      if (spell.DescrizioneMiddle !== undefined) {
        expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      }

      contentFields.forEach((field) => {
        const value = spell[field];

        if (!value) {
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(JSON.stringify(value)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
        } else {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(value).not.toMatch(/\[TABLE\d+\]/);
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      expect(spell.Tables).toBeUndefined();
      expect(JSON.stringify(spell)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
      expect(JSON.stringify(spell)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
      expect(JSON.stringify(spell)).not.toMatch(/\[TABLE\d+\]/);
      expect(JSON.stringify(spell)).not.toContain('"tableRef"');
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all LifeData content fields', () => {
    const contentFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    lifeData.forEach((spell) => {
      if (spell.DescrizioneMiddle !== undefined) {
        expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      }

      contentFields.forEach((field) => {
        const value = spell[field];

        if (!value) {
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(JSON.stringify(value)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
        } else {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(value).not.toMatch(/\[TABLE\d+\]/);
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      expect(spell.Tables).toBeUndefined();
      expect(JSON.stringify(spell)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
      expect(JSON.stringify(spell)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
      expect(JSON.stringify(spell)).not.toMatch(/\[TABLE\d+\]/);
      expect(JSON.stringify(spell)).not.toContain('"tableRef"');
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all ForceData content fields', () => {
    const contentFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    forceData.forEach((spell) => {
      if (spell.DescrizioneMiddle !== undefined) {
        expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      }

      contentFields.forEach((field) => {
        const value = spell[field];

        if (!value) {
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(JSON.stringify(value)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
        } else {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(value).not.toMatch(/\[TABLE\d+\]/);
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      expect(spell.Tables).toBeUndefined();
      expect(JSON.stringify(spell)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
      expect(JSON.stringify(spell)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
      expect(JSON.stringify(spell)).not.toMatch(/\[TABLE\d+\]/);
      expect(JSON.stringify(spell)).not.toContain('"tableRef"');
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all PrimeData content fields', () => {
    const contentFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione', 'RoteDescription'];

    primeData.forEach((spell) => {
      if (spell.DescrizioneMiddle !== undefined) {
        expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      }

      contentFields.forEach((field) => {
        const value = spell[field];

        if (!value) {
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(JSON.stringify(value)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
        } else {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(value).not.toMatch(/\[TABLE\d+\]/);
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      expect(spell.Tables).toBeUndefined();
      expect(JSON.stringify(spell)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
      expect(JSON.stringify(spell)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
      expect(JSON.stringify(spell)).not.toMatch(/\[TABLE\d+\]/);
      expect(JSON.stringify(spell)).not.toContain('"tableRef"');
    });
  });

  test('removes structural html, inline html, placeholders and legacy table containers from all MindData content fields', () => {
    const contentFields = ['DescrizioneAlta', 'DescrizioneMiddle', 'RoteDescrizione'];

    mindData.forEach((spell) => {
      if (spell.DescrizioneMiddle !== undefined) {
        expect(Array.isArray(spell.DescrizioneMiddle)).toBe(true);
      }

      contentFields.forEach((field) => {
        const value = spell[field];

        if (!value) {
          return;
        }

        if (Array.isArray(value)) {
          value.forEach(expectNoStructuralHtml);
          expect(JSON.stringify(value)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(JSON.stringify(value)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(JSON.stringify(value)).not.toMatch(/\[TABLE\d+\]/);
          expect(JSON.stringify(value)).not.toContain('"tableRef"');
        } else {
          expect(value).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
          expect(value).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
          expect(value).not.toMatch(/\[TABLE\d+\]/);
        }
      });

      if (spell.RoteDice) {
        expectNoInlineHtml(spell.RoteDice);
      }

      if (spell.RoteName) {
        expectNoInlineHtml(spell.RoteName);
      }

      expect(spell.Tables).toBeUndefined();
      expect(JSON.stringify(spell)).not.toMatch(/<p>|<\/p>|<ul>|<\/ul>|<li>|<\/li>|<br\s*\/?>/);
      expect(JSON.stringify(spell)).not.toMatch(/<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/);
      expect(JSON.stringify(spell)).not.toMatch(/\[TABLE\d+\]/);
      expect(JSON.stringify(spell)).not.toContain('"tableRef"');
    });
  });

  test('keeps TimeData example and note text visible after removing inline html', () => {
    renderSpell(getSpellByTitle('Divination'));
    expect(screen.getByText(/Arethusa gets three successes on her Divination roll/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Shifting Sands'));
    expect(screen.getByText(/Zeno steps into an alley and is confronted by a gang/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Prophecy'));
    expect(screen.getByText(/Bahazid has learned that a certain boy is destined to become a great leader/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Temporal Stutter'));
    expect(screen.getByText(/Zeno, standing next to his motorbike, uses Temporal Stutter/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Duplicate'));
    expect(screen.getByText(/An Adamantine Arrow decides to attack his enemy with the .Telekinetic Strike. rote/i)).toBeInTheDocument();

    renderSpell(getSpellByTitle('Borrow From the Future'));
    expect(screen.getByText(/A user borrows successes from his magic gun during a firefight/i)).toBeInTheDocument();
  });
});
