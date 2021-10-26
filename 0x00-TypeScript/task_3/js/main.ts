/// <reference path="./crud.d.ts" />

import {RowID, RowElement } from "./interface";

const row: RowElement = {
    firstName: 'Guilaume',
    lastName: 'Salva'
}

function insertRow(r: RowElement): number {
    console.log('Insert row', r);
    return Math.floor(Math.random() * Math.floor(1000));
  }
  
function deleteRow(Id: number): void{
    console.log('Delete row id', Id);
    return;
  }
  
function updateRow(Id: number, r: RowElement): number {
    console.log(`Update row ${Id}`, row);  
    return Id;
  }
const RowID: RowID = insertRow(row);
const updRow: RowElement = {...row, age:23};
updateRow(RowID, updRow);
deleteRow(RowID);