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

// Filtro per array di oggetti che elimina oggetti indesiderati (ad esempio per creare link a pagine)
export const filtreArrayOfObjects = (array, keyToFilter, valueToLeaveOut) =>
    array.filter(object => !valueToLeaveOut.includes(object[keyToFilter]))

// Add link to list of objects
// data = lista di dati da passare, keyname nome della chiave da usare per parte dinamica link (titolo, nome), baselink base del link fisso
export function addLink(data, keyName, baseLink) {
    return data.map(item => {
        const keyValue = item[keyName];
        return {
            ...item,
            link: `${baseLink}${keyValue.replace(/ /g, '_')}`,
        };
    });
}