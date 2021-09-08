import Head from "next/head";
import { useState, useEffect } from "react";

import BackgroundMe from "../components/BackgroundMe";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

export default function Home() {
  const [swipeText, setSwipeText] = useState(0);

  useEffect(() => {
    const swipeTimeout = setTimeout(() => {
      setSwipeText((prevSwipeText) => {
        if (prevSwipeText < 3) return prevSwipeText + 1;
        return 0;
      });
    }, 3000);

    return () => clearTimeout(swipeTimeout);
  }, [swipeText]);

  return (
    <>
      <Head>
        <title>Muhammad Naufal Hilmy Makarim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen bg-gray-900">
        <BackgroundMe />
        <LeftBar />
        <RightBar />
        <div className="absolute top-2/3 left-2/4 -translate-x-2/4 opacity-1 font-sans font-bold text-white tracking-widest uppercase">
          <h1 className="text-2xl">Hi there! 👋</h1>
          <div className="flex gap-x-2 h-10 text-4xl my-4 overflow-hidden">
            <h3>I'm </h3>
            <span
              className={`transition-transform duration-700 -translate-y-${
                swipeText * 10
              }`}
            >
              <p>Muhammad Naufal Hilmy Makarim</p>
              <p>an Electrical Engineering student</p>
              <p>a developer</p>
              <p>an ardent Linux user</p>
            </span>
          </div>
          <h4>Let's get in touch 😉</h4>
        </div>
      </main>

      {/* Workaround so that the css module is loaded */}
      <span className="hidden -translate-y-0 -translate-y-10 -translate-y-20 -translate-y-30"></span>
    </>
  );
}
