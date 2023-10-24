import tableData from "/dataset/dataset.js";

const headers = tableData.headers
const dataset = tableData.dataset

const fillTable = () => {
    // create a table contents
    let table = document.getElementById('data-table')
    let thead = table.querySelector('thead')
    let tbody = table.querySelector('tbody')

    // init table headers
    let theadTr = thead.insertAdjacentElement('beforeend', document.createElement('tr'))
    for (const header of headers) {
        theadTr.insertAdjacentHTML('beforeend', `<th>${header}</th>`)
    }

    // init table body
    for (const [index, item] of dataset.entries()) {
        let tr = document.createElement('tr')
        if (index % 2 === 1)
            tr.style.backgroundColor = 'var(--gray)'
        for (const header of headers) {
            tr.insertAdjacentHTML('beforeend',  `<td>${item[header]}</td>`)
        }
        tbody.append(tr)
    }
}

const toggleColumn = () => {

}

const fillColumnToggle = () => {
    let toggleList = document.getElementsByClassName('data__column-toggle')
    let headerList = document.createElement('ul')
    // fill the headerList
    const optionalHeaders = headers.slice(2)
    for (const header of optionalHeaders) {
        let toggleButton = document.createElement('li')
        toggleButton.append(header)
        toggleButton.style.margin = '0 5px'
        toggleButton.onclick = toggleColumn
        headerList.append(toggleButton)
        toggleButton.after('|')
    }
    // init the columnn toggles
    for (let toggle of toggleList) {
        toggle.prepend('Show/hide: ')
        toggle.append(headerList.cloneNode(true))
    }
}


// main
fillTable()
fillColumnToggle()

