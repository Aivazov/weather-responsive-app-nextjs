const infoAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: custom * 0.2, delay: custom * 0.3 },
    // transition: { delay: custom * 0.2 },
  }),
};

export default infoAnimation;
