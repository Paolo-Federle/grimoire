import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from './path';
import WikiSearch from '../components/WikiSearch';

const resources = [
    ['List of Books', PATHS.BOOKS],
    ['External Resources', PATHS.EXTERNAL_RESOURCES],
    ['Sheets', PATHS.SHEET],
];

const subjects = [
    ['Traits', PATHS.TRAITS],
    ['Items', PATHS.ITEMS],
    ['Settings', PATHS.SETTINGS],
    ['Lexycon', PATHS.LEXYCON],
];

const gameRows = [
    [['Mortals and Lesser Templates', PATHS.MORTAL.BASE]],
    [
        ['Vampire: the Requiem', PATHS.VAMPIRE.BASE],
        ['Werewolf: the Forsaken', PATHS.WEREWOLF.BASE],
    ],
    [
        ['Mage: the Awakening', PATHS.MAGE.BASE],
        ['Promethean: the Created', PATHS.PROMETHEAN.BASE],
    ],
    [
        ['Changeling: the Lost', PATHS.CHANGELING.BASE],
        ['Hunter: the Vigil', PATHS.HUNTER.BASE],
    ],
    [
        ['Geist: the Sin-Eaters', PATHS.GEIST.BASE],
        ['Mummy: the Curse', PATHS.MUMMY.BASE],
    ],
];

function DirectorySection({ title, rows, children }) {
    return (
        <section className="min-w-0 text-center">
            <h2 className="m-0 rounded-2xl bg-[#333] px-3 py-2.5 font-sans text-lg font-bold text-white sm:rounded-[20px]">
                {title}
            </h2>
            <ul className="m-0 mt-2 grid list-none gap-1 p-0 text-sm leading-6 min-[380px]:text-base">
                {rows.map((row) => (
                    <li key={row[0][1]} className="flex flex-wrap justify-center gap-x-1.5 gap-y-1">
                        {row.map(([label, to], index) => (
                            <span key={to} className="inline-flex min-w-0 max-w-full items-baseline gap-1.5">
                                {index > 0 && <span aria-hidden="true" className="text-neutral-500 max-[359px]:hidden">•</span>}
                                <Link
                                    to={to}
                                    className="rounded-sm text-blue-700 underline underline-offset-2 [overflow-wrap:anywhere] hover:text-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                                >
                                    {label}
                                </Link>
                            </span>
                        ))}
                    </li>
                ))}
            </ul>
            {children}
        </section>
    );
}

export default function Home() {
    return (
        <main aria-label="Home" className="mx-auto w-full max-w-[56rem] px-4 pb-8 pt-6 selection:bg-blue-100 selection:text-blue-950 sm:px-6 md:pt-10 lg:pt-12">
            <WikiSearch variant="hero" placeholder="Search the wiki…" maxResults={8} />
            <nav
                aria-label="Wiki directory"
                className="mt-5 grid gap-5 md:mt-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-16"
            >
                <div className="grid min-w-0 gap-5">
                    <DirectorySection title="Resources" rows={[resources]} />
                    <DirectorySection title="Subject Areas" rows={[subjects]}>
                        <p className="mb-0 mt-1 text-sm text-neutral-600">NPCs <span className="text-xs">(in progress)</span></p>
                    </DirectorySection>
                </div>
                <DirectorySection title="Main Games" rows={gameRows} />
            </nav>
        </main>
    );
}
