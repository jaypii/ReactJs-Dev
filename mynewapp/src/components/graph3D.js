import React from "react";
import { Canvas } from "react-three-fiber";
import Cubes from "./Cubes";
import Light from "./light";
import Environment from "./Environment"

function Graph3D() {
   return (
      <>
      <Canvas>
         <Cubes />
         <Light />
         <Environment />
      </Canvas>
      </>
   )
}

export default Graph3D;