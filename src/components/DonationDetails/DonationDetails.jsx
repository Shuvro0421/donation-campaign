import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../DonationDetail/DonationDetail";

const DonationDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const [donation , setGetDonations] = useState({});
    useEffect(() => {
        const findDonation = donations.find(donation => donation.id == id);
        setGetDonations(findDonation)
    } , [id , donations])
    return (
        <div>
            <DonationDetail donation={donation}></DonationDetail>
        </div>
    );
};

export default DonationDetails;