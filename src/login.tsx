import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth }  from './firebase';
const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/app');

        }).catch((error) => {
            console.log(error)
        });
       
    };
 

    return (
        <div style={{flex:1,height:"83vh",backgroundColor:"#120B2B",  margin: "auto",textAlign:"center",paddingTop:"15vh"}}>
            <div style={{display: "inline-block",margin:"auto", padding: "3px",}}>
            <form onSubmit={handleLogin} 
            style={{  
                width: "100vh",
                textAlign: "left"
                }}>
            <h1 style={{
                    fontSize:50,
                    fontWeight:'bold',
                    alignSelf: 'center', 
                    color:"white"
                }}>Login</h1>
                <label style={{
                        fontSize:25,
                        fontWeight:400,
                        marginTop:10,
                        paddingTop:10,
                        color:"white",
                        }}> Email</label>
                        <br/><br/>

            <input type="text" placeholder="Enter your mail" style={{
                        width:"100%",
                        height:50,
                        borderColor:"white",
                        borderWidth:1,
                        borderRadius:8,
                        paddingLeft:22
                        }}
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                                    <br></br>
                                    <br></br>
                                    <br></br>

            <label style={{
                        fontSize:25,
                        fontWeight:400,
                        marginTop:10,
                        color:"white",
                        textAlign:"left"
                        }}> Password</label><br/><br/>
            <input type="password" placeholder="Enter your password"style={{
                        width:"100%",
                        height:50,
                        borderColor:"white",
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        }} 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                                                <br/><br/>  <br/>

            <button type='submit' style={{
                paddingBottom:16,
                borderColor: "#4622C9",
                justifyContent: 'center',
                borderWidth:2,
                borderRadius:12,
                alignItems: 'center',
                backgroundColor:"#4622C9",
                width: "105%",
                textAlign:"center",
                fontSize:35
                }}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
