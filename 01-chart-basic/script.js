// create the chart options
// - what kind of chart is it?
// - what are the data in the chart?
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
            "data":[10, 13, 15, 22, 34,25, 61, 99, 100, 120]
        },
        {
            "name":"Meteors",
            "data":[20, 30, 22, 13, 15, 16, 18, 21, 23, 24]
        }
    ],
    "xaxis":{
        "categories":["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"]
    }
}

// we are going to the `new ApexCharts()` function to create one instance of the chart
let chart = new ApexCharts(document.querySelector("#chart"), options);

// render the chart
chart.render();