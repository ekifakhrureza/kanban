import { initializeApp } from 'firebase'
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyDtzqehKS_kOkCq0ffeyb9J5biVqAqRtO0',
  authDomain: 'kanban-c596c.firebaseapp.com',
  databaseURL: 'https://kanban-c596c.firebaseio.com',
  projectId: 'kanban-c596c',
  storageBucket: 'kanban-c596c.appspot.com',
  messagingSenderId: '233672148745'
})
export const db = app.database()
