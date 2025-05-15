import { Key } from "react";
import Lottie, { Options } from "react-lottie";

type lottieDimensions = { h?: number; w?: number; };

interface LottieProps {
  key?: Key | null,
  src: any;
  dimensions?: lottieDimensions;
}

export default function LottieTemplate({ key, src, dimensions }: LottieProps) {

  const lottieOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: src
  };

  return (
    <div className="lottie" key={key}>
      <Lottie
        options={lottieOptions}
        height={dimensions?.h || 400}
        width={dimensions?.w || 400}
      />
    </div>
  );
}