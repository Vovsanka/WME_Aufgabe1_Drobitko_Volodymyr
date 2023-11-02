import tableData from "/dataset/dataset.js";

const headers = tableData.headers
const dataset = tableData.dataset

const sortByColumn = (header, ascending = true) => {
    const k = ascending ? 1 : -1
    dataset.sort((row1, row2) => {
        if (row1[header] < row2[header]) {
            return -1 * k;
        } else if (row1[header] > row2[header]) {
            return 1 * k;
        }
        return 0;
    })
    fillTableContents()
}

const sortByColumnAscending = (event) => {
    const header = event.target.parentElement.header
    sortByColumn(header, true)
}

const sortByColumnDescending = (event) => {
    const header = event.target.parentElement.header
    sortByColumn(header, false)
}

const initTable = () => {
    let table = document.getElementById('data-table')
    let thead = table.querySelector('thead')
    let tbody = table.querySelector('tbody')

    // init table headers
    let theadTr = thead.insertAdjacentElement('beforeend', document.createElement('tr'))
    for (const header of headers) {
        let th = document.createElement('th')
        th.header = header
        th.insertAdjacentText('afterbegin', header)
        let upImg = document.createElement('img')
        upImg.src = "/img/up.svg"
        upImg.onclick = sortByColumnAscending
        let downImg = document.createElement('img')
        downImg.src = "/img/down.svg"
        downImg.onclick = sortByColumnDescending
        upImg.className = downImg.className = "sort-icon"
        th.append(upImg)
        th.append(downImg)
        theadTr.append(th)
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

