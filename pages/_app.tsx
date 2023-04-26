import Header from "@/components/Header";
import CursorAnimation from "@/components/cursor-animation";
import Loader from "@/components/loader";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const [isLoaidng, setLoading] = useState(true);

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
    <AnimatePresence>
      {isLoaidng ? (
        <motion.div
          inlist={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <CursorAnimation />
          <Header path={path} handleNavigation={handleNavigation} />
          <Component
            handleNavigation={handleNavigation}
            path={path}
            {...pageProps}
          />
        </>
      )}
    </AnimatePresence>
  );
}
