function addItem() {
    // Read elements
    const ulElement = document.getElementById("items");
    const inputElement = document.getElementById("newItemText");

    // Create li element 
    const liElement = document.createElement("li");
    liElement.textContent = inputElement.value;

    // Create delete Button
    const deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";

    // Add event listener to the Delete Button 
    deleteButton.addEventListener("click", (event) => {
        // Delete by reference
        liElement.remove();

        //Delete by parent
        //event.currentTarget.parentElement.remove();
    });

    //Attach delete button to li element
    liElement.appendChild(deleteButton);

    // Append li to ul
    ulElement.appendChild(liElement);

    // Clean up input
    inputElement.value = "";
}