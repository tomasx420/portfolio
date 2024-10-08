<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Heading from "../components/Heading.svelte";
	import Donut from "../components/Donut.svelte";
	import Waves from "../components/Waves.svelte";
	import SecondaryHeading from "../components/SecondaryHeading.svelte";
	import AboutMe from "../components/AboutMe.svelte";
	import ImageSlideshow from "../components/ImageSlideshow.svelte";
	import Skills from "../components/Skills.svelte";
	import Swot from "../components/Swot.svelte";
	import Projects from "../components/Projects.svelte";
	import Contact from "../components/Contact.svelte";
	import { onMount } from "svelte";
	import MobileWarning from "../components/MobileWarning.svelte";
	import LoadingSpinner from "../components/LoadingSpinner.svelte";

	let isMobile = false;
	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 2000);

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	});

	function checkScreenSize() {
		isMobile = window.innerWidth < 1024;
	}
</script>

<MobileWarning {isMobile} />

<LoadingSpinner {isLoading} />

{#if !isLoading}
	{#if !isMobile}
		<main class="bg-background">
			<Header />
			<slot />

			<section
				class="min-h-screen bg-background flex flex-col items-center justify-center mt-8 pt-2 w-full"
			>
				<div
					class="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between px-4 md:px-8 mt-32"
				>
					<div class="flex-1 max-w-2xl">
						<Heading
							heading="WELCOME TO MY PORTFOLIO"
							subheading="On this website, you'll learn about my journey, from my hobbies and strengths to my technical skills and the projects I've developed."
						/>
					</div>

					<div class="mt-8 md:mt-0 md:ml-8">
						<Donut />
					</div>
				</div>

				<section class="w-full mt-28 relative bg-background">
					<Waves />
				</section>

				<div
					id="about"
					class="content flex bg-primary w-full h-80 relative bg-gradient-to-b from-primary to-background"
				></div>

				<div id="about" class="mt-8 text-text">
					<SecondaryHeading heading="About Me" />
				</div>

				<section id="about" class="w-full flex justify-center items-start mt-20">
					<div class="flex w-full max-w-7xl space-x-32 mt-12 items-stretch">
						<div class="flex-1 bg-white shadow-xl rounded-lg p-6 min-h-custom">
							<AboutMe />
						</div>

						<div class="flex-1 bg-white shadow-lg rounded-lg p-6 min-h-custom">
							<ImageSlideshow />
						</div>
					</div>
				</section>

				<section
					id="svg-section"
					class="w-full mt-52 text-primary relative text-lg"
				>
					<Swot />
				</section>

				<section id="skills" class="w-full mt-52 text-primary relative text-lg">
					<div class="flex justify-center text-text mt-48">
						<SecondaryHeading heading="Technical Skills" />
					</div>

					<Skills />
				</section>

				<section
					id="projects"
					class="w-full bg-gradient-to-b from-background to-background via-primary via-65%"
				>
					<div class="flex justify-center text-text mt-32 mb-20">
						<SecondaryHeading heading="Projects" />
					</div>
					<Projects />
				</section>

				<section id="contact" class="w-full"></section>
				<div class="flex justify-center text-text mt-32 mb-20">
					<SecondaryHeading heading="Contact" />
				</div>
				<Contact />
			</section>

			<section class="w-full mt-52 relative bg-background">
				<Waves />
			</section>
			<div class="content flex bg-primary w-full h-40 relative bg-primary"></div>
		</main>
	{/if}
{/if}

<style>
	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}
</style>
