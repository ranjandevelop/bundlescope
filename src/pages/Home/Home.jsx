// Components
import { Container, Footer, Header } from "../../components/index";
import BundleScope from "../../components/BundleScope/BundleScope";
import Notification from "../../components/Notification/Notification";

const Home = () => {
  return (
    <Container>
      <Notification />
      <Header />
      <BundleScope />
    </Container>
  );
};

export default Home;
