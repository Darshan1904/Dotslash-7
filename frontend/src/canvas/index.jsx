import { Center, Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import ShoesModel from './ShoesModel';
import ShirtModel from './ShirtModel';

const CanvasModel = () => {
  return (
    <Canvas
      shadows camera={{ position: [2, 0, 5] }}
    >

      <Environment preset="forest" />

      <CameraRig>
        <ContactShadows position={[0, -.9, 0]} color="#ffffff" />
        {/* <OrbitControls autoRotate /> */}
        <Center>
          <ShoesModel />
          {/* <ShirtModel /> */}
        </Center>
      </CameraRig>

    </Canvas>
  )
}

export default CanvasModel