import React from 'react';
import demoImg from '../images/avatar.jpg';

function Adduser() {
    return (
        <div className='add-user'>
            <form className="d-flex justify-content-center adduser-form">
                <div className="my-signup-input-box me-2">
                    <input type="text" className="form-control form-control-add" id="search_user" name="search_user" placeholder="Search User" />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="search-results">
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <img srcSet={demoImg} alt='' className='chat-avatar' />
                        <h6 className='mx-2'>Abc Def</h6>
                    </div>
                    <button type="submit" className="btn btn-sm btn-outline-primary">Add</button>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <img srcSet={demoImg} alt='' className='chat-avatar' />
                        <h6 className='mx-2'>Abc Def</h6>
                    </div>
                    <button type="submit" className="btn btn-sm btn-outline-primary">Add</button>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="d-flex justify-content-center align-items-center">
                        <img srcSet={demoImg} alt='' className='chat-avatar' />
                        <h6 className='mx-2'>Abc Def</h6>
                    </div>
                    <button type="submit" className="btn btn-sm btn-outline-primary">Add</button>
                </div>
            </div>
        </div>
    )
}

export default Adduser
