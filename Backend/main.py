# Flask es una libreria, que permite hacer que python, pueda correr un servidor web
# Flask-CORS es una libreria que permite que el servidor web, pueda recibir peticiones de otros dominios
from flask import Flask, request
from flask_cors import CORS

# siempre se hace en flask, esto declara que app, es una aplicacion de flask
app = Flask(__name__)
# app, puede recibir peticiones de diferentes dominios, por ejemplo localhost:3000
CORS(app)

# esto es un endpoint, es decir, una ruta a la que se puede acceder desde el navegador
# para que funcione, necesito crear una funcion asociada a la ruta
@app.route('/evaluar', methods=['POST'])
def evaluar():
    # Recibo informacion por POST, y lo que este ahi lo guardo en la variable data
    data = request.get_json()
    # los .get, son para obtener los valores de las preguntas, y guardarlos en variables
    pregunta1 = data.get('pregunta1')
    pregunta2 = data.get('pregunta2')
    pregunta3 = data.get('pregunta3')
    pregunta4 = data.get('pregunta4')
    pregunta5 = data.get('pregunta5')
    # Imprimo las preguntas, para ver que se recibieron correctamente
    print(f"Pregunta 1: {pregunta1}")
    print(f"Pregunta 2: {pregunta2}")
    print(f"Pregunta 3: {pregunta3}")
    print(f"Pregunta 4: {pregunta4}")
    print(f"Pregunta 5: {pregunta5}")
    puntos = 0
    if pregunta1:
        puntos+=1
    if pregunta2:
        puntos+=1
    if pregunta3:
        puntos+=1
    if pregunta4:
        puntos+=1
    if pregunta5:
        puntos+=1
    return {
        'resultado': puntos
    }

# esto es para que el servidor, corra en el puerto 5000, y pueda recibir peticiones
if __name__ == '__main__':
    app.run(debug=True)