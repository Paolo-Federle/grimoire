import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import { ClarityData, clarityBreakingPointsData } from '../../Data/Changeling/ClarityData';
import { DynamicText } from '../../components/Detail';
import { getFlipHtmlPageUrlsFromSource } from '../../utils'; // adjust path as needed
import { allBooks } from '../../Data/BookData';

export default function Clarity() {
    return (
        <div className="grid-container">
            <SimpleTable table={ClarityData} title="Clarity" />

            <p><b>Bonuses / Drawbacks:</b></p>
            <p><i>Clarity 6:</i> May use the Kenning ability.</p>

            <h2 className="mt-4">Clarity Breaking Points</h2>

            {clarityBreakingPointsData.map((entry, index) => {
                const title = `Clarity ${entry["Clarity Level"]} Breaking Points`;
                const sourceLinks = getFlipHtmlPageUrlsFromSource(entry.Book, allBooks);

                return (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <DynamicText content={entry.Description} />
                        {sourceLinks.length > 0 && (
                            <p className="text-sm italic mt-2">
                                Book:{' '}
                                {sourceLinks.map((src, i) =>
                                    src.url ? (
                                        <a
                                            key={i}
                                            href={src.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-blue-600"
                                        >
                                            {src.text}
                                        </a>
                                    ) : (
                                        <span key={i}>{src.text}</span>
                                    )
                                ).reduce((prev, curr) => [prev, ', ', curr])}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
