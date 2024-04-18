import './App.css';
import Chats from './componants/Chats';
import Details from './componants/Details';
import List from './componants/List';


function App() {
  return (
    // <div className="App">
    //   <div className="row">
    //     <div className="col-md-3"><List /></div>

    //     <div className="col-md-6 item-2"><Chats /></div>

    //     <div className="col-md-3 item-3"><Details /></div>
    //   </div>
    // </div>
    <div className="App">
      <div className="d-flex">
        <div className="item-1"><List /></div>
        <div className="item-2"><Chats /></div>
        <div className="item-3"><Details /></div>
      </div>
    </div>
  );
}

export default App;
