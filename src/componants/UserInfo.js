import React from 'react';
import avatarImage from '../images/avatar.jpg';

function UserInfo() {
    return (
        <div className='m-3 d-flex align-items-center'>
            <div className="user d-flex align-items-center">
                <img className='user-avatar m-3' srcSet={avatarImage} alt="avatar" />
                <h4>Jugal bhagat</h4>
            </div>
            {/* <div className="icon mx-3">
                <i className="fa-solid fa-video mx-2"></i>
                <i className="fa-solid fa-ellipsis mx-2"></i>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div> */}
        </div>
    );
}

export default UserInfo;
