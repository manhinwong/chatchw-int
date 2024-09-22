from flask import Flask, request, jsonify
import json
from flask_cors import CORS
app = Flask(__name__)
import requests
CORS(app)


@app.route('/api/endpoint', methods=['POST'])
def receive_data_from_frontend():
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
if __name__ == '__main__':
    app.run(debug=True)