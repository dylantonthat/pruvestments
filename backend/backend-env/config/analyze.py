from firebase import get_all, get_document_by_id
import nltk
from nltk.tokenize import word_tokenize
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from firebase import add_doc
import statistics

# Download the necessary NLTK data
nltk.download('punkt')

# Fetch all documents
res = get_all(limit=1035)
# print(res)  

# Process tweets
tweets = [entry['Tweet'] for entry in res if 'Tweet' in entry]

def tokenize_tweets_nltk(tweets):
    tokenized_tweets = [word_tokenize(tweet) for tweet in tweets]
    return tokenized_tweets

def sentiment_analysis_vader(tokenized):
    analyzer = SentimentIntensityAnalyzer()
    sentiments = [analyzer.polarity_scores(tweet) for tweet in tweets]
    return sentiments

tokenized = tokenize_tweets_nltk(tweets)
sentiment = sentiment_analysis_vader(tokenized)

preVals = [0.2, 0.27, 0.35, 0.45]
compoundSent = [entry['compound'] for entry in sentiment]
avgCompoundSent = statistics.mean(compoundSent)

preVals.append(avgCompoundSent)
print(preVals)
d = {'sentiments': preVals}
#add_doc('sents', d)

get_document_by_id('sents', 'm1rDXITsbTRAyByUBdxC')
