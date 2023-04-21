import { motion } from "framer-motion";

interface Props {
  text: string;
}

const TypedVarient = {
  hidden: {
    opacity: 0,
  },
  animate: { opacity: 1 },
};

const TypedAnimation = ({ text }: Props) => {
  return (
    <>
      {text.split("").map((item, i) => (
        <motion.span
          variants={TypedVarient}
          initial="hidden"
          animate={"animate"}
          transition={{ delay: i * 0.5 }}
          key={i}
        >
          {item}
        </motion.span>
      ))}
    </>
  );
};

export default TypedAnimation;
