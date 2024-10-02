<script>
	import { onMount } from "svelte";
	import { Search } from "lucide-svelte";
	import img_db from "$lib/assets/oudit/db.png";
	import oudit1 from "$lib/assets/oudit/oudit1.png";
	import oudit2 from "$lib/assets/oudit/oudit2.png";
	import oudit3 from "$lib/assets/oudit/oudit3.png";
	import fitconnect1 from "$lib/assets/fitconnect/fitconnect1.png";
	import fitconnect2 from "$lib/assets/fitconnect/fitconnect2.png";
	import fitconnect3 from "$lib/assets/fitconnect/fitconnect3.png";
	import fitconnect4 from "$lib/assets/fitconnect/fitconnect4.png";
	import ds1 from "$lib/assets/ds/ds1.png";
	import ds2 from "$lib/assets/ds/ds2.png";
	import ds3 from "$lib/assets/ds/ds3.png";
	import ds4 from "$lib/assets/ds/ds4.png";
	import vision1 from "$lib/assets/visionaudio/vision1.png";
	import vision2 from "$lib/assets/visionaudio/vision2.png";
	import vision3 from "$lib/assets/visionaudio/vision3.png";
	import vision4 from "$lib/assets/visionaudio/vision4.png";
	import ic1 from "$lib/assets/ic/ic1.png";
	import ic2 from "$lib/assets/ic/ic2.png";
	import ic3 from "$lib/assets/ic/ic3.png";

	const projects = [
		{
			name: "OuDit - Audit Management System",
			type: "university",
			description: `The OuDit project is a web-based audit management system developed for Outokumpu Stainless in Terneuzen. The system centralizes the entire audit process within the organization, which was previously disjointed and scattered across paper forms and custom apps. It facilitates audit planning, the creation of checklists, audit reporting, and tracking actions resulting from audits.`,
			learnings: `A key part of this project was learning how to effectively communicate with non-technical clients and integrating tools like PowerBI.`,
			developed: `I contributed to the database design, created a filter and search system for the audits from scratch, and developed pages for managing teams, departments, and types. I also played a key role in improving the UX design of the website`,
			technologies: ["Laravel", "MySQL", "Bulma", "Chart.js", "PowerBI"],
			images: [
				{
					src: oudit1,
					caption: "OuDit dashboard with audit schedule and data visualizations",
				},
				{
					src: oudit2,
					caption: "Audit list page with search, filters, and status tracking",
				},
				{
					src: oudit3,
					caption:
						"View of 5S audit type, showing questions with options to edit the audit type and its questions",
				},
				{ src: img_db, caption: "Database design for managing audit data" },
			],
			liveDemo: "https://udit-demo.example.com",
		},

		{
			name: "FitConnect - Student Exercise Network",
			type: "university",
			description: `I learned how to implement GPS integration and optimize for mobile responsiveness. I also gained experience in conducting user testing to refine the UX and create feedback loops. Additionally, I learned how to develop, adjust, and make microservices, how to design APIs, and how to set up a CI/CD pipeline.`,
			learnings: `I learned how to implement GPS integration and optimize for mobile responsiveness. I also gained experience in conducting user testing to refine the UX and create feedback loops. Also, I learned how to set up a CI/CD pipeline.`,
			developed: `I primarily worked on integrating the map with GPS functionality and ensuring the app was responsive across various devices. Additionally, I worked on developing several microservices to support the app's functionalities.`,
			technologies: [
				"SvelteKit",
				"Next.js",
				"Supabase",
				"Tailwind",
				"Docker",
				"GitHub Actions, Figma",
			],
			images: [
				{
					src: fitconnect3,
					caption:
						"Map view where users can host and join nearby matches, with live event markers displayed",
				},
				{
					src: fitconnect4,
					caption:
						"Join event page showing participants, event details, and directions to the match location",
				},
				{
					src: fitconnect1,
					caption:
						"High-fidelity wireframes of the app, showcasing various user flows",
				},
				{
					src: fitconnect2,
					caption:
						"Component diagram, showing the API Gateway and its connections to various microservices",
				},
			],
			liveDemo: "https://fitconnect-demo.example.com",
		},

		{
			name: "AI Visitor Forecasting Project",
			type: "university",
			description:
				"This project aimed to forecast visitor numbers to nature reserves in Zeeland. The goal was to help local authorities balance tourism with conservation by providing data-driven insights into visitor patterns. By using historical data and factors like weather and public holidays, the forecasts enabled better resource allocation to protect natural environments while improving visitor experiences.",
			learnings:
				"This project laid a foundation for my data science skills, giving me practical experience with machine learning models like Random Forest and SARIMAX. It was my first deep dive into data analysis, teaching me how to integrate datasets and analyze external influences like weather on visitor behavior. It also built my confidence in making data-driven decisions.",
			developed:
				"I applied pre-built machine learning models, integrated weather and holiday datasets, and developed visualizations to assess model performance using metrics like MAE and R-squared. I was responsible for ensuring forecasts were accurate and actionable.",
			technologies: [
				"Python",
				"Pandas",
				"Scikit-learn",
				"SARIMAX",
				"Random Forest",
			],
			images: [
				{
					src: ds1,
					caption:
						"Heatmap of Hourly visitor counts at De Manteling, showing peak visitation times",
				},
				{
					src: ds2,
					caption:
						"Radial plot showing the average visitor numbers for each day of the week",
				},
				{
					src: ds3,
					caption:
						"SARIMAX model forecast of visits: training data vs. actual and forecasted visits",
				},
				{
					src: ds4,
					caption: "Distribution of residuals from the SARIMAX model evaluation",
				},
			],
		},
		{
			name: "Visionaudio.net - E-Commerce for Producers",
			type: "personal",
			description:
				"visionaudio.net is an e-commerce platform made for music producers, offering a range of products like, sample packs, multi-kits, presets and more. The site aims to provide producers with high-quality resources to enhance their music production workflow. With plans for future expansions, the platform is designed to scale and introduce more producer-focused products.",
			learnings:
				"This project helped me gain valuable experience overcoming Shopify's customization challenges with limited documentation and resources. It also introduced me to SEO optimization and it honed my skills in performance optimization and I got to apply my UI/UX/Graphic design experience.",
			developed:
				"I designed and developed the entire platform from scratch. This included customizing a Shopify theme with Liquid, HTML, and CSS, integrating a JavaScript libraries, and overcoming platform limitations with creative solutions to optimize performance and user experience.",
			technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
			images: [
				{
					src: vision1,
					caption: "Product page of one of the websites kits",
				},
				{
					src: vision2,
					caption: "Display of different sections of one of the product pages",
				},
				{
					src: vision3,
					caption: "Index page of visionaudio.net",
				},
				{
					src: vision4,
					caption: "Mobile view of one of the product pages",
				},
			],
			liveDemo: "https://visionaudio.net",
		},
		{
			name: "Internet Covers - E-Commerce for Cover Art",
			type: "personal",
			description:
				"Internet Covers is an e-commerce website designed for selling cover art primarily targeted at music producers and artists. The platform aims to provide high-quality cover designs while allowing users to easily get custom artwork for their music.",
			learnings:
				"This was my first project using Shopify, and diving into a new system with its own tools was a bit of a challenge at first but I gained valuable insights along the way. The project opened my eyes to website performance optimization and highlighted the importance of designing a site that turns visitors into customers. I also explored the logistics of running an e-commerce business, like how to delegate tasks to other designers when needed.",
			developed:
				"I built the entire website by customizing a Shopify theme with Liquid, HTML, and CSS. The project involved integrating essential features while addressing platform limitations with creative problem-solving. Although the site is currently on hold, I have plans to improve it and fully commit to its future.",
			technologies: ["Shopify", "Liquid", "HTML", "CSS"],
			images: [
				{
					src: ic1,
					caption: "Homepage showcasing various artwork",
				},
				{
					src: ic2,
					caption: "Cover art service options",
				},
				{
					src: ic3,
					caption: "Product page of the classic tier",
				},
			],
		},
	];

	let currentImageIndices = projects.map(() => 0);
	let slideIntervals = [];
	let isModalOpen = false;
	let modalImage = null;
	let modalCaption = "";

	function nextImage(projectIndex) {
		currentImageIndices[projectIndex] =
			(currentImageIndices[projectIndex] + 1) %
			projects[projectIndex].images.length;
	}

	function previousImage(projectIndex) {
		currentImageIndices[projectIndex] =
			(currentImageIndices[projectIndex] -
				1 +
				projects[projectIndex].images.length) %
			projects[projectIndex].images.length;
	}

	function goToSlide(projectIndex, imageIndex) {
		currentImageIndices[projectIndex] = imageIndex;
		resetInterval(projectIndex);
	}

	function startAutoSlide(projectIndex) {
		slideIntervals[projectIndex] = setInterval(() => {
			nextImage(projectIndex);
		}, 5000);
	}

	function resetInterval(projectIndex) {
		clearInterval(slideIntervals[projectIndex]);
		startAutoSlide(projectIndex);
	}

	function openModal(image, caption) {
		isModalOpen = true;
		modalImage = image;
		modalCaption = caption;
	}

	function closeModal() {
		isModalOpen = false;
		modalImage = null;
		modalCaption = "";
	}

	onMount(() => {
		projects.forEach((_, index) => startAutoSlide(index));
		return () => slideIntervals.forEach(clearInterval);
	});
