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
import Thaumaturgy from './pages/MortalsAndOthers/Lesser templates/Thaumaturgy';
import PsychicsPowers from './pages/MortalsAndOthers/Lesser templates/Psychics';
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
import TokensDetail from './pages/Changeling/TokensDetail';
import TokenRules from './pages/Changeling/TokenRules';
import SheetTest from './pages/Generale/SheetTest';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./css/muiTheme";
import { slugify } from './utils';

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
        <div className={`page-container ${categoryStyle}`}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sheet" element={<SheetTest />} />
            <Route path="/books" element={<Books />} />
            <Route path="/size" element={<Size />} />
            <Route path="/merits/location" element={<Location />} />
            {generateRoutes({
              basePath: "/merits/locations",
              data: allLocation,
              Component: LocationDetail,
              propKey: "location"
            })}
            <Route path="/items" element={<Items />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/universal_merits" element={<UniversalMerits />} />
            {generateRoutes({
              basePath: "/universal_merits",
              data: allUniMeritsData,
              Component: UniversalMeritsDetail,
              propKey: "merits"
            })}
            <Route path="/traits" element={<Traits />} />
            <Route path="/derangements" element={<Derangements />} />
            {generateRoutes({
              basePath: "/derangements",
              data: derangementData,
              Component: DerangementsDetail,
              propKey: "derangement"
            })}
            <Route path="/lexycon" element={<Lexycon />} />
            

            {/* Mortals */}
            <Route path="/mortal" element={<Mortal />} />
            <Route path="/mortal/morality" element={<Morality />} />
            <Route path="/mortal/virtue_vice" element={<VirtueVice />} />
            <Route path="/mortal/merits" element={<MortalMerits />} />
            <Route path="/mortal/armor" element={<Armor />} />
            <Route path="/mortal/reliquary" element={<Reliquary />} />
            <Route path="/mortal/tools" element={<Tools />} />
            <Route path="/mortal/vehicles" element={<Vehicle />} />
            <Route path="/mortal/weapons" element={<Weapon />} />
            <Route path="/mortal/thaumaturgy" element={<Thaumaturgy />} />
            <Route path="/mortal/psychics_powers" element={<PsychicsPowers />} />

            {/* VAMPIRI */}
            <Route path="/vampire" element={<Vampire />} />
            <Route path="/vampire/disciplines" element={<Disciplines />} />
            {generateRoutes({
              basePath: "/vampire/disciplines",
              data: allDiscipline,
              Component: DisciplinesDetail,
              propKey: "discipline"
            })}

            <Route path="/vampire/merits" element={<VampireMerits />} />
            <Route path="/vampire/devotions" element={<Devotion />} />
            {generateRoutes({
              basePath: "/vampire/devotions",
              data: DevotionData,
              Component: DevotionsDetail,
              propKey: "devotion"
            })}
            <Route path="/vampire/clans" element={<Clan />} />
            <Route path="/vampire/covenants" element={<Covenant />} />
            <Route path="/vampire/bloodline" element={<Bloodline />} />
            <Route path="/vampire/blood_potency" element={<BloodPotency />} />
            <Route path="/vampire/ghoul_families" element={<GhoulFamilies />} />
            <Route path="/vampire/merits" element={<VampireMerits />} />
            <Route path="/vampire/humanity" element={<Humanity />} />

            {/* WEREWOLF */}
            <Route path="/werewolf" element={<Werewolf />} />
            <Route path="/werewolf/gifts" element={<Gifts />} />
            <Route path="/werewolf/rites" element={<Rites />} />
            <Route path="/werewolf/merits" element={<WerewolfMerits />} />
            <Route path="/werewolf/fetishes" element={<Fetish />} />
            <Route path="/werewolf/talens" element={<Talen />} />

            {/* MAGE */}
            <Route path="/mage" element={<Mage />} />
            <Route path="/mage/path" element={<Path />} />
            <Route path="/mage/order" element={<Order />} />
            <Route path="/mage/gnosis" element={<Gnosis />} />
            <Route path="/mage/wisdom" element={<Wisdom />} />
            <Route path="/mage/legacy" element={<Legacy />} />
            <Route path="/mage/merits" element={<MageMerits />} />
            <Route path="/mage/grimoires" element={<Grimoire />} />
            {generateRoutes({
              basePath: "/mage/merits",
              data: allMageMeritsData,
              Component: MageMeritsDetail,
              propKey: "merits"
            })}
            {generateRoutes({
              basePath: "/mage/legacy",
              data: LegacyData,
              Component: LegacyDetail,
              propKey: "legacy"
            })}
            <Route path="/mage/spells" element={<Spells />} />
            {generateRoutes({
              basePath: "/mage/spells",
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

            <Route path="/mage/artifacts" element={<Artifacts />} />
            {generateRoutes({
              basePath: "/mage/artifacts",
              data: artifactData,
              Component: ArtifactDetail,
              propKey: "artifact"
            })}
            
            <Route path="/mage/imbued_items" element={<ImbuedItems />} />
            {generateRoutes({
              basePath: "/mage/imbued_items",
              data: imbuedItemsData,
              Component: ImbuedItemsDetail,
              propKey: "imbuedItem"
            })}

            {/* PROMETEANI */}
            <Route path="/promethean" element={<Promethean />} />
            <Route path="/promethean/transmutations" element={<Transmutations />} />
            <Route path="/promethean/merits" element={<PrometheanMerits />} />

            {/* CHANGELING */}
            <Route path="/changeling" element={<Changeling />} />
            <Route path="/changeling/kiths" element={<Kith />} />
            <Route path="/changeling/court" element={<Court />} />
            <Route path="/changeling/entitlement" element={<Entitlements />} />
            <Route path="/changeling/wyrd" element={<Wyrd />} />
            <Route path="/changeling/contracts" element={<Contracts />} />
            {generateRoutes({
              basePath: "/changeling/contracts",
              data: allContracts,
              Component: ContractsDetail,
              propKey: "contracts"
            })}
            {generateRoutes({
              basePath: "/changeling/merits",
              data: allChangelingMeritsData,
              Component: ChangelingMeritsDetail,
              propKey: "merits"
            })}
            <Route path="/changeling/oaths" element={<Oaths />} />
            <Route path="/changeling/merits" element={<ChangelingMerits />} />
            <Route path="/changeling/clarity" element={<Clarity />} />
            <Route path="/changeling/goblin_fruits" element={<GoblinFruits />} />
            <Route path="/changeling/tokens" element={<Token />} />
            <Route path="/changeling/token_rules" element={<TokenRules />} />
            {generateRoutes({
              basePath: "/changeling/tokens",
              data: allToken,
              Component: TokensDetail,
              propKey: "tokens"
            })}

            {/* HUNTER */}
            <Route path="/hunter" element={<Hunter />} />
            <Route path="/hunter/endowments" element={<Endowments />} />
            <Route path="/hunter/tactics" element={<Tactics />} />
            <Route path="/hunter/merits" element={<HunterMerits />} />
            <Route path="/hunter/dread_powers" element={<DreadPowers />} />
            {generateRoutes({
              basePath: "/hunter/dread_powers",
              data: dreadPowersData,
              Component: DreadPowerDetail,
              propKey: "dreadPowers"
            })}


            {/* GEIST */}
            <Route path="/geist" element={<Geist />} />
            <Route path="/geist/keys_and_haunts" element={<KeysAndHaunts />} />
            <Route path="/geist/ceremonies" element={<Ceremonies />} />
            <Route path="/geist/merits" element={<GeistMerits />} />
            <Route path="/geist/mementos" element={<GeistMerits />} />

            {/* MUMMY */}
            <Route path="/mummy" element={<Mummy />} />
            <Route path="/mummy/affinities" element={<Affinities />} />
            <Route path="/mummy/utterances" element={<Utterances />} />
            <Route path="/mummy/merits" element={<MummyMerits />} />
            <Route path="/mummy/relics" element={<Relic />} />

            {/* SPIRIT */}
            <Route path="/spirit/numina" element={<Numina />} />
            {generateRoutes({
              basePath: "/spirit/numina",
              data: spiritNuminaData,
              Component: NuminaDetail,
              propKey: "numina"
            })}

          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
