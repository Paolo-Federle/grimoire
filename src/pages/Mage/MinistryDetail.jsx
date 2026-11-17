import React from 'react';
import { Link } from 'react-router-dom';
import BalancedColumns from '../../components/BalancedColumns';
import { BookLink } from '../../components/BookLink';
import StructuredContent from '../../components/StructuredContent';
import { getMagePrelacyPath } from '../path';

function MinistrySection({ title, content, children }) {
    if (!content?.length && !children) return null;
    return (
        <section className="mt-5">
            <h2 className="mb-1 font-serif text-base font-bold">{title}</h2>
            {content && <StructuredContent content={content} />}
            {children}
        </section>
    );
}

export default function MinistryDetail({ ministry }) {
    if (!ministry) return null;

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-3 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold">
            <header>
                <h1 className="mb-2 text-3xl font-bold">{ministry.Name}</h1>
                <p className="font-serif text-lg italic">{ministry.Tagline}</p>
            </header>
            <BalancedColumns>
                <section aria-label={`${ministry.Name} background`} className="min-w-0">
                    <StructuredContent content={ministry.Description} />
                    <MinistrySection title="Overview" content={ministry.Overview} />
                    <MinistrySection title="Members" content={ministry.Members} />
                </section>
                <section aria-label={`${ministry.Name} practices and society`} className="min-w-0">
                    <dl className="my-5 break-inside-avoid space-y-2">
                        {['Nickname', 'Exarch', 'Creed'].map((field) => (
                            <div key={field}>
                                <dt className="inline font-bold">{field}: </dt>
                                <dd className="inline">{ministry[field]}</dd>
                            </div>
                        ))}
                    </dl>
                    <MinistrySection title="Game System Summary">
                        <dl className="space-y-2">
                            <div>
                                <dt className="inline font-bold">Prelacy: </dt>
                                <dd className="inline">Members may purchase dots in the Prelacy of {ministry.Prelacy} for the same price as Path Arcanum dots.</dd>
                            </div>
                            <div>
                                <dt className="inline font-bold">Rote Specialties: </dt>
                                <dd className="inline">{ministry['Rote Skills']}</dd>
                            </div>
                            <div>
                                <dt className="inline font-bold">Status Merits: </dt>
                                <dd className="inline">{ministry.StatusMerits}</dd>
                            </div>
                        </dl>
                    </MinistrySection>
                    <MinistrySection title="Philosophy" content={ministry.Philosophy} />
                    <MinistrySection title="Rituals and Observances" content={ministry.Rituals} />
                    <MinistrySection title="Titles and Duties" content={ministry.Titles} />
                    {ministry.Notes && <MinistrySection title="Secrets" content={ministry.Notes} />}
                    <MinistrySection title="Relations with Other Factions">
                        <dl className="space-y-3">
                            {ministry.Relations.map((relation) => (
                                <div key={relation.Name}>
                                    <dt className="inline font-bold">
                                        {relation.link ? <Link className="underline" to={relation.link}>{relation.Name}</Link> : relation.Name}:{' '}
                                    </dt>
                                    <dd className="inline">{relation.Description}</dd>
                                </div>
                            ))}
                        </dl>
                    </MinistrySection>
                </section>
            </BalancedColumns>
            <nav aria-label="Related ministry rules" className="mt-8">
                <b>Related rules:</b>{' '}
                <Link className="underline" to={getMagePrelacyPath()}>Prelacies</Link>,{' '}
                <Link className="underline" to={getMagePrelacyPath(ministry.Prelacy)}>{ministry.Prelacy}</Link>
            </nav>
            <div className="mt-8"><b>Book:</b> {BookLink(ministry.Book)}</div>
        </article>
    );
}
