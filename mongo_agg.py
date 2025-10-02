from mongo_utils import connect_to_mongo_client
from datetime import datetime

# Connect to MongoDB
client = connect_to_mongo_client()
db = client.testACM0002  # Replace 'your_database_name' with your actual database name
collection = db.testCollection  # Replace 'your_collection_name' with your actual collection name

# Define start and end dates
start_date = datetime(2023, 5, 1)  # Set your desired start date
end_date = datetime(2023, 5, 31)  # Set your desired end date

# MongoDB aggregation pipeline
pipeline = [
    {
        '$match': {
            'applicabilityStartDate': {'$lte': start_date},
            'applicabilityEndDate': {'$gte': end_date}
        }
    },
    {
        '$group': {
            '_id': '$supportingDocsType',
            'documents': {'$push': '$$ROOT'}
        }
    }
]

# Execute aggregation query
result = collection.aggregate(pipeline)

# Iterate over the result and print each group
for group in result:
    supporting_docs_type = group['_id']
    documents = group['documents']
    print(f"Supporting Docs Type: {supporting_docs_type}")
    for doc in documents:
        print(doc)
