import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture, Decal, Float } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Ball = (props) => { // Change the function signature to accept props
    const [decal] = useTexture([props.imgUrl]); // Use props.imgUrl directly
    
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading />
          <Decal position={[0, 0, 1]}
          rotation={[2*Math.PI, 0, 6.25]} map={decal}
          flatShading />
        </mesh>
      </Float>
    );
  };

  const BallCanvas = ({ icon }) => {
  
  
    return (
      <Canvas   
        style={{ cursor: "pointer" }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}> 
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} /> 
        </Suspense>
        <Preload all /> 
      </Canvas>
    );
  };
  
  export default BallCanvas;
  