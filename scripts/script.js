let rowId = 0;

function addToTable()
{
    let name = document.getElementById("inputName").value;
    let date = document.getElementById("inputDate").value;
    let amount = document.getElementById("inputAmount").value;

    let table = document.getElementById("tabla");
    let row = table.insertRow();

    let x0 = row.insertCell(0);
    let x1 = row.insertCell(1);
    let x2 = row.insertCell(2);
    let x3 = row.insertCell(3);

    x0.innerHTML = name;
    x1.innerHTML = date;
    x2.innerHTML = amount;
    x3.innerHTML = '<input type="checkbox" class="delete" id="delete' + getRowId() + '">';
    document.getElementById("inputName").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputAmount").value = "";
}

function getRowId()
{
    rowId += 1;
    return rowId;
}

function deleteRows(tableId)
{
    var table = document.getElementById(tableId);
    var rowCount = table.rows.length;
    var selectedRows = getCheckedBoxes();

    selectedRows.forEach(function(currentValue){
        deleteRowByCheckboxId(currentValue.id);
    });
}


function getCheckedBoxes() {
    var inputs = document.getElementsByTagName("input");
    var checkboxesChecked = [];
  
    // loop over them all
    for (var i=0; i < inputs.length; i++) {
       // And stick the checked ones onto an array...
       if (inputs[i].checked) {
          checkboxesChecked.push(inputs[i]);
       }
    }
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function deleteRowByCheckboxId(CheckboxId) {
    var checkbox = document.getElementById(CheckboxId);
    var row = checkbox.parentNode.parentNode;                //box, cell, row, table
    var table = row.parentNode;

    while ( table && table.tagName != 'TABLE' )
        table = table.parentNode;
    if (!table) return;
    table.deleteRow(row.rowIndex);
}