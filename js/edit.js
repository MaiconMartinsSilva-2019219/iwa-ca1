function onEdit(td) {
    //This function I will be able to edit my elements, and I`m using the "innerHTML"
    // to return the current source of the element including any changes that has been made
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nationality").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dream").value = selectedRow.cells[2].innerHTML;
    document.getElementById("NoCountry").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    //Here I`m updating them
    selectedRow.cells[0].innerHTML = formData.Nationality;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.dream;
    selectedRow.cells[3].innerHTML = formData.NoCountry;
}