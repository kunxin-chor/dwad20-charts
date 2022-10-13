const campaigns = [3, 5, 1, 8, 4, 10];
const reach = [5000, 17000, 2400, 25000, 140000, 55000];
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const campaginChartOptions = {
    chart:{
        id: 'campaign-chart', // nothing do with the CSS id
        type:'line',
        height:'100%',
        group:'marketing-charts'
    },
    series:[
        {
            name:'Campaigns',
            data: campaigns
        }
    ],
    xaxis:{
        categories: categories
    }
}

const campaignChart = new ApexCharts(document.querySelector("#chart"), campaginChartOptions);
campaignChart.render();

const reachChartOptions = {
    chart:{
        id:"reach-chart",
        type:'line',
        height:'100%',
        group:'marketing-charts'
    },
    series:[
        {
            name:"Reach",
            data:reach
        }
    ],
    xaxis:{
        categories: categories
    }
}

const reachChart = new ApexCharts(
    document.querySelector("#reachChart"),
    reachChartOptions
);
reachChart.render();