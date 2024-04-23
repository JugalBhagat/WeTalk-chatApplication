import React from 'react';
import avatarImage from '../images/avatar.jpg';
import useUserStore from '../lib/userStore';
import { auth } from '../lib/firebase';
import { toast } from 'react-toastify';

function UserInfo() {
    const { currentUser } = useUserStore();
    return (
        <div className='m-3 d-flex align-items-center'>
            <div className="user d-flex align-items-center">
                <img className='user-avatar m-3' srcSet={currentUser.avatar || avatarImage} alt="avatar" />
                <h4>{currentUser.username}</h4>
            </div>
            <div className="icon mx-3">
                <i className="fa-solid fa-right-from-bracket" onClick={() => {
                    auth.signOut();
                    toast.success("Logout successfull");
                }}></i>
                {/* <i className="fa-solid fa-video mx-2"></i>
                <i className="fa-solid fa-ellipsis mx-2"></i>
                <i className="fa-solid fa-pen-to-square mx-2"></i> */}
            </div>
        </div>
    );
}

export default UserInfo;
