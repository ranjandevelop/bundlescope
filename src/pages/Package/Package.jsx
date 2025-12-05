// Components

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useBundleScope from "../../hooks/useBundleScope";

const Package = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const { packageData, loading, error } = useBundleScope({ name, version });
  console.log(packageData, loading, error);

  // const {}

  useEffect(() => {
    const temp = pathname.replace("/package/", "");
    const temp1 = temp.split("/");
    const version1 = temp1.pop();
    const name1 = temp1.join("/");
    setName(name1);
    setVersion(version1);
  }, [pathname]);

  return (
    <>
      <h1>{name},package.</h1>
      <h2>v{version}</h2>
      {/* <span>
        {packageData.map((d) => (
          <>
            <span>{d}</span>
          </>
        ))}
      </span> */}
    </>
  );
};

export default Package;
