import React from 'react';
import BaseTable from './BaseTable';
import StructuredContent, { InlineContent } from './StructuredContent';

function renderContentBlock(item, index) {
  if (typeof item !== 'object' || item === null) {
    return <p key={index}><InlineContent content={item} /></p>;
  }

  if (item.type || Array.isArray(item)) {
    return <StructuredContent key={index} content={item} />;
  }

  const [title, data] = Object.entries(item)[0] || [];

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const headers = Object.keys(data[0]);

  return (
    <BaseTable
      key={index}
      headers={headers}
      data={data}
      title={title}
    />
  );
}

export default function ContentBlockList({ content }) {
  if (!Array.isArray(content)) {
    return null;
  }

  return <>{content.map(renderContentBlock)}</>;
}
