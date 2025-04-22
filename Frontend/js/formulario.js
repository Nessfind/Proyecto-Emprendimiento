document.getElementById('formulario').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtén los valores seleccionados de las preguntas y conviértelos a booleanos
    const pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value === 'true';
    const pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value === 'true';
    const pregunta3 = document.querySelector('input[name="pregunta3"]:checked').value === 'true';
    const pregunta4 = document.querySelector('input[name="pregunta4"]:checked').value === 'true';
    const pregunta5 = document.querySelector('input[name="pregunta5"]:checked').value === 'true';

    console.log(pregunta1, pregunta2, pregunta3, pregunta4, pregunta5); // Verifica los valores en la consola

    try {
        // Envía los datos al servidor usando fetch
        // creo la constante response para almacenar la respuesta del servidor
        const response = await fetch('http://127.0.0.1:5000/evaluar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Cuerpo de la solicitud con los datos del formulario
            // Enviando los valores de las preguntas como un objeto JSON
            // ejemplo: { "pregunta1": true, "pregunta2": false, ... }
            body: JSON.stringify({
                "pregunta1": pregunta1,
                "pregunta2": pregunta2,
                "pregunta3": pregunta3,
                "pregunta4": pregunta4,
                "pregunta5": pregunta5,
            }),
        });

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();

        const resultado = data.resultado;
        let mensaje = '';
        color_mensaje = 'alert alert-success';
        if (resultado > 4) {
            color_mensaje = 'alert alert-success';
            mensaje = '¡Excelente! eres un experto en emprendimiento.';
        }
        else if (resultado > 2) {
            color_mensaje = 'alert alert-warning';
            mensaje = '¡Bien! tienes un buen conocimiento en emprendimiento.';
        } else {
            color_mensaje = 'alert alert-danger';
            mensaje = '¡Necesitas mejorar! Te recomendamos estudiar más sobre emprendimiento.';
        }
        // Muestra el resultado en el div con id "resultado"
        document.getElementById('resultado').innerHTML = `
            <div class="${color_mensaje}">
                Resultado de la evaluación: <strong>${mensaje}</strong>
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