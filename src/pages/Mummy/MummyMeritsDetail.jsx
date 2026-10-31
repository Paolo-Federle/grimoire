import React from 'react';
import { BookLink } from '../../components/BookLink';
import { LabeledField, TitleAndRank } from '../../components/Detail';
import StructuredContent from '../../components/StructuredContent';

export default function MummyMeritsDetail({ mummyMerit }) {
    if (!mummyMerit) {
        return <div className="longTextContainer">Mummy merit not found.</div>;
    }

    return (
        <div className="longTextContainer">
            <TitleAndRank main={mummyMerit.Name} subtitle={mummyMerit.Rank || mummyMerit.Rating} />
            <LabeledField label="Prerequisites" value={mummyMerit.Prerequisites} />

            <div className="detail-content-section">
                <StructuredContent content={mummyMerit.Content} />
            </div>

            {mummyMerit.Ranks?.map((rank) => (
                <div key={rank.Rank} className="detail-content-section">
                    <div className="detail-content-section-title">{rank.Rank}</div>
                    <StructuredContent content={rank.Content} />
                </div>
            ))}

            {mummyMerit.Book && <div><b>Book:</b> {BookLink(mummyMerit.Book)}</div>}
        </div>
    );
}
