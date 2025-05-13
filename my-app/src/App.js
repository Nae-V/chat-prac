import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import { useState } from 'react';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSend = (text) => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setMessages((prev) => [...prev, { type: 'user', text, time }]);

        setTimeout(() => {
            const reply = getBotReply(text);
            const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            setMessages((prev) => [...prev, { type: 'bot', text: reply, time: botTime }]);
        }, 1000);
    };

    const getBotReply = (text) => {
        const msg = text.toLowerCase();
        if (msg.includes('안녕')) return '안녕~ 반가워!';
        if (msg.includes('이름')) return '나는 심심이야 🤖';
        if (msg.includes('심심해')) return '그럼 나랑 놀자!';
        return '음... 그건 잘 모르겠어 😅';
    };

    return (
        <div className="App">
            <Header></Header>

            <Main messages={messages}></Main>

            <Footer onSend={handleSend}></Footer>
        </div>
    );
}

export default App;
