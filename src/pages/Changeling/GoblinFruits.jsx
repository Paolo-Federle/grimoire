import React from 'react';
import { goblinFruitData } from '../../Data/Changeling/GoblinFruitData';
import SimpleTable from '../../components/SimpleTable';
import { rimuoviCampi, addLink } from '../../utils';

export default function GoblinFruits() {

      const campiDaRimuovere = ['LongDescription'];
  
      return (
          <div className='grid-container'>
              <SimpleTable table={rimuoviCampi(addLink(goblinFruitData, 'Name', '/changeling/goblin_fruits/'), campiDaRimuovere)}
                  title={'Goblin Fruits'}
                  activeRowLink={true} />
          </div>
      );
  }