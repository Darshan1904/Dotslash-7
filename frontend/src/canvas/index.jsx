import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import Shirt from './SimpleModel';

const CanvasShirtModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [-1, 0, 5], fov: 25 }}
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

export { CanvasShirtModel }