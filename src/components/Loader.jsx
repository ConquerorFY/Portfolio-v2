import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        <Html>
            <div className='flex justify-center items-center relative right-1/2'>
                {/* <div className='w-20 h-20 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div> */}
                <div className="w-28 h-28 bg-blue-300 rounded-full"></div>
                <div className="w-28 h-28 bg-blue-300 rounded-full absolute top-0 left-0 animate-ping"></div>
                <div className="w-28 h-28 bg-blue-300 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
        </Html>
    );
};

export default Loader;