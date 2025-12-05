import { useEffect, useState } from "react";

// bundlescope
export default function useBundleScope({ name, version }) {
  const [packageData, setPackageData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!name || !version) return;

    const packageVersion = version || "latest";
    const api = `https://registry.npmjs.com/${encodeURIComponent(
      name
    )}/${encodeURIComponent(packageVersion)}`;

    setLoading(true);
    setError(null);
    // API call for the package data
    fetch(api)
      .then((response) => {
        if (!response.ok) throw new Error("HTTP Error" + response.status);
        return response.json();
      })
      .then((data) => setPackageData(data))
      .catch((error) => setError(error.message || "Something went wrong."))
      .finally(() => setLoading(false));
  }, [name, version]);
  return { packageData, loading, error };
}
