import { useEffect } from 'react';
import BalancedColumns from '../../../components/BalancedColumns';
import { BookLink } from '../../../components/BookLink';
import StructuredContent, { InlineContent } from '../../../components/StructuredContent';
import { thaumaturgyTraditionIndex } from '../../../Data/Mortal/Lesser templates/ThaumaturgyTraditionIndex';

export default function ThaumaturgyTraditionDetail({ tradition }) {
    const entry = thaumaturgyTraditionIndex.find((item) => item.Name === tradition.Name);

    useEffect(() => {
        if (window.scrollY > 0) window.scrollTo({ top: 0 });
    }, [tradition.Name]);

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-4 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold [&_.structured-content-heading-2]:text-xl">
            <header className="mb-6">
                <h1 className="mb-2 text-3xl font-bold">{tradition.Name}</h1>
                <blockquote className="border-l-2 border-neutral-300 pl-4 font-serif italic">
                    <InlineContent content={tradition.Quote} />
                </blockquote>
            </header>

            <BalancedColumns><StructuredContent content={tradition.Content} /></BalancedColumns>

            <section className="mt-8" aria-labelledby="tradition-training">
                <h2 id="tradition-training" className="mb-3 font-serif text-xl font-bold">{tradition.TrainingTitle}</h2>
                <dl className="mb-4 space-y-2">
                    <div><dt className="inline font-bold">Defining Merit: </dt><dd className="inline">{entry['Defining Merit']}</dd></div>
                    <div><dt className="inline font-bold">Path Merits: </dt><dd className="inline">{entry['Path Merits']}</dd></div>
                </dl>
                <BalancedColumns><StructuredContent content={tradition.Training} /></BalancedColumns>
            </section>

            <div className="mt-6"><b>Book:</b> {BookLink(entry.Book)}</div>
        </article>
    );
}
