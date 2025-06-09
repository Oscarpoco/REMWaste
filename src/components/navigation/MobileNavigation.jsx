import React, { useState } from 'react';



// IMPORTING STYLING
import '../../styles/MobileNavigation.css';

function Mobile({activeItem, setActiveItem, navItems}) {

    return (
        <nav className="mobile-desktop-nav">
            <div className="mobile-nav-container">

                <div className="mobile-nav-items">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`mobile-nav-item ${activeItem === item.id ? 'mobile-active' : ''}`}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <IconComponent size={20} />
                                <span className="mobile-nav-label">{item.label}</span>
                                {activeItem === item.id && <div className="mobile-active-indicator"></div>}
                            </button>
                        );
                    })}
                </div>

            </div>
        </nav>
    );
}


// MAKING MY FUNCTION AVAILABLE FOR IMPORTS
export default Mobile;