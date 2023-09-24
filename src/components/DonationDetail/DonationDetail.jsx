

const DonationDetail = ({ donation }) => {
    const { picture, title, description, price, text_and_button_bg } = donation
    return (
        <div className="md:p-8  mt-10">
            <div className="relative w-full h-full">
                <img
                    src={picture}
                    alt="Your Image"
                    className="w-full h-full rounded-md"
                    
                />
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="bg-black bg-opacity-50 rounded-b-md md:h-28 h-14  p-4 flex items-center justify-between">
                        <button style={{ backgroundColor: text_and_button_bg }} className="md:normal-case normal-case md:btn btn-sm  border-none md:px-10 md:text-white md:text-lg text-sm md:font-medium rounded-sm md:rounded-sm text-white">
                            Donate ${price}
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5 space-y-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="">{description}</p>
            </div>




        </div>
    );
};

export default DonationDetail;