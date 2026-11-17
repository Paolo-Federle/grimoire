import React, { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import BalancedColumns from '../../components/BalancedColumns';
import StructuredContent from '../../components/StructuredContent';
import { BookLink } from '../../components/BookLink';
import { PrelaciesData } from '../../Data/Mage/PrelaciesData';
import { MinistryData } from '../../Data/Mage/MinistryData';
import { slugify } from '../../utils';

function PrelacyAccordion({ section, selected, children }) {
    const [open, setOpen] = useState(selected);
    const ref = useRef(null);

    useEffect(() => {
        if (selected) {
            setOpen(true);
            ref.current?.scrollIntoView?.({ block: 'start' });
        }
    }, [selected]);

    return (
        <details
            ref={ref}
            id={slugify(section.Name)}
            open={open}
            onToggle={(event) => setOpen(event.currentTarget.open)}
            className="my-4 scroll-mt-20 rounded border border-neutral-300 px-4 py-3"
        >
            <summary className="cursor-pointer font-serif text-xl font-bold">
                <h2 className="inline text-xl">{section.Name}</h2>
            </summary>
            <div className="mt-4">
                {children}
                <BalancedColumns><StructuredContent content={section.Content} /></BalancedColumns>
                <div className="mt-4"><b>Book:</b> {BookLink(section.Book)}</div>
            </div>
        </details>
    );
}

export default function Prelacies() {
    const [searchParams] = useSearchParams();
    const selected = searchParams.get('prelacy');

    useEffect(() => {
        if (!selected && window.scrollY > 0) window.scrollTo({ top: 0, left: 0 });
    }, [selected]);

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-4 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold">
            <header>
                <h1 className="mb-2 text-3xl font-bold">{PrelaciesData.Name}</h1>
                <p className="font-serif text-lg italic">{PrelaciesData.Subtitle}</p>
            </header>
            <div className="max-w-4xl"><StructuredContent content={PrelaciesData.Description} /></div>
            <PrelacyAccordion section={PrelaciesData.Learning} selected={selected === 'learning_prelacies'} />
            <section aria-labelledby="archigenitor-prelacies">
                <h2 id="archigenitor-prelacies" className="mt-6 mb-2 font-serif text-xl font-bold">Archigenitor Prelacies</h2>
                <div className="max-w-4xl"><StructuredContent content={PrelaciesData.ArchigenitorIntroduction} /></div>
                {PrelaciesData.Prelacies.map((prelacy) => {
                    const ministry = MinistryData.find((item) => item.Prelacy === prelacy.Name);
                    return (
                        <PrelacyAccordion key={prelacy.Name} section={prelacy} selected={selected === slugify(prelacy.Name)}>
                            <p className="mb-4"><b>Favored by:</b>{' '}<Link className="underline" to={ministry.link}>{ministry.Name}</Link></p>
                        </PrelacyAccordion>
                    );
                })}
            </section>
            <div className="mt-6"><b>Book:</b> {BookLink(PrelaciesData.Book)}</div>
        </article>
    );
}
