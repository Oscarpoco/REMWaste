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
import '../../styles/MobileNavigation.css';

function Mobile() {
    const [activeItem, setActiveItem] = useState('skip');

    const navItems = [
        { id: 'postcode', label: 'Postode', icon: MapPin },
        { id: 'waste', label: 'Waste', icon: Trash2 },
        { id: 'skip', label: 'Skip', icon: Truck },
        { id: 'permit', label: 'Permit', icon: BadgeCheck },
        { id: 'date', label: 'Date', icon: Calendar },
        { id: 'payment', label: 'Payment', icon: CreditCard },
    ];

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