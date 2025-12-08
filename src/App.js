import React, { useEffect, useState } from 'react';
import Home from './pages/home'
import Skills from './pages/Generale/Skills'
import UniversalMerits from './pages/Generale/UniversalMerits'
import Vampire from './pages/Vampire/Vampire'
import Disciplines from './pages/Vampire/Disciplines'
import DisciplinesDetail from './pages/Vampire/DisciplinesDetail';
import { allDiscipline } from './Data/Vampire/DisciplineData';
import VampireMerits from './pages/Vampire/VampireMerits'
import Devotion from './pages/Vampire/Devotion';
import DevotionsDetail from './pages/Vampire/DevotionsDetail ';
import {DevotionData} from './Data/Vampire/DevotionData';
import Werewolf from './pages/Werewolf/Werewolf'
import Gifts from './pages/Werewolf/Gifts'
import Rites from './pages/Werewolf/Rites'
import WerewolfMerits from './pages/Werewolf/WerewolfMerits'
import Talen from './pages/Werewolf/Talen'
import Fetish from './pages/Werewolf/Fetish'
import Mage from './pages/Mage/Mage'
import Arcana from './pages/Mage/Arcana';
import Spells from './pages/Mage/Spells'
import MageMerits from './pages/Mage/MageMerits'
import { allMageMeritsData } from './Data/Mage/mageMeritsData'
import MageMeritsDetail from './pages/Mage/MageMeritsDetail'
import Path from './pages/Mage/Path';
import Order from './pages/Mage/Order';
import Legacy from './pages/Mage/Legacy';
import LegacyDetail from './pages/Mage/LegacyDetail';
import SpellDetail from './pages/Mage/SpellDetail';
import Gnosis from './pages/Mage/Gnosis'
import Wisdom from './pages/Mage/Wisdom';
import {LegacyData} from './Data/Mage/LegacyData';
import { SpellsData } from './Data/Mage/Arcana/allArcana'
import Artifacts from './pages/Mage/Artifact'
import { artifactData } from './Data/Mage/artifactsData';
import ArtifactDetail from './pages/Mage/ArtifactDetail';
import ImbuedItems from './pages/Mage/ImbuedItems'
import { imbuedItemsData } from './Data/Mage/imbuedItemsData';
import ImbuedItemsDetail from './pages/Mage/ImbuedItemsDetail';
import Grimoire from './pages/Mage/Grimoire';
import Promethean from './pages/Promethean/Promethean'
import Transmutations from './pages/Promethean/Transmutations'
import PrometheanMerits from './pages/Promethean/PrometheanMerits'
import Changeling from './pages/Changeling/Changeling';
import Contracts from './pages/Changeling/Contracts';
import { allContracts } from './Data/Changeling/ContractData';
import ContractsDetail from './pages/Changeling/ContractsDetail';
import Pledges from './pages/Changeling/Pledges';
import ChangelingMerits from './pages/Changeling/ChangelingMerits';
import ChangelingMeritsDetail from './pages/Changeling/ChangelingMeritsDetail';
import GoblinFruits from './pages/Changeling/GoblinFruits';
import Token from './pages/Changeling/Token';
import { tokenDesc } from './Data/Changeling/TokenData';
import { allToken } from './Data/Changeling/TokenData';
import Clarity from './pages/Changeling/Clarity';
import { allChangelingMeritsData } from './Data/Changeling/changelingMeritsData';
import Hunter from './pages/Hunter/Hunter';
import Endowments from './pages/Hunter/Endowments';
import Tactics from './pages/Hunter/Tactics';
import HunterMerits from './pages/Hunter/HunterMerits';
import DreadPowers from './pages/Hunter/DreadPowers';
import { dreadPowersData } from './Data/Hunter/DreadPowerData';
import DreadPowerDetail from './pages/Hunter/DreadPowersDetail';
import Geist from './pages/Geist/Geist';
import KeysAndHaunts from './pages/Geist/KeysAndHaunts';
import Ceremonies from './pages/Geist/Ceremonies';
import GeistMerits from './pages/Geist/GeistMerits';
import Mummy from './pages/Mummy/Mummy';
import Affinities from './pages/Mummy/Affinities';
import Utterances from './pages/Mummy/Utterances';
import MummyMerits from './pages/Mummy/MummyMerits';
import Relic from './pages/Mummy/Relic';
import Numina from './pages/Spirit/Numina';
import NuminaDetail from './pages/Spirit/NuminaDetail';
import Mortal from './pages/MortalsAndTemplates/Mortal';
import Armor from './pages/MortalsAndTemplates/Armor';
import Tools from './pages/MortalsAndTemplates/Tools';
import Reliquary from './pages/MortalsAndTemplates/Reliquary';
import Vehicle from './pages/MortalsAndTemplates/Vehicle';
import Weapon from './pages/MortalsAndTemplates/Weapon';
import MortalMerits from './pages/MortalsAndTemplates/MortalMerits';
import Thaumaturgy from './pages/MortalsAndTemplates/Lesser templates/Thaumaturgy';
import PsychicsPowers from './pages/MortalsAndTemplates/Lesser templates/Psychics';
import { allUniMeritsData } from './Data/universalMeritsData'
import UniversalMeritsDetail from './pages/Generale/UniversalMeritsDetail'
import Books from './pages/Generale/Books';
import Location from './pages/Generale/Location';
import { allLocation } from './Data/LocationMeritData';
import LocationDetail from './pages/Generale/LocationDetail';
import Size from './pages/Generale/Size';
import Items from './pages/Generale/Items';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import './css/App.css';
import './css/Races-Style.css'
import { spiritNuminaData } from './Data/Spirit/SpiritNuminaData';
import Traits from './pages/Generale/Traits';
import Derangements from './pages/Generale/Derangements';
import DerangementsDetail from './pages/Generale/DerangementsDetail';
import { derangementData } from './Data/DerangementsData';
import Lexycon from './pages/Generale/Lexycon';
import Clan from './pages/Vampire/Clan';
import Covenant from './pages/Vampire/Covenant';
import Kith from './pages/Changeling/Kith';
import Court from './pages/Changeling/Court';
import Entitlements from './pages/Changeling/Entitlement';
import Wyrd from './pages/Changeling/Wyrd';
import Bloodline from './pages/Vampire/Bloodline';
import BloodPotency from './pages/Vampire/BloodPotency';
import GhoulFamilies from './pages/Vampire/Ghoul';
import Morality from './pages/MortalsAndTemplates/Morality';
import Humanity from './pages/Vampire/Humanity';
import VirtueVice from './pages/MortalsAndTemplates/VirtueVice';
import TokensDetail from './pages/Changeling/TokensDetail';
import TokenRules from './pages/Changeling/TokenRules';
import SheetTest from './pages/Generale/SheetTest';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./css/muiTheme";
import { slugify } from './utils';
import MageExperiencePoints from './pages/Mage/MageExperiencePoints';
import ChangelingExperiencePoints from './pages/Changeling/ChangelingExperiencePoints';
import VampireExperiencePoints from './pages/Vampire/VampireExperiencePoints';
import { goblinFruitData } from './Data/Changeling/GoblinFruitData';
import GoblinFruitsDetail from './pages/Changeling/GoblinFruitsDetail';
import { PATHS } from './pages/path';
import Archetypes from './pages/Geist/Archetypes';
import Decrees from './pages/Mummy/Decrees';
import Synergy from './pages/Geist/Synergy';
import Guilds from './pages/Mummy/Guilds';
import Memory from './pages/Mummy/Memory';
import Professions from './pages/Hunter/Professions';
import KreweTraits from './pages/Geist/KreweTraits';
import Thresholds from './pages/Geist/Thresholds';
import AspectsAndFavors from './pages/Others/AspectsAndFavors';
import Auspices from './pages/Werewolf/Auspices';
import Harmony from './pages/Werewolf/Harmony';
import Lodges from './pages/Werewolf/Lodges';
import PrimalUrge from './pages/Werewolf/PrimalUrge';
import Tribes from './pages/Werewolf/Tribes';
import CompactConsipracies from './pages/Hunter/CompactConsipracies';
import Lineages from './pages/Promethean/Lineages';
import Mockeries from './pages/Promethean/Mockeries';
import Refinements from './pages/Promethean/Refinements';
import Breadcrumbs from './components/Breadcrumbs'

