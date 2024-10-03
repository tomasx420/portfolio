<script>
	const skillCategories = [
		{
			name: "Programming Languages",
			skills: [
				{
					name: "JavaScript",
					icon: "fa-brands fa-js-square",
					description:
						"Build dynamic web apps using modern JavaScript, integrate APIs, GPS, and maps.",
					years: "2 years",
				},
				{
					name: "TypeScript",
					icon: "fa-solid fa-code",
					description:
						"Develop games and scalable apps using TypeScript and object-oriented programming principles.",
					years: "1 years",
				},
				{
					name: "Python",
					icon: "fa-brands fa-python",
					description:
						"Conduct data analysis and create complex visualizations using Python, with knowledge in machine learning projects.",
					years: "1 year",
				},
				{
					name: "HTML/CSS",
					icon: "fa-brands fa-html5",
					description:
						"Design responsive, accessible web layouts using HTML, CSS, and Tailwind, with a strong focus on UI/UX.",
					years: "3 years",
				},
			],
		},
		{
			name: "Frameworks & Libraries",
			skills: [
				{
					name: "Svelte",
					icon: "fa-solid fa-layer-group",
					description:
						"Build reactive web applications with Svelte, optimized for user experience.",
					years: "1 years",
				},
				{
					name: "Next.js",
					icon: "fa-solid fa-layer-group",
					description:
						"Build applications using Next.js to efficiently handle API requests and data fetching.",
					years: "Few Months",
				},
				{
					name: "Laravel",
					icon: "fa-solid fa-layer-group",
					description:
						"Build full-stack websites using Laravel's monolithic architecture and manage databases.",
					years: "1 year",
				},
			],
		},
        {
			name: "DevOps & Tools",
			skills: [
				{
					name: "Git",
					icon: "fa-solid fa-code-branch",
					description: "Version control with Git, manage repositories, workflows, and set up CI/CD pipelines using GitHub Actions.",
					years: "2 years",
				},
				{
					name: "Docker",
					icon: "fa-brands fa-docker",
					description:
						"Containerize websites and databases, deployg and manage containers for efficient hosting.",
					years: "0.5 year",
				},
			],
		},
		{
			name: "Web Platforms",
			skills: [
				{
					name: "WordPress",
					icon: "fa-solid fa-newspaper",
					description:
						"Create simple WordPress sites with custom themes and basic functionality.",
					years: "Few months",
				},
				{
					name: "Shopify",
					icon: "fa-solid fa-shopping-cart",
					description:
						"Build and customize Shopify stores, integrate apps to sell digital products.",
					years: "0.5 years",
				},
			],
		},
		{
			name: "Design & Multimedia",
			skills: [
				{
					name: "Graphic Design",
					icon: "fa-solid fa-paint-brush",
					description:
						"Design logos, UI elements, and branding assets using Figma and Adobe tools.",
					years: "2+ years",
				},
				{
					name: "UX Design",
					icon: "fa-brands fa-figma",
					description:
						"Create wireframes and interactive prototypes, applying UX principles while improving usability.",
					years: "1 year",
				},
				{
					name: "Video Editing",
					icon: "fa-solid fa-film",
					description:
						"Edit videos with complex transitions and effects, using software like After Effects and Premiere Pro.",
					years: "7+ years",
				},
				{
					name: "Photo Editing",
					icon: "fa-solid fa-camera",
					description:
						"Edit and enhance photos for digital use, including cover art and product images.",
					years: "4+ years",
				},
			],
		}
	];
</script>

<section class="w-full max-w-[1800px] mx-auto px-4 py-16 mt-20">
	<div
		class="bg-white shadow-lg rounded-lg overflow-hidden"
	>
		<!-- Centralized "I can..." heading at the top -->
		<h2 class="text-center text-3xl font-bold mt-8 text-secondary">I can...</h2>
		{#each skillCategories as category, index}
			<div
				class="p-6"
				class:border-gray-200={index !== 0}
				class:mt-2={index === 0}
			>
				<h3 class="text-2xl font-bold mb-4 text-secondary">{category.name}</h3>
				<div
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4"
				>
					{#each category.skills as skill}
						<div
							class="bg-white rounded-lg p-4 flex flex-col justify-between shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
						>
							<div class="flex items-center space-x-3 mb-2">
								<i class="{skill.icon} text-2xl" style="color: #48CFCB;"></i>
								<!-- Font Awesome icon -->
								<h4 class="text-xl font-semibold" style="color: #424242;">
									{skill.name}
								</h4>
							</div>
							<p class="text-lg" style="color: #424242;">{skill.description}</p>
							<p class="text-lg font-semibold mt-2" style="color: #424242;">
								Experience: {skill.years}
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Add any additional Tailwind customizations if needed */
	.hover\:scale-105:hover {
		transform: scale(1.05);
	}
</style>
