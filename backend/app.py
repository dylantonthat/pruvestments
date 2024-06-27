from flask import Flask, jsonify, request
from firebase import add_doc, get_doc, modify_doc, get_all, get_document_by_id

from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return 'Hello, World!'

@app.route("/test")
def test():
    return "Test"

@app.route('/api/data', methods=['GET'])
def get_all_data():
    try:
        limit = request.args.get('limit', default=10, type=int)
        data = get_all(limit)
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/data/<collection>', methods=['GET'])
def get_data_by_field(collection):
    try:
        field = request.args.get('field')
        value = request.args.get('value')
        if not field or not value:
            return jsonify({'error': 'Field and value parameters are required'}), 400
        data = get_doc(collection, field, value)
        return jsonify(data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/data/<collection>/<document_id>', methods=['GET'])
def get_document(collection, document_id):
    try:
        data = get_document_by_id(collection, document_id)
        print(jsonify(data))
        if data:
            return jsonify(data), 200
        else:
            return jsonify({'error': 'Document not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/data/<collection>', methods=['POST'])
def add_document(collection):
    try:
        entry = request.json
        add_doc(collection, entry)
        return jsonify({'message': 'Document added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/data/<collection>', methods=['PUT'])
def modify_document(collection):
    try:
        field = request.json.get('field')
        value = request.json.get('value')
        new_data = request.json.get('new_data')
        if not field or value is None or new_data is None:
            return jsonify({'error': 'Field, value, and new_data parameters are required'}), 400
        modify_doc(collection, field, value, new_data)
        return jsonify({'message': 'Document modified successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)