import React, { useEffect, useState } from 'react';
import Home from './pages/home'
import Skills from './pages/Generale/Skills'
import UniversalMerits from './pages/Generale/UniversalMerits'
import Vampire from './pages/Vampire/Vampire'
import Disciplines from './pages/Vampire/Disciplines'
import VampireMerits from './pages/Vampire/VampireMerits'
import Werewolf from './pages/Werewolf/Werewolf'
import Gifts from './pages/Werewolf/Gifts'
import Rites from './pages/Werewolf/Rites'
import WerewolfMerits from './pages/Werewolf/WerewolfMerits'
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
import LegacyData from './Data/Mage/LegacyData';
import { SpellsData } from './Data/Mage/Arcana/allArcana'
import Artifacts from './pages/Mage/Artifact'
import ArtifactsData from './Data/Mage/artifactsData';
import ArtifactDetail from './pages/Mage/ArtifactDetail';
import ImbuedItems from './pages/Mage/ImbuedItems'
import imbuedItemsData from './Data/Mage/imbuedItemsData';
import ImbuedItemsDetail from './pages/Mage/ImbuedItemsDetail';
import Promethean from './pages/Promethean/Promethean'
import Transmutations from './pages/Promethean/Transmutations'
import PrometheanMerits from './pages/Promethean/PrometheanMerits'
import Changeling from './pages/Changeling/Changeling';
import Contracts from './pages/Changeling/Contracts';
import Oaths from './pages/Changeling/Oaths';
import ChangelingMerits from './pages/Changeling/ChangelingMerits';
import Clarity from './pages/Changeling/Clarity';
import Hunter from './pages/Hunter/Hunter';
import Endowments from './pages/Hunter/Endowments';
import Tactics from './pages/Hunter/Tactics';
import HunterMerits from './pages/Hunter/HunterMerits';
import Geist from './pages/Geist/Geist';
import KeysAndHaunts from './pages/Geist/KeysAndHaunts';
import Ceremonies from './pages/Geist/Ceremonies';
import GeistMerits from './pages/Geist/GeistMerits';
import Mummy from './pages/Mummy/Mummy';
import Affinities from './pages/Mummy/Affinities';
import Utterances from './pages/Mummy/Utterances';
import MummyMerits from './pages/Mummy/MummyMerits';
import Mortal from './pages/MortalsAndOthers/Mortal';
import MortalMerits from './pages/MortalsAndOthers/MortalMerits';
import { allUniMeritsData } from './Data/universalMeritsData'
import UniversalMeritsDetail from './pages/Generale/UniversalMeritsDetail'
import Books from './pages/Generale/Books';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import './css/App.css';
import './css/Races-Style.css'

