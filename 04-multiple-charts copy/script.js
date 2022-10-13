const sightings = [10, 13, 15, 22, 34,25, 61, 99, 100, 120];
const meteors = [20, 30, 22, 13, 15, 16, 18, 21, 23, 24];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"];

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

// render the chart
chart.render();

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
barChart.render();