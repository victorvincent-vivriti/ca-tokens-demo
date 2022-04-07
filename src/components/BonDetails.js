import React from "react";
import BondCard from "./BondCard";

const BondDetails = () => {
    return (
        <>
            <div className="bond-details">
                <h4 className="card-title bond-details-card">Explore Bonds</h4>

                <div className="bond-detail-pills">
                    <div className="pill-item active">Exclusive Bonds</div>
                    <div className="pill-item">Last Added</div>
                    <div className="pill-item">High Rated</div>
                    <div className="pill-item">High Yield</div>
                    <div className="pill-item">Short Tenure</div>
                    <div className="pill-item">MLD Bonds</div>
                    <div className="pill-item">Perpetual Bonds</div>
                </div>

                <div className="bond-cards">
                    <BondCard />
                    <BondCard />
                    <BondCard />
                    <BondCard />
                    <BondCard />
                </div>
            </div>
        </>
    );
};

export default BondDetails;
