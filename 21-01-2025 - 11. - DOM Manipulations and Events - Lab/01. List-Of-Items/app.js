function addItem() {

    // Read related elements from DOM
    const inputElement =  document.getElementById("newItemText");
    const ulEl = document.getElementById("items");

    // Breate li element
    const liElement = document.createElement("li");
    liElement.textContent = inputElement.value;

    // Append to UL
    ulEl.append(liElement)  // 'prepend' listenin basina ekliyor - 'append' listenin sonuna ekliyor

    // Clear Input after submit
    inputElement.value = "";

    // Focus on the input
    inputElement.focus("");

}