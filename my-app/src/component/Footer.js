import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ onSend }) => {
    const [text, setText] = useState('');

    console.log(text);

    const handleSendClick = () => {
        const trimmed = text.trim();
        if (trimmed === '') return;

        onSend(text);
        setText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSendClick();
    };

    return (
        <footer>
            <div className="footer-bar">
                <div className="footer-bar__icons-plus">
                    <img src="/png/plus.svg" alt="" />
                </div>

                <div className="input-wrap">
                    <input type="text" className="chat" value={text} placeholder="메세지를 입력하세요." onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />
                    <img src="/png/smile.svg" alt="이모지" class="smile" />
                </div>

                <div className="footer-bar__icons-send" onClick={handleSendClick}>
                    <img src="/png/send.svg" alt="전송" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
