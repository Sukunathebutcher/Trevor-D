from flask import Flask, request, jsonify

app = Flask(__name__)
secret_number = 27  # Example fixed number

@app.route("/guess", methods=["POST"])
def guess():
    user_guess = int(request.json["guess"])
    if user_guess == secret_number:
        result = "Correct"
    elif user_guess < secret_number:
        result = "Too low"
    else:
        result = "Too high"
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)