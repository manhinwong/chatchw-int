from flask import Flask, request, jsonify
import json
from flask_cors import CORS
app = Flask(__name__)
import requests

CORS(app)

@app.route('/api/endpoint', methods=['POST'])
def receive_data_from_frontend():
    data_received = request.json

    file_path = 'Answers.json'

# Write the dictionary to the file
    with open(file_path, 'w') as json_file:
        
        
        json.dump(data_received, json_file)
        response_data = {'message': 'Data received successfully'}
        return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)