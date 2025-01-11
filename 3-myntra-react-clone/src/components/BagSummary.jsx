const BagSummary = ({finalItems}) => {
  const BagSummary = {
    totalItem: finalItems.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  const CONVINIENCE_FEES = 99;

  finalItems.map(item => {
    BagSummary.totalMRP += item.original_price,
    BagSummary.totalDiscount += item.original_price - item.current_price
  })

  BagSummary.finalPayment = BagSummary.totalMRP -BagSummary.totalDiscount + CONVINIENCE_FEES;

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({BagSummary.totalItem} Items){" "}
          </div>

          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{BagSummary.totalMRP}</span>
          </div>

          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{BagSummary.totalDiscount}
            </span>
          </div>

          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{CONVINIENCE_FEES}</span>
          </div>

          <hr />

          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{BagSummary.finalPayment}</span>
          </div>
        </div>

        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};

export default BagSummary;
