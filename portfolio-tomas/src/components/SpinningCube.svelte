<script>
    import { onMount } from "svelte";
  
    let asciiOutput;
    const width = 40;
    const height = 40;
    const cubeSize = 10;
    const chars = ['.', ':', '*', '=', '#', '%', '@'];
    const cubePoints = [];
    const frameRate = 100;
  
    for (let x = -cubeSize; x <= cubeSize; x += 2 * cubeSize) {
      for (let y = -cubeSize; y <= cubeSize; y += 2 * cubeSize) {
        for (let z = -cubeSize; z <= cubeSize; z += 2 * cubeSize) {
          cubePoints.push([x, y, z]);
        }
      }
    }
  
    // Function to project 3D points into 2D space
    function project(x, y, z, angleX, angleY, angleZ) {
      const radX = angleX * Math.PI / 180;
      const radY = angleY * Math.PI / 180;
      const radZ = angleZ * Math.PI / 180;
  
      let x1 = x;
      let y1 = y * Math.cos(radX) - z * Math.sin(radX);
      let z1 = y * Math.sin(radX) + z * Math.cos(radX);
  
      let x2 = x1 * Math.cos(radY) + z1 * Math.sin(radY);
      let y2 = y1;
      let z2 = -x1 * Math.sin(radY) + z1 * Math.cos(radY);
  
      let x3 = x2 * Math.cos(radZ) - y2 * Math.sin(radZ);
      let y3 = x2 * Math.sin(radZ) + y2 * Math.cos(radZ);
      let z3 = z2;
  
      const distance = 100;
      const fov = 300;
      const factor = fov / (distance + z3);
      const xProjected = x3 * factor + width / 2;
      const yProjected = y3 * factor + height / 2;
  
      return [xProjected, yProjected];
    }
  
    // Function to render a single frame
    function renderFrame(angleX, angleY, angleZ) {
      let screen = Array(height)
        .fill(" ")
        .map(() => Array(width).fill(" "));
  
      cubePoints.forEach((point) => {
        const [x, y, z] = point;
        const [xp, yp] = project(x, y, z, angleX, angleY, angleZ);
        if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
          screen[Math.floor(yp)][Math.floor(xp)] =
            chars[Math.floor(Math.random() * chars.length)];
        }
      });
  
      // Update the ASCII output
      asciiOutput.innerHTML = screen.map((row) => row.join("")).join("\n");
    }
  
    let angleX = 0;
    let angleY = 0;
    let angleZ = 0;
  
    function animate() {
      angleX += 2;
      angleY += 2;
      angleZ += 1;
      renderFrame(angleX, angleY, angleZ);
      setTimeout(animate, frameRate);
    }
  
    onMount(() => {
      animate();
    });
  </script>
  
  <style>
    pre {
      font-family: monospace;
      color: #00FF00;
      line-height: 1;
    }
  </style>
  
  <pre bind:this={asciiOutput}></pre>
  