import data from './world_data_v3.json' assert { type: 'json' };

const selectColumns = function (headers, dataset) {
    let finalDataset = []
    for (const item of dataset) {
        let finalItem = {}
        for (const header of headers) {
            finalItem[header] = item[header]
        }
        finalDataset.push(finalItem)
    }
    return finalDataset
}

const headers = data.shift()
let dataset = selectColumns(headers, data)

// remove extra columns from the dataset


export default { headers, dataset };