// Components
import { Container, Footer, Header } from "../../components/index";
import BundleScope from "../../components/BundleScope/BundleScope";
import Notification from "../../components/Notification/Notification";
import { Outlet, useParams } from "react-router-dom";

const Home = () => {
  console.log(useParams());
  return (
    <Container>
      {/* <Notification /> */}
      {/* <Header /> */}
      {/* <BundleScope /> */}
      <Outlet />
    </Container>
  );
};

export default Home;
