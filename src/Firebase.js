import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCpemxFe1GWUYK9gUwJ_liIii9SRvgwPXU",
  authDomain: "netflix-clone-5581c.firebaseapp.com",
  projectId: "netflix-clone-5581c",
  storageBucket: "netflix-clone-5581c.appspot.com",
  messagingSenderId: "534242871330",
  appId: "1:534242871330:web:749cabcdbb927e8e8a227b"
};

  const app=initializeApp(firebaseConfig)
  const auth=getAuth()
  const db=getFirestore()
  export{auth,app,db}