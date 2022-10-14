
async function main() {
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

    let rawData = await loadData("https://raw.githubusercontent.com/kunxin-chor/sales-data/main/data/sales.json");
    let series = transformData(rawData);

    chart.updateSeries([
        {
            'name':'Sales',
            'data': series
        }
    ])
}
main();