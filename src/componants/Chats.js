import React, { useEffect, useRef, useState } from 'react'
import avatarImage from '../images/avatar3.png';
import msg_img from '../images/bg.jpg';
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import useChatStore from '../lib/chatStore';

function Chats() {
  const [emoji_mode, setemoji_mode] = useState(false);
  const [chat, setChat] = useState();
  const [text, setText] = useState("");
  const { chatId,user } = useChatStore();
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setemoji_mode(false);
  }

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", chatId),
      (res) => {
        setChat(res.data());
      });
    return () => {
      unSub();
    }
  }, [chatId]);

  console.log(chat);
  console.log(user);

  return (
    <div className='position-relative'>
      <div className="top-level  d-flex align-items-center">
        <div className="img m-3">
          <img srcSet={user.avatar || avatarImage} className='top-chat-img' alt="" />
        </div>
        <div className="chat-item-detail m-3 w-75">
          <h5>{user.username}</h5>
          <p>Last seen 10 min ago</p>
        </div>
        <div className='chat-item-icons'>
          <i className="fa-solid fa-circle-info fa-lg"></i>
        </div>
      </div>
      <div className="mid-level pb-2">

        {/* <div className="msg">
          <img srcSet={avatarImage} className='msg-avatar-img m-1' alt="" />
          <div className="msg-text mx-2">
            <p className='msg-text-p'>Oh, the ending! It caught me completely off guard. I won't spoil it for you, but let's just say I had to take a moment to process everything. It was intense!</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div> */}
        {
        chat?.msg?.map((message)=>(
          <div className="msg own" key={message?.createdAt}>
          <div className="msg-text mx-2">
            {message.img && <img srcSet={msg_img} alt='' className='msg-img' />}
            <p className='msg-text-p'>{message.text}</p>
            {/* <span className='msg-timestamp'>1 min ago</span> */}
          </div>
        </div>
        ))
        }
        

        <div ref={endRef}></div>
      </div>
      <div className="bottom-level pt-2">
        <div className="m-3 d-flex align-items-center position-relative">
          <div className="icons mx-1">
            <i className="fa-regular fa-image mx-1"></i>
            <i className="fa-solid fa-video mx-2"></i>
            <i className="fa-solid fa-face-smile mx-1" onClick={() => { setemoji_mode(prev => !prev) }}></i>
            <div className="emoji-container">
              <EmojiPicker open={emoji_mode} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <div className='input-box mx-1'>
            <div className="my-input-box d-flex align-items-center">
              <input type="text" className='txt-my-chat mx-2' placeholder='Type message here....' value={text} onChange={e => setText(e.target.value)} />
            </div>
          </div>
          <div className='last-item'>
            <button type="button" className="btn btn-primary mx-1">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats
