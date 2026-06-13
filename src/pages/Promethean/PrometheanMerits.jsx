import SimpleTable from '../../components/SimpleTable';
import {
    PrometheanMeritsData,
    PrometheanRestrictedSocialMeritsData,
    PrometheanRestrictedSocialMeritsOverviewData,
} from '../../Data/Promethean/PrometheanMeritsData';
import { slugify } from '../../utils';
import { PATHS } from '../path';

function hasContentBlocks(value) {
    return Array.isArray(value) && value.some((item) => {
        if (typeof item === 'string') {
            return item.trim() !== '';
        }

        return !!item;
    });
}

const meritNameCounts = PrometheanMeritsData.reduce((counts, merit) => {
    counts[merit.Name] = (counts[merit.Name] || 0) + 1;
    return counts;
}, {});

function getBookCode(book) {
    return String(book || '').trim().split(/\s+/)[0];
}

function getPrometheanMeritDisplayName(merit) {
    const name = merit.Name || '';

    if (meritNameCounts[name] > 1) {
        const bookCode = getBookCode(merit.Book);
        return bookCode ? `${name} (${bookCode})` : name;
    }

    return name;
}

export default function PrometheanMerits() {
    const meritHeaders = ['Name', 'Cost', 'Prerequisites', 'Description', 'Book'];
    const restrictedSocialMeritHeaders = ['Name', 'Description'];
    const meritsWithDetailLinks = PrometheanMeritsData.map((merit) => {
        const displayName = getPrometheanMeritDisplayName(merit);

        return {
            ...merit,
            Name: displayName,
            link: hasContentBlocks(merit.Effect)
                ? `${PATHS.PROMETHEAN.MERITS}/${slugify(displayName)}`
                : undefined,
        };
    });

    return (
        <div className='grid-container'>
            <SimpleTable
                table={meritsWithDetailLinks}
                title={'Promethean Merits'}
                headers={meritHeaders}
                activeRowLink
            />

            <div>
                <h3>{PrometheanRestrictedSocialMeritsOverviewData.Name}</h3>
                <p>{PrometheanRestrictedSocialMeritsOverviewData.Description}</p>
            </div>
            <SimpleTable
                table={PrometheanRestrictedSocialMeritsData}
                headers={restrictedSocialMeritHeaders}
            />
        </div>
    );
}
