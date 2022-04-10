import { useLottie } from "lottie-react";
import swing from "../lottieAnimation/jsonanimation/101349-swing.json";

const Animation = () => {
  const options = {
    animationData: swing,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Animation;
