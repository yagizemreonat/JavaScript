function solve() {

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  
  const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    const data = JSON.parse(input.value);

    for (let item of data) {

      const row = createRowData(
        'tr', {},
        //img
        createTableCell(createRowData('img', {src: item.img}));
        //name

        //price

        //decorationFactor

        //markCheckBox
        
      );
      items.push({
        element: row, 
        item
      });
      table.appendChild(row);
    }
  }

  function createRowData(type, props, ...content){
    const element = document.createElement(type);

    for(let prop in props){
      element[prop] = props[prop];
    }

    for (let entry of content){
      if (typeof entry == 'string' || typeof entry == 'number') {
        entry = document.createTextNode(entry);

      }
    }

    element.appendChild(entry);
  }

  function createTableCell(...content){
    return createRowData('td', {}, ...content);
  }

}