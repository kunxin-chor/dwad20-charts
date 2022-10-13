function createLineChart(sightings, meteors, months) {
    let options = {
        // controls the chart type and height
        "chart": {
            "type": "line", 
            "height": "100%"
        },
        // data (y-axis)
        "series":[
            {
                "name":"Sightings",
                "data": sightings
            },
            {
                "name":"Meteors",
                "data": meteors
            }
        ],
        "xaxis":{
            "categories": months
        }
    }
    
    // we are going to the `new ApexCharts()` function to create one instance of the chart
    let chart = new ApexCharts(document.querySelector("#line-chart"), options);
    
    return chart;
    
}