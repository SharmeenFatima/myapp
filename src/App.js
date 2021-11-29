import logo from './logo.svg';
import './App.css';
import Messenger from './Components/messenger/Messenger';
import Conversation from './Components/conversation/Conversation'
import Message from "./Components/message/Message";


function App() {
  return (
    <div>
    <Messenger/>
    <Conversation/>
    <Message/>
  
    
    </div>
  );
}

export default App;
