export default {
  firebase: {
    apiKey: '{APIKEY}',
    authDomain: '{FIREBASE_PROJECT_ID}.firebaseapp.com',
    projectId: '{FIREBASE_PROJECT_ID}',
  },
  instagram: {
    clientId: '{CLIENT_ID}',
    redirectUri:
      process.env.NODE_ENV === 'production' // eslint-disable-line
        ? 'https://{FIREBASE_PROJECT_ID}.firebaseapp.com/complete-register/'
        : 'https://localhost:3000/complete-register/',
    responseType: 'token',
  },
}
