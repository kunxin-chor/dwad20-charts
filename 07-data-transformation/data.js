async function loadData(url) {
    let response = await axios.get(url);
    return response.data;
}

function transformData(rawData) {
    // 1. extract out the date and year
    // from each data point
    // FOR LOOP
    // let earnings = [];
    // for (let record of rawData) {
    //     earnings.push({
    //         "date": new Date(record.completed_at),
    //         "amount": record.payment.amount
    //     })
    // }

    // USING MAPPING
    let earnings = rawData.map(function(record){
        return {
            "date": new Date(record.completed_at),
            "amount": record.payment.amount
        }
    })

    // USING FILTERING
    // We only want the records in year 2020
    // FOR LOOP
    // let filtered = [];
    // for(let e of earnings) {
    //     if(e.date.getFullYear() == 2020) {
    //         filtered.push(e);
    //     }
    // }

    let filtered = earnings.filter(function(record){
        if (record.date.getFullYear() == 2020) {
            return true; // keep the record in fitlered
        } else {
            return false; // reject the record
        }
    })

    // months is an object, not an array
    let months = {
        '0':[],
        '1':[],
        '2':[],
        '3':[],
        '4':[],
        '5':[],
        '6':[],
        '7':[],
        '8':[],
        '9':[],
        '10':[],
        '11':[],

    }

    for (let record of filtered) {
        let month = record.date.getMonth();
        months[month].push(record);
    }
    
   // tabulate the total per month
   totalByMonth = [];
   // months in an object, so we have to use in
   // and the 'month' variable will be the key
   for (let monthNumber in months) {
     let allRecords = months[monthNumber];
     
     // calculate the total for month number
     let total = 0; // accumulator
     for(let record of allRecords) {
        total += record.amount
     }

     totalByMonth.push({
        x: parseInt(monthNumber)+1,
        y: total
     })
   }

   return totalByMonth;

}