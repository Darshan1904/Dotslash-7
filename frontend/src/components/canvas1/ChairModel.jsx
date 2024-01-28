import { useEffect, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

import { useSnapshot } from 'valtio'
import state from '../../store'

// import state from '../store'
const ChairModel = () => {
  const [hovered, setHovered] = useState(false)
  const snap = useSnapshot(state)

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  const { nodes, materials } = useGLTF('/chair.glb')

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useControls('Shoe', () => {
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

  const materialsObject = {
    // 'SheenChair_fabric': 'fabric Mystere Mango Velvet',

    'SheenChair_metal': 'metal',
    'SheenChair_wood': 'wood Brown',

  }
  console.log(nodes, materials)
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
      scale={.75}

    >
      <mesh
        geometry={nodes['SheenChair_fabric'].geometry}
        material={materials['fabric Mystere Mango Velvet']}
      >
        {snap.isLogoTexture && <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={logoTexture}
        />}
        {snap.isFullTexture && <Decal
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={1}
          map={fullTexture}
        />}

      </mesh>
      {
        Object.entries(materialsObject).map(([key, value]) => <mesh
          geometry={nodes[key].geometry}
          material={materials[value]}
        />
        )
      }
    </group >
  )
}

useGLTF.preload('./chair.glb')

export default ChairModel
