async function loadData() {
    let response = await axios.get("https://raw.githubusercontent.com/apexcharts/apexcharts.js/master/db.json");
    return response.data;
}