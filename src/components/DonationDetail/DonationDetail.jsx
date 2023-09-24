
import Swal from 'sweetalert2'
const DonationDetail = ({ donation }) => {
    const { picture, title, description, price, text_and_button_bg , id } = donation;
    const handleDonation = () => {
        const addLocalStorageDonation = [];
        const localStorageDonation = JSON.parse(localStorage.getItem('localStorageDonation')) || [];
        if (!localStorageDonation) {
            addLocalStorageDonation.push(donation);
            localStorage.setItem('localStorageDonation', JSON.stringify(addLocalStorageDonation));
        }
        else {
            const isExists = localStorageDonation.find(donation => donation.id === id);
            if (!isExists) {
                addLocalStorageDonation.push(...localStorageDonation, donation);
                localStorage.setItem('localStorageDonation', JSON.stringify(addLocalStorageDonation));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Donated',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Already Added To Donation',
                })
            }
        }

    }
    return (
        <div className="  mt-10">
            <div className="relative w-full h-full">
                <img
                    src={picture}
                    alt="Your Image"
                    className="w-full h-full rounded-md"

                />
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="bg-black bg-opacity-50 rounded-b-md md:h-28 h-14  p-4 flex items-center justify-between">
                        <button onClick={handleDonation} style={{ backgroundColor: text_and_button_bg }} className="md:normal-case normal-case md:btn btn-sm  border-none md:px-10 md:text-white md:text-lg text-sm md:font-medium rounded-sm md:rounded-sm text-white">
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