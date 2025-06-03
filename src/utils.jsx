import BaseTable from "./components/BaseTable";

export function sortByKey(list, key) {
    return list.sort((a, b) => {
        const valueA = a[key].toLowerCase();
        const valueB = b[key].toLowerCase();

        if (valueA < valueB) {
            return -1;
        } else if (valueA > valueB) {
            return 1;
        } else {
            return 0;
        }
    });
}

// Filtro per array di oggetti che elimina interi oggetti indesiderati (ad esempio per creare link a pagine)
export const filtreArrayOfObjects = (array, keyToFilter, valueToLeaveOut) =>
    array.filter(object => !valueToLeaveOut.includes(object[keyToFilter]))

// Add link to list of objects
// data = lista di dati da passare, keyname nome della chiave da usare per parte dinamica link (titolo, nome), baselink base del link fisso
export function addLink(data, keyName, baseLink) {
    return data.map(item => {
        const keyValue = item[keyName];
        return {
            ...item,
            link: `${baseLink}${slugify(keyValue)}`,
        };
    });
}

// rimuove un singolo campo da una lista di oggetti
export function rimuoviCampi(lista, campiDaRimuovere) {
    return lista.map(obj => {
        const nuovoOggetto = { ...obj };
        campiDaRimuovere.forEach(campo => {
            delete nuovoOggetto[campo];
        });
        return nuovoOggetto;
    });
}

export function slugify(text) {
    return text
        .toLowerCase()                       // convert to lowercase
        .replace(/[^\w\s]/g, '')             // remove punctuation (non-word, non-space chars)
        .replace(/\s+/g, '_');               // replace spaces with underscores
}