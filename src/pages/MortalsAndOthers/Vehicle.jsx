import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {
    passengerCarData, sportCarData, lightTruckData, vansData, suvData,
    motorcycleData, personalVehicleData, commercialVehicleData, constructionVehicleData,
    armoredVehicleData, smallBoatsData, motorboatsData, sailboatsData, lightAircraftData,
    commercialAircraftData, combatAircraftData, helicopterData
} from '../../Data/Mortal/VehicleData';

export default function Vehicle() {

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

    const vehicleData = [
        { data: passengerCarData, title: 'Passenger Cars' },
        { data: sportCarData, title: 'Sports Cars' },
        { data: lightTruckData, title: 'Light Trucks' },
        { data: vansData, title: 'Vans' },
        { data: suvData, title: 'SUVs' },
        { data: motorcycleData, title: 'Motorcycles' },
        { data: personalVehicleData, title: 'Personal Vehicles' },
        { data: commercialVehicleData, title: 'Commercial Vehicles' },
        { data: constructionVehicleData, title: 'Construction Vehicles' },
        { data: armoredVehicleData, title: 'Armored Vehicles' },
        { data: smallBoatsData, title: 'Small Boats' },
        { data: motorboatsData, title: 'Motorboats' },
        { data: sailboatsData, title: 'Sailboats' },
        { data: lightAircraftData, title: 'Light Aircraft' },
        { data: commercialAircraftData, title: 'Commercial Aircraft' },
        { data: combatAircraftData, title: 'Combat Airplanes' },
        { data: helicopterData, title: 'Helicopters' }
    ];

    const vehicleDataEdit = vehicleData.map(vehicle => ({
        data: rimuoviCampi(vehicle.data, ['Type']),
        title: vehicle.title
    }));

    return (
        <div className='grid-container'>
            {vehicleDataEdit.map((vehicle, index) => (
                <SimpleTable key={index} table={vehicle.data} title={vehicle.title} activeRowLink={false} />
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
                should you wish to deal with item acquisition on such an in-depth level.
            </div>
        </div >
    );
}
