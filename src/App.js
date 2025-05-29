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
import DevotionData from './Data/Vampire/DevotionData';
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
import { LegacyData } from './Data/Mage/LegacyData';
import { SpellsData } from './Data/Mage/Arcana/allArcana'
import Artifacts from './pages/Mage/Artifact'
import ArtifactsData from './Data/Mage/artifactsData';
import ArtifactDetail from './pages/Mage/ArtifactDetail';
import ImbuedItems from './pages/Mage/ImbuedItems'
import imbuedItemsData from './Data/Mage/imbuedItemsData';
import ImbuedItemsDetail from './pages/Mage/ImbuedItemsDetail';
import Grimoire from './pages/Mage/Grimoire';
import Promethean from './pages/Promethean/Promethean'
import Transmutations from './pages/Promethean/Transmutations'
import PrometheanMerits from './pages/Promethean/PrometheanMerits'
import Changeling from './pages/Changeling/Changeling';
import Contracts from './pages/Changeling/Contracts';
import { allContracts } from './Data/Changeling/ContractData';
import ContractsDetail from './pages/Changeling/ContractsDetail';
import Oaths from './pages/Changeling/Oaths';
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
import Mortal from './pages/MortalsAndOthers/Mortal';
import Armor from './pages/MortalsAndOthers/Armor';
import Tools from './pages/MortalsAndOthers/Tools';
import Reliquary from './pages/MortalsAndOthers/Reliquary';
import Vehicle from './pages/MortalsAndOthers/Vehicle';
import Weapon from './pages/MortalsAndOthers/Weapon';
import MortalMerits from './pages/MortalsAndOthers/MortalMerits';
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
import Morality from './pages/MortalsAndOthers/Morality';
import Humanity from './pages/Vampire/Humanity';
import VirtueVice from './pages/MortalsAndOthers/VirtueVice';
import DynamicDetail from './components/Disuso/DynamicDetail';
import TokensDetail from './pages/Changeling/TokensDetail';
import TokenRules from './pages/Changeling/TokenRules';
import SheetTest from './pages/Generale/SheetTest';
import { PATHS } from './pages/path';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./css/muiTheme";

