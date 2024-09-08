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
  <main class="min-h-screen bg-background flex flex-col items-center justify-center mt-8 pt-2">
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
	  <div class="relative w-48 h-48 bg-black flex items-center justify-center pr-52">
		<Donut />
	  </div>
	</div>
  
	<!-- Section for Waves (placed below heading and donut) -->
	<section class="w-full mt-72 relative">
	  <Waves />
  
	  <!-- Gradient div -->
	  <div id="about" class="content flex bg-primary w-full h-80 relative bg-gradient-to-b from-primary to-background"></div>
  
	  <!-- About Me Section with Heading -->
	  <div id="about" class="mt-8">
		<SecondaryHeading heading="About Me" />
	  </div>
  
	  <!-- About Me Component with Buttons -->
	  <section id="about" class="w-full flex justify-center items-start mt-8">
		<div class="flex w-full max-w-7xl space-x-24 mt-32">
		  <!-- Left Side: About Me Text and Buttons -->
			<AboutMe />
		  
  
		  <!-- Right Side: Photo Slideshow -->
		  <div class="flex-1 bg-white shadow-lg rounded-lg p-6">
			<ImageSlideshow />
		  </div>
		</div>


		
	  </section>
	</section>
	<p class="mt-52 pt-52">labas</p>
	<slot />
  </main>
  