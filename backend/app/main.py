from flask import Flask, jsonify, request
from pymongo import MongoClient
from datetime import datetime

import os
from dotenv import load_dotenv
import cloudinary.uploader
import config


#------------------------------------------------------


# Connecting to MongoDB Atlas

load_dotenv()  # load .env file
backend = Flask(__name__)

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI) #mongoclient creates a connection to MongoDB server using the URI.
#client now represents your MongoDB client and allows you to interact with the database server

db = client.PrepVisionDB   # PrepVisionDB is the database name
collection = db.uploaded_files

#__name__ → special variable that tells whether the script is run directly or imported.


# if __name__ == "__main__":
#     backend.run(debug=True)

#if __name__ == "__main__": -> This starts the server only if you run this file directly, not when you import backend in another file. And here we wil laways use main only no matter what is the file name(i.e evn if sht gother than main.py, we will use here main only)
   
#debug=true -> 1. automatic code reloading on server side if any changes, 2. better error messages


#------------------------------------------------------#


#Creating upload api to upload PDF/TXT/JPG/PNG files to cloudinary and store metadata (URL, filename, user info, timestamp) in MongoDB


@backend.route('/upload', methods=['POST'])
def upload_file(): #upload_file() → The function that handles the request
    if 'file' not in request.files: #Example: They click “Upload” without selecting a file.
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '': #User might attach an empty file input Some browsers send an empty file object if nothing is selected.
        return jsonify({'error': 'No selected file'}), 400
    
    try:
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(file, resource_type="auto")  # auto detects pdf/image/video
        file_url = result.get('secure_url')

        # Save metadata in MongoDB
        file_doc = {
            'filename': file.filename,
            'cloudinary_url': file_url,
            'upload_time': datetime.now()
        }
        collection.insert_one(file_doc)
        #insert_one -> insert a single document into a collection

        return jsonify({
            'message': 'File uploaded successfully',
            'file_url': file_url
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500
# except Exception as e: → Catches any error that occurs in the try block.
# Python uses try ... except, not try ... catch.
# Exception is the base class for most errors in Python.
# e → The actual exception object that contains the error message.
# str(e) → Converts the error message into a string.
# jsonify({'error': str(e)}) → Sends the error message back as JSON to the client





#-----------------------------------------------------------


if __name__ == "__main__":
    backend.run(debug=True)