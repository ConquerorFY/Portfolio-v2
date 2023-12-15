import { loading } from '../assets/images';

const Loader = () => {
    return <section className="h-[100vh] relative z-10">
        <div className='w-full h-full bg-black flex justify-center items-center'>
            <img src={loading} alt="loading-scene" />
        </div>
    </section>
}

export default Loader;