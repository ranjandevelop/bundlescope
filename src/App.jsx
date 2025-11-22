import "./App.css";

// Components
import { Container, Footer, Header } from "./components/index";
import Hero from "./components/Hero/Hero";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <>
      <Container>
        <Notification />
        <Header />
        <Hero />
      </Container>

      {/*
      <div
        style={{
          border: "1px solid",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <input
          type={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter the package name"
        />
        {loading && <p>loading...</p>}
        {error && <p>error: {error}</p>}
      </div>
      <div className="border">
        {data.map((info) => (
          <li
            key={info.name}
            onClick={() => updateInput({ info })}
            style={{
              cursor: "pointer",
            }}
          >
            <span>{info.name}</span> - <span>v{info.version}</span>
          </li>
        ))}
      </div> */}
    </>
  );
}

export default App;
