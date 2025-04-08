/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

// import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Canvas } from '@react-three/fiber';

document.addEventListener('contextmenu', (event) => event.preventDefault());

const root = ReactDOM.createRoot(document.querySelector('#duck-placeholder'));

/**
 * Camera
 */
let cameraY = window.innerWidth < 600 ? 8 : 5;

root.render(
  <React.StrictMode>
    <Canvas
      camera={{
        // fov: 45,
        near: 0.1,
        far: 50,
        position: [0, 0, cameraY],
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>
);
