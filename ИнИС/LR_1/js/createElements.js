import { createElement } from './utils.js';

export function createMoviesTable(movies) {
    const table = createElement({ elementName: 'table', className: 'movies-table' });
    const thead = createElement({ elementName: 'thead' });
    const tbody = createElement({ elementName: 'tbody' });

    const headerRow = createElement({ elementName: 'tr' });
    const headerMovie = createElement({ elementName: 'th', inner: 'Фильм' });
    const headerRating = createElement({ elementName: 'th', inner: 'Оценка' });

    headerRow.appendChild(headerMovie);
    headerRow.appendChild(headerRating);
    thead.appendChild(headerRow);

    for (let movie in movies) {
        const row = createElement({ elementName: 'tr' });
        const cellMovie = createElement({ elementName: 'td', inner: movie });
        const cellRating = createElement({ elementName: 'td', inner: movies[movie] });

        row.appendChild(cellMovie);
        row.appendChild(cellRating);
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}