function App() {
  const [categoryStyle, setCategoryStyle] = useState('');
  const location = useLocation();

  function generateRoutes({ data, basePath, Component, propKey, getKey, getPathName }) {
    return data.map((item, index) => {
      const key = getKey ? getKey(item, index) : index;
      const slug = getPathName ? getPathName(item) : item.Name || item.Title || item.Nome || item.Titolo || item.slug || 'unknown';
      const path = `${basePath}/${slugify(slug)}`;
  
      return (
        <Route
          key={key}
          path={path}
          element={<Component {...{ [propKey]: item }} />}
        />
      );
    });
  }
  


  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />
        <Breadcrumbs />
        <div className={`page-container ${categoryStyle}`}>
          
        <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.SHEET} element={<SheetTest />} />
            <Route path={PATHS.BOOKS} element={<Books />} />
            <Route path={PATHS.SIZE} element={<Size />} />
            <Route path={PATHS.LOCATIONS_BASE} element={<Location />} />
            <Route path={PATHS.ITEMS} element={<Items />} />
            <Route path={PATHS.SKILLS} element={<Skills />} />
            {generateRoutes({
              basePath: PATHS.LOCATIONS_BASE,
              data: allLocation,
              Component: LocationDetail,
              propKey: "location"
            })}
            <Route path={PATHS.UNIVERSAL_MERITS} element={<UniversalMerits />} />
            {generateRoutes({
              basePath: PATHS.UNIVERSAL_MERITS,
              data: allUniMeritsData,
              Component: UniversalMeritsDetail,
              propKey: "merits"
            })}
            <Route path={PATHS.TRAITS} element={<Traits />} />
            <Route path={PATHS.DERANGEMENTS} element={<Derangements />} />
            {generateRoutes({
              basePath: PATHS.DERANGEMENTS,
              data: derangementData,
              Component: DerangementsDetail,
              propKey: "derangement"
            })}
            <Route path={PATHS.LEXYCON} element={<Lexycon />} />
            

            {/* Mortals */}
            <Route path={PATHS.MORTAL.BASE} element={<Mortal />} />
            <Route path={PATHS.MORTAL.MORALITY} element={<Morality />} />
            <Route path={PATHS.MORTAL.VIRTUE_VICE} element={<VirtueVice />} />
            <Route path={PATHS.MORTAL.MERITS} element={<MortalMerits />} />
            <Route path={PATHS.MORTAL.ARMOR} element={<Armor />} />
            <Route path={PATHS.MORTAL.RELIQUARY} element={<Reliquary />} />
            <Route path={PATHS.MORTAL.TOOLS} element={<Tools />} />
            <Route path={PATHS.MORTAL.VEHICLES} element={<Vehicle />} />
            <Route path={PATHS.MORTAL.WEAPONS} element={<Weapon />} />
            <Route path={PATHS.MORTAL.THAUMATURGY} element={<Thaumaturgy />} />
            <Route path={PATHS.MORTAL.PSYCHIC_POWERS} element={<PsychicsPowers />} />

            {/* VAMPIRI */}
            <Route path={PATHS.VAMPIRE.BASE} element={<Vampire />} />
            <Route path={PATHS.VAMPIRE.DISCIPLINES} element={<Disciplines />} />
            {generateRoutes({
              basePath: PATHS.VAMPIRE.DISCIPLINES,
              data: allDiscipline,
              Component: DisciplinesDetail,
              propKey: "discipline"
            })}

            <Route path={PATHS.VAMPIRE.DEVOTIONS} element={<Devotion />} />
            {generateRoutes({
              basePath: PATHS.VAMPIRE.DEVOTIONS,
              data: DevotionData,
              Component: DevotionsDetail,
              propKey: "devotion"
            })}
            <Route path={PATHS.VAMPIRE.EXPERIENCE} element={<VampireExperiencePoints />} />
            <Route path={PATHS.VAMPIRE.CLANS} element={<Clan />} />
            <Route path={PATHS.VAMPIRE.COVENANTS} element={<Covenant />} />
            <Route path={PATHS.VAMPIRE.BLOODLINE} element={<Bloodline />} />
            <Route path={PATHS.VAMPIRE.BLOOD_POTENCY} element={<BloodPotency />} />
            <Route path={PATHS.VAMPIRE.GHOUL_FAMILIES} element={<GhoulFamilies />} />
            <Route path={PATHS.VAMPIRE.MERITS} element={<VampireMerits />} />
            <Route path={PATHS.VAMPIRE.HUMANITY} element={<Humanity />} />

            {/* WEREWOLF */}
            <Route path={PATHS.WEREWOLF.BASE} element={<Werewolf />} />
            <Route path={PATHS.WEREWOLF.GIFTS} element={<Gifts />} />
            <Route path={PATHS.WEREWOLF.RITES} element={<Rites />} />
            <Route path={PATHS.WEREWOLF.MERITS} element={<WerewolfMerits />} />
            <Route path={PATHS.WEREWOLF.FETISHES} element={<Fetish />} />
            <Route path={PATHS.WEREWOLF.TALENS} element={<Talen />} />
            <Route path={PATHS.WEREWOLF.AUSPICES} element={<Auspices />} />
            <Route path={PATHS.WEREWOLF.HARMONY} element={<Harmony />} />
            <Route path={PATHS.WEREWOLF.LODGES} element={<Lodges />} />
            <Route path={PATHS.WEREWOLF.PRIMAL_URGE} element={<PrimalUrge />} />
            <Route path={PATHS.WEREWOLF.TRIBES} element={<Tribes />} />

            {/* MAGE */}
            <Route path={PATHS.MAGE.BASE} element={<Mage />} />
            <Route path={PATHS.MAGE.PATH} element={<Path />} />
            <Route path={PATHS.MAGE.ORDER} element={<Order />} />
            <Route path={PATHS.MAGE.GNOSIS} element={<Gnosis />} />
            <Route path={PATHS.MAGE.WISDOM} element={<Wisdom />} />
            <Route path={PATHS.MAGE.LEGACY} element={<Legacy />} />
            <Route path={PATHS.MAGE.MERITS} element={<MageMerits />} />
            <Route path={PATHS.MAGE.GRIMOIRES} element={<Grimoire />} />
            <Route path={PATHS.MAGE.EXPERIENCE} element={<MageExperiencePoints />} />
            {generateRoutes({
              basePath: PATHS.MAGE.MERITS,
              data: allMageMeritsData,
              Component: MageMeritsDetail,
              propKey: "merits"
            })}
            {generateRoutes({
              basePath: PATHS.MAGE.LEGACY,
              data: LegacyData,
              Component: LegacyDetail,
              propKey: "legacy"
            })}
            <Route path={PATHS.MAGE.SPELLS} element={<Spells />} />
            {generateRoutes({
              basePath: PATHS.MAGE.SPELLS,
              data: SpellsData,
              Component: SpellDetail,
              propKey: "spell"
            })}
            {['death', 'fate', 'force', 'life', 'matter', 'mind', 'prime', 'space', 'spirit', 'time'].map((arcana, index) => (
            <Route
              key={index}
              path={`/mage/${arcana}`}
              element={<Arcana arcana={arcana} />}
            />
          ))}

            <Route path={PATHS.MAGE.ARTIFACTS} element={<Artifacts />} />
            {generateRoutes({
              basePath: PATHS.MAGE.ARTIFACTS,
              data: artifactData,
              Component: ArtifactDetail,
              propKey: "artifact"
            })}
            
            <Route path={PATHS.MAGE.IMBUED_ITEMS} element={<ImbuedItems />} />
            {generateRoutes({
              basePath: PATHS.MAGE.IMBUED_ITEMS,
              data: imbuedItemsData,
              Component: ImbuedItemsDetail,
              propKey: "imbuedItem"
            })}

            {/* PROMETEANI */}
            <Route path={PATHS.PROMETHEAN.BASE} element={<Promethean />} />
            <Route path={PATHS.PROMETHEAN.TRANSMUTATIONS} element={<Transmutations />} />
            <Route path={PATHS.PROMETHEAN.MERITS} element={<PrometheanMerits />} />
            <Route path={PATHS.PROMETHEAN.REFINEMENTS} element={<Refinements />} />
            <Route path={PATHS.PROMETHEAN.MOCKERIES} element={<Mockeries />} />
            <Route path={PATHS.PROMETHEAN.LINEAGE} element={<Lineages />} />

            {/* CHANGELING */}
            <Route path={PATHS.CHANGELING.BASE} element={<Changeling />} />
            <Route path={PATHS.CHANGELING.KITHS} element={<Kith />} />
            <Route path={PATHS.CHANGELING.COURT} element={<Court />} />
            <Route path={PATHS.CHANGELING.ENTITLEMENTS} element={<Entitlements />} />
            <Route path={PATHS.CHANGELING.WYRD} element={<Wyrd />} />
            <Route path={PATHS.CHANGELING.CONTRACTS} element={<Contracts />} />
            <Route path={PATHS.CHANGELING.EXPERIENCE} element={<ChangelingExperiencePoints />} />
            {generateRoutes({
              basePath: PATHS.CHANGELING.CONTRACTS,
              data: allContracts,
              Component: ContractsDetail,
              propKey: "contracts"
            })}
            {generateRoutes({
              basePath: PATHS.CHANGELING.MERITS,
              data: allChangelingMeritsData,
              Component: ChangelingMeritsDetail,
              propKey: "merits"
            })}
            <Route path={PATHS.CHANGELING.PLEDGES} element={<Pledges />} />
            <Route path={PATHS.CHANGELING.MERITS} element={<ChangelingMerits />} />
            <Route path={PATHS.CHANGELING.CLARITY} element={<Clarity />} />
            <Route path={PATHS.CHANGELING.GOBLIN_FRUITS} element={<GoblinFruits />} />
            {generateRoutes({
              basePath: PATHS.CHANGELING.GOBLIN_FRUITS,
              data: goblinFruitData,
              Component: GoblinFruitsDetail,
              propKey: "goblinFruit"
            })}
            <Route path={PATHS.CHANGELING.TOKENS} element={<Token />} />
            <Route path={PATHS.CHANGELING.TOKEN_RULES} element={<TokenRules />} />
            {generateRoutes({
              basePath: PATHS.CHANGELING.TOKENS,
              data: allToken,
              Component: TokensDetail,
              propKey: "tokens"
            })}

            {/* HUNTER */}
            <Route path={PATHS.HUNTER.BASE} element={<Hunter />} />
            <Route path={PATHS.HUNTER.ENDOWMENTS} element={<Endowments />} />
            <Route path={PATHS.HUNTER.TACTICS} element={<Tactics />} />
            <Route path={PATHS.HUNTER.MERITS} element={<HunterMerits />} />
            <Route path={PATHS.HUNTER.PROFESSION} element={<Professions />} />
            <Route path={PATHS.HUNTER.COMPACT_CONSPIRANCY} element={<CompactConsipracies />} />
            <Route path={PATHS.HUNTER.DREAD_POWERS} element={<DreadPowers />} />
            {generateRoutes({
              basePath: PATHS.HUNTER.DREAD_POWERS,
              data: dreadPowersData,
              Component: DreadPowerDetail,
              propKey: "dreadPowers"
            })}


            {/* GEIST */}
            <Route path={PATHS.GEIST.BASE} element={<Geist />} />
            <Route path={PATHS.GEIST.KEYS_AND_HAUNTS} element={<KeysAndHaunts />} />
            <Route path={PATHS.GEIST.CEREMONIES} element={<Ceremonies />} />
            <Route path={PATHS.GEIST.MERITS} element={<GeistMerits />} />
            <Route path={PATHS.GEIST.MEMENTOS} element={<GeistMerits />} />
            <Route path={PATHS.GEIST.ARCHETYPES} element={<Archetypes />} />
            <Route path={PATHS.GEIST.SYNERGY} element={<Synergy />} />
            <Route path={PATHS.GEIST.KREWE_TRAITS} element={<KreweTraits />} />
            <Route path={PATHS.GEIST.THRESHOLDS} element={<Thresholds />} />

            {/* MUMMY */}
            <Route path={PATHS.MUMMY.BASE} element={<Mummy />} />
            <Route path={PATHS.MUMMY.AFFINITIES} element={<Affinities />} />
            <Route path={PATHS.MUMMY.UTTERANCES} element={<Utterances />} />
            <Route path={PATHS.MUMMY.MERITS} element={<MummyMerits />} />
            <Route path={PATHS.MUMMY.RELICS} element={<Relic />} />
            <Route path={PATHS.MUMMY.DECREE} element={<Decrees />} />
            <Route path={PATHS.MUMMY.GUILD} element={<Guilds />} />
            <Route path={PATHS.MUMMY.MEMORY} element={<Memory />} />

            {/* SPIRIT */}
            <Route path={PATHS.SPIRIT.NUMINA} element={<Numina />} />
            {generateRoutes({
              basePath: PATHS.SPIRIT.NUMINA,
              data: spiritNuminaData,
              Component: NuminaDetail,
              propKey: "numina"
            })}
            <Route path={PATHS.OTHERS.ASPECTS_FAVORRS} element={<AspectsAndFavors />} />

          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
