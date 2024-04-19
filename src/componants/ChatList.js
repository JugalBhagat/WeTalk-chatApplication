import React from 'react'
import { useState } from 'react';
import avatarImage from '../images/avatar3.png';

function ChatList() {
    const [addMode, setMode] = useState(false);
    const onAddClick = () => {
        if (addMode)
            setMode(false);
        else if (addMode === false)
            setMode(true);
    }
    return (
        <>
            <div className='d-flex align-items-center mx-4'>
                <div className="top-bar d-flex mx-1 my-serachbar align-items-center">
                    <i className="fa-solid fa-magnifying-glass mx-2"></i>
                    <input type='text' name='txt_search' className="my-serach" />
                </div>
                <i className={`fa-solid btn-add ${addMode ? 'fa-minus' : 'fa-plus'} mx-2 btn-add-chats`} onClick={onAddClick}></i>
            </div>

            <div className="componant-1 mt-4">
                <div className='my-chat-item-top mt-4 p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className='my-chat-item p-2'>
                    <div className="d-flex align-items-center mx-3">
                        <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                        <div className=''>
                            <b><p>Lokesh</p></b>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ChatList