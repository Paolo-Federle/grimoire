import React, { useState } from 'react';
import {
  mageLexyconData,
  changelingLexyconData,
  vampireLexyconData,
  geistLexyconData,
  prometheanLexyconData,
  mummyLexyconData,
  werewolfLexyconData,
} from '../../Data/LexyconData';
import { sortByKey } from '../../utils';
import { TextField, Button, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Lexycon() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const lexyconDataRaw = {
    'Mage the Awakening': mageLexyconData,
    'Changeling the Lost': changelingLexyconData,
    'Vampire the Requiem': vampireLexyconData,
    'Werewolf the Forsaken': werewolfLexyconData,
    'Geist the Sin-Eaters': geistLexyconData,
    'Promethean the Created': prometheanLexyconData,
    'Mummy the Curse': mummyLexyconData,
  };

  const lexyconData = Object.fromEntries(
    Object.entries(lexyconDataRaw).map(([key, value]) => [key, sortByKey(value, 'Name')])
  );

  const [activeSections, setActiveSections] = useState(new Set(Object.keys(lexyconData)));
  const [search, setSearch] = useState('');

  const handleSectionToggle = (sectionName) => {
    const updated = new Set(activeSections);
    updated.has(sectionName) ? updated.delete(sectionName) : updated.add(sectionName);
    setActiveSections(updated);
  };

  const filteredLexyconData = Object.entries(lexyconData).reduce((acc, [sectionName, entries]) => {
    const filteredEntries = search
      ? entries.filter((entry) =>
          entry.Name.toLowerCase().includes(search.toLowerCase())
        )
      : entries;
    if (filteredEntries.length > 0) {
      acc[sectionName] = filteredEntries;
    }
    return acc;
  }, {});

  const getColumnCount = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const renderLexyconSection = (sectionName, data) => {
    const isActive = activeSections.has(sectionName);

    return (
      <div key={sectionName} className="lexicon-section" style={{ width: '100%' }}>
        <h2>
          <span
            onClick={() => handleSectionToggle(sectionName)}
            className={`section-title ${isActive ? 'active' : ''}`}
            style={{ cursor: 'pointer' }}
          >
            {sectionName} {isActive ? '∧' : '∨'}
          </span>
        </h2>
        {isActive && (
          <div
            className="lexicon-content"
            style={{
              columnCount: getColumnCount(),
              columnGap: '40px',
            }}
          >
            {data.map((parola, index) => (
              <div
                className="lexicon-item"
                key={`${parola.Name}-${parola.Book}-${index}`}
                style={{ breakInside: 'avoid', margin: '20px 0' }}
              >
                <p>
                  <b>{parola.Name} ({parola.Book}):</b> {parola.Description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ margin: '30px' }}>
      <Box display="flex" alignItems="center" gap={2} mb={4} flexDirection={isMobile ? 'column' : 'row'}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={() => setSearch('')} sx={{ width: isMobile ? '100%' : 'auto' }}>
          Clear
        </Button>
      </Box>
      {Object.entries(filteredLexyconData).map(([sectionName, data]) =>
        renderLexyconSection(sectionName, data)
      )}
    </div>
  );
}
