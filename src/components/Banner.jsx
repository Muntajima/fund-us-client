import { Link } from 'react-router-dom';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpeg';
import banner4 from '../assets/banner4.jpg';
import banner6 from '../assets/banner6.avif';
import { Fade, Flip, Slide } from "react-awesome-reveal";


const Banner = () => {
    return (
        <div>
            <div className="carousel">
                <Slide cascade>
                <img id="item1"  src={banner4} className=" w-full h-[500px] object-cover" />
                    <img id="item2"  src={banner2} className="w-full h-[500px] object-cover" />
                    <img id="item3"  src={banner3} className="w-full h-[500px] object-cover" />
                </Slide>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs"><Link>Environment</Link></a>
  <a href="#item2" className="btn btn-xs"><Link>Business</Link></a>
  <a href="#item3" className="btn btn-xs"><Link>Animal</Link></a>
  {/* <a href="#item4" className="btn btn-xs">4</a> */}
</div>
        </div>
    );
};

export default Banner;