import React from "react";

const BondCard = () => {
    return (
        <>
            <div className="bond-card">
                <h5>Shriram Transport Finance Compant Ltd</h5>
                <div className="caption text-muted">
                    #ISIN: INE0211993001R23
                </div>

                <div className="bond-pills">
                    <div className="pill-item">BBB IND-RA</div>
                    <div className="pill-item">NCD</div>
                    <div className="pill-item">Secured</div>
                    <div className="pill-item">Listed</div>
                </div>

                <div className="bond-card-details">
                    <div className="bond-detail-item">
                        <p className="text-muted">Expected Yield</p>
                        <h5>22% p.a</h5>
                    </div>

                    <div className="bond-detail-item">
                        <p className="text-muted">Total Amount</p>
                        <h5>₹50.34 Cr</h5>
                    </div>

                    <div className="bond-detail-item">
                        <p className="text-muted">Maturity Date</p>
                        <h5>22nd Dec, 2022</h5>
                    </div>
                </div>

                <div className="bond-actions">
                    <button className="ca-btn btn-bid">BID</button>
                    <button className="ca-btn btn-trade">TRADE</button>
                </div>
            </div>
        </>
    );
};

export default BondCard;
