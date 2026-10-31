import { PATHS } from '../pages/path';

// Names and descriptions follow the local lexicon, sheet model and Mummy datasets.
// Add a detail link when a dedicated rules page is available.
export const EnergyPoolsData = [
    {
        Name: 'Vitae',
        'Specific to': 'Vampires',
        Description: 'The blood that sustains the Kindred and fuels their Disciplines and other vampiric abilities.',
        Book: 'VtR',
    },
    {
        Name: 'Essence',
        'Specific to': 'Werewolves and spirits',
        Description: 'The energy of the spirit world, which composes spirits and empowers the Uratha.',
        Book: 'WTF',
    },
    {
        Name: 'Mana',
        'Specific to': 'Mages',
        Description: 'Supernal energy stored in a mage’s Pattern and spent on magic, Pattern restoration and other arcane feats.',
        Book: 'M:tA 77-79',
        link: PATHS.MAGE.MANA,
    },
    {
        Name: 'Pyros',
        'Specific to': 'Prometheans',
        Description: 'The Divine Fire generated from Azoth and expended to power Transmutations.',
        Book: 'PTC',
    },
    {
        Name: 'Glamour',
        'Specific to': 'Changelings',
        Description: 'Raw supernatural energy tied to strong human emotions, feeding the fae and fueling their powers.',
        Book: 'CTL',
    },
    {
        Name: 'Plasm',
        'Specific to': 'Sin-Eaters',
        Description: 'The immaterial substance of ghosts, used as fuel for a Sin-Eater’s supernatural powers.',
        Book: 'GTS',
    },
    {
        Name: 'Pillars',
        'Specific to': 'Mummies',
        Description: 'Five pools tied to the Arisen’s soul: Ab, Ba, Ka, Ren and Sheut. Pillar points fuel their powers; Sekhem determines how many can be spent per turn.',
        Book: 'MTC',
    },
];
