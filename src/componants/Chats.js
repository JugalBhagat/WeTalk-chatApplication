import React, { useState } from 'react'
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
  console.log(text);
  return (
    <div className='position-relative'>
      <div className="top-level  d-flex align-items-center">
        <div className="img m-3">
          <img srcSet={avatarImage} className='top-chat-img' alt="" />
        </div>
        <div className="chat-item-detail m-3 w-75">
          <h5>Lokesh</h5>
          <p>Last seen 10 min ago</p>
        </div>
        <div className='chat-item-icons'>
          <i class="fa-solid fa-circle-info fa-lg"></i>
        </div>
      </div>
      <div className="mid-level pb-2">
        <div className="msg">
          <img srcSet={avatarImage} className='msg-avatar-img m-2' alt="" />
          <div className="msg-text mx-2">
            <p className='msg-text-p'>HEllo dsfdsmf skdbhdshjbds hg dusuhdsyudsfhdsbfjhsbdjfvsdgjfvdgsvfgsvfghsd su fdgsf gsdf dgsjf gs gfjds</p>
            <span className='msg-timestamp'>1 min ago</span></div>
        </div>
        <div className="msg own">
          <div className="msg-text mx-2">
            <img srcSet={msg_img} alt='' className='msg-img' />
            <p className='msg-text-p'>My msgsdgj sn eigsdhbgsdhb gihdsbg idsg bdskgbk</p>
            <span className='msg-timestamp'>1 min ago</span></div>
        </div>
        
        <div className="msg">
          <img srcSet={avatarImage} className='msg-avatar-img m-2' alt="" />
          <div className="msg-text mx-2">
            <p className='msg-text-p'>HEllo</p>
            <span className='msg-timestamp'>1 min ago</span></div>
        </div>
        
      </div>
      <div className="bottom-level pt-2">
        <div className="m-3 d-flex align-items-center position-relative">
          <div className="icons mx-1">
            <i class="fa-regular fa-image mx-1"></i>
            <i class="fa-solid fa-video mx-2"></i>
            <i class="fa-solid fa-face-smile mx-1" onClick={() => { setemoji_mode(prev => !prev) }}></i>
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
            <button type="button" class="btn btn-primary mx-1">Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats
