import { Center, ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


import ShirtModel from '../../canvas/ShirtModel';
import ShoeShowModel from '../../canvas/ShoeShow'
import ChairModel from './ChairModel';
import CameraRig from './CameraRig';
import Backdrop from '../../canvas/Backdrop';
import Shirt from '../../canvas/SimpleModel';
import ShoesModel from '../../canvas/ShoesModel';

const CanvasChairModel = () => {


  return (
    <Canvas shadows camera={{ position: [0, -2, 2] }}>
      <Environment preset="forest" />
      <ChairModel />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls />
    </Canvas>
  )
}
const CanvasShoesModel = () => {


  return (
    <Canvas shadows camera={{ position: [0, -2, 2] }}>
      <Environment preset="forest" />
      <ShoesModel />
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls />
    </Canvas>
  )
}

const CanvasModel2 = () => {


  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <CameraRig>
        <Backdrop />
        <Center>
          <ShoeShowModel />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export { CanvasChairModel, CanvasShoesModel, CanvasModel2 }