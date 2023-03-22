from pymongo import MongoClient

def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = "mongodb+srv://khoanda:10042002@khoahihi222.9y04maq.mongodb.net/?retryWrites=true&w=majority"
 
   # Create a connection using MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database 
   return client['plantApp']
