import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Shirt from './SimpleModel';
import { useRef } from 'react';
import ShoesModel from './ShoesModel';
import ChairModel from '../components/canvas1/ChairModel';

const CanvasShirtModel = () => {
  const canvasRef = useRef()
  return (
    <Canvas
      ref={canvasRef}
      shadows
      camera={{ position: [-1.25, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

const CanvasShoeModel = () => {
  const canvasRef = useRef()
  return (
    <Canvas
      ref={canvasRef}
      shadows
      camera={{ position: [-1.25, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <ShoesModel />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

const CanvasChairModel = () => {
  const canvasRef = useRef()
  return (
    <Canvas
      ref={canvasRef}
      shadows
      camera={{ position: [-1.25, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <ChairModel />
        </Center>
      </CameraRig>
    </Canvas>
  )
}


export { CanvasShirtModel, CanvasShoeModel, CanvasChairModel }