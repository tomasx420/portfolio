<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Heading from "../components/Heading.svelte";
	import Donut from "../components/Donut.svelte";
	import Waves from "../components/Waves.svelte";
	import SecondaryHeading from "../components/SecondaryHeading.svelte";
	import AboutMe from "../components/AboutMe.svelte"; // About Me with buttons
	import ImageSlideshow from "../components/ImageSlideshow.svelte"; // Slideshow is separate
</script>

<Header />

<!-- Main Section with Heading and Donut -->
<main
	class="min-h-screen bg-background flex flex-col items-center justify-center mt-8 pt-2"
>
	<!-- Flex Container for Heading and Donut -->
	<div class="flex w-full max-w-7xl space-x-40 mt-56">
		<!-- Left Side: Welcome Text -->
		<div class="flex-1 pr-24 pl-8 mt-8">
			<Heading
				heading="WELCOME TO MY PORTFOLIO"
				subheading="On this website, you will learn about me and my projects. On this website, you will "
			/>
		</div>

		<!-- Right Side: Donut -->
		<div
			class="relative w-48 h-48 bg-black flex items-center justify-center pr-52"
		>
			<Donut />
		</div>
	</div>

	<!-- Section for Waves (placed below heading and donut) -->
	<section class="w-full mt-72 relative">
		<Waves />
	</section>
	<!-- Gradient div -->
	<div
		id="about"
		class="content flex bg-primary w-full h-80 relative bg-gradient-to-b from-primary to-background"
	></div>

	<!-- About Me Section with Heading -->
	<div id="about" class="mt-8">
		<SecondaryHeading heading="About Me" />
	</div>

	<!-- About Me Component with Buttons -->
	<!-- About Me Component with Buttons -->
	<!-- About Me Component with Buttons -->
	<section id="about" class="w-full flex justify-center items-start mt-24">
		<div class="flex w-full max-w-7xl space-x-32 mt-12 items-stretch">
			<!-- Left Side: About Me Text and Buttons -->
			<div class="flex-1 bg-white shadow-xl rounded-lg p-6 min-h-custom">
				<AboutMe />
			</div>

			<!-- Right Side: Photo Slideshow -->
			<div class="flex-1 bg-white shadow-lg rounded-lg p-6 min-h-custom">
				<ImageSlideshow />
			</div>
		</div>
	</section>

<!-- SVG Section -->
<!-- SVG Section at the Top (Primary Color) -->
<section id="svg-section" class="w-full mt-52 text-primary">
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 360 32"
	  height="100"
	  width="100%"
	  preserveAspectRatio="none"
	>
	  <polygon fill="currentColor" points="0 29.91 0 32 360 32 360 0 0 29.91"></polygon>
	</svg>
  </section>
  
  <!-- Div below the triangle that connects seamlessly -->
  <div class="w-full bg-primary h-[1200px] relative text-background">
	<!-- Add another triangle at the bottom of the div (White Color) -->
	<svg
	  class="absolute bottom-0"
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 360 32"
	  height="100"
	  width="100%"
	  preserveAspectRatio="none"
	>
	  <polygon fill="currentColor" points="0 29.91 0 32 360 32 360 0 0 29.91"></polygon>
	</svg>
  </div>
  

	<p class="mt-52 pt-52">labas</p>
	<slot />
</main>
