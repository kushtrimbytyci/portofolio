export const pageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const photoAnimation = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineAnimation = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const sliderAnimation = {
  initial: { x: "-130%", skew: "45deg" },
  animate: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export const faqAnimation = {
  initial: {
    height: "0px",
    opacity: 0,
  },
  animate: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    height: "0px",
    opacity: 0,
  },
};

export const scrollReveal = {
  initial: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const navLine = {
  initial: {
    width: 0,
  },
  animate: {
    tranisition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};
