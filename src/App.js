import './App.css';
import Chats from './componants/Chats';
import React, { useEffect, useState } from 'react';
import Details from './componants/Details';
import List from './componants/List';
import Signup from './componants/signup';
import Notification from './componants/notification';
import LoadingBar from 'react-top-loading-bar'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import useUserStore from './lib/userStore';
import loading from './componants/loading.gif';
import useChatStore from './lib/chatStore';

function App() {
  const [progress, setProgress] = useState(0);

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      fetchUserInfo(user ? user.uid : null);
    })
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div className="text-center user-loading">
      <img src={loading} alt="Loading..." className="loading-gif" width={40} />
    </div>
  }

  return (
    <>
      <div className="App">
        <div className="d-flex">
          {currentUser ? (
            <>
              <div className="item-1"><List /></div>
              {chatId && <div className="item-2"><Chats /></div>}
              {chatId && <div className="item-3"><Details /></div>}
            </>) :
            (
              <>
                <LoadingBar color='#f11946' progress={progress} height={4} />
                <Signup setProgress={setProgress} />
              </>
            )}
          <Notification />
        </div>
      </div>
    </>
  );
}

export default App;
