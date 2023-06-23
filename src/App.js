import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/compat/auth';
import { auth } from 'firebase';
import Banner from './components/Banner';
import LoginForm from './components/LoginForm';

// Your web app's Firebase configuration

export default function AuthExample() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
  
    // const handleSubmit = async () => {
    //   await signInWithEmailAndPassword(getAuth(), email, password);
    // };
  
    return (
      <View style={styles.appContainer}>
        <Banner text="Authentication"/>
        <LoginForm/>
      </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#F3F3F3',
        flex: 1
    }
});








// class App extends Component {
//     componentDidMount() {
//         const firebaseConfig = {
//             apiKey: "AIzaSyA7PreeK8r72YZ5YJrGUmF78CP1mM29LbA",
//             authDomain: "i-hate-f5164.firebaseapp.com",
//             databaseURL: "https://i-hate-f5164.firebaseio.com",
//             projectId: "i-hate-f5164",
//             storageBucket: "i-hate-f5164.appspot.com",
//             messagingSenderId: "960906372833",
//             appId: "1:960906372833:web:abc55950f8797b3766b9a0",
//             measurementId: "G-TJBMY7HH0Y"
//         };

//         const app = initializeApp(firebaseConfig);

//         // Firebase'i başlatın
//         // firebase.initializeApp(firebaseConfig);

//         firebase.auth().onAuthStateChanged((user) => {
//             console.log(user);
//         });
//     }

//     render() {
//         return (
//             <View style={styles.appContainer}>
//                 <Banner text='Authentication'/>
//                 <LoginForm/>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     appContainer: {
//         backgroundColor: '#F3F3F3',
//         flex: 1
//     }
// });

// export default App;
// // export const auth = getAuth();