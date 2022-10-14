async function main() {

    // CREATE THE GRAPH
    const chartOptions = {
        chart:{
            type:'line',
            height:'100%'
        },
        series:[

        ],
        noData:{
            text:"Loading data, please wait"
        }
    }
    const chart = new ApexCharts(
        document.querySelector("#chart"),
        chartOptions
    )
    chart.render();

    // LOAD IN THE DATA
    let data = await loadData();
    let livePopulationData = transformData(data);

    chart.updateSeries([
        {
            name:"Live Birth Rate",
            data: livePopulationData
        }
    ])

}
main();