import BaseTable from "./components/BaseTable";
import { allBooks } from "./Data/BookData";

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

export function removeFieldsAndAddLink({ data, fieldsToRemove, urlPrefix, keyToUseForLinks }) {

    const cleaned = rimuoviCampi(data, fieldsToRemove);

    const flattened = cleaned.map(obj => {
        const newObj = { ...obj };
        Object.keys(newObj).forEach(key => {
            if (Array.isArray(newObj[key]) && newObj[key].length > 1) {
                newObj[key] = newObj[key].join(', ');
            }
        });
        return newObj;
    });

    return addLink(flattened, keyToUseForLinks, urlPrefix);
}


export function getFlipHtmlPageUrlsFromSource(source, allBooks) {
    if (typeof source !== 'string') return [];
  
    return source.split(',').map(part => {
      const trimmed = part.trim();
      const match = trimmed.match(/^([^\s]+)\s+(\d+)$/);
      if (!match) return { text: trimmed, url: null };
  
      const codeName = match[1];
      const sourcePage = parseInt(match[2], 10);
      if (isNaN(sourcePage)) return { text: trimmed, url: null };
  
      const book = allBooks.find(b => b['Code Name'] === codeName);
      if (!book || !book.LinkTo || book.PagesOffset === '') return { text: trimmed, url: null };
  
      const offset = parseInt(book.PagesOffset, 10);
      if (isNaN(offset)) return { text: trimmed, url: null };
  
      const pdfPage = sourcePage + offset;
      const spreadPage = pdfPage % 2 === 0 ? pdfPage : pdfPage - 1;
  
      return { text: trimmed, url: `${book.LinkTo}${spreadPage}` };
    });
  }
  

// search and substitute to delete "p" in book valor
// search: ("Book": "[^"]*?)\sp(?=\d+)
// substitute $1 