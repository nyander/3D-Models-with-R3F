import { useAnimations, useGLTF } from '@react-three/drei'
import { act } from '@react-three/fiber';
import { useControls } from 'leva';
import React, { useContext, useEffect } from 'react'

const Fox = (props) => {
    const model = useGLTF('./Fox/glTF/Fox.gltf')
    const animations = useAnimations(model.animations,model.scene);

    const {actionName} = useControls('fox', {
      actionName: {options: animations.names}
    })
    
    useEffect(()=>
    {
        const action = animations.actions[actionName]
        console.log(action)
        action.reset().fadeIn(0.5).play()

        return () =>
        {
          action.fadeOut(0.5)
        }
    }, [actionName])
    

  return (
    <primitive object={model.scene} {...props}/>
  )
}

export default Fox