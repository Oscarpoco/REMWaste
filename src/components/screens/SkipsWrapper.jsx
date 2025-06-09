import React, { useState, useEffect } from 'react';
import axios from 'axios';

// IMPORTING STYLING
import './SkipsWrapper.css';

// COMPONENTS
import Desktop from '../navigation/DesktopNavigation';
import Mobile from '../navigation/MobileNavigation';
import Card from '../cards/Cards';

// ICONS
import {
    MapPin,
    Trash2,
    Truck,
    BadgeCheck,
    Calendar,
    CreditCard
} from 'lucide-react';

function SkipScreen() {
    const [activeItem, setActiveItem] = useState('skip');
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSkipSelected, setIsSkipSelected] = useState(false);
    const [selectedSkip, setSelectedSkip] = useState(null);

    const navItems = [
        { id: 'postcode', label: 'Postcode', icon: MapPin },
        { id: 'waste', label: 'Waste', icon: Trash2 },
        { id: 'skip', label: 'Skip', icon: Truck },
        { id: 'permit', label: 'Permit', icon: BadgeCheck },
        { id: 'date', label: 'Date', icon: Calendar },
        { id: 'payment', label: 'Payment', icon: CreditCard },
    ];

    // FETCH SKIPS DATA WHEN SKIP SECTION IS ACTIVE
    useEffect(() => {
        if (activeItem === 'skip') {
            fetchSkips();
        } else if (activeItem !== 'skip') {
            handleCancelSelection();
        }
    }, [activeItem]);


    const fetchSkips = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_BASE_URL}/skips/by-location?postcode=NR32&area=Lowestoft`
            );
            setSkips(response.data);
        } catch (err) {
            setError('Failed to load skips. Please try again.');
            console.error('Error fetching skips:', err);
        } finally {
            setLoading(false);
        }
    };

    // HANDLE SKIP SELECTION
    const handleSkipSelect = (skip) => {
        setSelectedSkip(skip);
        setIsSkipSelected(true);
    };

    // HANDLE CANCEL SELECTION
    const handleCancelSelection = () => {
        setSelectedSkip(null);
        setIsSkipSelected(false);
    };

    // HANDLE CONTINUE WITH SELECTION
    const handleContinueWithSelection = () => {
        if (selectedSkip) {
            // MOVE TO NEXT STEP (PERMIT)
            setActiveItem('permit');
            setSelectedSkip(null);
            setIsSkipSelected(false);
        }
    };

    const renderContent = () => {
        switch (activeItem) {
            case 'postcode':
                return (
                    <div className="content-section">
                        <h2>Enter Your Postcode</h2>
                    </div>
                );

            case 'waste':
                return (
                    <div className="content-section">
                        <h2>What Waste Are You Disposing?</h2>
                    </div>
                );

            case 'skip':
                return (
                    <div className="content-section">
                        <div className="section-header">
                            <h2>Choose Your Skip Size</h2>
                            <p>Select the skip size that best suits your needs</p>
                        </div>

                        {loading && (
                            <div className="loading-container">
                                <div className="loading-spinner"></div>
                                <p>Loading available skips...</p>
                            </div>
                        )}

                        {error && (
                            <div className="error-container">
                                <h3>Oops! Something went wrong</h3>
                                <p>{error}</p>
                                <button onClick={fetchSkips} className="retry-button">
                                    Try Again
                                </button>
                            </div>
                        )}

                        {!loading && !error && skips.length > 0 && (
                            <div className="skip-cards-container">
                                {skips.map((skip) => (
                                    <Card
                                        key={skip.id}
                                        skip={skip}
                                        onSelect={handleSkipSelect}
                                        isSelected={selectedSkip && selectedSkip.id === skip.id}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'permit':
                return (
                    <div className="content-section">
                        <h2>Skip Permit Information</h2>
                        {selectedSkip && (
                            <div className="selected-skip-info">
                                <p>Selected: {selectedSkip.size} Yard Skip</p>
                            </div>
                        )}
                    </div>
                );

            case 'date':
                return (
                    <div className="content-section">
                        <h2>Select Your Delivery Date</h2>
                    </div>
                );

            case 'payment':
                return (
                    <div className="content-section">
                        <h2>Payment Details</h2>
                    </div>
                );

            default:
                return (
                    <div className="content-section">
                        <h2>Welcome to Skip Hire</h2>
                        <p>Use the navigation to get started with your skip hire booking.</p>
                    </div>
                );
        }
    };

    return (
        <div className='Parent'>
            {/* DESKTOP NAVIGATION */}
            <nav className='Top-nav'>
                <Desktop
                    activeItem={activeItem}
                    navItems={navItems}
                    setActiveItem={setActiveItem}
                />
            </nav>

            {/* MAIN CONTENT */}
            <main className='Main-content'>
                {renderContent()}
            </main>

            {/* MOBILE NAVIGATION */}
            <nav className='Bottom-nav'>
                <Mobile
                    activeItem={activeItem}
                    navItems={navItems}
                    setActiveItem={setActiveItem}
                />
            </nav>

            {/* SELECTED SKIP NAVIGATION */}
            {isSkipSelected && (
                <div className='selectedSkipNav'>
                    <button
                        className='cancel-btn'
                        onClick={handleCancelSelection}
                    >
                        Cancel
                    </button>
                    <div className='selected-skip-info'>
                        <span className='skip-size'>
                            {selectedSkip?.size} Yard Skip
                        </span>
                        <span className='skip-price-nd'>
                            £{Math.round(selectedSkip?.price_before_vat * (1 + selectedSkip?.vat / 100))}
                        </span>
                    </div>
                    <button
                        className='continue-btn'
                        onClick={handleContinueWithSelection}
                    >
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}

// MAKING MY FUNCTION AVAILABLE FOR IMPORTS
export default SkipScreen;