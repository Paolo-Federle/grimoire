import { PATHS } from '../../pages/path';
import { slugify } from '../../utils';

// Keep ministry membership separate from the historical Order choices used by the sheet.
export const MinistryData = [
    {
        Name: 'Hegemonic Ministry',
        Nickname: 'Hegemons',
        Exarch: 'The Unity',
        Creed: 'The State is the Soul',
        Prelacy: 'Obligation',
        'Rote Skills': 'Politics, Persuasion, Empathy',
        Description: 'Servants of the Unity who manipulate governments, bureaucracy and political divisions to keep humanity Asleep.',
        Book: 'SotT 56-59',
    },
    {
        Name: 'Ministry of Panopticon',
        Nickname: 'Watchers',
        Exarch: 'The Eye',
        Creed: 'Vision is Power',
        Prelacy: 'Vision',
        'Rote Skills': 'Investigation, Stealth, Subterfuge',
        Description: 'Servants of the Eye who use surveillance, secrecy and the fear of being watched to suppress Awakening.',
        Book: 'SotT 60-63',
    },
    {
        Name: 'Ministry of Paternoster',
        Nickname: 'Hierodules',
        Exarch: 'The Father',
        Creed: 'Faith is an Unbreakable Chain',
        Prelacy: 'Doctrine',
        'Rote Skills': 'Academics, Occult, Expression',
        Description: 'Priests of the Father who manufacture and manipulate religions while keeping Supernal knowledge from Sleepers.',
        Book: 'SotT 64-67',
    },
    {
        Name: 'Praetorian Ministry',
        Nickname: 'Praetorians',
        Exarch: 'The General',
        Creed: 'We’re Every Enemy, and Every Commander',
        Prelacy: 'Fury',
        'Rote Skills': 'Athletics, Larceny, Intimidation',
        Description: 'Soldiers of the General who sustain controlled violence, fear and the machinery of perpetual war.',
        Book: 'SotT 68-71',
    },
].map((ministry) => ({
    ...ministry,
    Ministry: ministry.Name,
    link: `${PATHS.MAGE.MINISTRIES}/${slugify(ministry.Name)}`,
}));
