import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleDonation from '../SingleDonation/SingleDonation';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);


    useEffect(() => {
        const localStorageDonation = JSON.parse(localStorage.getItem('localStorageDonation'));
        if (localStorageDonation) {
            setDonations(localStorageDonation);
        }
        else {
            setNoDataFound('No Data Found');
        }
    }, [])
    return (
        <div>
            {
                noDataFound ? <p className="text-center my-40 font-semibold text-4xl text-red-600">{noDataFound}</p>
                    :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-10">

                            {
                                isShowMore ? donations.map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>) :
                                    donations.slice(0, 4).map(donation => <SingleDonation donation={donation} key={donation.id}></SingleDonation>)
                            }
                        </div>
                        {
                            !isShowMore && donations.length > 4 && <div className="flex items-center justify-center mt-10"><button onClick={() => setIsShowMore(true)} className="btn bg-[#009444] normal-case hover:bg-[#0c4f2b] border-none text-white font-semibold">See All</button></div>
                        }
                    </div>
            }
        </div>
    );
};

export default Donation;