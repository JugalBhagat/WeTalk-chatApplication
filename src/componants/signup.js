
import React, { useState } from 'react';
import selectedImg from '../images/avatar.jpg';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../lib/upload';

function Signup(props) {
    const [login_creds, setLoginCreds] = useState({ username: "", email: "" });
    const [signup_creds, setSignupCreds] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState({
        file: null,
        url: selectedImg
    });

    const handleFileOnchange = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        } else {
            setAvatar({
                file: null,
                url: selectedImg
            })
        }
    }

    const LoginOnChange = (e) => {
        setLoginCreds({ ...login_creds, [e.target.name]: e.target.value })          //to keep default value
    }

    const SignupOnChange = (e) => {
        setSignupCreds({ ...signup_creds, [e.target.name]: e.target.value })          //to keep default value
    }

    const handleLoginClick = async(e) => {
        e.preventDefault();
        setLoading(true);
        props.setProgress(10);
        if (login_creds.password.length >= 6) {
            try {
                props.setProgress(30);
                await signInWithEmailAndPassword(auth, login_creds.email, login_creds.password);
                props.setProgress(75);
                toast.success("Login Successfully");
                props.setProgress(100);
            }
            catch (err) {
                toast.error("erro : "+err.message);
                props.setProgress(0);
            }
            finally{
                setLoading(false);
            }
            props.setProgress(0);
        }
        else {
            toast.error("Password must be 6 Character Long");
            setLoading(false);
            props.setProgress(0);
            return 0;
        }
    }

    const handleSignupClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (signup_creds.password.length >= 6) {
            try {
                props.setProgress(10);
                const imgUrl= await upload(avatar.file);
                props.setProgress(30);
                const res = await createUserWithEmailAndPassword(auth, signup_creds.email, signup_creds.password);
                props.setProgress(50);
                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    username: signup_creds.username,
                    email: signup_creds.email,
                    avatar:imgUrl,
                    blocked: [],
                });
                props.setProgress(70);
                await setDoc(doc(db, "user-chats", res.user.uid), {
                    chats: [],
                });
                props.setProgress(100);
                toast.success("Account Created Successfully");
            }
            catch (err) {
                toast.error(err.message);
                props.setProgress(0);
            }
            finally{
                setLoading(false);
            }
        }
        else {
            toast.error("Password must be 6 Character Long");
            props.setProgress(0);
            return 0;
        }
    }


    return (
        <div className="signup-class d-flex justify-content-center align-items-center">
            <div className="signup-item ">
                <div className="card-body">

                    <h1 className="text-center mb-4 ">Signup here</h1>
                    <form onSubmit={handleSignupClick} className="d-flex flex-column align-items-center">
                        <div className="mb-3 text-center rounded-circle">
                            <img srcSet={avatar.url} alt='' className='selected-img-signup' />
                        </div>
                        <div className="mb-3 my-signup-input-box" >
                            {/* <label className='my-signup-input form-control' htmlFor='file'>Select Avatar Image</label> */}
                            {/* <input type="file" className="form-control my-signup-input" id="file" style={{display:'none'}} /> */}
                            <input type="file" className="form-control my-signup-input" id="file" onChange={handleFileOnchange} />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="username" name="username" onChange={SignupOnChange} placeholder="Username" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="email" name="email" onChange={SignupOnChange} placeholder="Email Id" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="password" className="my-signup-input" id="password" name="password" onChange={SignupOnChange} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Loading' : 'Sign Up'}</button>
                    </form>
                </div>
            </div>
            <div className="separator"></div>
            <div className="login-item">
                <div className="card-body">
                    <h1 className="text-center mb-4 ">Login here</h1>
                    <form onSubmit={handleLoginClick} className="d-flex flex-column align-items-center">
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="email" name="email" onChange={LoginOnChange} placeholder="Email Id" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="password" className="my-signup-input" id="password" name="password" onChange={LoginOnChange} placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Loading' : 'Login'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
