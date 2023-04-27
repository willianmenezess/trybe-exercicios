import './App.css';
import { useState } from 'react';
import List from './components/List';
import messagesList from './data/messagesList';

function App() {
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (id, newStatus) => {
    const newMessages = messages.map((message) => {
      if (message.id === id) {
        return { 
          ...message, 
          status: newStatus,
        };
      }
      return message;
    });
    setMessages(newMessages);
  }
  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <List
      messages={messages}
      setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
