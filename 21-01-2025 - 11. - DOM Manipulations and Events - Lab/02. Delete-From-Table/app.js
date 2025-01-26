function deleteByEmail() {

    // Read elements
    const inputElement = document.querySelector("input[name=email]");
    const resultElement = document.getElementById("result");

    // Select all rows    
    const trElements = document.querySelectorAll("#customers tbody tr");
    const resultRow = Array.from(trElements).find((tr) => {
        const emailRowValue = tr.getElementsByTagName("td")[1].textContent;
        return emailRowValue === inputElement.value;
    });

    //Remove row and append result
    if (resultRow){
        resultRow.remove();
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";
    }

    // Clean up element
    inputElement.value = "";
}