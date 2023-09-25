import { Link } from "react-router-dom";

const SingleDonation = ({ donation }) => {
    const { picture, category, title, category_bg, card_bg, text_and_button_bg, id, price } = donation;
    return (
        <div>
            <div style={{ backgroundColor: card_bg }} className="flex md:flex-row items-center justify-start rounded-lg flex-col bg-base-100">
                <div className="">
                    <img className="md:w-72 lg:rounded-l-lg md:rounded-l-lg lg:rounded-none rounded-t-lg md:rounded-none" src={picture} alt="Shoes" />
                </div>
                <div className="p-5 space-y-2">
                    <div className="">
                        <h2 style={{ backgroundColor: category_bg, color: text_and_button_bg }} className={`text-sm font-medium badge rounded-md bg-red-400 p-3`}>{category}</h2>
                    </div>
                    <p className="text-xl font-semibold">{title}</p>
                    <p style={{ color: text_and_button_bg }} className="text-lg text- font-semibold">${price}.00</p>


                    <div>
                        <Link to={`/donationDetails/${id}`}>
                            <button style={{ backgroundColor: text_and_button_bg }} className="md:normal-case normal-case px-4 py-2 md:text-white md:text-md lg:rounded-md text-sm md:font-medium rounded-md  md:rounded-md text-white">
                                View Details
                            </button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SingleDonation;