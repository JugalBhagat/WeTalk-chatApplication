
import React from 'react';
import selectedImg from '../images/avatar.jpg';

function signup() {

    return (
        <div className="signup-class d-flex justify-content-center align-items-center">
            <div className="signup-item ">
                <div className="card-body">
                    <h1 className="text-center mb-4 ">Signup here</h1>
                    <form onSubmit="" className="d-flex flex-column align-items-center">
                        <div className="mb-3 rounded-circle">
                            <img srcSet={selectedImg} alt='' className='selected-img-signup' />
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
                        <div className="mb-3 my-signup-input-box" >
                            <input type="file" class="form-control my-signup-input" id="file" />
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
                
            </div>
        </div>
    )
}

export default signup
