import React from "react";
import { BookLink } from "../BookLink";
import { useNavigate } from "react-router-dom";

export default function MobileSimpleTable({ headers, data, activeRowLink }) {
    const navigate = useNavigate();

    const handleLinkClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    const renderValue = (header, row, value, i) => {
        if (header === "Book") return BookLink(value);

        const shouldLink =
            i === 0 && 
            activeRowLink &&
            row.link;

        if (shouldLink) {
            return (
                <a
                    href={row.link}
                    onClick={(e) => handleLinkClick(e, row.link)}
                    className="underline text-blue-600"
                >
                    {value}
                </a>
            );
        }

        return value;
    };

    return (
        <div className="space-y-4 mt-4 md:hidden">
            {data.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="bg-white border border-neutral-700 rounded-md p-4 space-y-2"
                >
                    {headers.map((header, i) => {
                        const value = row[header];

                        return (
                            <div key={i} className="flex justify-between text-sm">
                                <span className="font-semibold">{header}</span>
                                <span className="max-w-[60%] text-right break-words">
                                    {renderValue(header, row, value, i)}
                                </span>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
