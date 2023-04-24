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
