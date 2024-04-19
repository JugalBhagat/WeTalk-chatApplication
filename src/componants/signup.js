
import React, { useState } from 'react';
import selectedImg from '../images/avatar.jpg';
import { toast } from 'react-toastify';

function Signup() {
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
        }
        else {
            setAvatar({
                file: null,
                url: selectedImg
            })
        }
    }
    const handleLoginClick=(e)=>{
        e.preventDefault();
        toast.success("login successfull");
    }
    return (
        <div className="signup-class d-flex justify-content-center align-items-center">
            <div className="signup-item ">
                <div className="card-body">
                    
                    <h1 className="text-center mb-4 ">Signup here</h1>
                    <form onSubmit="" className="d-flex flex-column align-items-center">
                    <div className="mb-3 text-center rounded-circle">
                        <img srcSet={avatar.url} alt='' className='selected-img-signup' />
                    </div>
                        <div className="mb-3 my-signup-input-box" >
                            {/* <label className='my-signup-input form-control' htmlFor='file'>Select Avatar Image</label> */}
                            {/* <input type="file" class="form-control my-signup-input" id="file" style={{display:'none'}} /> */}
                            <input type="file" class="form-control my-signup-input" id="file" onChange={handleFileOnchange} />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="username" name="username" placeholder="Username" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="email" name="email" placeholder="Email Id" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="password" className="my-signup-input" id="password" name="password" placeholder="Password" />
                        </div>
                        <div>
                            <p className="">Already have an account?</p>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="separator"></div>
            <div className="login-item">
                <div className="card-body">
                    <h1 className="text-center mb-4 ">Login here</h1>
                    <form onSubmit={handleLoginClick} className="d-flex flex-column align-items-center">
                        <div className="mb-3 my-signup-input-box">
                            <input type="text" className="my-signup-input " id="email" name="email" placeholder="Email Id" />
                        </div>
                        <div className="mb-3 my-signup-input-box">
                            <input type="password" className="my-signup-input" id="password" name="password" placeholder="Password" />
                        </div>
                        <div>
                            <p className="">Already have an account?</p>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
