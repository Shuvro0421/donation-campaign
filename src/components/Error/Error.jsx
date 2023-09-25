import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div>
            <h1 className="md:text-4xl text:3xl flex flex-col gap-5 text-center my-60 text-red-500 font-bold">404 Page not found! <span className="text-lg"><Link to="/"><button className="btn btn-error text-white">Go Home</button></Link></span></h1>
        </div>
    );
};

export default Error;