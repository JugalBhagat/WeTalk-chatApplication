import React, { useEffect, useRef, useState } from 'react'
import avatarImage from '../images/avatar3.png';
import msg_img from '../images/bg.jpg';
import EmojiPicker from 'emoji-picker-react';

function Chats() {
  const [emoji_mode, setemoji_mode] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setemoji_mode(false);
  }

  const endRef=useRef(null);
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  console.log(text);
  return (
    <div className='position-relative'>
      <div className="top-level  d-flex align-items-center">
        <div className="img m-3">
          <img srcSet={avatarImage} className='top-chat-img' alt="" />
        </div>
        <div className="chat-item-detail m-3 w-75">
          <h5>Abc Def</h5>
          <p>Last seen 10 min ago</p>
        </div>
        <div className='chat-item-icons'>
          <i className="fa-solid fa-circle-info fa-lg"></i>
        </div>
      </div>
      <div className="mid-level pb-2">

        <div className="msg">
          <img srcSet={avatarImage} className='msg-avatar-img m-1' alt="" />
          <div className="msg-text mx-2">
            <p className='msg-text-p'>Oh, the ending! It caught me completely off guard. I won't spoil it for you, but let's just say I had to take a moment to process everything. It was intense!</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div>

        <div className="msg own">
          <div className="msg-text mx-2">
            <img srcSet={msg_img} alt='' className='msg-img' />
            <p className='msg-text-p'>Really? I'm glad you liked it! What did you think of the ending?</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div>

        <div className="msg">
          <img srcSet={avatarImage} className='msg-avatar-img m-1' alt="" />
          <div className="msg-text mx-2">
            <p className='msg-text-p'>Same here, work has been keeping me on my toes. But hey, I finally managed to finish that book you recommended, and oh boy, it was a rollercoaster!</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div>

        <div className="msg own">
          <div className="msg-text mx-2">
            <p className='msg-text-p'>Emma! I know, it feels like forever. I've been good, busy with work mostly. How about you?</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div>

        <div className="msg own">
          <div className="msg-text mx-2">
            <p className='msg-text-p'> Hey Alex, it's been ages since we last caught up! How have you been?</p>
            <span className='msg-timestamp'>1 min ago</span>
          </div>
        </div>
        
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
