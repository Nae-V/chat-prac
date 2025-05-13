import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="menu-bar">
                <div className="menu-bar__icons">
                    <img src="/png/arrow-left.svg" alt="뒤로가기" />
                </div>
                <div className="menu-bar__user">
                    <div className="menu-bar__user-top">
                        <div className="menu-bar__user-name">심심한 대화방</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
