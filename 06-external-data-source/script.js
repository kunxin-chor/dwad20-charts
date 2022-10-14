// create an empty chart
// i.e no data given to it at the start
const options = {
    chart:{
        type:'line',
        height:'100%'
    },
    series:[ 
        // no series given
    ],
    // special property defined by apexcharts
    noData:{
        // what to do if there are no data
        text:"Loading data, please wait..."
    }
}

const chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();

window.addEventListener("DOMContentLoaded", async function(){
    // we can use the loadData function because it's a global
    // function in data.js which we have included BEFORE
    // our script.js 
    let data = await loadData();
    console.log(data.yearly);
    //  use the updateSeries function to update the chart's series
    // it will completely overwrite the origina series
    // `chart` in global scope so we can call it here
    chart.updateSeries([
        {
            'name': 'Sales',
            'data': data.yearly
        }
    ])
})