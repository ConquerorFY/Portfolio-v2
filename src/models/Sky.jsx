import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating, isVisible }) => {
    const sky = useGLTF(skyScene);
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

export default Sky;