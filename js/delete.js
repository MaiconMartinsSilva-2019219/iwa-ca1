function onDelete(td) {
    //This function I`m deleting the elements in the rows, also a confirmation message will be shown to confirm that
    //the row will be deleted. 
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("BucketList").deleteRow(row.rowIndex);
        resetForm();
    }
}
//Here I`m doing some validations for security reasons, in case you try to submit without telling me 
//your Nationality you wont be able to submit, the field 'Natioanality'is mandatory
//if not filled , you won`t be able to proceed

function validate() {
    isValid = true;
    if (document.getElementById("Nationality").value == "") {
        isValid = false;
        document.getElementById("NationalityNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NationalityNameValidationError").classList.contains("hide"))
            document.getElementById("NationalityNameValidationError").classList.add("hide");
    }
    return isValid;
}