import data from './world_data_v3.json' assert { type: 'json' };
import headerNames from './headerNames.js'

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