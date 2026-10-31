import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SimpleTable from '../../components/SimpleTable';
import { LegacyIndexData } from '../../Data/Mage/LegacyIndexData';
import { getMageLegacyPath } from '../path';

const FILTERS = [
    { field: 'Path', parameter: 'path', placeholder: 'All Paths' },
    { field: 'Order', parameter: 'order', placeholder: 'All Orders' },
    { field: 'Primary Arcanum', parameter: 'primary', placeholder: 'All primary Arcana' },
    { field: 'Optional Arcanum', parameter: 'optional', placeholder: 'All optional Arcana' },
    { field: 'Conjunctional Arcanum', parameter: 'conjunctional', placeholder: 'All conjunctional Arcana' },
].map((filter) => ({
    ...filter,
    options: [...new Set(LegacyIndexData.flatMap((legacy) => legacy[filter.field]).filter(Boolean))].sort(),
}));

const HEADERS = [
    'Name', 'Path', 'Order', 'Nickname', 'Primary Arcanum',
    'Conjunctional Arcanum', 'Optional Arcanum', 'Book',
];

export default function Legacy() {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilters = FILTERS.map((filter) => ({
        ...filter,
        value: searchParams.get(filter.parameter) || '',
    }));
    const hasFilters = activeFilters.some((filter) => filter.value);
    const legacyTableData = LegacyIndexData.filter((legacy) => (
        activeFilters.every(({ field, value }) => !value || legacy[field].includes(value))
    )).map((legacy) => ({ ...legacy, link: getMageLegacyPath(legacy.Id) }));

    function updateFilter(parameter, value) {
        setSearchParams((current) => {
            const next = new URLSearchParams(current);
            if (value) next.set(parameter, value);
            else next.delete(parameter);
            return next;
        }, { replace: true });
    }

    function clearFilters() {
        setSearchParams((current) => {
            const next = new URLSearchParams(current);
            FILTERS.forEach(({ parameter }) => next.delete(parameter));
            return next;
        }, { replace: true });
    }

    return (
        <main className="mx-auto w-full max-w-[1600px] p-5">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h1 className="mb-0 text-3xl font-bold">Legacies</h1>
                <div className="flex items-center gap-3">
                    <p role="status" className="m-0 text-xs text-neutral-500">
                        Showing {legacyTableData.length} of {LegacyIndexData.length} Legacies
                    </p>
                    <button
                        type="button"
                        disabled={!hasFilters}
                        onClick={clearFilters}
                        className="min-h-8 border-0 bg-transparent px-1 text-xs text-neutral-600 underline underline-offset-2 hover:text-neutral-900 disabled:cursor-default disabled:opacity-40"
                    >
                        Clear filters
                    </button>
                </div>
            </div>
            <section
                aria-label="Legacy filters"
                className="mb-3 grid grid-cols-2 gap-x-3 gap-y-2 border-b border-neutral-200 pb-3 md:grid-cols-3 lg:grid-cols-5"
            >
                {activeFilters.map(({ field, parameter, placeholder, options, value }) => (
                    <label key={parameter} className="min-w-0 text-xs text-neutral-600">
                        {field}
                        <select
                            name={parameter}
                            autoComplete="off"
                            value={value}
                            className="mt-1 h-8 w-full rounded border border-neutral-300 bg-white px-2 text-xs text-neutral-900 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600"
                            onChange={(event) => updateFilter(parameter, event.target.value)}
                        >
                            <option value="">{placeholder}</option>
                            {options.map((option) => <option key={option} value={option}>{option}</option>)}
                        </select>
                    </label>
                ))}
            </section>
            {legacyTableData.length ? (
                <div className="overflow-x-auto">
                    <SimpleTable table={legacyTableData} headers={HEADERS} activeRowLink={true} />
                </div>
            ) : (
                <p>No Legacies match these filters. Try changing or clearing your selections.</p>
            )}
        </main>
    );
}
