import {Suspense, useState, useRef} from 'react';
import {Canvas, useFrame} from '@react-three/fiber';
import {Points, Preload, PointMaterial} from '@react-three/drei';

import * as random from "maath/random/dist/maath-random.esm";




const StarsCanvas = () => {
    return (
    <div className='z-[-1] absolute inset-0 w-full h-auto'>
    </div>
    )
  }
  
  export default StarsCanvas