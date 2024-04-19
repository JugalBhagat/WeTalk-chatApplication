import React,{useState} from 'react'
import avatarImage from '../images/avatar3.png';
import SharedImage from '../images/bg.jpg';

function Details() {
  const [sharedImage, setSharedImage] = useState(false);
  const [sharedFiles, setSharedFiles] = useState(false);
  const [ChatSetting, setChatSetting] = useState(false);

  const showSharedImage=()=>{
    setSharedImage((prev)=>!prev);
  }
  return (
    <div className="">
      <div className='detail-top'>                {/* Detail Top Section */}
        <div className="div-chat-avatar d-flex justify-content-center mt-3">
          <img srcSet={avatarImage} alt="Chat Avatar" className='details-chat-avatar' />
        </div>
        <div className="div-chat-avatar d-flex justify-content-center mt-1">
          <h3 className=''>Lokesh chaudhary</h3>
        </div>
        <div className="div-chat-avatar d-flex justify-content-center">
          <p>hello i am under the water please help</p>
        </div>
      </div>
      <div className="detail-bottom">
        <div className="option m-2 mt-4">        {/* Chat Setting */}
          <div className="d-flex mx-3  justify-content-between align-items-center">
            <span className='detail-option-text'>Chat setting</span>
            <i className={`fa-solid fa-lg download-icons ${ChatSetting ? 'fa-circle-chevron-up' : 'fa-circle-chevron-down'}`} onClick={()=>setChatSetting((prev)=>!prev)}></i>
          </div>
        </div>


        <div className="option m-2 mt-4">        {/* Shared Files */}
          <div className="d-flex mx-3  justify-content-between align-items-center">
            <span className='detail-option-text'>Shared Files</span>
            <i className={`fa-solid fa-lg download-icons ${sharedFiles ? 'fa-circle-chevron-up' : 'fa-circle-chevron-down'}`} onClick={()=>setSharedFiles((prev)=>!prev)}></i>
          </div>
        </div>


        <div className="option m-2 mt-4">        {/* Shared Images */}
          <div className="d-flex mx-3 justify-content-between align-items-center">
            <span className='detail-option-text'>Shared Images</span>
            <i className={`fa-solid fa-lg download-icons ${sharedImage ? 'fa-circle-chevron-up' : 'fa-circle-chevron-down'}`} onClick={showSharedImage}></i>
          </div>
          <div className="photos m-3" hidden={sharedImage ? false : true}>
            <div className="photo-item d-flex align-items-center justify-content-between ">
              <div className="photo-detail">
                <img srcSet={SharedImage} alt="Chat Avatar" className='detail-shared-pic ' />
                <span className='img-name mx-3'>photo1_2.jpg</span>
              </div>
              <i className="fa-solid  fa-download"></i>
            </div>
            <div className="photo-item d-flex align-items-center justify-content-between ">
              <div className="photo-detail">
                <img srcSet={SharedImage} alt="Chat Avatar" className='detail-shared-pic ' />
                <span className='img-name mx-3'>photo1_2.jpg</span>
              </div>
              <i className="fa-solid  fa-download"></i>
            </div>
          </div>
        </div>


        <div className="option m-2 mt-4">        {/* privacy policy */}
          <div className="d-flex mx-3  justify-content-between align-items-center">
            <span className='detail-option-text'>Privacy Policy</span>
            <i className="fa-solid fa-lg fa-circle-chevron-down "></i>
          </div>
        </div>


        <div className="buttons mt-4 m-3">       {/* Block Button */}
        <div class="d-grid gap-2 m-2">
          <button class="btn btn-danger" type="button">Block User</button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Details
