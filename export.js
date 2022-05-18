// export tools YW 
const {
  initializeApp
} = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');
const {
  backup,
  backups
} = require('firestore-export-import')
const fs = require('fs');

// here set is backup full or single (true/ false)
const isBackupAll = false;

// here key in the colelction u want to export
const collectionName = 'your-firestore-collection-name';

// backup single or multiple
const backupFunc = async () => {
  try {
    console.log('Initialzing Firebase');
    await initializeApp(serviceAccount);
    console.log('Firebase Initialized');

    // Export options
    const options = {
      docsFromEachCollection: 1, // limit number of documents when exporting
      refs: ['refKey', 'deep.level.key'], // reference Path
    }

    // if not options use this
    const noOptions = {
    }

    console.log('Starting export ....\n');

    if (isBackupAll) {
      backups().then((data) => {
        const jsonResult = JSON.stringify(data, null, 4)
        const today =  new Date().toISOString().substring(0, 10);
        const outputFilename = 'temp/fullBackup '+ today +'.json'
        fs.writeFile(outputFilename, jsonResult, function(err, result) {
          if (err) {
            console.log('error', err);
          } else {
            console.log('Success export to ' + outputFilename)
          }
        })
      })
    } else {
      backup(collectionName, noOptions).then((data) => {
        const jsonResult = JSON.stringify(data, null, 4)
        const outputFilename = 'temp/' + collectionName + ".json"
        fs.writeFile(outputFilename, jsonResult, function(err, result) {
          if (err) {
            console.log('error', err);
          } else {
            console.log('Success export to ' + outputFilename)
          }
        })
      })
    }


  } catch (error) {
    console.log(error);
  }
};

backupFunc();