function App() {
  const [categoryStyle, setCategoryStyle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const getCategoryFromPath = (path) => {
      const categories = [
        'mortal',
        'vampire',
        'werewolf',
        'mage',
        'promethean',
        'changeling',
        'hunter',
        'geist',
        'mummy',
        'others'
      ];

      const pathSegments = path.split('/'); // Split the URL by '/'
      const categoryIndex = pathSegments.findIndex(segment =>
        categories.includes(segment)
      );
      if (categoryIndex !== -1) {
        return pathSegments[categoryIndex]; // Return the category found in the URL
      }

      return 'others'; // If no matching category is found, default to 'others'
    };


    const handlePageChange = () => {
      const currentCategory = getCategoryFromPath(window.location.href);
      let newCategoryStyle = '';

      switch (currentCategory) {
        case 'mage':
          newCategoryStyle = 'mage-style';
          document.body.className = newCategoryStyle
          break;
        case 'vampire':
          newCategoryStyle = 'vampire-style';
          document.body.className = newCategoryStyle
          break;
        case 'mortal':
          newCategoryStyle = 'mortals-style';
          document.body.className = newCategoryStyle
          break;
        case 'werewolf':
          newCategoryStyle = 'werewolf-style';
          document.body.className = newCategoryStyle
          break;
        case 'promethean':
          newCategoryStyle = 'promethean-style';
          document.body.className = newCategoryStyle
          break;
        case 'changeling':
          newCategoryStyle = 'changeling-style';
          document.body.className = newCategoryStyle
          break;
        case 'hunter':
          newCategoryStyle = 'hunter-style';
          document.body.className = newCategoryStyle
          break;
        case 'geist':
          newCategoryStyle = 'geist-style';
          document.body.className = newCategoryStyle
          break;
        case 'mummy':
          newCategoryStyle = 'mummy-style';
          document.body.className = newCategoryStyle
          break;
        default:
          newCategoryStyle = 'default-style';
          document.body.className = newCategoryStyle
          break;
      }

      setCategoryStyle(newCategoryStyle);
    };


    // Initial update based on current URL
    handlePageChange();

  }, [location]);

  const removeSpaceForLinks = (title) => {
    return title.replace(/ /g, '_');
  };


  return (
    <>
      <Navbar />
      <div className={`page-container ${categoryStyle}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/universal_merits" element={<UniversalMerits />} />
          {allUniMeritsData.map((merits, index) => (
            <Route
              key={index}
              path={`/universal_merits/${removeSpaceForLinks(merits.Title)}`}
              element={<UniversalMeritsDetail merits={merits} />}
            />
          ))}

          {/* Mortals */}
          <Route path="/mortal" element={<Mortal />} />
          <Route path="/mortal/merits" element={<MortalMerits />} />
          

          {/* VAMPIRI */}
          <Route path="/vampire" element={<Vampire />} />
          <Route path="/vampire/disciplines" element={<Disciplines />} />
          <Route path="/vampire/merits" element={<VampireMerits />} />

          {/* WEREWOLF */}
          <Route path="/werewolf" element={<Werewolf />} />
          <Route path="/werewolf/gifts" element={<Gifts />} />
          <Route path="/werewolf/rites" element={<Rites />} />
          <Route path="/werewolf/merits" element={<WerewolfMerits />} />

          {/* MAGE */}
          <Route path="/mage" element={<Mage />} />
          <Route path="/mage/path" element={<Path />} />
          <Route path="/mage/order" element={<Order />} />
          <Route path="/mage/gnosis" element={<Gnosis />} />
          <Route path="/mage/wisdom" element={<Wisdom />} />
          <Route path="/mage/legacy" element={<Legacy />} />
          <Route path="/mage/merits" element={<MageMerits />} />
          {allMageMeritsData.map((merits, index) => (
            <Route
              key={index}
              path={`/mage/merits/${removeSpaceForLinks(merits.Title)}`}
              element={<MageMeritsDetail merits={merits} />}
            />
          ))}
          {LegacyData.map((legacy, index) => (
            <Route
              key={index}
              path={`/mage/legacy/${removeSpaceForLinks(legacy.Nome)}`}
              element={<LegacyDetail legacy={legacy} />}
            />
          ))}
          <Route path="/mage/spells" element={<Spells />} />
          {SpellsData.map((spell, index) => (
            <Route
              key={index}
              path={`/mage/spells/${removeSpaceForLinks(spell.Titolo)}`}
              element={<SpellDetail spell={spell} />}
            />
          ))}
          {['death', 'fate', 'force', 'life', 'matter', 'mind', 'prime', 'space', 'spirit', 'time'].map((arcana, index) => (
            <Route
              key={index}
              path={`/mage/${arcana}`}
              element={<Arcana arcana={arcana}/>}
            />
          ))}
          <Route path="/mage/artifacts" element={<Artifacts />} />
          {ArtifactsData.map((artifact, index) => (
            <Route
              key={index}
              path={`/mage/artifacts/${removeSpaceForLinks(artifact.Nome)}`}
              element={<ArtifactDetail artifact={artifact} />}
            />
          ))}
          <Route path="/mage/imbued_items" element={<ImbuedItems />} />
          {imbuedItemsData.map((imbuedItem, index) => (
            <Route
              key={index}
              path={`/mage/imbued_items/${removeSpaceForLinks(imbuedItem.Nome)}`}
              element={<ImbuedItemsDetail imbuedItem={imbuedItem} />}
            />
          ))}


          {/* PROMETEANI */}
          <Route path="/promethean" element={<Promethean />} />
          <Route path="/promethean/transmutations" element={<Transmutations />} />
          <Route path="/promethean/merits" element={<PrometheanMerits />} />

          {/* CHANGELING */}
          <Route path="/changeling" element={<Changeling />} />
          <Route path="/changeling/contracts" element={<Contracts />} />
          <Route path="/changeling/oaths" element={<Oaths />} />
          <Route path="/changeling/merits" element={<ChangelingMerits />} />
          <Route path="/changeling/clarity" element={<Clarity />} />

          {/* HUNTER */}
          <Route path="/hunter" element={<Hunter />} />
          <Route path="/hunter/endowments " element={<Endowments />} />
          <Route path="/hunter/tactics" element={<Tactics />} />
          <Route path="/hunter/merits" element={<HunterMerits />} />

          {/* GEIST */}
          <Route path="/geist" element={<Geist />} />
          <Route path="/geist/keys_and_haunts" element={<KeysAndHaunts />} />
          <Route path="/geist/ceremonies" element={<Ceremonies />} />
          <Route path="/geist/merits" element={<GeistMerits />} />

          {/* MUMMY */}
          <Route path="/mummy" element={<Mummy />} />
          <Route path="/mummy/affinities" element={<Affinities />} />
          <Route path="/mummy/utterances" element={<Utterances />} />
          <Route path="/mummy/merits" element={<MummyMerits />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
