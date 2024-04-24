import React, { useEffect } from 'react'
import { useState } from 'react';
import avatarImage from '../images/avatar3.png';
import AddUser from '../componants/Adduser';
import useUserStore from '../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../lib/firebase';
import useChatStore from '../lib/chatStore';
import { toast } from 'react-toastify';

function ChatList() {
    const [addMode, setMode] = useState(false);
    // eslint-disable-next-line 
    const [chats, setChats] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const { currentUser } = useUserStore();
    const { changeChat } = useChatStore();

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "user-chats", currentUser.id), async (res) => {
            const items = res.data().chats;
            console.log(items);
            const promises = items.map(async (item) => {
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);
                const user = userDocSnap.data();

                return { ...item, user };
            });
            const chatData = await Promise.all(promises);
            setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
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

    const filterChats = chats.filter(c=>c.user.username.toLowerCase().includes(searchInput.toLowerCase()))

    const handleSelect = async (chat) => {
        const userChats = chats.map(item => {
            const { user, ...rest } = item;
            return rest;
        });
        const chatIndex = userChats.findIndex(item => item.chatId === chat.chatId)
        userChats[chatIndex].isSeen = true;
        const userChatRef = doc(db, "user-chats", currentUser.id);
        try {
            await updateDoc(userChatRef, {
                chats: userChats,
            });
            changeChat(chat.chatId, chat.user);               // select chat to display in chat window
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong!!! " + err)
        }
    }
    return (
        <>
            <div className='d-flex align-items-center mx-4'>
                <div className="top-bar d-flex mx-1 my-serachbar align-items-center">
                    <i className="fa-solid fa-magnifying-glass mx-2"></i>
                    <input type='text' name='txt_search' className="my-serach" onChange={(e)=>setSearchInput(e.target.value)} />
                </div>
                <i className={`fa-solid btn-add ${addMode ? 'fa-minus' : 'fa-plus'} mx-2 btn-add-chats`} onClick={onAddClick}></i>
            </div>

            <div className="componant-1 mt-4">
                {filterChats.map((chat) => (
                    <div className='my-chat-item p-2' key={chat.chatId} onClick={() => handleSelect(chat)} style={{ backgroundColor: chat.isSeen === true ? "transparent" : "blue" }}  >
                        <div className="d-flex align-items-center mx-3">
                            <img className='chat-avatar mx-3' srcSet={chat.user.blocked.includes(currentUser.id) ? avatarImage : chat.user.avatar || avatarImage } alt="avatar" />
                            <div className=''>
                                <b><p>{chat.user.blocked.includes(currentUser.id) ? 'Wetalk User' : chat.user.username}</p></b>
                                <p>{chat.user.blocked.includes(currentUser.id) ? 'Blocked' :chat.lastMessage}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {addMode && <AddUser />}
            </div>
        </>
    )
}

export default ChatList