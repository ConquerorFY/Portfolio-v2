import { useEffect } from 'react';

const HandleLoader = ({ setIsLoaded }) => {
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 5000);
    }, [])

    return <></>
}

export default HandleLoader;