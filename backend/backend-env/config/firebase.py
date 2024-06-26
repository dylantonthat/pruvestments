import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# import db into other files
db = firestore.client()

# checks if collection exists
def check_collection(collection_name: str):
    docs = db.collection(collection_name).limit(1).get()
    return len(docs) > 0
    
# adds entry to a given collection
def addEntry(collection: str, entry: dict):
    if check_collection(collection):
        db.collection(collection).add(entry)


