async function loadData() {
    let response = await axios.get("birth_rate.csv");
    // response.data -> content of the csv file
    // csv() -> function is a global function from csvtojson
    // the reason we await with the csv() is because the designer of
    // csvtojson made it an async function
    let json = await csv().fromString(response.data);
    return json;
}

function transformData(rawData) {
    // we assume the parameter for rawData is JSON representing rows
    // from our CSV
    let shortlisted = []; // accumulates all the objects that matches our critera
    for (let record of rawData) {
        // check if the record fits our critera (which is ethnic_group == "others")
        if (record.ethnic_group == "Others") {
            shortlisted.push(record); // if the record meets our critera, accumulate it into the shortlisted array
        }
    }
    let series = [];
    for (let record of shortlisted) {
        series.push({
            'x': parseInt(record.year),
            'y': parseInt(record.live_births)
        });
    }
    return series;
}