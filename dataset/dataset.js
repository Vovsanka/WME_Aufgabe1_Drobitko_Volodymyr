import data from './worldData.js';
import headerNames from './headerNames.js'

// defines which table columns (json) are to pick
const rawHeaders = [
    "id",
    "name",
    "birth rate per 1000",
    "cell phones per 100",
    "children per woman",
    "life expectancy",
    "internet user per 100"
]

const selectColumns = (rawHeaders, dataset) => {
    // filters the table columns and returns the new table with only the columns specified in rawHeaders
    let finalDataset = []
    for (const item of dataset) {
        let finalItem = {}
        for (const header of rawHeaders) {
            finalItem[headerNames[header]] = item[header]
        }
        finalDataset.push(finalItem)
    }
    return finalDataset
}

const headers = rawHeaders.map((header) => headerNames[header])
const dataset = selectColumns(rawHeaders, data)

export default { headers, dataset };