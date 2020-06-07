import toPromise, { arrayFromSeed } from './fetchUtils';
export default () => toPromise({
    table1: arrayFromSeed({
        date: ['2019'],
        type: ['已处理', '未处理', '处理中', '总量'],
        appeal: ['1', '2', '3', '4'],
        damage: ['4', '3', '2', '1'],
        petition: ['5', '6', '7', '8'],
        judicial: ['8', '7', '6', '5'],
    }, 4).map((row, index) => ({
        ...row,
        key: index + 1,
    })),
    table2: arrayFromSeed({
        date: ['2019'],
        type: ['已处理', '未处理', '处理中', '总量'],
        appeal: ['1', '2', '3', '4'],
        damage: ['4', '3', '2', '1'],
        petition: ['5', '6', '7', '8'],
        judicial: ['8', '7', '6', '5'],
    }, 4).map((row, index) => ({
        ...row,
        key: index + 1,
    })),
    table3: arrayFromSeed({
        date: ['2019'],
        type: ['已处理', '未处理', '处理中', '总量'],
        appeal: ['1', '2', '3', '4'],
        damage: ['4', '3', '2', '1'],
        petition: ['5', '6', '7', '8'],
        judicial: ['8', '7', '6', '5'],
    }, 4).map((row, index) => ({
        ...row,
        key: index + 1,
    })),
    table4: arrayFromSeed({
        date: ['2019'],
        type: ['已处理', '未处理', '处理中', '总量'],
        appeal: ['1', '2', '3', '4'],
        damage: ['4', '3', '2', '1'],
        petition: ['5', '6', '7', '8'],
        judicial: ['8', '7', '6', '5'],
    }, 4).map((row, index) => ({
        ...row,
        key: index + 1,
    })),
});