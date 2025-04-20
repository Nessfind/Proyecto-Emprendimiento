document.getElementById('formulario').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtén los valores seleccionados de las preguntas
    const pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;
    const pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;
    const pregunta3 = document.querySelector('input[name="pregunta3"]:checked').value;
    const pregunta4 = document.querySelector('input[name="pregunta4"]:checked').value;
    const pregunta5 = document.querySelector('input[name="pregunta5"]:checked').value;
    try {
        // Envía los datos al servidor usando fetch
        const response = await fetch('http://127.0.0.1:5000/evaluar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "pregunta1":pregunta1,
                "pregunta2":pregunta2,
                "pregunta3":pregunta3,
                "pregunta4":pregunta4,
                "pregunta5":pregunta5,
            }),
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        // Muestra el resultado en el div con id "resultado"
        document.getElementById('resultado').innerHTML = `
            <div class="alert alert-success">
                Resultado de la evaluación: <strong>${data.resultado}</strong>
            </div>
        `;
    } catch (error) {
        // Muestra un mensaje de error si algo falla
        document.getElementById('resultado').innerHTML = `
            <div class="alert alert-danger">
                Ocurrió un error: ${error.message}
            </div>
        `;
    }
});