const grafico = document.getElementById("myChart");
const names = ['2018', '2019', '2020', '2021', '2022', '2023'];
const ages = [36000, 37500, 38200, 39000, 39800, 40251];

const myChart = new Chart(grafico, {
    type: 'line',
    data: {
        labels: names,
        datasets: [{
            label: 'Cantidad Empresas',
            data: ages,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(130, 210, 194, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(130, 210, 194, 1)'
            ],
            borderWidth: 1.5
        }]
    },
    options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
    }
});