</script>

{#if isModalOpen}
	<div
		class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300"
		on:click={closeModal}
	>
		<div class="relative max-w-4xl w-full p-4" on:click|stopPropagation>
			<img
				src={modalImage}
				class="object-contain w-full h-auto rounded-lg"
				alt="Enlarged image"
			/>
			<p class="text-white text-center mt-2">{modalCaption}</p>
		</div>
	</div>
{/if}

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="mt-12 space-y-32">
		{#each projects as project, projectIndex}
			<div class="bg-white shadow-xl rounded-lg overflow-hidden relative">
				<!-- Tag for type -->
				<div
					class="absolute top-0 right-0 bg-primary text-white py-1 px-3 rounded-bl-lg z-10"
				>
					{project.type}
				</div>

				<!-- Flex container for image and text -->
				<div
					class="h-[675px] flex flex-col md:flex-row {projectIndex % 2 === 0
						? ''
						: 'md:flex-row-reverse'}"
				>
					<!-- Image Section -->
					<div class="w-full md:w-1/2 relative">
						<div class="aspect-square">
							<div
								class="w-full h-full flex justify-center items-center overflow-hidden"
							>
								<div
									class="flex transition-transform duration-700 ease-in-out"
									style="transform: translateX(-{currentImageIndices[projectIndex] *
										100}%); width: {projects[projectIndex].images.length * 100}%;"
								>
									<!-- Image loop -->
									{#each project.images as { src, caption }, i}
										<div
											class="min-w-full relative cursor-pointer group"
											on:click={() => openModal(src, caption)}
										>
											<img
												{src}
												alt={`Project screenshot ${i + 1}`}
												class="object-cover w-full h-full"
											/>
											<!-- Preview overlay on hover -->
											<div
												class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30"
											>
												<div class="bg-white bg-opacity-80 rounded-full p-3">
													<Search size={24} color="#000000" />
												</div>
											</div>
										</div>
									{/each}
								</div>

								<!-- Previous and Next buttons for sliding images -->
								<button
									class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
									on:click={() => {
										previousImage(projectIndex);
										resetInterval(projectIndex);
									}}
								>
									<svg
										class="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
								<button
									class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
									on:click={() => {
										nextImage(projectIndex);
										resetInterval(projectIndex);
									}}
								>
									<svg
										class="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>

								<!-- Caption -->
								<div
									class="absolute bottom-8 left-0 right-0 bg-black bg-opacity-50 text-white text-sm py-2 px-4"
								>
									<p class="text-center">
										{project.images[currentImageIndices[projectIndex]].caption}
									</p>
								</div>

								<!-- Image indicators -->
								<div
									class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
								>
									{#each project.images as _, i}
										<button
											class="w-3 h-3 rounded-full {i === currentImageIndices[projectIndex]
												? 'bg-primary'
												: 'bg-gray-300'}"
											on:click={() => goToSlide(projectIndex, i)}
										/>
									{/each}
								</div>
							</div>
						</div>
					</div>

					<!-- Text Section -->
					<div class="w-full md:w-1/2 p-6 flex flex-col justify-start">
						<h3 class="text-2xl font-bold text-gray-800 mb-4">{project.name}</h3>
						<div class="space-y-4">
							<!-- Description -->
							<div>
								<h4 class="text-lg font-semibold text-gray-700">Description</h4>
								<p class="text-gray-600 leading-relaxed">{project.description}</p>
							</div>

							<!-- What I Learned -->
							<div>
								<h4 class="text-lg font-semibold text-gray-700">What I Learned</h4>
								<p class="text-gray-600 leading-relaxed">{project.learnings}</p>
							</div>

							<!-- What I Developed -->
							<div>
								<h4 class="text-lg font-semibold text-gray-700">What I Developed</h4>
								<p class="text-gray-600 leading-relaxed">{project.developed}</p>
							</div>

							<!-- Technologies Used -->
							<div>
								<h4 class="text-lg font-semibold text-gray-700">Technologies Used</h4>
								<p class="text-gray-600">{project.technologies.join(", ")}</p>
							</div>

							<!-- Live Demo Button -->
							{#if project.liveDemo}
								<div>
									<a
										href={project.liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										class="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
									>
										Live Demo
									</a>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
