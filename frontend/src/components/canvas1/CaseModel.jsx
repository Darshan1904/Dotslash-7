import { useEffect, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'
import * as THREE from 'three';

import { useSnapshot } from 'valtio'
import state from '../../store'

// import state from '../store'
const CaseModel = () => {
  const [hovered, setHovered] = useState(false)
  const snap = useSnapshot(state)

  const logoTexture = useTexture(snap.logoDecal)

  const { nodes, materials } = useGLTF('/iphone_11_pro_case.glb')
  const { nodes: n1, materials: m1 } = useGLTF('/apple_logo.glb')
  const { nodes: n2, materials: m2 } = useGLTF('/mobile_stand_v1.glb')

  console.log(n2, m2)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useControls('Case', () => {
    // using reduce
    return Object.keys(materials).reduce(
      (acc, m) => Object.assign(acc, {
        [m]: {
          value: '#' +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
          onChange: (v) => {
            materials[m].color = new Color(v)
          }
        }
      }),
      {}
    )
  })

  useControls('Logo', () => {
    // using reduce
    return Object.keys(m1).reduce(
      (acc, m) => Object.assign(acc, {
        [m]: {
          value: '#' +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
          onChange: (v) => {
            m1[m].color = new Color(v)
          }
        }
      }),
      {}
    )
  })

  const stateString = JSON.stringify(snap);
  return (
    <group
      key={stateString}
      dispose={null}
      onPointerOver={() => setHovered(true)
      }
      onPointerOut={() => setHovered(false)}
      // onClick={(e) => {
      //   e.stopPropagation()
      //   document.getElementById('Chair.' + e.object.material.name).focus()
      // }}
      scale={.6}
      position={[0, 0, 10]}


    >

      <mesh
        geometry={nodes['Object_2'].geometry}
        material={materials['Scene_-_Root']}

      >
        {snap.isLogoTexture && <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={logoTexture}
        />}

      </mesh>
      <mesh
        geometry={n1['Apple_0'].geometry}
        material={m1['1976logo']}
        scale={10}
        position={[0, 0, -3]}

      />

      <mesh
        geometry={n2['Object_2'].geometry}
        material={m2['Scene_-_Root']}
        scale={1}
        position={[50, -10, 2]}
        rotation={[60, 161, 0]}
      />
    </group >
  )
}

useGLTF.preload('./iphone_11_pro_case.glb')
useGLTF.preload('./mobile_stand.glb')

export default CaseModel
