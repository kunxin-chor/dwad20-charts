// If we have a variable that we don't want to reassign to, we use const
const options = {
    chart:{
        type:"bar",
        height:"100%"
    },
    series:[
        {
            name:"Revenue",
            data:[120000, 750000, 800000, 450000, 330000, 550000]
        },
        {
            name:"Expenses",
            data:[60000, 77000, 88000, 110000, 450000, 770000]
        }
    ],
    xaxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    }
}

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();