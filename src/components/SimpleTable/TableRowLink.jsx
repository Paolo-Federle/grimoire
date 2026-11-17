import React from "react";
import { Link } from "react-router-dom";

export default function TableRowLink({ to, className, children }) {
    const isExternal = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(to);

    return (
        <Link to={to} reloadDocument={isExternal} className={className}>
            {children}
        </Link>
    );
}
