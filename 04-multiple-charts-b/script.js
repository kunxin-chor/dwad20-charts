const sightings = [10, 13, 15, 22, 34,25, 61, 99, 100, 120];
const meteors = [20, 30, 22, 13, 15, 16, 18, 21, 23, 24];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct"];

const lineChart = createLineChart(sightings, meteors, months);
const barChart = createBarChart(sightings, meteors, months);

lineChart.render();
barChart.render();