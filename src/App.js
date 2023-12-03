import React from 'react';
import Home from './pages/home'
import Vampire from './pages/Vampire/Vampire'
import Disciplines from './pages/Vampire/Disciplines'
import VampireMerits from './pages/Vampire/VampireMerits'
import Werewolf from './pages/Werewolf/Werewolf'
import Gifts from './pages/Werewolf/Gifts'
import Rites from './pages/Werewolf/Rites'
import WerewolfMerits from './pages/Werewolf/WerewolfMerits'
import Mage from './pages/Mage/Mage'
import Spells from './pages/Mage/Spells'
import MageMerits from './pages/Mage/MageMerits'
import Path from './pages/Mage/Path';
import Order from './pages/Mage/Order';
import Legacy from './pages/Mage/Legacy';
import LegacyDetail from './pages/Mage/LegacyDetail';
import Gnosis from './pages/Mage/Gnosis'
import Wisdom from './pages/Mage/Wisdom';
import LegacyData from './Data/Mage/LegacyData';
import Promethean from './pages/Promethean/Promethean'
import Transmutations from './pages/Promethean/Transmutations'
import PrometheanMerits from './pages/Promethean/PrometheanMerits'
import Changeling from './pages/Changeling/Changeling';
import Contracts from './pages/Changeling/Contracts';
import Oaths from './pages/Changeling/Oaths';
import ChangelingMerits from './pages/Changeling/ChangelingMerits';
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
import Books from './pages/Generale/Books';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './css/App.css';

function App() {

  const removeSpaceForLinks = (title) => {
    return title.replace(/ /g, '_');
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />

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
        <Route path="/mage/spells" element={<Spells />} />
        <Route path="/mage/merits" element={<MageMerits />} />
        <Route path="/mage/path" element={<Path />} />
        <Route path="/mage/order" element={<Order />} />
        <Route path="/mage/legacy" element={<Legacy />} />
        <Route path="/mage/gnosis" element={<Gnosis />} />
        <Route path="/mage/wisdom" element={<Wisdom />} />
        {/* Loop through LegacyData to generate routes */}
        {LegacyData.map((legacy, index) => (
          <Route
            key={index}
            path={`/mage/legacy/${removeSpaceForLinks(legacy.Nome)}`}
            element={<LegacyDetail />} // Assuming the component for each legacy is <Legacy />
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
    </>
  );
}

export default App;
