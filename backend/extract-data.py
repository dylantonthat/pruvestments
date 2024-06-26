
import sys
import pandas as pd
from firebase import add_doc

#sys.path.append("../../backend/backend-env/config")
#from config import add_doc

df = pd.read_csv('sentiment-ml/data/archive/stock_tweets.csv')

# Upload data to Firestore
for index, row in df.iterrows():
    data = row.to_dict()
    add_doc("test",data)

print('Data uploaded successfully.')