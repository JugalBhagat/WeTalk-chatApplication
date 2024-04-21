import React, { useEffect } from 'react'
import { useState } from 'react';
import avatarImage from '../images/avatar3.png';
import AddUser from '../componants/Adduser';
import useUserStore from '../lib/userStore';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../lib/firebase';

function ChatList() {
    const [addMode, setMode] = useState(false);
    // eslint-disable-next-line 
    const [chats, setChats] = useState([]);

    const { currentUser } = useUserStore();

    useEffect(() => {

        const unSub = onSnapshot(doc(db, "user-chats", currentUser.id), (doc) => {
            setChats(doc.data());
            console.log(chats);
        });
        return () => {
            unSub();
        }
        // eslint-disable-next-line 
    }, [currentUser.id]);

    const onAddClick = () => {
        if (addMode) {
            setMode(false);
        }
        else if (addMode === false) {
            setMode(true);
        }
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
                {/* {chats.map((chat) => (
                    <div className='my-chat-item p-2' key={chat.chatId}>
                        <div className="d-flex align-items-center mx-3">
                            <img className='chat-avatar mx-3' srcSet={avatarImage} alt="avatar" />
                            <div className=''>
                                <b><p>Abc Def</p></b>
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                ))} */}

                {addMode && <AddUser />}
            </div>
        </>
    )
}

export default ChatList