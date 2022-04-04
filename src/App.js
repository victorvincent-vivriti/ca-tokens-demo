import "./App.css";
import Button from "./components/Button";
import { Container } from "@mui/material";

function App() {
    return (
        <>
            <div className="ca-app-bar">
                <span>Design Tokens Demo</span>
            </div>
            <Container
                fixed
                className="App"
                style={{
                    background: "#fff",
                    minHeight: "100vh",
                    padding: "24px",
                }}
            >
                <Button title="CTA" />
            </Container>
        </>
    );
}

export default App;
