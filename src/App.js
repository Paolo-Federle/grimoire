import React from 'react';
import Home from './pages/home'
import NewHome from './pages/NewHome'
import Navbar from './pages/Navbar';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewHome />} />
      {/* <Route path="/generale" element={<Generale />} />
      <Route path="/mortal" element={<Mortal />} />

// VAMPIRI
      <Route path="/vampire" element={<Vampire />} />
      <Route path="/vampire/disciplines" element={<Disciplines />} />
      <Route path="/vampire/merits" element={<VampireMerits />} />

//WEREWOLF
      <Route path="/werewolf" element={<Werewolf />} />
      <Route path="/werewolf/gifts " element={<Gifts />} />
      <Route path="/werewolf/rites" element={<Rites />} />
      <Route path="/werewolf/merits" element={<WerewolfMerits />} />

// MAGE
      <Route path="/mage" element={<Mage />} />
      <Route path="/mage/spells" element={<Transmutations />} />
      <Route path="/mage/merits" element={<MageMerits />} />

// PROMETEANI
      <Route path="/promethean" element={<Promethean />} />
      <Route path="/promethean/transmutations" element={<Transmutations />} />
      <Route path="/promethean/merits" element={<PrometheanMerits />} />

// CHANGELING
      <Route path="/changeling" element={<Changeling />} />
      <Route path="/changeling/contracts" element={<Contracts />} />
      <Route path="/changeling/oaths" element={<Oaths />} />
      <Route path="/changeling/merits" element={<ChangelingMerits />} />

// HUNTER
      <Route path="/hunter" element={<Hunter />} />
      <Route path="/hunter/endowments " element={<Endowments />} />
      <Route path="/hunter/tactics" element={<Tactics />} />
      <Route path="/hunter/merits" element={<HunterMerits />} />

// GEIST
      <Route path="/geist" element={<Geist />} />
      <Route path="/geist/Keys_and_Haunts" element={<KeysAndHaunts />} />
      <Route path="/geist/Ceremonies" element={<Ceremonies />} />
      <Route path="/geist/merits" element={<GeistMerits />} />

//MUMMY
      <Route path="/mummy" element={<Mummy />} />
      <Route path="/mummy/affinities" element={<Affinities />} />
      <Route path="/mummy/utterances" element={<Utterances />} /><Route path="/mummy/merits" element={<MummyMerits />} /> */}
    </Routes>
  );
}

export default App;
