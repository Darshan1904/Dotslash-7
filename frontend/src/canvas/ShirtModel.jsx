import { useEffect, useState } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useControls } from 'leva'
import { Color } from 'three'

import { useSnapshot } from 'valtio'
import state from '../store'

// import state from '../store'
const ShirtModel = () => {
  const [hovered, setHovered] = useState(false)
  const snap = useSnapshot(state)

  const logoTexture = useTexture(snap.logoDecal)

  const { nodes, materials } = useGLTF('/tshirt_male.glb')
  console.log(nodes, materials)
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

  // const materialsObject = {
  //   'base_female_Material296840_0': 'Material296840',
  //   'base_female_Material296846_0': 'Material296846',
  //   'base_female_Material296853_0': 'Material296853',
  //   'base_female_Material296859_0': 'Material296859',
  //   'base_female_Material296863_0': 'Material296863',
  //   'base_female_Material296867_0': 'Material296867',
  //   'base_female_Material296872_0': 'Material296872',
  //   'base_female_Material296878_0': 'Material296878',
  //   'full_sleeves_tshirt_fbx_Body_FRONT_6188_0': 'Body_FRONT_6188',
  //   'full_sleeves_tshirt_fbx_Material1572122_0': 'Material1572122',
  //   'full_sleeves_tshirt_fbx_Material1632748_0': 'Material1632748',
  //   'full_sleeves_tshirt_fbx_Sleeves_FRONT_6183_0': 'Sleeves_FRONT_6183'
  // }
  return (
    <group
      dispose={null}
      onPointerOver={() => setHovered(true)
      }
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation()
        document.getElementById('Shoe.' + e.object.material.name).focus()
      }}

      position={[0, 2, 2]}
    >
      {/* <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
                              <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} >
                                <Decal
                                  position={[0, 0, 0]}
                                  rotation={[0, 0, 0]}
                                  scale={1}
                                  map={logoTexture}
                                />
                              </mesh>
                              <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} >
                                <Decal
                                  position={[0, 0, 0]}
                                  rotation={[0, 0, 0]}
                                  scale={1}
                                  map={logoTexture}
                                /> */}
      {/* </mesh>
                              <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
                              <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
                              <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
                              <mesh geometry={nodes.shoe_6.geometry} material={materials.band} /> */}
      {/* <mesh geometry={nodes.base_female_Material296840_0
                                .geometry} material={materials.Body_FRONT_6188} /> */}
      {/* <mesh geometry={nodes.base_female_Material296846_0.geometry} material={materials.Material296840
                              } /> */}
      {
        // Object.entries(materialsObject).map(([key, value]) => <mesh
        //   geometry={nodes[key].geometry}  // Assuming you have a 'nodes' object with mesh geometries
        //   material={materials[value]}   // Assuming you have a 'materials' object with material references
        // />
        // )
      }
      <mesh
        geometry={nodes["Object_2"].geometry}  // Assuming you have a 'nodes' object with mesh geometries
        material={materials["Shirt"]}   // Assuming you have a 'materials' object with material references
      >

      </mesh>
      <mesh
        geometry={nodes["Object_3"].geometry}  // Assuming you have a 'nodes' object with mesh geometries
        material={materials["Shirt"]}   // Assuming you have a 'materials' object with material references
      />
    </group >
  )
}

useGLTF.preload('./tshirt_male.glb')

export default ShirtModel
