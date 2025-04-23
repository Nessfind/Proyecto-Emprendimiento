const ctx = document.getElementById("grafico").getContext("2d");

const names = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
const textil_cantidad = [15, 18, 20, 22, 25, 28, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60, 62];
const cafe_cantidad = [25, 28, 30, 32, 35, 38, 40, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 67, 70, 72];
const entretenimiento_cantidad = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48,];
const manufacturas_cantidad = [20, 22, 25, 28, 30, 32, 35, 37, 40, 42, 45, 47, 50, 52, 55, 57, 60, 62, 65, 67];

const combinedChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: names, // Etiquetas compartidas para ambos conjuntos de datos
        datasets: [
            {
                label: 'Sector Textil',
                data: textil_cantidad,
                backgroundColor: 'rgba(99, 133, 255, 0.2)', // Color de relleno
                borderWidth: 1.5, // Grosor de la línea
                tension: 0.4 // Suavizado de la línea
            },
            {
                label: 'Sector Cafetero',
                data: cafe_cantidad,
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de relleno
                borderWidth: 1.5, // Grosor de la línea
                tension: 0.4 // Suavizado de la línea
            },
            {
                label: 'Sector Entretenimiento',
                data: entretenimiento_cantidad,
                backgroundColor: 'rgba(56, 174, 36, 0.2)', // Color de relleno
                borderWidth: 1.5, // Grosor de la línea
                tension: 0.4 // Suavizado de la línea
            },
            {
                label: 'Sector Manufacturero',
                data: manufacturas_cantidad,
                backgroundColor: 'rgba(247, 255, 5, 0.2)', // Color de relleno
                borderWidth: 1.5, // Grosor de la línea
                tension: 0.4 // Suavizado de la línea
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true, // Muestra la leyenda
                position: 'top' // Posición de la leyenda
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Años' // Título del eje X
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cantidad de Emprendimientos' // Título del eje Y
                },
                beginAtZero: true // Comienza desde 0
            }
        }
    }
});