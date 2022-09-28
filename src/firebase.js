import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDplZHaKNecHmrHHtrJ-i6hc9tfZKfoZV8',
    authDomain: 'ka-usap.firebaseapp.com',
    projectId: 'ka-usap',
    storageBucket: 'ka-usap.appspot.com',
    messagingSenderId: '215713034897',
    appId: '1:215713034897:web:473ad3efcbb68dd4b3c530',
  })
  .auth()
