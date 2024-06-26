import tweepy


def scrape_twitter(company_name, api_key, api_secret, access_token, access_token_secret):
    auth = tweepy.OAuthHandler(api_key, api_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    tweets = api.search_tweets(q=company_name, lang="en", count=100)
    
    data = []
    for tweet in tweets:
        data.append({
            'text': tweet.text,
            'user': tweet.user.screen_name,
            'created_at': tweet.created_at,
            'retweet_count': tweet.retweet_count,
            'favorite_count': tweet.favorite_count
        })
    
    return data