import React from 'react';

export default function BalancedColumns({ children }) {
    return (
        <div className="gap-8 lg:columns-2 [column-fill:balance] [&_h2]:[break-after:avoid] [&_h3]:[break-after:avoid] [&_h4]:[break-after:avoid] [&_.structured-content-heading]:[break-after:avoid] [&_p]:[orphans:3] [&_p]:[widows:3] [&_dl>div]:break-inside-avoid [&_li]:break-inside-avoid [&_table]:block [&_table]:max-w-full [&_table]:break-inside-avoid [&_table]:overflow-x-auto">
            {children}
        </div>
    );
}
