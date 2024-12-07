import { Fade, Flip, Slide } from "react-awesome-reveal";

const Animation = () => {
    return (
        <div>
            <Slide cascade damping={0.1}>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Slide>
        </div>
    );
};

export default Animation;
