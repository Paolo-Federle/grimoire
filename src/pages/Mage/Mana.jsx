import React from 'react';
import { Link } from 'react-router-dom';
import { ManaData } from '../../Data/Mage/ManaData';
import BalancedColumns from '../../components/BalancedColumns';
import StructuredContent from '../../components/StructuredContent';
import { BookLink } from '../../components/BookLink';
import { PATHS } from '../path';

export default function Mana() {
    return (
        <article className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-10 [&_.structured-content-heading]:mb-1 [&_.structured-content-heading]:mt-5 [&_.structured-content-heading]:font-serif [&_.structured-content-heading]:font-bold [&_.structured-content-heading-3]:mt-3">
            <h1 className="mb-2 text-3xl font-bold">{ManaData.Name}</h1>
            <BalancedColumns>
                <StructuredContent content={ManaData.Content} />
            </BalancedColumns>
            <nav aria-label="Related Mana rules" className="mt-8">
                <b>Related rules:</b>{' '}
                <Link className="underline" to={PATHS.MAGE.GNOSIS}>Gnosis</Link>,{' '}
                <Link className="underline" to={PATHS.MAGE.PRIME}>Prime</Link>,{' '}
                <Link className="underline" to={`${PATHS.LOCATIONS_BASE}/hallow`}>Hallow</Link>
            </nav>
            <div className="mt-4"><b>Book:</b> {BookLink(ManaData.Book)}</div>
        </article>
    );
}
