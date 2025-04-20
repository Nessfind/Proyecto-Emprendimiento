from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/evaluar', methods=['POST'])
def evaluar():
    data = request.get_json()
    pregunta1 = data.get('pregunta1')
    pregunta2 = data.get('pregunta2')
    pregunta3 = data.get('pregunta3')
    pregunta4 = data.get('pregunta4')
    pregunta5 = data.get('pregunta5')
    
    print("Preguntas recibidas:")
    print(f"Pregunta 1: {pregunta1}")
    print(f"Pregunta 2: {pregunta2}")
    print(f"Pregunta 3: {pregunta3}")
    print(f"Pregunta 4: {pregunta4}")
    print(f"Pregunta 5: {pregunta5}")

    return {
        'resultado': "hola"
    }

if __name__ == '__main__':
    app.run(debug=True)