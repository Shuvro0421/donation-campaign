import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { picture, category, title, category_bg, card_bg, text_and_button_bg , id } = donation
    return (
        <div>
            <Link to={`donationDetails/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="card bg-base-100">
                    <figure><img className="" src={picture} alt="" /></figure>
                    <div className="p-5 space-y-2">
                        <div className="">
                            <h2 style={{ backgroundColor: category_bg, color: text_and_button_bg }} className={`text-sm font-medium badge rounded-md bg-red-400 p-3`}>{category}</h2>
                        </div>
                        <p style={{ color: text_and_button_bg }} className="text-lg font-semibold">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;