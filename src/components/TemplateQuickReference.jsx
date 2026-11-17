import React, { Children, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookLink } from './BookLink';

const referenceFocus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700';

export default function TemplateQuickReference({ game, base, template, children }) {
    const location = useLocation();
    const jumpLinks = Children.toArray(children).map(({ props: { id, title } }) => [id, title]);
    const sectionLocation = (id) => ({ pathname: location.pathname, search: location.search, hash: `#${id}` });

    useEffect(() => {
        const heading = document.getElementById(location.hash.slice(1));
        if (!heading?.id.startsWith('creation-')) return;
        heading.focus({ preventScroll: true });
        heading.scrollIntoView?.({ block: 'start' });
    }, [location]);

    return (
        <main className="mx-auto w-full max-w-[1040px] px-4 pb-8 sm:px-8 [&_a]:scroll-mt-24 [&_a]:underline-offset-2 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-neutral-700">
            {jumpLinks.length > 0 && (
                <Link
                    to={sectionLocation(jumpLinks[0][0])}
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[1001] focus:bg-white focus:px-3 focus:py-2 focus:text-neutral-900"
                >
                    Skip to reference content
                </Link>
            )}
            <header>
                <h1 className="!mb-2 !mt-0 text-balance text-2xl leading-tight sm:text-[2rem]">Character Creation Quick Reference</h1>
                <p className="!my-0 font-semibold text-neutral-800">{game}</p>
                <p className="!mb-0 text-sm text-neutral-700">Use with the base character creation rules ({BookLink(base)}).</p>
            </header>
            <div className="mt-5 grid items-start gap-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
                <nav aria-label="On this page" className="border-y border-neutral-200 py-2 text-sm md:top-24 md:border-y-0 md:border-r md:pr-3 md:pt-0 [@media(min-height:520px)]:md:sticky">
                    <p className="!my-0 font-semibold text-neutral-900" aria-hidden="true">On this page</p>
                    <ul className="mb-0 mt-1 flex list-none flex-wrap gap-x-1 p-0 md:block">
                        {jumpLinks.map(([id, title]) => (
                            <li key={id}>
                                <Link
                                    to={sectionLocation(id)}
                                    aria-current={location.hash === `#${id}` ? 'location' : undefined}
                                    className="block min-h-8 px-2 py-1.5 text-neutral-700 underline decoration-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 aria-[current=location]:bg-neutral-200 aria-[current=location]:font-semibold aria-[current=location]:text-neutral-950"
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="min-w-0 space-y-6">
                    {children}
                    <footer className="border-t border-neutral-200 pt-2 text-sm text-neutral-700">
                        <b>Template reference</b> {BookLink(template)}
                    </footer>
                </div>
            </div>
        </main>
    );
}

export function ReferenceSection({ id, title, to, children }) {
    return (
        <section className="space-y-2 text-sm leading-snug sm:text-[15px] [&_a]:text-blue-700 [&_a]:underline [&_a:hover]:text-blue-900 [&_h2_a]:text-neutral-900 [&_h2_a:hover]:text-neutral-900">
            <h2 id={id} tabIndex={-1} className={`!mb-1 !mt-0 scroll-mt-24 text-balance text-lg sm:text-xl ${referenceFocus}`}>
                {to ? <Link to={to} className="decoration-neutral-500 hover:decoration-neutral-900">{title}</Link> : title}
            </h2>
            {children}
        </section>
    );
}

export function ReferenceDetails({ title, children }) {
    return (
        <details className="border-y border-neutral-200">
            <summary className={`min-h-10 cursor-pointer scroll-mt-24 py-2 font-semibold text-neutral-800 hover:bg-neutral-100 hover:text-neutral-950 ${referenceFocus}`}>{title}</summary>
            <div className="pb-2">{children}</div>
        </details>
    );
}

export function ReferenceTable({ headers, rows, labelWidth = 'w-[32%]' }) {
    return (
        <table className="w-full table-fixed border-collapse text-left [overflow-wrap:anywhere] [&_:is(th,td)]:px-2 [&_:is(th,td)]:py-1.5 sm:[&_:is(th,td)]:px-3 [&_tr>:first-child]:border-r-2 [&_tr>:first-child]:border-white">
            <thead>
                <tr className="table-row">
                    {headers.map((header, index) => (
                        <th key={header} scope="col" className={index === 0 ? labelWidth : undefined}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y-2 divide-white align-top">
                {rows.map(([name, label, value]) => (
                    <tr key={name} className="alternating-row">
                        <th scope="row" className="text-left font-semibold">{label}</th>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function ReferenceExperience({ data }) {
    return (
        <div className="tabular-nums">
            <ReferenceTable
                labelWidth="w-3/5"
                headers={['Trait', 'Cost']}
                rows={data.map(({ Trait, 'Experience point Cost': cost }) => [Trait, Trait, cost.trim().replace(/\bx\s*(\d+)/gi, '× $1')])}
            />
        </div>
    );
}
