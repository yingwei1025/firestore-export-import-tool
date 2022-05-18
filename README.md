# firebase-import-export
A command line tools to help you easy export and import the firebase firestore collection

# What you need

firebase project

npm 

Get the service account json file from your firebase project and paste in into serviceAccount.json


# First time setup

1. Clone this project to your local folder

2. Run the CMD command : npm install

3. Replace your service account json


# To export firestore

1. Open the export.js to edit

2. Change the variable isBackupAll to true or false

3. Change the variable collectionName to your firestore collection name (if your isBackupAll is false)

4. Save the file

5. Open CMD in the current directory and run command: node export.js

Done, the json file will save into temp folder


# To import firestore

1. Open the replace-your-json-code-here.json file to to paste in your json

2. Save the file

3. Open CMD in the current directory and run command: node import.js

4. Waiting result 

Done
