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
      {/* HEADER */}
      <header className="sticky top-0 inset-x-0 flex lg:ps-65 flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 flex items-center">
            <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3 ">
              <span className="py-4 ps-10 pe-16 block w-full bg-white border-gray-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 border">
                {name} @ {version}
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="w-full h-screen bg-neutral-900 lg:px-65">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Downlaods */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    downloads
                  </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    72,540
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
                    29.4%
                  </h3>
                </div>
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    tarball
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    56.8%
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Pageviews
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    92,913
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Total users
                  </p>
                  <div className="hs-tooltip">
                    <div className="hs-tooltip-toggle">
                      <svg
                        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700"
                        role="tooltip"
                      >
                        The number of daily users
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    72,540
                  </h3>
                  <span className="flex items-center gap-x-1 text-green-600">
                    <svg
                      className="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span className="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Sessions
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    29.4%
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Avg. Click Rate
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    56.8%
                  </h3>
                  <span className="flex items-center gap-x-1 text-red-600">
                    <svg
                      className="inline-block size-4 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    <span className="inline-block text-sm">1.7%</span>
                  </span>
                </div>
              </div>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    Pageviews
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    92,913
                  </h3>
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 border">
            {/* Card */}
            <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
              {/* Header */}
              {/* <div className="flex flex-wrap justify-between items-center gap-2">
                <div>
                  <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                    Income
                  </h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    $126,238.49
                  </p>
                </div>

                <div>
                  <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500">
                    <svg
                      className="inline-block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    25%
                  </span>
                </div>
              </div> */}
              {/* End Header */}

              <div id="hs-multiple-bar-charts"></div>
            </div>
            {/* End Card */}

            {/* Card */}
            {/* <div className="p-4 md:p-5 min-h-102.5 flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700"> */}
            {/* Header */}
            {/* <div className="flex flex-wrap justify-between items-center gap-2">
                <div>
                  <h2 className="text-sm text-gray-500 dark:text-neutral-500">
                    Visitors
                  </h2>
                  <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    80.3k
                  </p>
                </div>

                <div>
                  <span className="py-[5px] px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-md bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-500">
                    <svg
                      className="inline-block size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m19 12-7 7-7-7" />
                    </svg>
                    2%
                  </span>
                </div>
              </div> */}
            {/* End Header */}

            {/* <div id="hs-single-area-chart"></div> */}
            {/* </div> */}
            {/* End Card */}
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
    </script>
    <script>
      window.addEventListener("load", () => {
        (function () {
          buildChart(
            "#hs-single-area-chart",
            (mode) => ({
              chart: {
                height: 300,
                type: "area",
                toolbar: {
                  show: false,
                },
                zoom: {
                  enabled: false,
                },
              },
              series: [
                {
                  name: "Visitors",
                  data: [180, 51, 60, 38, 88, 50, 40, 52, 88, 80, 60, 70],
                },
              ],
              legend: {
                show: false,
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                curve: "straight",
                width: 2,
              },
              grid: {
                strokeDashArray: 2,
              },
              fill: {
                type: "gradient",
                gradient: {
                  type: "vertical",
                  shadeIntensity: 1,
                  opacityFrom: 0.1,
                  opacityTo: 0.8,
                },
              },
              xaxis: {
                type: "category",
                tickPlacement: "on",
                categories: [
                  "25 January 2023",
                  "26 January 2023",
                  "27 January 2023",
                  "28 January 2023",
                  "29 January 2023",
                  "30 January 2023",
                  "31 January 2023",
                  "1 February 2023",
                  "2 February 2023",
                  "3 February 2023",
                  "4 February 2023",
                  "5 February 2023",
                ],
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
                crosshairs: {
                  stroke: {
                    dashArray: 0,
                  },
                  dropShadow: {
                    show: false,
                  },
                },
                tooltip: {
                  enabled: false,
                },
                labels: {
                  style: {
                    colors: "#9ca3af",
                    fontSize: "13px",
                    fontFamily: "Inter, ui-sans-serif",
                    fontWeight: 400,
                  },
                  formatter: (title) => {
                    let t = title;

                    if (t) {
                      const newT = t.split(" ");
                      t = `${newT[0]} ${newT[1].slice(0, 3)}`;
                    }

                    return t;
                  },
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
              tooltip: {
                x: {
                  format: "MMMM yyyy",
                },
                y: {
                  formatter: (value) =>
                    `${value >= 1000 ? `${value / 1000}k` : value}`,
                },
                custom: function (props) {
                  const { categories } = props.ctx.opts.xaxis;
                  const { dataPointIndex } = props;
                  const title = categories[dataPointIndex].split(" ");
                  const newTitle = `${title[0]} ${title[1]}`;

                  return buildTooltip(props, {
                    title: newTitle,
                    mode,
                    valuePrefix: "",
                    hasTextLabel: true,
                    wrapperExtClasses: "min-w-28",
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
              colors: ["#2563eb", "#9333ea"],
              fill: {
                gradient: {
                  stops: [0, 90, 100],
                },
              },
              grid: {
                borderColor: "#e5e7eb",
              },
            },
            {
              colors: ["#3b82f6", "#a855f7"],
              fill: {
                gradient: {
                  stops: [100, 90, 0],
                },
              },
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
