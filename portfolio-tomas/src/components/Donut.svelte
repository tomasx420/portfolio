<script>
    import { onMount } from "svelte";
  
    let donutRef;
  
    // JavaScript code for the ASCII donut animation
    onMount(() => {
      (function () {
        var preTag = donutRef;
  
        // Angles, Radius, and Constants
        var A = 1;
        var B = 1;
  
        function renderAsciiFrame() {
          var b = []; // Array to store ASCII chars
          var z = []; // Array to store depth values
  
          var width = 80; // Width of frame
          var height = 40; // Height of frame
  
          A += 0.05; // Increment angle A
          B += 0.02; // Increment angle B
  
          // Sin and Cosine of angles
          var cA = Math.cos(A),
            sA = Math.sin(A),
            cB = Math.cos(B),
            sB = Math.sin(B);
  
          // Initialize arrays with default values
          for (var k = 0; k < width * height; k++) {
            // Set default ASCII char
            b[k] = k % width == width - 1 ? "\n" : " ";
            // Set default depth
            z[k] = 0;
          }
  
          // Generate the ASCII frame
          for (var j = 0; j < 6.28; j += 0.07) {
            var ct = Math.cos(j); // Cosine of j
            var st = Math.sin(j); // Sine of j
  
            for (var i = 0; i < 6.28; i += 0.02) {
              var sp = Math.sin(i); // Sine of i
              var cp = Math.cos(i), // Cosine of i
                h = ct + 2, // Height calculation
                // Distance calculation
                D = 1 / (sp * h * sA + st * cA + 5),
                // Temporary variable
                t = sp * h * cA - st * sA;
  
              // Calculate coordinates of ASCII char
              var x = Math.floor(
                width / 2 + (width / 4) * D * (cp * h * cB - t * sB)
              );
              var y = Math.floor(
                height / 2 + (height / 4) * D * (cp * h * sB + t * cB)
              );
  
              // Calculate the index in the array
              var o = x + width * y;
              // Calculate the ASCII char index
              var N = Math.floor(
                8 *
                  ((st * sA - sp * ct * cA) * cB -
                    sp * ct * sA -
                    st * cA -
                    cp * ct * sB)
              );
  
              // Update ASCII char and depth if conditions are met
              if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
                z[o] = D;
                // Update ASCII char based on the index
                b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
              }
            }
          }
  
          // Update the HTML element with the ASCII frame
          preTag.innerHTML = b.join("");
        }
  
        // Function to start the animation
        function startAsciiAnimation() {
          // Start it by calling renderAsciiFrame every 50ms
          setInterval(renderAsciiFrame, 50);
        }
  
        // Start the animation directly
        startAsciiAnimation();
      })();
    });
  </script>
  
  <!-- Donut -->
  <pre bind:this={donutRef} class="absolute mt-[410px] ml-[200px] color-gradient"></pre>
  
  <style>
    pre {
    font-family: 'Courier New', monospace;
    white-space: pre;
    line-height: 1;
    font-size: 18px; /* Increased for readability */
    font-weight: bold; /* Make the text bold */
    overflow: hidden;
    color: black;
    text-shadow: 0 0 5px #48CFCB, 0 0 10px #48CFCB, 0 0 15px #48CFCB, 0 0 20px #48CFCB; /* Glowing effect */
    animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #48CFCB, 0 0 20px #48CFCB, 0 0 30px #48CFCB, 0 0 40px #48CFCB;
    }
    to {
        text-shadow: 0 0 5px #48CFCB, 0 0 10px #48CFCB, 0 0 15px #48CFCB, 0 0 20px #48CFCB;
    }
}

  </style>
  