/// <reference path="./crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Mol',
  lastName: '7alawiyat',
};

const newRowId: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);