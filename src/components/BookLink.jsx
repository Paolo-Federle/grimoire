import React from 'react';
import { allBooks } from '../Data/BookData';
import { getFlipHtmlPageUrlsFromSource } from '../utils';

export function BookLink(value) {
  const links = getFlipHtmlPageUrlsFromSource(value, allBooks);

  return (
    <>
      {links.map((item, index) =>
        item.url ? (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1a0dab', textDecoration: 'underline', marginRight: '6px' }}
          >
            {item.text}
          </a>
        ) : (
          <span key={index} style={{ marginRight: '6px' }}>{item.text}</span>
        )
      )}
    </>
  );
}
