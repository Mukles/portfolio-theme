import { motion } from "framer-motion";

interface Props {
  text: string;
}

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const TypedAnimation = ({ text }: Props) => {
  return (
    <>
      {text.split("").map((item, i) => (
        <motion.span
          aria-hidden="true"
          variants={characterAnimation}
          initial="hidden"
          whileInView={"visible"}
          transition={{
            delay: 1 + 0.1 * i,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          key={i}
        >
          {item}
        </motion.span>
      ))}
    </>
  );
};

export default TypedAnimation;
