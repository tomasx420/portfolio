<script>
	import { onMount } from "svelte";
	import { Search, Github } from "lucide-svelte";
	import { projects } from "$lib/data.js"; //import data

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
							{#if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
								>
									<Github class="mr-2" size={20} />
									View on GitHub
								</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
