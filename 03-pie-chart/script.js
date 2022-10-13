const options = {
    chart: {
        type:"pie",
        height:"100%"
    },

    // only one series in a pie chart
    series:[22, 23, 45, 11, 9, 15],

    // labels of each slice of the pet
    labels:["Mixed Rice", "Fishball Noodles", "Western Food", "Vegeterian Food", "Drink Stall", "Indian Food"],

    // primary colors
    colors:["#064789", "#427AA1", "#EBF2FA", "#679436", "#A5BE00", "#FFFF00"]
}

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();