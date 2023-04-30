import { fadeInUp } from "@/animations/animate";
import { motion } from "framer-motion";
import { ReactNode } from "react";
fadeInUp;

interface Props {
  children: ReactNode;
}

const FadeInUp = ({ children }: Props) => {
  return (
    <motion.div variants={fadeInUp} initial={"hidden"} whileInView={"animate"}>
      {children}
    </motion.div>
  );
};

export default FadeInUp;
