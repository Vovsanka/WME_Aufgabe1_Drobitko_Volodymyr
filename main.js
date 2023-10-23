import tableData from "/dataset/dataset.js";

const headers = tableData.headers
const dataset = tableData.dataset

// create a table contents
let table = document.getElementById('data-table')
let thead = table.querySelector('thead')
let tbody = table.querySelector('tbody')

// init table headers
let theadTr = thead.insertAdjacentElement('beforeend', document.createElement('tr'))
console.log(theadTr)
for (const header of headers) {
    theadTr.insertAdjacentHTML('beforeend', `<th>${header}</th>`)
}

// init table body
for (const item of dataset) {
    let tr = document.createElement('tr')
    for (const header of headers) {
        tr.insertAdjacentHTML('beforeend',  `<td>${item[header]}</td>`)
    }
    tbody.insertAdjacentElement('beforeend', tr)
}

console.log(table)