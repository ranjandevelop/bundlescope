import "./App.css";

// Components
import { Container, Footer, Header } from "./components/index";
import BundleScope from "./components/BundleScope/BundleScope";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <>
      <Container>
        <Notification />
        <Header />
        <BundleScope />
      </Container>
    </>
  );
}

export default App;
