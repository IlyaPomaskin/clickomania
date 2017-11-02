import * as R from 'ramda';
import RandomSeed from 'random-seed';

const colors = ['cyan', 'red', 'orange', 'violet', 'green'];
export const generateNewField = (seed, cols = 10, rows = 16) => {
    const rand = RandomSeed.create(seed);

    return R.range(0, cols).map(() => R.range(0, rows).map(() => colors[rand(colors.length)]));
}

const cellInList = (cell, list) => list.find(R.equals(cell));

const offsets = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const findNeighbours = (field, cell, initialNeighbours = [cell]) => offsets.reduce(
    (neighbours, [offsetY, offsetX]) => {
        const [cellY, cellX, color] = cell;
        const offsetPath = [cellY - offsetY, cellX - offsetX];
        const offsetColor = R.path(offsetPath, field);
        const offsetCell = [...offsetPath, offsetColor];

        if (offsetColor && offsetColor === color && !cellInList(offsetCell, neighbours)) {
            return findNeighbours(field, offsetCell, [...neighbours, offsetCell]);
        }

        return neighbours;
    },
    initialNeighbours
);

export const removeCell = (field, cell) => {
    const ns = findNeighbours(field, cell);

    if (ns.length === 1) {
        return field;
    }

    return field
        .map((col, y) => {
            const nextCells = col.filter((color, x) => !cellInList([y, x, color], ns));
            const removedCellsCount = col.length - nextCells.length;

            if (removedCellsCount) {
                return nextCells.concat(R.repeat(null, removedCellsCount));
            }

            return col;
        })
        .filter(col => col.find(color => !!color));
};

export const hasMovements = field => !!field.find(
    (col, y) => col.find(
        (color, x) => findNeighbours(field, [y, x, color]).length > 1
    )
);

const getBlocksCount = field => R.flatten(field).filter(color => !!color).length;
export const getScore = (firstField, lastField) => getBlocksCount(firstField) - getBlocksCount(lastField);
