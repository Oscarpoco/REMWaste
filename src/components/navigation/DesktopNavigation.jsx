import React, { useState } from 'react';
import {
    MapPin,
    Trash2,
    Truck,
    BadgeCheck,
    Calendar,
    CreditCard
} from 'lucide-react';


// IMPORTING STYLING
import '../../styles/DesktopNavigation.css';

function Desktop() {
    const [activeItem, setActiveItem] = useState('skip');

    const navItems = [
        { id: 'postcode', label: 'Postcode', icon: MapPin },
        { id: 'waste', label: 'Waste', icon: Trash2 },
        { id: 'skip', label: 'Skip', icon: Truck },
        { id: 'permit', label: 'Permit', icon: BadgeCheck },
        { id: 'date', label: 'Date', icon: Calendar },
        { id: 'payment', label: 'Payment', icon: CreditCard },
    ];

    return (
        <nav className="desktop-nav">
            <div className="nav-container">
                {/* Logo Section */}
                <div className="nav-logo">
                    <div className="logo-icon">
                        <div className="logo-gradient"></div>
                    </div>
                    <span className="logo-text">SKIP-HIRE</span>
                </div>

                {/* Navigation Items */}
                <div className="nav-items">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <IconComponent size={20} />
                                <span className="nav-label">{item.label}</span>
                                {activeItem === item.id && <div className="active-indicator"></div>}
                            </button>
                        );
                    })}
                </div>

            </div>
        </nav>
    );
}

// MAKING MY FUNCTION AVAILABLE FOR IMPORTS
export default Desktop;