import React, { useState } from 'react'
import './App.css'
import { Canvas} from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {

  return (
      <Canvas 
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
        <Experience />
      </Canvas>
  )
}

export default App
