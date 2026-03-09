import React from 'react';
import { allBooks } from '../Data/BookData';
import { getFlipHtmlPageUrlsFromSource } from '../utils';

export function BookLink(value) {
  const links = getFlipHtmlPageUrlsFromSource(value, allBooks);

  return (
    <>
      {links.map((item, index) => (
        <React.Fragment key={index}>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              {item.text}
            </a>
          ) : (
            <span>{item.text}</span>
          )}
          {index < links.length - 1 && <span>, </span>}
        </React.Fragment>
      ))}
    </>
  );
}