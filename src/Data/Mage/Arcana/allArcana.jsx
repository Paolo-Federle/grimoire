import { deathOneData, deathTwoData, deathThreeData, deathFourData, deathFiveData } from './DeathData'

import { fateOneData, fateTwoData, fateThreeData, fateFourData, fateFiveData } from './FateData'
import { forceOneData, forceTwoData, forceThreeData, forceFourData, forceFiveData } from './ForceData'
import { lifeOneData, lifeTwoData, lifeThreeData, lifeFourData, lifeFiveData } from './LifeData'
import { matterOneData, matterTwoData, matterThreeData, matterFourData, matterFiveData } from './MatterData'
import { mindOneData, mindTwoData, mindThreeData, mindFourData, mindFiveData } from './MindData'
import { primeOneData, primeTwoData, primeThreeData, primeFourData, primeFiveData } from './PrimeData'
import { spaceOneData, spaceTwoData, spaceThreeData, spaceFourData, spaceFiveData } from './SpaceData'
import { spiritOneData, spiritTwoData, spiritThreeData, spiritFourData, spiritFiveData } from './SpiritData'
import { timeOneData, timeTwoData, timeThreeData, timeFourData, timeFiveData } from './TimeData'


const DeathData = [...deathOneData, ...deathTwoData, ...deathThreeData, ...deathFourData, ...deathFiveData]

const FateData = [...fateOneData, ...fateTwoData, ...fateThreeData, ...fateFourData, ...fateFiveData]

const ForceData = [...forceOneData, ...forceTwoData, ...forceThreeData, ...forceFourData, ...forceFiveData]

const LifeData = [...lifeOneData, ...lifeTwoData, ...lifeThreeData, ...lifeFourData, ...lifeFiveData]

const MatterData = [...matterOneData, ...matterTwoData, ...matterThreeData, ...matterFourData, ...matterFiveData]

const MindData = [...mindOneData, ...mindTwoData, ...mindThreeData, ...mindFourData, ...mindFiveData]

const PrimeData = [...primeOneData, ...primeTwoData, ...primeThreeData, ...primeFourData, ...primeFiveData]

const SpaceData = [...spaceOneData, ...spaceTwoData, ...spaceThreeData, ...spaceFourData, ...spaceFiveData]

const SpiritData = [...spiritOneData, ...spiritTwoData, ...spiritThreeData, ...spiritFourData, ...spiritFiveData]

const TimeData = [...timeOneData, ...timeTwoData, ...timeThreeData, ...timeFourData, ...timeFiveData]

const SpellsData = [ ...DeathData, ...FateData, ...ForceData, ...LifeData, ...MatterData, ...MindData, ...PrimeData, ...SpaceData, ...SpiritData, ...TimeData]


export { DeathData, FateData, ForceData, LifeData, MatterData, MindData, PrimeData, SpaceData, SpiritData, TimeData, SpellsData };