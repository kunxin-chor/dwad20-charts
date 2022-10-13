function createBarChart(sightings, meteors, months){
    const barChartOptions = {
        chart:{
            type:'bar',
            height: '100%'
        },
        series:[
            {
                name:'Sightings',
                data: sightings
            },
            {
                name:'Meteors',
                data: meteors
            }
        ],
        xaxis:{
            categories: months
        }
    }
    
    const barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions );
    return barChart;
}