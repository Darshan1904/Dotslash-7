
import { useEffect, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

import { useSnapshot } from 'valtio';

import state from '../store';
const ShoesModel = ({ position }) => {
  const [hovered, setHovered] = useState(false)

  const snap = useSnapshot(state);

  const logoTexture = useTexture(snap.logoDecal);

  const { nodes, materials } = useGLTF('/shoe-draco.glb')

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])


  useControls('Shoe', () => {

    // using forEach
    // const colorPickers = {}
    // Object.keys(materials).forEach((m) => {
    //   colorPickers[m] = {
    //     value: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
    //     onChange: (v) => {
    //       materials[m].color = new Color(v)
    //     }
    //   }
    // })
    // return colorPickers

    // using reduce
    return Object.keys(materials).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            value:
              '#' +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
            onChange: (v) => {
              materials[m].color = new Color(v)
            },
          },
        }),
      {}
    )
  })


  return (
    <group
      key={position}
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        document.getElementById('Shoe.' + e.object.material.name).focus()
      }}
      scale={1.5}
      rotation={[0, 0, 0]}

    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} >

      </mesh>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} >

      </mesh>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} >

      </mesh>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} >

      </mesh>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} >

      </mesh>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} >

      </mesh>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} >

      </mesh>
    </group>
  )
}

useGLTF.preload('./shoe-draco.glb')

export default ShoesModel;