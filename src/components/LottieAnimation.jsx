import Lottie from "lottie-react";
//import groovyWalkAnimation from "./groovyWalk.json";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const LottieAnimation = () => {
    const style = {
        height: 300,
      };
      const interactivity ={
        mode: "scroll",
        action: [{
            
            visibility: [0, 0.35],
            type: 'stop',
            frames: [0]
        },
        {
            visibility: [0.45, 1],
            type: "seek",
            frames: [0, 38],
      }],
    }

    return (
        <div>
            <DotLottieReact
      src="../../public/Animation - 1733520761498.json"
      loop
      autoplay
      speed={.5}
      style={style}
      interactivity={interactivity}
    />
        </div>
    );
};

export default LottieAnimation;

