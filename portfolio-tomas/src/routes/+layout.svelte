<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Heading from "../components/Heading.svelte";
	import Donut from "../components/Donut.svelte";
	import Waves from "../components/Waves.svelte"; // Import the Waves component
	import SecondaryHeading from "../components/SecondaryHeading.svelte";
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

		<!-- gradient div (maybe add to waves)-->
		<div
      id="about"
			class="content flex bg-primary w-full h-80 relative bg-gradient-to-b from-primary to-background"
		></div>

		<!-- Additional Content (About Me) -->
		<div id="about" class="mt-8">
			<SecondaryHeading heading="About Me" id="x" />
		</div>

   <!-- About Me Section -->
<section id="about" class="w-full flex justify-center items-start mt-8">
  <div class="flex w-full max-w-7xl space-x-8 mt-32">

    <!-- Left Side: Paragraph About Yourself -->
    <div class="flex-1">
      <p class="text-lg text-gray-700 leading-relaxed px-8">
        My name is Tomas Tomkevicius. I am a web developer who enjoys working with modern technologies.
        In this section, you'll find a few more details about my hobbies and interests.
        I love latinas, asian bitches and phat asses also coding, and exploring new places.
      </p>
    </div>

    <!-- Right Side: Photo Slideshow -->
    <div class="flex-1">
      <!-- Placeholder for the photo slideshow -->
      <div class="slideshow bg-gray-300 rounded-lg h-96 w-full flex items-center justify-center">
        <p class="text-center text-xl text-gray-700">Photo Slideshow Coming Soon</p>
      </div>
    </div>

  </div>
</section>

<!-- Continue with the fake paragraph about being a dev below -->
<div>
</div>

		<div>
			<p class="text-center text-2xl text-gray-700 px-8 mt-[1500px]">
				I am a web developer with a passion for creating beautiful and functional
				websites. I specialize in front-end development and enjoy working with
				modern technologies like React and Svelte. When I'm not coding, you can find
				me hiking in the mountains or reading a good book.
			</p>
		</div>
	</section>

	<!-- Slot for additional dynamic content (inside the main content area) -->
	<slot />
</main>
