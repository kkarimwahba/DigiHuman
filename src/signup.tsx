import React, { useState } from 'react';
import { auth, firestore} from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignup = () => {
        const signupForm = document.getElementById('signup-form');
        signupForm?.addEventListener('submit', (e) => {
            e.preventDefault();
        

            const email=signupForm['signup-email'].value;
            const password=signupForm['signup-password'].value;
            const username=signupForm['signup-username'].value;
            const phoneNumber=signupForm['signup-phone-number'].value;
            

            createUserWithEmailAndPassword(auth,email, password)
                .then((userCredential) => {
                    return addDoc(collection(firestore, 'users'), {
                        uid: userCredential.user.uid,
                        username: username,
                        email: email,
                        password: password,
                        phoneNumber: phoneNumber,
                        avatar: '',
                    });
            });
                
        console.log('Signup:', email, username, password, phoneNumber);
         }); 
    };

    return (
        <div>
            <h1>Signup Page</h1>
            <form id="signup-form">
            <input
                type="email"
                id="signup-email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                id="signup-username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                id='signup-password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="tel"
                id='signup-phone-number'
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;