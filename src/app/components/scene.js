"use client"
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
    useGLTF,
    MeshTransmissionMaterial,
    AccumulativeShadows,
    RandomizedLight,
    Environment,
    OrbitControls,
    Center,
    Dodecahedron, Float, Caustics, Backdrop, ContactShadows
} from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

export default function Scene() {
    return (
        <Canvas shadows camera={{ position: [40, 20, 15], fov: 45 }}>
            <ambientLight />
            <group >
                <Center top>
                    {/*<GelatinousCube />*/}
                <Dice position={[0, 0, 0]}/>
                </Center>
                {/*<Float position={[1, 1.1, -0.5]} rotation={[Math.PI / 1, 10, 1]} rotationIntensity={0} floatIntensity={0} speed={0.5}>*/}

                {/*</Float>*/}

                {/*<AccumulativeShadows temporal frames={100} alphaTest={0.6} color="#3ead5d" colorBlend={1} position={[0, 0, 0]} opacity={0.5} scale={40}>*/}
                    <RandomizedLight radius={10} ambient={0.5} intensity={1} position={[0, 0, 0]} bias={0.001} />
                {/*</AccumulativeShadows>*/}
            </group>
            <Backdrop castShadow receiveShadow floor={2} position={[0, -2, -20]} scale={[200, 50, 20]} >
                <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
            </Backdrop>
            <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.05} makeDefault />
            <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
            {/*<Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" background blur={1} />*/}
            <Environment preset="city" />
            {/*<Perf position="top-left" />*/}
        </Canvas>
    )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 gelatinous_cube.glb --transform --simplify
Author: glenatron (https://sketchfab.com/glenatron)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/gelatinous-cube-e08385238f4d4b59b012233a9fbdca21
Title: Gelatinous Cube
*/


export function Dice(props) {
    const config = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: true,
        backside: false,
        samples: { value: 10, min: 1, max: 32, step: 1 },
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        transmission: { value: 1, min: 0, max: 1 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
        ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
        chromaticAberration: { value: 0.06, min: 0, max: 1 },
        anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
        clearcoat: { value: 0, min: 0, max: 1 },
        attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        attenuationColor: '#ffffff',
        color: '#654c16',
        bg: '#b3ba6a'
    })
    const { nodes, materials } = useGLTF('/model1.gltf')

    console.log(nodes);
    return (
        <group dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Model_Dice.geometry} >
                {config.meshPhysicalMaterial ? <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Cycle_Model_Mushroom.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="red" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Cycle_Model_Mycelium.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >

                <meshStandardMaterial roughness={0} color="red" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Cycle_Model_Sphacelia.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="red" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Cycle_Model_Spore.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="red" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Sclerotium_Cycle_Model.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="red" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Barley.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Bee.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Cattle.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Fly.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Heart.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Hummingbird.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Nervous.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Person.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Rye.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Society.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Tussock.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                renderOrder={-100}
                geometry={nodes.Model_Yorkshire.geometry}
                // material-side={THREE.FrontSide}
                // position={[-0.56, 0.38, -0.11]}
            >
                <meshStandardMaterial roughness={0} color="gold" />
            </mesh>
        </group>
    )
}




export function GelatinousCube(props) {
    const config = useControls({
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: false,
        samples: { value: 10, min: 1, max: 32, step: 1 },
        resolution: { value: 2048, min: 256, max: 2048, step: 256 },
        transmission: { value: 1, min: 0, max: 1 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
        ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
        chromaticAberration: { value: 0.06, min: 0, max: 1 },
        anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
        distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
        clearcoat: { value: 1, min: 0, max: 1 },
        attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        attenuationColor: '#ffffff',
        color: '#c9ffa1',
        bg: '#839681'
    })
    const { nodes, materials } = useGLTF('/gelatinous_cube.glb')
    return (
        <group dispose={null}>
            <mesh geometry={nodes.cube1.geometry} position={[-0.56, 0.38, -0.11]}>
                {config.meshPhysicalMaterial ? <meshPhysicalMaterial {...config} /> : <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} />}
            </mesh>
            <mesh
                castShadow
                renderOrder={-100}
                geometry={nodes.cube2.geometry}
                material={materials.cube_mat}
                material-side={THREE.FrontSide}
                position={[-0.56, 0.38, -0.11]}
            />
            <mesh geometry={nodes.bubbles.geometry} material={materials.cube_bubbles_mat} position={[-0.56, 0.38, -0.11]} />
            <group position={[-0.56, 0.38, -0.41]}>
                <mesh geometry={nodes.arrows.geometry} material={materials.weapons_mat} />
                <mesh geometry={nodes.skeleton_1.geometry} material={materials.skele_mat} />
                <mesh geometry={nodes.skeleton_2.geometry} material={materials.weapons_mat} material-side={THREE.FrontSide} />
            </group>
        </group>
    )
}