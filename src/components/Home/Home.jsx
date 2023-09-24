import { useLoaderData } from "react-router-dom";
import BannerImage from "../../assets/images/bg.png"
import DonationCard from "../DonationCard/DonationCard";
const Home = () => {
    const donations = useLoaderData();
    return (
        <div className="z-0">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
                <div className="flex items-center flex-col">
                    <h1 className="mb-5 md:text-3xl lg:text-5xl text-lg font-bold text-black text-center">I Grow By Helping People In Need</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    donations.map((donation , idx) => <DonationCard key={idx} donation={donation}></DonationCard>)
                }
            </div>

        </div>
    );
};

export default Home;