import React from "react";

const DealCard = () => {
    return (
        <>
            <h4 className="card-title deal-card-title">
                Deal Collection Efficiency
            </h4>
            <div className="deal-card">
                <div className="deal-item">
                    <h3>₹63 Cr</h3>
                    <p className="text-muted">Initial Pool Principal</p>
                </div>

                <div className="deal-item">
                    <h3>₹28 Cr</h3>
                    <p className="text-muted">O/S Pool Principal</p>
                </div>

                <div className="deal-item">
                    <h3>97.5%</h3>
                    <p className="text-muted">
                        Cumilative Collection Efficiency
                    </p>
                </div>

                <div className="deal-item">
                    <h3>95.2%</h3>
                    <p className="text-muted">Periodic Collection Efficiency</p>
                </div>

                <div className="deal-item">
                    <h3>₹33 Cr</h3>
                    <p className="text-muted">Total O/S</p>
                </div>
            </div>
        </>
    );
};

export default DealCard;
