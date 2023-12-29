import React from 'react';
import Home from '../pages/home'
import Vampire from '../pages/Vampire/Vampire'
import Disciplines from '../pages/Vampire/Disciplines'
import VampireMerits from '../pages/Vampire/VampireMerits'
import Werewolf from '../pages/Werewolf/Werewolf'
import Gifts from '../pages/Werewolf/Gifts'
import Rites from '../pages/Werewolf/Rites'
import WerewolfMerits from '../pages/Werewolf/WerewolfMerits'
import Mage from '../pages/Mage/Mage'
import Spells from '../pages/Mage/Spells'
import MageMerits from '../pages/Mage/MageMerits'
import Promethean from '../pages/Promethean/Promethean'
import Transmutations from '../pages/Promethean/Transmutations'
import PrometheanMerits from '../pages/Promethean/PrometheanMerits'
import Changeling from '../pages/Changeling/Changeling';
import Contracts from '../pages/Changeling/Contracts';
import Oaths from '../pages/Changeling/Oaths';
import ChangelingMerits from '../pages/Changeling/ChangelingMerits';
import Hunter from '../pages/Hunter/Hunter';
import Endowments from '../pages/Hunter/Endowments';
import Tactics from '../pages/Hunter/Tactics';
import HunterMerits from '../pages/Hunter/HunterMerits';
import Geist from '../pages/Geist/Geist';
import KeysAndHaunts from '../pages/Geist/KeysAndHaunts';
import Ceremonies from '../pages/Geist/Ceremonies';
import GeistMerits from '../pages/Geist/GeistMerits';
import Mummy from '../pages/Mummy/Mummy';
import Affinities from '../pages/Mummy/Affinities';
import Utterances from '../pages/Mummy/Utterances';
import MummyMerits from '../pages/Mummy/MummyMerits';

const SiteStructure = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/vampire',
        element: <Vampire />,
        children: [
            { path: 'disciplines', element: <Disciplines /> },
            { path: 'merits', element: <VampireMerits /> },
        ],
    },
    {
        path: '/werewolf',
        element: <Werewolf />,
        children: [
            { path: 'gifts', element: <Gifts /> },
            { path: 'rites', element: <Rites /> },
            { path: 'merits', element: <WerewolfMerits /> },
        ],
    },
    {
        path: '/mage',
        element: <Mage />,
        children: [
            { path: 'spells', element: <Spells /> },
            { path: 'merits', element: <MageMerits /> },
        ],
    },
    {
        path: '/promethean',
        element: <Promethean />,
        children: [
            { path: 'transmutations', element: <Transmutations /> },
            { path: 'merits', element: <PrometheanMerits /> },
        ],
    },
    {
        path: '/changeling',
        element: <Changeling />,
        children: [
            { path: 'contracts', element: <Contracts /> },
            { path: 'oaths', element: <Oaths /> },
            { path: 'merits', element: <ChangelingMerits /> },
        ],
    },
    {
        path: '/hunter',
        element: <Hunter />,
        children: [
            { path: 'endowments', element: <Endowments /> },
            { path: 'tactics', element: <Tactics /> },
            { path: 'merits', element: <HunterMerits /> },
        ],
    },
    {
        path: '/geist',
        element: <Geist />,
        children: [
            { path: 'keys_and_haunts', element: <KeysAndHaunts /> },
            { path: 'ceremonies', element: <Ceremonies /> },
            { path: 'merits', element: <GeistMerits /> },
        ],
    },
    {
        path: '/mummy',
        element: <Mummy />,
        children: [
            { path: 'affinities', element: <Affinities /> },
            { path: 'utterances', element: <Utterances /> },
            { path: 'merits', element: <MummyMerits /> },
        ],
    },
];

// function App() {
//     return (
//         <Routes>
//             {routes.map((route, index) => (
//                 <Route key={index} path={route.path} element={route.element}>
//                     {route.children && (
//                         route.children.map((child, idx) => (
//                             <Route key={idx} path={`${route.path}/${child.path}`} element={child.element} />
//                         ))
//                     )}
//                 </Route>
//             ))}
//         </Routes>
//     );
// }

export default SiteStructure;