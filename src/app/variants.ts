export const burgerVariants = {
  topOpen: { rotate: 45, y: 11, transition: { duration: 0.5 } },
  middleOpen: { x: 20, width: 0, transition: { duration: 0.5 } },
  bottomOpen: { rotate: -45, y: -11, transition: { duration: 0.5 } }
};

export const menuVariants = {
  closed: {opacity: 0 ,height: 60, width: 64 },
  open: {opacity: 1, height: 324, width: 188 }
};
