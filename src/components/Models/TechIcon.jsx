// - Loads a '.glb' model (GLTF format)
// - Adds basic lighting
// - Applies environment reflections for realism
// - Wraps the model in a floating animation
// - Optionally tweaks the material(like setting a white color on a specific mesh)
// - Disable zoom using OrbitControls

import {Environment, Float, OrbitControls, useGLTF} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} roation={model.rotation}>
                    <primitive  object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}
export default TechIcon
