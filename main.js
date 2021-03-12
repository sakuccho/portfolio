'use strict';

{
  function createColumn(col) {

    const source = [];
  
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    
    const column = [];
  
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    
    return column;
  }

  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  };

  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      tr.classList.add('d');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        td.classList.add('pop')
        td.addEventListener('click', () => {
          td.classList.toggle('color')
        });
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const Final = createColumns();
  renderBingo(Final);
}
