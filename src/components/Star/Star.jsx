import { FaStar } from "react-icons/fa";

function Star({color='white'}){
    return color === 'white' ?
    (
        <div className="relative text-white py-8 w-[300px] h-5 mx-auto before:content-[''] before:w-1/3 before:h-1 before:bg-white before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:content-[''] after:w-1/3 after:h-1 after:bg-white after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
            <FaStar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    )
    : 
    (
        <div className="relative text-diffrent py-8 w-[300px] h-5 mx-auto before:content-[''] before:w-1/3 before:h-1 before:bg-diffrent before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 after:content-[''] after:w-1/3 after:h-1 after:bg-diffrent after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2">
            <FaStar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    )    
}

export default Star