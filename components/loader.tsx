import {
  animate,
  cubicBezier,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Loader = ({ setLoading }: Props) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const scale = useTransform(count, [0, 100], [1, 0.3], {
    ease: cubicBezier(0.17, 0.3, 0.9, 0.9),
  });
  const width = useTransform(count, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    const animateLoader = async () => {
      await animate(count, 100, {
        duration: 4,
      });

      await setLoading(false);
    };

    animateLoader();

    return () => count.stop();
  }, [count, scale, setLoading]);

  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black">
      <motion.div
        style={{ scale }}
        className="text-9xl font-black text-white text-center font-title -mt-4 z-20"
      >
        {rounded}
      </motion.div>
      <motion.div
        style={{ width }}
        initial={{ x: "-50%", y: "-50%" }}
        className="absolute top-1/2 left-1/2 h-px w-5 bg-white"
      />
    </div>
  );
};

export default Loader;
