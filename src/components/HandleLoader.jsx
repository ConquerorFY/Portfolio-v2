import { useEffect } from 'react';

const HandleLoader = ({ setIsLoaded }) => {
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2800);
    }, [])

    return <></>
}

export default HandleLoader;