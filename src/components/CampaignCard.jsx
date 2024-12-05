

const CampaignCard = ({campaign}) => {

    //const { _id, title, type, amount, deadline, description, image, name, email } = campaign;
   const { image, title, description } = campaign || {};
    console.log(title);
    return (
            <div className="card-compact bg-base-100 w-96">
                <figure>
                    <img
                        src={image}
                        className="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See more</button>
                    </div>
                </div>
            </div>
    );
};

export default CampaignCard;