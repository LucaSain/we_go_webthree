import "./Core.css";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { MathUtils } from "three";

function CoreEnv(IsAuth) {
  const ModelEnv = useRef();
  var RotationDest = 0;
  var RotationCase = IsAuth.IsAuth.IsAuth; //epic
  var CurrentRotation = 0;
  if (RotationCase === "init") {
    RotationDest = Math.PI * 2;
  } else if (RotationCase === "disconnected") {
    RotationDest = (3 * Math.PI) / 2;
  } else if (RotationCase === "noeth") {
    RotationDest = Math.PI;
  } else if (RotationCase === "connected") {
    RotationDest = Math.PI / 2;
  }

  useFrame((state, delta) => {
    CurrentRotation = MathUtils.lerp(CurrentRotation, RotationDest, 0.05); //linear interpolation
    ModelEnv.current.rotation.y = CurrentRotation;
  });
  return (
    <mesh ref={ModelEnv}>
      <Model />
    </mesh>
  );
}

export default function CoreElement(IsAuth) {
  return (
    <div className="Core-Base">
      <Canvas className="Core-Canvas" camera={{ position: [20, 70, 120] }}>
        <Suspense fallback={null}>
          <CoreEnv IsAuth={IsAuth} />
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
