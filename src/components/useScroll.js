// Intersception animation
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.4 });
  const controls = useAnimation();
  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls];
};
