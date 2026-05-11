import { deathOneData, deathTwoData, deathThreeData, deathFourData, deathFiveData } from '../../Data/Mage/Arcana/DeathData';
import { fateOneData, fateTwoData, fateThreeData, fateFourData, fateFiveData } from '../../Data/Mage/Arcana/FateData';
import { forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData } from '../../Data/Mage/Arcana/ForceData';
import { lifeOneData, lifeTwoData, lifeThreeData, lifeFourData, lifeFiveData } from '../../Data/Mage/Arcana/LifeData';
import { matterOneData, matterTwoData, matterThreeData, matterFourData, matterFiveData } from '../../Data/Mage/Arcana/MatterData';
import { mindOneData, mindTwoData, mindThreeData, mindFourData, mindFiveData } from '../../Data/Mage/Arcana/MindData';
import { primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData } from '../../Data/Mage/Arcana/PrimeData';
import { spaceOneData, spaceTwoData, spaceThreeData, spaceFourData, spaceFiveData } from '../../Data/Mage/Arcana/SpaceData';
import { spiritOneData, spiritTwoData, spiritThreeData, spiritFourData, spiritFiveData } from '../../Data/Mage/Arcana/SpiritData';
import { timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData } from '../../Data/Mage/Arcana/TimeData';
import { slugify } from '../../utils';

export const SPELL_FIELDS = ['Description', 'Aspect', 'Cost', 'Arcana', 'Book'];

export const ARCANA_SETS = [
    { name: 'Death', data: [deathOneData, deathTwoData, deathThreeData, deathFourData, deathFiveData] },
    { name: 'Fate', data: [fateOneData, fateTwoData, fateThreeData, fateFourData, fateFiveData] },
    { name: 'Force', data: [forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData] },
    { name: 'Life', data: [lifeOneData, lifeTwoData, lifeThreeData, lifeFourData, lifeFiveData] },
    { name: 'Matter', data: [matterOneData, matterTwoData, matterThreeData, matterFourData, matterFiveData] },
    { name: 'Mind', data: [mindOneData, mindTwoData, mindThreeData, mindFourData, mindFiveData] },
    { name: 'Prime', data: [primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData] },
    { name: 'Space', data: [spaceOneData, spaceTwoData, spaceThreeData, spaceFourData, spaceFiveData] },
    { name: 'Spirit', data: [spiritOneData, spiritTwoData, spiritThreeData, spiritFourData, spiritFiveData] },
    { name: 'Time', data: [timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData] },
];

export function buildSpellRows(rows, title) {
    return rows.map((spell) => ({
        [title]: spell.Titolo,
        Description: spell.DescrizioneBreve,
        Aspect: spell.Aspect,
        Cost: spell.Cost,
        Arcana: spell.Arcana,
        Book: spell.Book,
        link: `/mage/spells/${slugify(spell.Titolo)}`,
    }));
}
