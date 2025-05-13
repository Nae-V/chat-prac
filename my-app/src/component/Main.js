import React, { useEffect, useRef } from 'react';
import './Main.css';

const Main = ({ messages }) => {
    console.log(messages);

    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <main className="chat-window">
            {messages.map((msg, idx) => (
                <div key={idx} className={msg.type === 'user' ? 'mymsg' : 'botmsg'}>
                    <div className="msg-wrapper">
                        <div className={msg.type === 'user' ? 'mymsg__msg' : 'botmsg__msg'}>{msg.text}</div>
                        <div className="msg-time">{msg.time}</div>
                    </div>
                </div>
            ))}
            <div ref={bottomRef}></div>
        </main>
    );
};

export default Main;
