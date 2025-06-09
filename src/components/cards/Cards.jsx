
import './Cards.css';
import skipImage from '../../assets/skip.jpg'

function Card({ skip, onSelect, isSelected = false }) {
  // CALCULATE TOTAL PRICE INCLUDING VAT
  const calculatePriceWithVat = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const totalPrice = calculatePriceWithVat(skip.price_before_vat, skip.vat);

  // HANDLE SKIP SELECTION
  const handleSelect = () => {
    onSelect(skip);
  };

  return (
    <div className={`skip-card ${isSelected ? 'selected' : ''}`}>
      {/* SKIP IMAGE SECTION */}
      <div className="skip-image-container">
        <img 
          src={skipImage} 
          alt={`${skip.size} Yard Skip`} 
          className="skip-image"
        />
        <div className="skip-size-badge">
          {skip.size} Yards
        </div>
        {/* SELECTION INDICATOR */}
        {isSelected && (
          <div className="selection-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      
      {/* SKIP CONTENT SECTION */}
      <div className="skip-content">
        <h3 className="skip-title">{skip.size} Yard Skip</h3>
        <p className="skip-period">{skip.hire_period_days} day hire period</p>
        
        {/* FEATURE BADGES */}
        <div className="skip-features">
          {skip.allowed_on_road && (
            <span className="feature-badge road-allowed">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L21 12M21 12L15 6M21 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Road Allowed
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="feature-badge heavy-waste">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Heavy Waste OK
            </span>
          )}
        </div>
        
        {/* PRICE DISPLAY */}
        <div className="skip-price">
          <span className="currency">£</span>
          <span className="amount">{totalPrice}</span>
          <span className="vat-info">inc. VAT</span>
        </div>
        
        {/* SELECTION BUTTON */}
        <button 
          className={`select-button ${isSelected ? 'selected' : ''}`}
          onClick={handleSelect}
        >
          {isSelected ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Selected
            </>
          ) : (
            <>
              Select This Skip
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;