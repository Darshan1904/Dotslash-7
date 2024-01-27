import { Center, ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


import ShirtModel from '../../canvas/ShirtModel';
import ChairModel from './ChairModel';

const CanvasModel = () => {


  return (
    <Canvas shadows camera={{ position: [4, -2, 2] }}>
      <Environment preset="forest" />
      <ChairModel />
      {/* <ShirtModel /> */}
      <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
      <OrbitControls />
    </Canvas>
  )
}

export default CanvasModel