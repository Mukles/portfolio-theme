export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export const overlay = {
  open: {
    background: "rgba(0, 0, 0, 0.65",
    opacity: 1,
  },
  closed: {
    background: "rgb(255, 255, 225, 1",
    opacity: 0,
  },
};

export const moveUpAndDown = {
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 3.8,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const imgReavel = {
  hidden: { y: 200, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8, ease: "circOut" },
  },
};

export const zoomIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: [1, 1.2, 1, 1.1, 1],
    transition: { delay: 0.5, duration: 0.8, ease: "easeIn" },
  },
};
