import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
    const [decal1] = useTexture([props.text]);
  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/*<Decal*/}
        {/*  position={[0, 0.4, 1]}*/}
        {/*  rotation={[2 * Math.PI, 0, 6.25]}*/}
        {/*  flatShading*/}
        {/*  map={decal}*/}
        {/*  scale={0.7}*/}
        {/*/>*/}
          <Decal
              position={[0, 0, 1]}
              //position={[0, -0.25, 0.8]}
              rotation={[2 * Math.PI, 0, 6.25]}
              flatShading
              map={decal1}
              scale={1}
          />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, text }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} text={text} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
