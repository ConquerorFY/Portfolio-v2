import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import nightSkyScene from '../assets/3d/nightsky.glb';

const NightSky = ({ isRotating, isVisible }) => {
    const sky = useGLTF(nightSkyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.25 * delta
        }
    })

    return (
        <mesh ref={skyRef} visible={isVisible}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default NightSky;