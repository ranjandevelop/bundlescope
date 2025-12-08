import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Hooks
import useBundleScope from "../../hooks/useBundleScope";

// GraphChart
import Apexcharts from "../../components/ReactApexChart/Apexcharts";

const Package = () => {
  const { pathname } = useLocation();
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const { packageData, loading, error } = useBundleScope({ name, version });
  const [monthlyDownloads, setMonthlyDownloads] = useState("");
  const [weeklyDownloads, setWeeklyDownloads] = useState("");

  const [minified, setMinified] = useState({});

  console.log("data", minified);

  // const {}
  // Set the bundle name
  useEffect(() => {
    const temp = pathname.replace("/package/", "");
    const temp1 = temp.split("/");
    const version1 = temp1.pop();
    const name1 = temp1.join("/");
    setName(name1);
    setVersion(version1);
  }, [pathname]);
  // Monthly Downloads data
  useEffect(() => {
    if (!name) return;

    fetch(`https://api.npmjs.org/downloads/point/last-month/${name}`)
      .then((response) => response.json())
      .then((data) => setMonthlyDownloads(data.downloads))
      .catch((error) => console.log(error));
  }, [name]);
  // Weekly downloads data
  useEffect(() => {
    if (!name) return;

    fetch(`https://api.npmjs.org/downloads/point/last-week/${name}`)
      .then((response) => response.json())
      .then((data) => setWeeklyDownloads(data.downloads))
      .catch((error) => console.log(error));
  }, [name]);

  // Minified and Gzip
  useEffect(() => {
    if (!name) return;
    fetch(`https://bundlephobia.com/api/size?package=${name}`)
      .then((response) => response.json())
      .then((data) =>
        setMinified({
          minified: data.size,
          gzip: data.gzip,
        })
      );
  }, [name]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 inset-x-0 flex lg:ps-65 flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 flex items-center">
            <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
              <span className="py-4 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 border">
                {name} @ {version}
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="w-full lg:h-screen bg-neutral-900 lg:px-65">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Downlaods */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Last Month Downloads
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {monthlyDownloads}
                  </h3>
                </div>
              </div>
            </div>

            {/* unpackedSize */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    unpackedSize
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.unpackedSize} KB
                  </h3>
                </div>
              </div>
            </div>

            {/* fileCount */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    fileCount
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.fileCount}
                  </h3>
                </div>
              </div>
            </div>

            {/* license */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    license
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {packageData.license}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 ">
            {/* Montlhly donwloads graphs */}
            <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div>
                  <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                    Downloads
                  </h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    {monthlyDownloads}
                  </p>
                </div>
              </div>

              <Apexcharts mode="light" />
            </div>

            {/* BundlePhobia */}
            <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 gap-4 sm:gap-6">
              {/* Card */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Minified Size
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      {Math.floor((minified.minified / 1024) * 100) / 100} kB
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card */}
              <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Minified + Gzipped size
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      {Math.floor((minified.gzip / 1024) * 100) / 100} kB
                    </h3>
                  </div>
                </div>
              </div>

              {/* Home Page */}
              <a
                href={packageData.homepage}
                target="_blank"
                className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Visit
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      Home Page
                    </h3>
                  </div>
                </div>
              </a>

              {/* Github */}
              <a
                href={packageData.github}
                target="_blank"
                className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-900"
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                      Visit
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                      Github
                    </h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Content */}

      {/* JS Implementing Plugins */}

      {/* <script src="../assets/vendor/preline/dist/index.js"></script>
    <script src="../assets/vendor/lodash/lodash.min.js"></script>
    <script src="../assets/vendor/apexcharts/dist/apexcharts.min.js"></script>
    <script src="../assets/vendor/preline/dist/helper-apexcharts.js"></script>

    <script>
      window.addEventListener("load", () => {
        (function () {
          buildChart(
            "#hs-multiple-bar-charts",
            (mode) => ({
              chart: {
                type: "bar",
                height: 300,
                toolbar: {
                  show: false,
                },
                zoom: {
                  enabled: false,
                },
              },
              series: [
                {
                  name: "Chosen Period",
                  data: [
                    23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000,
                    66000, 34000, 78000,
                  ],
                },
                {
                  name: "Last Period",
                  data: [
                    17000, 76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000,
                    94000, 67000, 66000,
                  ],
                },
              ],
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "16px",
                  borderRadius: 0,
                },
              },
              legend: {
                show: false,
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                show: true,
                width: 8,
                colors: ["transparent"],
              },
              xaxis: {
                categories: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                crosshairs: {
                  show: false,
                },
                labels: {
                  style: {
                    colors: "#9ca3af",
                    fontSize: "13px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                  },
                  offsetX: -2,
                  formatter: (title) => title.slice(0, 3),
                },
              },
              yaxis: {
                labels: {
                  align: "left",
                  minWidth: 0,
                  maxWidth: 140,
                  style: {
                    colors: "#9ca3af",
                    fontSize: "13px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                  },
                  formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
                },
              },
              states: {
                hover: {
                  filter: {
                    type: "darken",
                    value: 0.9,
                  },
                },
              },
              tooltip: {
                y: {
                  formatter: (value) =>
                    `$${value >= 1000 ? `${value / 1000}k` : value}`,
                },
                custom: function (props) {
                  const { categories } = props.ctx.opts.xaxis;
                  const { dataPointIndex } = props;
                  const title = categories[dataPointIndex];
                  const newTitle = `${title}`;

                  return buildTooltip(props, {
                    title: newTitle,
                    mode,
                    hasTextLabel: true,
                    wrapperExtClasses: "min-w-28",
                    labelDivider: ":",
                    labelExtClasses: "ms-2",
                  });
                },
              },
              responsive: [
                {
                  breakpoint: 568,
                  options: {
                    chart: {
                      height: 300,
                    },
                    plotOptions: {
                      bar: {
                        columnWidth: "14px",
                      },
                    },
                    stroke: {
                      width: 8,
                    },
                    labels: {
                      style: {
                        colors: "#9ca3af",
                        fontSize: "11px",
                        fontFamily: "Inter, ui-sans-serif",
                        fontWeight: 400,
                      },
                      offsetX: -2,
                      formatter: (title) => title.slice(0, 3),
                    },
                    yaxis: {
                      labels: {
                        align: "left",
                        minWidth: 0,
                        maxWidth: 140,
                        style: {
                          colors: "#9ca3af",
                          fontSize: "11px",
                          fontFamily: "Inter, ui-sans-serif",
                          fontWeight: 400,
                        },
                        formatter: (value) =>
                          value >= 1000 ? `${value / 1000}k` : value,
                      },
                    },
                  },
                },
              ],
            }),
            {
              colors: ["#2563eb", "#d1d5db"],
              grid: {
                borderColor: "#e5e7eb",
              },
            },
            {
              colors: ["#6b7280", "#2563eb"],
              grid: {
                borderColor: "#404040",
              },
            }
          );
        })();
      });
    </script> */}
    </>
  );
};

export default Package;
