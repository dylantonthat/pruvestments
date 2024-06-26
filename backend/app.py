from flask import Flask
from google.cloud import firestore

app = Flask(__name__)
db = firestore.Client()

@app.route("/")
def hello_world():
    return 'Hello, World!'

@app.route("/get_sentiments", methods=['GET'])
def get_sentiments():
    return 'Sentiments!'

if __name__ == "__main__":
    app.run(debug=True, port=5000)