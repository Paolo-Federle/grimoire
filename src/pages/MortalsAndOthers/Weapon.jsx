import React from 'react';
import SimpleTable from '../../components/SimpleTable'
import {
    bluntWeaponData, kniveWeaponData, swordWeaponData, axeWeaponData, polearmWeaponData,
    chainWeaponData, improvisedWeaponData, miscellaneousWeaponData, revolverWeaponData,
    autoloadersWeaponData, rifleData, submachineGunData, assaultRifleData, shotgunsData,
    machineGunData, miscellaneousRangedData, thrownWeaponData, mountedWeaponsData, arrowsData,
    bulletsData, shotgunSpecificsData, explosivesData, grenadesData, toxinsData,
    meleeWeaponData, rangedWeaponData
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

    let shotgunSpecificsDataEdit = rimuoviCampi(shotgunSpecificsData, ['Type']);
    let explosivesDataEdit = rimuoviCampi(explosivesData, ['Type']);
    let grenadesDataEdit = rimuoviCampi(grenadesData, ['Type']);

    return (
        <div className='grid-container'>
            <SimpleTable table={meleeWeaponData} title={'Melee weapon'} activeRowLink={false} />
            <SimpleTable table={rangedWeaponData} title={'Ranged weapon'} activeRowLink={false} />
            <SimpleTable table={[...arrowsData, ...bulletsData]} title={'Special ammunition'} activeRowLink={false} />
            <SimpleTable table={shotgunSpecificsDataEdit} title={'Shotgun specifics'} activeRowLink={false} />
            <SimpleTable table={explosivesDataEdit} title={'Explosive'} activeRowLink={false} />
            <SimpleTable table={grenadesDataEdit} title={'Grenades'} activeRowLink={false} />
            <SimpleTable table={toxinsData} title={'Toxins'} activeRowLink={false} />
        </div>
    );
}