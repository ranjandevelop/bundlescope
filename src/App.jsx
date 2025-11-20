import { useEffect, useState } from "react";
import "./App.css";

// Custom Hooks
import { useBundleSearch } from "./hooks/useBundleSearch";

function App() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useBundleSearch(query);

  return (
    <>
      <h1>Bundle Scope</h1>
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
      <div className="">
        {data.map((info) => (
          <li key={info.name}>
            <span>{info.name}</span> - <span>v{info.version}</span>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
