from flask import Flask, request, jsonify
import json
from flask_cors import CORS
app = Flask(__name__)
import requests
CORS(app)


@app.route('/api/question', methods=['POST'])
def receive_questions():
    data_received = request.json
    # Write the dictionary to the file
    response_data = [{
            'question': "What is the patient's sex?", 'type': "MC", 'options': [
                {"id": 1, "text": "Male"},
                {"id": 2, "text": "Female"},
                {"id": 3, "text": "Non-binary"},
                {"id": 4, "text": "Other"}
        ]}]
    return response_data

@app.route('/api/diagnosis', methods=['POST'])
def receive_diagnosis():
    data_received = request.json
    # Write the dictionary to the file
    response_data = {"Health issues":[
            {"Issue":"(Issue 1, like COVID-19)", "Reason":"(Reason 1)"},
            {"Issue":"(Issue 2, like influenza)", "Reason":"(Reason 2)"}
        ],
        "Immediate actions":[
        "(Action 1)",
        "(Action 2)",
        "(Action 3)"],
        "Further treatments":
        ["(Treatment 1)",
        "(Treatment 2)",
        "(Treatment 3)"]
        }
    return response_data
if __name__ == '__main__':
    app.run(debug=True)
if __name__ == '__main__':
    app.run(debug=True)