import React from 'react';
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

export default function Lexycon() {
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

  const [activeSections, setActiveSections] = React.useState(
    new Set(Object.keys(lexyconData)) // Initially show all sections
  );

  const handleSectionToggle = (sectionName) => {
    const updatedSections = new Set(activeSections);
    if (updatedSections.has(sectionName)) {
      updatedSections.delete(sectionName); 
    } else {
      updatedSections.add(sectionName); 
    }
    setActiveSections(updatedSections);
  };

  const renderLexyconSection = (sectionName, data) => {
    const isActive = activeSections.has(sectionName);

    return (
      <div key={sectionName} className={`lexicon-section ${isActive ? '' : 'hidden'}`} style={{ width: '100%' }}>
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
          <div className="lexicon-content" style={{ columnCount: 3, columnGap: '80px' }}>
            {data.map((parola) => (
              <div className="lexicon-item" key={parola.Name} style={{ breakInside: 'avoid', margin:'30px 0px' }}>
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
      {Object.entries(lexyconData).map(([sectionName, data]) => (
        renderLexyconSection(sectionName, data)
      ))}
    </div>
  );
}
