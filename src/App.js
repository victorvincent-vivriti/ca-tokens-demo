import "./App.css";
import CAAppBar from "./components/AppBar";
import DealCard from "./components/DealCard";
import BondDetails from "./components/BonDetails";
import { ThemeProvider } from "./providers/ThemeProvider/ThemeProvider";

function App() {
    return (
        <ThemeProvider theme="light">
            <div className="container">
                <CAAppBar />

                <section className="content">
                    <DealCard />
                    <BondDetails />

                    <BondDetails />
                </section>
            </div>
        </ThemeProvider>
    );
}

export default App;
