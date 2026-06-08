import React from "react";
import BaseTable from "../BaseTable";

export default function DesktopSimpleTable({ headers, data, activeRowLink }) {
    return (
        <div className="table-container hidden md:block">
            <BaseTable
                headers={headers}
                data={data}
                onRowClick={activeRowLink}
            />
        </div>
    );
}
