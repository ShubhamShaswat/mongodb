from mongo_utils import connect_to_mongo_client, insert_docs_to_mongo_collection
import random
from datetime import datetime, timedelta

# schema =  {
#     projectId
#     applicabilityStartDate: Date,
#     applicabilityEndDate: Date,
#     additionalField:
# }

_COLLECTIONS = [
    "commissioningCertificates",
    "sitePhotographs",
    "mainMeterPhotographs",
    "checkMeterPhotographs",
    "jointMeasurementReports",
    "invoices",
    "calibrationCertificates"
    "sdgReports",
    "breakdownDetails",
    "grievanceInformation",
    "informantionChanged",
    "keyPersonnel",
]
SAMPLES_PER_COLLECTION = 1000


def sample_document_generator():
    """Generate one sample document."""

    # Generate random projectId ranging from 1 to 10
    projectId = random.randint(1, 10)

    # Generate random supporting docs index ranging from 1 to 10
    supportingDocsIndex = random.randint(1, 10)

    # Generate random start date between 1st Jan 2023 and 31st Dec 2023
    start_date = datetime(2023, 1, 1) + timedelta(days=random.randint(0, 364))

    # Ensure end date is within 3 months of start date
    end_date = start_date + timedelta(days=random.randint(0, 90))

    # Generate random additionalField
    additional_field = {
        "additionalField1": "values"
    }

    return {
        "projectId": projectId,
        "applicabilityStartDate": start_date,
        "applicabilityEndDate": end_date,
        "additionalField": additional_field,
        "createdAt": "2023-03-22T00:00:00.000+00:00",
        "fileStorageKey": "abcdef",
        "supportingDocsType": _COLLECTIONS[supportingDocsIndex]

    }


if __name__ == "__main__":

    # Example usage:
    # sample_doc = sample_document_generator()
    # print(sample_doc)

    # connect to mongo client
    client = connect_to_mongo_client()
    # # for collection in _COLLECTIONS:
    #     # docs = []
    #     # for n in range(SAMPLES_PER_COLLECTION):
    #     #     docs.append(sample_document_generator())

    #     # # insert the docs to the collection
    #     insert_docs_to_mongo_collection(client, collection="testCollection", documents=sample_doc)

    docs = []
    for n in range(SAMPLES_PER_COLLECTION):
        docs.append(sample_document_generator())
    insert_docs_to_mongo_collection(client, collection="testCollection", documents=docs)
