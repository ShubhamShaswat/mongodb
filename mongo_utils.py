from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import urllib.parse
import pymongo


# Replace the placeholder data with your Atlas connection string. Be sure it includes
# a valid username and password! Note that in a production environment,
# you should not store your password in plain-text here.


def connect_to_mongo_client():
    """ "connect to mongodb client"""
    username = urllib.parse.quote_plus("shubhamshaswat")
    password = urllib.parse.quote_plus("")

    CONNECTION_STRING = f"mongodb+srv://{username}:{password}@dmrv-serverlessinstance.bpclcvt.mongodb.net/?retryWrites=true&w=majority&appName=DMRV-ServerlessInstance"
    client = MongoClient(CONNECTION_STRING)
    # Send a ping to confirm a successful connection
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)

    return client


def insert_docs_to_mongo_collection(client, collection, documents) -> None:
    """insert multiple docs at once in mongodb collection"""

    # use a database named "myDatabase"
    db = client.testACM0002

    # use a collection named "recipes"
    my_collection = db[collection]

    try:
        result = my_collection.insert_many(documents)

    # return a friendly error if the operation fails
    except pymongo.errors.OperationFailure:
        print(
            "An authentication error was received. Are you sure your database user is authorized to perform write operations?"
        )
    else:
        inserted_count = len(result.inserted_ids)
        print("I inserted %x documents." % (inserted_count))
        print("\n")


if __name__ == "__main__":
    client = connect_to_mongo_client()

    docs = [
        {
        "name": "Shubham",
        "email": "jane@abc.com",
        "age": {"$numberInt": "26"},
        "hobbies": ["databases", "painting", "soccer"],
        }
    ]

    insert_docs_to_mongo_collection(client, collection="testCollection", documents=docs)
