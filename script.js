function changeTableStyle() {
    let table = document.getElementById("studentTable");
    // table.style.backgroundColor = "#ccffcc"; 
    table.style.border = "2px solid green";

    let rows = table.getElementsByTagName("tr");
    if (rows.length > 0) {
        rows[1].style.backgroundColor = "yellow"; 
        rows[3].style.backgroundColor = "yellow"; 
    }
}
