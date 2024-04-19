import './App.css';
import Chats from './componants/Chats';
import Details from './componants/Details';
import List from './componants/List';
import Signup from './componants/signup';
import Notification from './componants/notification';


function App() {
  const user = true;
  return (
    <div className="App">
      <div className="d-flex">
        {user ? (
            <>
              <div className="item-1"><List /></div>
              <div className="item-2"><Chats /></div>
              <div className="item-3"><Details /></div>
            </>) :
          (
              <Signup/>
          )}
          <Notification/>
      </div>
    </div>
  );
}

export default App;
