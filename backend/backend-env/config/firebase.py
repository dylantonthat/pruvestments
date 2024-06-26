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
def add_doc(collection: str, entry: dict):
    if check_collection(collection):
        db.collection(collection).add(entry)

# returns documents based on a chosen field and value
def get_doc(collection: str, field: str, value:any):
    if check_collection(collection):
        collection_ref = db.collection(collection)
        query = collection_ref.where(field, '==', value).get()
        
        docs = []

        for doc in query:
            entry = doc.to_dict()
            entry['id'] = doc.id
            docs.append(entry)

        return docs
    else:
        raise KeyError('Collection not found')

# modifies a document given a collection, field to use in query, and expected value of that field
def modify_doc(collection: str, field_to_search_by: str, value_of_field: any, new_data: dict):
    entry = get_doc(collection, field_to_search_by, value_of_field)
    
    if len(entry) == 0:
        raise ValueError('No entries')
    elif len(entry) > 1:
        raise ValueError('More than one entry found')
    else:
        for key, value in new_data.items():
            entry[0][key] = value
        id = entry[0].pop('id')
        db.collection(collection).document(id).set(entry[0])

# gets all rows of data!
def get_all(limit=10):
    data = db.collection('test').stream()

    all_docs = []
    for i, doc in enumerate(data):
        if i >= limit and limit > 0:
            break
        all_docs.append(doc.to_dict())
        
    return all_docs
