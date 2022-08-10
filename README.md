# Yelp-API-Proxy

A simple proxy for the Yelp Fusion API. 

This proxy was created to assist with a project that calls the Yelp API and to avoid any CORS issues. This specifically calls for businesses, but you could probably change it and the parameters to whatever you want. Your app has to fetch the proxy, sending the parameters along with it. The parameters will be in the req.query object, and will be associated with whatever the tags are in the original call from the app to the proxy (ie "&term=bars" will be req.query.term with a value of bars). One absolute requirement is to send your API key from the app. I structured it this way so you don't have to hard code it into the proxy (req.query.apiKey).
