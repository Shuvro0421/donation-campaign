import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BannerImage from "../../assets/images/bg.png"
import DonationCard from "../DonationCard/DonationCard";
const Home = () => {
    const donations = useLoaderData();
    const [searches , setSearches] = useState([]);
    const handleSubmit = e =>{
        e.preventDefault();
        const searchItem = e.target.name.value;
        const lowerSearchItem = searchItem.toLowerCase();
        const findSearch = donations.filter(donation => donation.category.toLowerCase().includes(lowerSearchItem));
        setSearches(findSearch);

    }
    const displayDonations = searches.length === 0? donations : searches;
    return (
        <div className="z-0 absolute top-0 bottom-0  right-0 left-0">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
                <div className="flex items-center flex-col lg:mt-0 md:mt-20">
                    <h1 className="mb-5 md:text-2xl lg:text-5xl text-md font-bold text-black text-center">I Grow By Helping People In Need</h1>
                    {/* form */}
                    <form onSubmit={handleSubmit} className="flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-center mt-5">
                        <input name="name" type="text" className="px-3 py-[10px] md:pr-20 border border-gray-300 outline-none md:rounded-l-lg rounded-lg md:rounded-none" placeholder="Search here...."></input>
                        <input className="btn px-7 border-none bg-[#FF444A] font-medium text-white md:rounded-l-none normal-case" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="m-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    displayDonations.map((donation, idx) => <DonationCard key={idx} donation={donation}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default Home;