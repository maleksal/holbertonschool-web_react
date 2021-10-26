interface Student {

    firstName: string,
    lastName: string,
    age: number,
    location: string,

};

const student1: Student = {
    firstName: "Jhon",
    lastName: "Doe",
    age: 20,
    location:"There"
}
const student2: Student = {
    firstName: "Edward",
    lastName: "Snowden",
    age: 20,
    location:"Russia"
}

const studentsList: Array<Student> = [student1, student2];





function createTable(data: Array<Student>): void {

    const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
    const table: HTMLTableElement = document.createElement("table");

    const tablehead: HTMLTableSectionElement = document.createElement("thead");
    const tablebody: HTMLTableSectionElement = document.createElement("tbody");
    
    const tableheadrow: HTMLTableRowElement = tablehead.insertRow(0);
    const cell1: HTMLTableCellElement = tableheadrow.insertCell(0);
    const cell2: HTMLTableCellElement = tableheadrow.insertCell(1);
    
    cell1.innerHTML = "firstName";
    cell2.innerHTML = "location";
    
    table.append(tablehead);

    data.forEach((student) => {
        const row: HTMLTableRowElement = tablebody.insertRow(0);
        const cell1: HTMLTableCellElement = row.insertCell(0);
        const cell2: HTMLTableCellElement = row.insertCell(1);
      
        cell1.innerHTML = student.firstName;
        cell2.innerHTML = student.location;
      });

    table.append(tablebody);
    body.append(table);
}