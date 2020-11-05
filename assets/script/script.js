// EXS 5th November 2020 - edwyn.saunders@outlook.com

console.log ("Script loaded");

function onFormSubmit() {
    console.log ("Submit Clicked")
    var formData = readFormDate();
    console.log (`formData: ${formData}`);



}


function readFormDate() {
    var formData={};
    formData["empfullName"] = document.getElementById("empFullName").value;
    formData["empNumber"] = document.getElementById("empNumber").value;
    formData["empSalary"] = document.getElementById("empSalary").value;
    formData["empLocation"] = document.getElementById("empLocation").value;
    return formData;
}

// CRUD Operations

function insertNewRecords(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empfullName;
    cell2 = newRow.insertCell(0);
    cell2.innerHTML = data.empNumber;
    cell3 = newRow.insertCell(0);
    cell3.innerHTML = data.empSalary;
    cell4 = newRow.insertCell(0);
    cell4.innerHTML = data.empLocation;

}