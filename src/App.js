import "./App.css";
import CAAppBar from "./components/AppBar";
import DealCard from "./components/DealCard";
import BondDetails from "./components/BonDetails";

function App() {
    return (
        <div className="container">
            <CAAppBar />

            <section className="content">
                <DealCard />
                <BondDetails />

                <BondDetails />
            </section>
        </div>
    );
}

export default App;
