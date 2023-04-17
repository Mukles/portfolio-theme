import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  const handleNavigation = (sectionName: string) => {
    setPath(`#${sectionName}`);
    window.location.hash = `#${sectionName}`;
  };

  useEffect(() => {
    // Listen for changes to the hash value in the URL bar
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Header handleNavigation={handleNavigation} />
      <Component
        handleNavigation={handleNavigation}
        path={path}
        {...pageProps}
      />
    </>
  );
}
