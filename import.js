// Imports tool Yw
const { initializeApp, restore }  = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');
const jsonImportFile = './replace-your-json-code-here.json';

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await initializeApp(serviceAccount);
    console.log('Firebase Initialized');

    const options = {
      showLogs: true
    }

    const result = await restore('./replace-your-json-code-here.json',options);
    console.log(result);
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();