<script>
	import { onMount } from "svelte";

	let donutRef;

	onMount(() => {
		(function () {
			var preTag = donutRef;
			var A = 1;
			var B = 1;

			function renderAsciiFrame() {
				var b = [];
				var z = [];

				var width = 80;
				var height = 40;
				A += 0.05;
				B += 0.02;

				var cA = Math.cos(A),
					sA = Math.sin(A),
					cB = Math.cos(B),
					sB = Math.sin(B);

				for (var k = 0; k < width * height; k++) {
					b[k] = k % width == width - 1 ? "\n" : " ";

					z[k] = 0;
				}

				for (var j = 0; j < 6.28; j += 0.07) {
					var ct = Math.cos(j);
					var st = Math.sin(j);

					for (var i = 0; i < 6.28; i += 0.02) {
						var sp = Math.sin(i);
						var cp = Math.cos(i),
							h = ct + 2,
							D = 1 / (sp * h * sA + st * cA + 5),
							t = sp * h * cA - st * sA;

						var x = Math.floor(width / 2 + (width / 4) * D * (cp * h * cB - t * sB));
						var y = Math.floor(
							height / 2 + (height / 4) * D * (cp * h * sB + t * cB)
						);

						var o = x + width * y;

						var N = Math.floor(
							8 *
								((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)
						);

						if (y < height && y >= 0 && x >= 0 && x < width && D > z[o]) {
							z[o] = D;

							b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
						}
					}
				}

				preTag.innerHTML = b.join("");
			}

			function startAsciiAnimation() {
				setInterval(renderAsciiFrame, 50);
			}

			startAsciiAnimation();
		})();
	});
</script>

<div class="flex justify-center">
	<pre
		bind:this={donutRef}
		class="relative mx-auto max-w-full overflow-hidden color-gradient"></pre>
</div>

<style>
	pre {
		font-family: "Courier New", monospace;
		white-space: pre;
		line-height: 1;
		font-size: 18px;
		font-weight: bold;
		overflow: hidden;
		color: black;
		animation: glow 1.5s ease-in-out infinite alternate;
		max-width: 100%;
		overflow-x: auto;
		margin: auto;
	}

	@keyframes glow {
		from {
			text-shadow:
				0 0 10px #48cfcb,
				0 0 20px #48cfcb,
				0 0 30px #48cfcb,
				0 0 40px #48cfcb;
		}
		to {
			text-shadow:
				0 0 5px #48cfcb,
				0 0 10px #48cfcb,
				0 0 15px #48cfcb,
				0 0 20px #48cfcb;
		}
	}

	@media (max-width: 1768px) {
		pre {
			font-size: 16px;
			transform: scale(0.9);
		}
	}

	@media (max-width: 1556px) {
		pre {
			font-size: 12px;
			transform: scale(0.9);
		}
	}
</style>
