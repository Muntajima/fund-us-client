import { Link } from "react-router-dom";


const CampaignCard = ({camp}) => {

   const { _id, image, title, description } = camp || {};
    //console.log(title);
    return (
            <div className="card-compact bg-base-100 w-80">
                <figure>
                    <img
                        src={image}
                        className="rounded-xl" />
                </figure>
                <div className="card-body justify-center items-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/detail/${_id}`}>
                        <button className="btn btn-accent btn-sm my-4">See more</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default CampaignCard;