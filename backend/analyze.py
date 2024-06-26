from firebase import get_all
import nltk
from nltk.tokenize import word_tokenize
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Download the necessary NLTK data
nltk.download('punkt')

# Fetch all documents
res = get_all(limit=10)
# print(res)  

# Process tweets
tweets = [entry['Tweet'] for entry in res]

def tokenize_tweets_nltk(tweets):
    tokenized_tweets = [word_tokenize(tweet) for tweet in tweets]
    return tokenized_tweets

def sentiment_analysis_vader(tokenized):
    analyzer = SentimentIntensityAnalyzer()
    sentiments = [analyzer.polarity_scores(tweet) for tweet in tweets]
    return sentiments

tokenized = tokenize_tweets_nltk(tweets)
sentiment = sentiment_analysis_vader(tokenized)

compoundSent = [entry['compound'] for entry in sentiment]

print(compoundSent)
