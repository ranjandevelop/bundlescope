// Custom Hooks
import { useState } from "react";
import { useBundleSearch } from "../../hooks/useBundleSearch";
const Hero = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useBundleSearch(query);
  function updateInput(info) {
    console.log(info.info.name, info.info.version);
    // setQuery(info.info.name + info.info.name);
  }
  return (
    <section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 xl:px-0 flex flex-col items-center text-center">
        <div class="items-center justify-center rounded-full text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] inline-flex bg-white text-neutral-700 px-2.5 py-1">
          Introducing BundleScope
        </div>
        <div class="bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-3xl font-semibold text-transparent lg:text-5xl mt-4 sm:mx-auto sm:w-2/3 lg:mt-6 lg:leading-tight xl:w-3/5">
          Find the Scope of Your Bundle
        </div>
        <div class="mt-8 flex w-full flex-col gap-y-2 sm:w-1/2 md:w-2/5 lg:mt-12 lg:flex-row lg:items-start lg:gap-x-4 lg:gap-y-0 xl:w-2/5">
          <div class="flex w-full flex-col">
            <div class="group relative rounded-xl border border-neutral-200 bg-white transition-all hover:bg-neutral-50 mb-1">
              <input
                id="email"
                name="email"
                type={query}
                onChange={(e) => setQuery(e.target.value)}
                class="font-medium w-full rounded-xl bg-transparent shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] text-sm placeholder:font-medium placeholder:text-sm text-neutral-700 focus-visible:outline-none focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] pl-10 pr-9 py-3 placeholder:text-neutral-300"
                placeholder="NPM Package Name"
              />
              <svg
                class="absolute top-1/2 -translate-y-1/2 left-0 flex h-5 items-center text-neutral-500 transition-all group-hover:text-neutral-400 group-focus:text-neutral-500 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </div>
            {loading ? (
              <div class="z-10 border rounded-lg shadow-lg w-[100%] lg:w-44">
                <p>Searching...</p>
              </div>
            ) : query.length < 2 ? (
              <div></div>
            ) : (
              <div class="z-10 border rounded-lg shadow-lgw-[100%]">
                <ul class="p-2 text-sm">
                  {data.map((info) => (
                    <li>
                      <a
                        href="#"
                        class="inline-flex items-center w-full p-2 hover:bg-slate-100 hover:text-heading rounded"
                      >
                        {info.name} v{info.version}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <a
            href="#"
            title="Get started"
            class="items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus:shadow-[0_0px_0px_2px_rgba(15,23,42,0.25),0_2px_10px_0px_rgba(0,0,0,0.05)] shadow-[0_2px_10px_0px_rgba(0,0,0,0.05)] bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-900/30 disabled:text-slate-50/70 px-5 py-3 rounded-xl flex"
          >
            npm search
            <svg
              class="shrink-0 ml-3 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
