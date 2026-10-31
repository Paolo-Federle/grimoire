import React from 'react';
import { Link } from 'react-router-dom';
import { BookLink } from '../../components/BookLink';
import BalancedColumns from '../../components/BalancedColumns';
import StructuredContent, { InlineContent } from '../../components/StructuredContent';
import { getMageLegacyPath, PATHS } from '../path';
import { slugify } from '../../utils';

const arcanaPaths = {
    Death: PATHS.MAGE.DEATH,
    Fate: PATHS.MAGE.FATE,
    Forces: PATHS.MAGE.FORCE,
    Life: PATHS.MAGE.LIFE,
    Matter: PATHS.MAGE.MATTER,
    Mind: PATHS.MAGE.MIND,
    Prime: PATHS.MAGE.PRIME,
    Space: PATHS.MAGE.SPACE,
    Spirit: PATHS.MAGE.SPIRIT,
    Time: PATHS.MAGE.TIME,
};

function PathSection({ title, content, children }) {
    if (!content?.length && !children) return null;

    return (
        <section className="mt-5">
            <h2 className="mb-1 font-serif text-base font-bold">{title}</h2>
            {content && <StructuredContent content={content} />}
            {children}
        </section>
    );
}

function ArcanaLinks({ value }) {
    return String(value).split('/').map((name, index) => (
        <React.Fragment key={name}>
            {index > 0 && ' / '}
            <Link to={arcanaPaths[name.trim()]} className="underline">{name.trim()}</Link>
        </React.Fragment>
    ));
}

export default function PathDetail({ path }) {
    if (!path) return null;

    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10">
            <header>
                <h1 className="mb-2 text-3xl font-bold">{path.Name}</h1>
                <p className="font-serif text-lg italic">{path.Tagline}</p>
                <p>
                    Scions of the Watchtower of the {path.Watchtower} in the Realm of {path.Realm},
                    {' '}{path.RealmDescription}
                </p>
            </header>

            <BalancedColumns>
                <section aria-label={`${path.Name} background`} className="min-w-0">
                    <StructuredContent content={path.Description} />
                    <PathSection title="Orders" content={path.Orders} />
                    <PathSection title="Appearance" content={path.Appearance} />
                    <PathSection title="Sanctums" content={path.Sanctums} />
                    <PathSection title="Background" content={path.Background} />
                </section>

                <section aria-label={`${path.Name} traits and society`} className="min-w-0">
                    <PathSection title="Character Creation" content={path.CharacterCreation} />
                    <dl className="my-5 break-inside-avoid space-y-2">
                        <div>
                            <dt className="inline font-bold">Favored Resistance Attribute: </dt>
                            <dd className="inline">{path['Bonus trait']}</dd>
                        </div>
                        <div>
                            <dt className="inline font-bold">Ruling Arcana: </dt>
                            <dd className="inline"><ArcanaLinks value={path['Ruling arcana']} /></dd>
                        </div>
                        <div>
                            <dt className="inline font-bold">Inferior Arcanum: </dt>
                            <dd className="inline"><ArcanaLinks value={path['Inferior arcanum']} /></dd>
                        </div>
                    </dl>
                    <PathSection title="Nimbus" content={path.Nimbus} />
                    <PathSection title="Associations" content={path.Associations} />
                    <PathSection title="Legacies">
                        <ul className="list-disc pl-5">
                            {path.Legacies.map((legacy) => (
                                <li key={legacy.Name}>
                                    {legacy.Id ? (
                                        <Link className="underline" to={getMageLegacyPath(legacy.Id)}>{legacy.Name}</Link>
                                    ) : legacy.Name}
                                </li>
                            ))}
                        </ul>
                    </PathSection>
                    <PathSection title="Concepts">
                        <ul className="list-disc pl-5">
                            {path.Concepts.map((concept) => <li key={concept}>{concept}</li>)}
                        </ul>
                    </PathSection>
                    <PathSection title="Stereotypes">
                        <dl className="space-y-3">
                            {path.Stereotypes.map((stereotype) => (
                                <div key={stereotype.Name}>
                                    <dt className="inline font-bold">
                                        {['Acanthus', 'Mastigos', 'Moros', 'Obrimos', 'Thyrsus'].includes(stereotype.Name) ? (
                                            <Link className="underline" to={`${PATHS.MAGE.PATH}/${slugify(stereotype.Name)}`}>
                                                {stereotype.Name}
                                            </Link>
                                        ) : stereotype.Name}:{' '}
                                    </dt>
                                    <dd className="inline"><InlineContent content={stereotype.Description} /></dd>
                                </div>
                            ))}
                        </dl>
                    </PathSection>
                </section>
            </BalancedColumns>

            <blockquote className="my-8 border-l-4 border-neutral-300 pl-4 font-serif italic">
                <StructuredContent content={path.Quote} />
            </blockquote>
            <div><b>Book:</b> {BookLink(path.Book)}</div>
        </article>
    );
}
