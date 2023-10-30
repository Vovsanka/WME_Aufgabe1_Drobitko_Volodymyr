import tableData from "/dataset/dataset.js";

const headers = tableData.headers
const dataset = tableData.dataset

const initTable = () => {
    let table = document.getElementById('data-table')
    let thead = table.querySelector('thead')
    let tbody = table.querySelector('tbody')

    // init table headers
    let theadTr = thead.insertAdjacentElement('beforeend', document.createElement('tr'))
    for (const header of headers) {
        theadTr.insertAdjacentHTML('beforeend', `<th header="${header}">${header}</th>`)
    }

    // init contents
    fillTableContents()
}

const fillTableContents = () => {
    let table = document.getElementById('data-table')
    let thead = table.querySelector('thead')
    let tbody = table.querySelector('tbody')

    // find hidden headers
    const headerHidden = {}
    for (let th of thead.children) {
        headerHidden[th.header] = th.hidden
    }

    // remove current contents
    tbody.innerHTML = ""
 
    // init table body
    for (const [index, item] of dataset.entries()) {
        let tr = document.createElement('tr')
        if (index % 2 === 1)
            tr.style.backgroundColor = 'var(--gray)'
        for (const header of headers) {
            const hidden = headerHidden[header]
            tr.insertAdjacentHTML('beforeend',  `<td header="${header} hidden="${hidden}">${item[header]}</td>`)
        }
        tbody.append(tr)
    }
}

const toggleColumn = (event) => {
    const toggleHeader = event.target.header

    let table = document.getElementById('data-table')
    
    // find all tds to toggle
    let toggleColumnItems = table.querySelectorAll(`[header="${toggleHeader}"]`)

    // toggle the column
    for (let elem of toggleColumnItems) {
        elem.hidden = !elem.hidden
    }

}

const fillColumnToggles = () => {
    let toggleList = document.getElementsByClassName('data__column-toggle')
    const optionalHeaders = headers.slice(2)
    
    // init the columnn toggles
    for (let toggle of toggleList) {
        toggle.prepend('Show/hide: ')
        // init the list of toggle elements
        let headerList = document.createElement('ul')
        for (const header of optionalHeaders) {
            let toggleButton = document.createElement('li')
            toggleButton.append(header)
            toggleButton.style.margin = '0 5px'
            // toggleButton.header = header
            toggleButton.header = header
            toggleButton.onclick = toggleColumn
            headerList.append(toggleButton)
            toggleButton.insertAdjacentHTML('afterend', "<li>|</li>")
        }
        toggle.append(headerList)
    }

    
}


// main
initTable()
fillColumnToggles()

