function Delete(td) {
    //This function I`m deleting the elements in the rows,
    //also a confirmation message will be shown to confirm that
    //the row will be deleted. 
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("BucketList").deleteRow(row.rowIndex);
        resetForm();
    }
}
//Here I`m doing some validations for security reasons,
//incase you try to submit without telling the program
//your Name you wont be able to submit, the field 'Name'is mandatory
//if not filled , you won`t be able to proceed

function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}