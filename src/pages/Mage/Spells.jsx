import React from 'react';
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
import MultipleTables from '../../components/MultipleTables';
import { slugify } from '../../utils';


export default function Spells() {

    function addLinkToList(listOfLists) {
        return listOfLists.map(list => {
            return list.map(obj => {
                obj.link = `/mage/spells/${slugify(obj.Titolo)}`;
                return obj;
            });
        });
    }

    function generateHeaders(title) {
        const displayHeaders = ['Description', 'Aspect', 'Cost', 'Arcana', "Book"];
        const headers = [];

        for (let i = 1; i <= 5; i++) {
            headers.push([`${title} ${i}`, ...displayHeaders]);
        }

        return headers;
    }


    const arcanaSets = ['Death', 'Fate', 'Force', 'Life', 'Matter', 'Mind', 'Prime', 'Space', 'Spirit', 'Time'];

    const deathWithLink = addLinkToList([deathOneData, deathTwoData, deathThreeData, deathFourData, deathFiveData])
    const fateWithLink = addLinkToList([fateOneData, fateTwoData, fateThreeData, fateFourData, fateFiveData])
    const forceWithLink = addLinkToList([forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData])
    const LifeWithLink = addLinkToList([lifeOneData, lifeTwoData, lifeThreeData, lifeFourData, lifeFiveData])
    const MatterWithLink = addLinkToList([matterOneData, matterTwoData, matterThreeData, matterFourData, matterFiveData])
    const MindWithLink = addLinkToList([mindOneData, mindTwoData, mindThreeData, mindFourData, mindFiveData])
    const PrimeWithLink = addLinkToList([primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData])
    const SpaceWithLink = addLinkToList([spaceOneData, spaceTwoData, spaceThreeData, spaceFourData, spaceFiveData])
    const SpiritWithLink = addLinkToList([spiritOneData, spiritTwoData, spiritThreeData, spiritFourData, spiritFiveData])
    const TimeWithLink = addLinkToList([timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData])

    const arcanaData = [
        deathWithLink, fateWithLink, forceWithLink, LifeWithLink, MatterWithLink,
        MindWithLink, PrimeWithLink, SpaceWithLink, SpiritWithLink, TimeWithLink
    ];

    const arcanaHeaders = arcanaSets.map(set => generateHeaders(set.charAt(0) + set.slice(1)));

    // Define the headers that correspond to your data keys
    const tableFields = ['Titolo', 'DescrizioneBreve', 'Aspect', 'Cost', 'Arcana', "Book"];

    console.log('MatterWithLink', MatterWithLink)
    const renderedArcanaTables = arcanaData.map((arcana, index) => (
        <MultipleTables
            key={index}
            listOfRows={arcana}
            title={arcanaSets[index]}
            activeRowLink={true}
            displayHeaders={arcanaHeaders[index]}
            tableFields={tableFields}
        />
    ));

    return <div className='grid-container'>{renderedArcanaTables}</div>;
}