function App() {
  const [categoryStyle, setCategoryStyle] = useState('');
  const location = useLocation();

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

  const removeSpaceForLinks = (title) => {
    return title.replace(/ /g, '_');
  };

  function generateRoutes({ data: dataPath, Component, propKey, keyFn }) {
    return dataPath.map((item, index) => {
      const path = item.path;
      const key = keyFn ? keyFn(item, index) : index;

      return (
        <Route
          key={key}
          path={path}
          element={<Component {...{ [propKey]: item.data }} />}
        />
      );
    });
  }


  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />
        <div className={`page-container ${categoryStyle}`}>
          <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.SHEET} element={<SheetTest />} />
            <Route path={PATHS.BOOKS} element={<Books />} />
            <Route path={PATHS.SIZE} element={<Size />} />
            <Route path={PATHS.LOCATIONS_BASE} element={<Location />} />
            {generateRoutes({ dataPath: PATHS.LOCATIONS, Component: LocationDetail, propKey: "location" })}
            <Route path={PATHS.ITEMS} element={<Items />} />
            <Route path={PATHS.SKILLS} element={<Skills />} />
            <Route path={PATHS.UNIVERSAL_MERITS_BASE} element={<UniversalMerits />} />
            <Route path={PATHS.TRAITS} element={<Traits />} />
            <Route path={PATHS.DERANGEMENTS_BASE} element={<Derangements />} />
            {generateRoutes({ dataPath: PATHS.DERANGEMENTS, Component: DerangementsDetail, propKey: "derangement" })}
            <Route path={PATHS.LEXYCON} element={<Lexycon />} />
            {generateRoutes({ dataPath: PATHS.UNIVERSAL_MERITS, Component: UniversalMeritsDetail, propKey: "merits" })}

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

            {/* VAMPIRI */}
            <Route path={PATHS.VAMPIRE.BASE} element={<Vampire />} />
            <Route path={PATHS.VAMPIRE.DISCIPLINES} element={<Disciplines />} />
            {generateRoutes({ dataPath: PATHS.VAMPIRE.DISCIPLINE_DETAILS, Component: DisciplinesDetail, propKey: "discipline" })}
            <Route path={PATHS.VAMPIRE.MERITS} element={<VampireMerits />} />
            <Route path={PATHS.VAMPIRE.DEVOTIONS} element={<Devotion />} />
            {generateRoutes({ dataPath: PATHS.VAMPIRE.DEVOTION_DETAILS, Component: DevotionsDetail, propKey: "devotion" })}
            <Route path={PATHS.VAMPIRE.CLANS} element={<Clan />} />
            <Route path={PATHS.VAMPIRE.COVENANTS} element={<Covenant />} />
            <Route path={PATHS.VAMPIRE.BLOODLINE} element={<Bloodline />} />
            <Route path={PATHS.VAMPIRE.BLOOD_POTENCY} element={<BloodPotency />} />
            <Route path={PATHS.VAMPIRE.GHOUL_FAMILIES} element={<GhoulFamilies />} />
            <Route path={PATHS.VAMPIRE.MERITS} element={<VampireMerits />} />
            <Route path={PATHS.VAMPIRE.HUMANITY} element={<Humanity />} />

            {/* WEREWOLF */}
            <Route path={PATHS.WEREWOLF.BASE} element={<Werewolf />} />
            <Route path={PATHS.WEREWOLF.BASE + '/gifts'} element={<Gifts />} />
            <Route path={PATHS.WEREWOLF.BASE + '/rites'} element={<Rites />} />
            <Route path={PATHS.WEREWOLF.BASE + '/merits'} element={<WerewolfMerits />} />
            <Route path={PATHS.WEREWOLF.BASE + '/fetishes'} element={<Fetish />} />
            <Route path={PATHS.WEREWOLF.BASE + '/talens'} element={<Talen />} />

            {/* MAGE */}
            <Route path={PATHS.MAGE.BASE} element={<Mage />} />
            <Route path={PATHS.MAGE.PATH} element={<Path />} />
            <Route path={PATHS.MAGE.ORDER} element={<Order />} />
            <Route path={PATHS.MAGE.GNOSIS} element={<Gnosis />} />
            <Route path={PATHS.MAGE.WISDOM} element={<Wisdom />} />
            <Route path={PATHS.MAGE.BASE + '/legacy'} element={<Legacy />} />
            <Route path={PATHS.MAGE.BASE + '/merits'} element={<MageMerits />} />
            <Route path={PATHS.MAGE.GRIMOIRES} element={<Grimoire />} />
            {generateRoutes({ dataPath: PATHS.MAGE.MERITS, Component: MageMeritsDetail, propKey: 'merits' })}
            {generateRoutes({ dataPath: PATHS.MAGE.LEGACIES, Component: LegacyDetail, propKey: 'legacy' })}
            <Route path={PATHS.MAGE.BASE + '/spells'} element={<Spells />} />
            {generateRoutes({ dataPath: PATHS.MAGE.SPELLS, Component: SpellDetail, propKey: 'spell' })}
            {generateRoutes({ dataPath: PATHS.MAGE.ARCANA, Component: Arcana, propKey: 'arcana' })}
            <Route path={PATHS.MAGE.BASE + '/artifacts'} element={<Artifacts />} />
            {generateRoutes({ dataPath: PATHS.MAGE.ARTIFACTS, Component: ArtifactDetail, propKey: 'artifact' })}
            <Route path={PATHS.MAGE.BASE + '/imbued_items'} element={<ImbuedItems />} />
            {generateRoutes({ dataPath: PATHS.MAGE.IMBUED_ITEMS, Component: ImbuedItemsDetail, propKey: 'imbuedItem' })}

            {/* PROMETHEAN */}
            <Route path={PATHS.PROMETHEAN.BASE} element={<Promethean />} />
            <Route path={PATHS.PROMETHEAN.TRANSMUTATIONS} element={<Transmutations />} />
            <Route path={PATHS.PROMETHEAN.MERITS} element={<PrometheanMerits />} />

            {/* CHANGELING */}
            <Route path={PATHS.CHANGELING.BASE} element={<Changeling />} />
            <Route path={PATHS.CHANGELING.KITHS} element={<Kith />} />
            <Route path={PATHS.CHANGELING.COURT} element={<Court />} />
            <Route path={PATHS.CHANGELING.ENTITLEMENTS} element={<Entitlements />} />
            <Route path={PATHS.CHANGELING.WYRD} element={<Wyrd />} />
            <Route path={PATHS.CHANGELING.BASE + '/contracts'} element={<Contracts />} />
            {generateRoutes({ dataPath: PATHS.CHANGELING.CONTRACTS, Component: ContractsDetail, propKey: 'contracts' })}
            {generateRoutes({ dataPath: PATHS.CHANGELING.MERITS, Component: ChangelingMeritsDetail, propKey: 'merits' })}
            <Route path={PATHS.CHANGELING.OATHS} element={<Oaths />} />
            <Route path={PATHS.CHANGELING.BASE + '/merits'} element={<ChangelingMerits />} />
            <Route path={PATHS.CHANGELING.CLARITY} element={<Clarity />} />
            <Route path={PATHS.CHANGELING.GOBLIN_FRUITS} element={<GoblinFruits />} />
            <Route path={PATHS.CHANGELING.BASE + '/tokens'} element={<Token />} />
            <Route path={PATHS.CHANGELING.TOKEN_RULES} element={<TokenRules />} />
            {generateRoutes({ dataPath: PATHS.CHANGELING.TOKENS, Component: TokensDetail, propKey: 'tokens' })}

            {/* HUNTER */}
            <Route path={PATHS.HUNTER.BASE} element={<Hunter />} />
            <Route path={PATHS.HUNTER.ENDOWMENTS} element={<Endowments />} />
            <Route path={PATHS.HUNTER.TACTICS} element={<Tactics />} />
            <Route path={PATHS.HUNTER.MERITS} element={<HunterMerits />} />
            <Route path={PATHS.HUNTER.BASE + '/dread_powers'} element={<DreadPowers />} />
            {generateRoutes({ dataPath: PATHS.HUNTER.DREAD_POWERS, Component: DreadPowerDetail, propKey: 'dreadPowers' })}

            {/* GEIST */}
            <Route path={PATHS.GEIST.BASE} element={<Geist />} />
            <Route path={PATHS.GEIST.KEYS_AND_HAUNTS} element={<KeysAndHaunts />} />
            <Route path={PATHS.GEIST.CEREMONIES} element={<Ceremonies />} />
            <Route path={PATHS.GEIST.MERITS} element={<GeistMerits />} />
            <Route path={PATHS.GEIST.MEMENTOS} element={<GeistMerits />} />

            {/* MUMMY */}
            <Route path={PATHS.MUMMY.BASE} element={<Mummy />} />
            <Route path={PATHS.MUMMY.AFFINITIES} element={<Affinities />} />
            <Route path={PATHS.MUMMY.UTTERANCES} element={<Utterances />} />
            <Route path={PATHS.MUMMY.MERITS} element={<MummyMerits />} />
            <Route path={PATHS.MUMMY.RELICS} element={<Relic />} />

            {/* SPIRIT */}
            <Route path={PATHS.SPIRIT.NUMINA} element={<Numina />} />
            {generateRoutes({ dataPath: PATHS.SPIRIT.NUMINA_DETAILS, Component: NuminaDetail, propKey: 'numina' })}
          </Routes>

        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
