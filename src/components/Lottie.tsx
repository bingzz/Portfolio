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

  const arr = [{ key, src, dimensions }];
  return (
    <div className="lottie">
      {arr.map((elem, i) => (
        <Lottie
          key={`${key}_${i}`}
          options={lottieOptions}
          height={elem.dimensions?.h || 400}
          width={elem.dimensions?.w || 400}
        />
      ))}

    </div>
  );
}