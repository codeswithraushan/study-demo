from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/calc", methods=["POST"])
def calc():
    data = request.json
    a = data['a']
    b = data['b']
    op = data['op']

    if op == "+":
        result = a + b
    elif op == "-":
        result = a - b
    elif op == "*":
        result = a * b
    elif op == "/":
        result = "Error" if b == 0 else a / b
    else:
        result = "Invalid operation"

    return jsonify({"result": result})

app.run(debug=True)
