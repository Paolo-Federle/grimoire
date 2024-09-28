import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    bluntWeaponData, kniveWeaponData, swordWeaponData, axeWeaponData, polearmWeaponData,
    chainWeaponData, improvisedWeaponData, miscellaneousWeaponData, foundRiggedWeaponsData,
    revolverWeaponData,
    autoloadersWeaponData, rifleData, submachineGunData, assaultRifleData, shotgunsData,
    machineGunData, archaicFirearmData, miscellaneousRangedData, thrownWeaponData, mountedWeaponsData, arrowsData,
    bulletsData, shotgunSpecificsData, standardExplosivesData, explosiveData, grenadesData, grenadeLauncherData,
    grenadeAmmunitionData, artilleryShellData, rocketMissileData, militaryVehicleArmamentData, landMinesData, toxinsData
} from '../../Data/Mortal/WeaponData';

export default function Weapon() {

    function rimuoviCampi(lista, campiDaRimuovere) {
        return lista.map(obj => {
            // rimuove campi che non servono in questa fase
            const nuovoOggetto = { ...obj };
            campiDaRimuovere.forEach(campo => {
                delete nuovoOggetto[campo];
            });
            return nuovoOggetto;
        });
    }

    const weaponData = [
        { data: bluntWeaponData, title: 'Blunt weapon' },
        { data: kniveWeaponData, title: 'Knive weapon' },
        { data: swordWeaponData, title: 'Sword weapon' },
        { data: axeWeaponData, title: 'Axe weapon' },
        { data: polearmWeaponData, title: 'Polearm weapon' },
        { data: chainWeaponData, title: 'Chain weapon' },
        { data: improvisedWeaponData, title: 'Improvised melee weapon' },
        { data: miscellaneousWeaponData, title: 'Miscellaneous melee weapon' },
        { data: foundRiggedWeaponsData, title: 'Found and rigged weapons' },
        { data: revolverWeaponData, title: 'Revolver' },
        { data: autoloadersWeaponData, title: 'Autoloaders' },
        { data: rifleData, title: 'Rifles' },
        { data: submachineGunData, title: 'Submachine Guns' },
        { data: assaultRifleData, title: 'Assault Rifles' },
        { data: shotgunsData, title: 'Shotguns' },
        { data: machineGunData, title: 'Machine Guns' },
        { data: archaicFirearmData, title: 'Archaic firearms' },
        { data: miscellaneousRangedData, title: 'Miscellaneous Ranged' },
        { data: thrownWeaponData, title: 'Thrown Weapons' },
        { data: mountedWeaponsData, title: 'Mounted' },
        { data: [...arrowsData, ...bulletsData], title: 'Special ammunition' },
        { data: shotgunSpecificsData, title: 'Shotgun specifics' },
        { data: standardExplosivesData, title: 'Standard Explosive' },
        { data: explosiveData, title: 'Explosive' },
        { data: grenadesData, title: 'Grenades' },
        { data: grenadeLauncherData, title: 'Grenade Launchers' },
        { data: grenadeAmmunitionData, title: 'Grenade Launchers Ammunition' },
        { data: artilleryShellData, title: 'Artillery Shell' },
        { data: rocketMissileData, title: 'Rocket & Missile Launchers' },
        { data: militaryVehicleArmamentData, title: 'Military Vehicle Arment' },
        { data: landMinesData, title: 'Land Mines' },
        { data: toxinsData, title: 'Toxins, Biological and Chemical Weapons' }
    ];

    const weaponDataEdit = weaponData.map(weapon => ({
        data: rimuoviCampi(weapon.data, ['Type']),
        title: weapon.title
    }));

    return (
        <div className='grid-container longTextContainer'>
            {weaponDataEdit.map((weapon, index) => (
                <SimpleTable key={index} table={weapon.data} title={weapon.title} activeRowLink={false} />
            ))}

            <h3>A note on cost</h3>
            <div>The Costs of the items in the Armory book have been calculated roughly
                according to the following principle: an item has a given Cost if a character with the
                Resources Merit at that level could purchase the item with no more than half his monthly
                disposable income. To attach approximate numbers to this, Cost • is anything up to $250,
                Cost •• is up to $500, Cost ••• is up to $1,000, Cost •••• is up to $5,000 and Cost •••••
                is up to $25,000 and beyond. The price tags of vehicles have been divided by 60 to account
                for five-year monthly payment plans. This system can help you determine what Cost to assign
                a real-world item when giving it traits in the Storytelling System, as well as a rough idea
                of just how many items of Cost •• a character with Resources 3 can afford in a single month,
                should you wish to deal with item acquisition on such an in-depth level.</div>
            <h3>A note on Size</h3>
            <div>The weapon’s Size, per the World of Darkness Rulebook (see p. 135). As Size categories are fairly
                broad, an additional notation after the Size of each item with Size 1 or 2 indicates the amount of
                clothing under which a normal-sized character can conceal the gun: P (Palm/Pocket), S (Shirt), J
                (Jacket), L (Long coat) or N (Not concealable). See “Weapon Concealment” on p. 198 for more information
                about these categories.</div>
        </div>
    );
}
