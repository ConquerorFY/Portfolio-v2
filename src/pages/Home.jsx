import { useState, Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import sakura from '../assets/sakura.mp3';
import { play, pause } from "../assets/icons";
import NightSky from "../models/NightSky";
import useDarkModeContext from "../hooks/useDarkMode";
import { getAutoRotateID, setAutoRotateID } from "../storage/rotation";

const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const { isDarkMode } = useDarkModeContext();

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];    // x-axis, y-axis, z-axis
        let islandRotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, islandRotation];
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const startAutoRotate = () => {
        setAutoRotateID(setInterval(() => {
            const event = new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                keyCode: 39,
                which: 39,
                code: 'ArrowRight',
                keyIdentifier: 'Right',
                bubbles: true
            });
            document.dispatchEvent(event);
        }, 100));
    }

    const stopAutoRotate = () => {
        const autoRotateID = getAutoRotateID();
        clearInterval(autoRotateID);
        setIsRotating(false);
        setAutoRotateID(0);
    }

    useEffect(() => {
        stopAutoRotate();
        startAutoRotate();
    }, []);

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="h-screen overflow-hidden">
            <section className="w-full h-screen relative">
                <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                    {currentStage && <HomeInfo currentStage={currentStage} />}
                </div>

                <Canvas
                    className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000 }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={isDarkMode ? 1 : 2} />
                        <ambientLight intensity={isDarkMode ? 0 : 1} />
                        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.5} />
                        <Bird />
                        <NightSky isRotating={isRotating} isVisible={isDarkMode} />
                        <Sky isRotating={isRotating} isVisible={!isDarkMode} />
                        <Island
                            position={islandPosition}
                            scale={islandScale}
                            rotation={islandRotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentStage={setCurrentStage}
                        />
                        <Plane
                            isRotating={isRotating}
                            scale={planeScale}
                            position={planePosition}
                            rotation={[0, 20, 0]}
                        />
                    </Suspense >
                </Canvas>

                <div className="absolute bottom-2 left-2">
                    <img
                        src={!getAutoRotateID() ? play : pause}
                        alt="auto-play"
                        title={!getAutoRotateID() ? "Start autoplay" : "Pause autoplay"}
                        className="w-10 h-10 cursor-pointer object-contain bg-purple-500 border-purple-900 border-2 p-2 rounded-[50%]"
                        onClick={() => !getAutoRotateID() ? startAutoRotate() : stopAutoRotate()}
                    />
                </div>
            </section >
        </section>
    )
}

export default Home;