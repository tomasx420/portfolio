<script>
	let currentSection = "intro"; // Default section

	import { aboutMeSections } from "$lib/data.js";

	function showSection(section) {
		currentSection = section;
	}
</script>

<div class="bg-white rounded-lg p-6 pt-8 mt-8 max-w-xl mx-auto glow-gradient">
	<div class="h-[300px] flex items-center">
		<p class="text-lg text-text leading-relaxed">
			{#if currentSection === "intro"}
				{aboutMeSections.intro}
			{/if}
			{#if currentSection === "hobbies"}
				{aboutMeSections.hobbies}
			{/if}
			{#if currentSection === "motivation"}
				{aboutMeSections.motivation}
			{/if}
		</p>
	</div>

	<hr class="my-6 border-t-1 border-gray-200 mt-8 w-full max-w-xl mx-auto" />

	<div class="flex justify-center space-x-12 mt-16 font-bold">
		<button
			class={`font-bold py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "intro" ? "bg-primary glow-effect" : "bg-gray-100 hover:bg-gray-200"}`}
			on:click={() => showSection("intro")}
		>
			Short Intro
		</button>
		<button
			class={`py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "hobbies" ? "bg-primary glow-effect" : "bg-gray-100 hover:bg-gray-200"}`}
			on:click={() => showSection("hobbies")}
		>
			Hobbies
		</button>
		<button
			class={`py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "motivation" ? "bg-primary glow-effect" : "bg-gray-100 hover:bg-gray-200"}`}
			on:click={() => showSection("motivation")}
		>
			Motivation
		</button>
	</div>
</div>

<style>
	.glow-effect {
		box-shadow:
			0 0 15px rgba(72, 207, 203, 0.8),
			0 0 30px rgba(72, 207, 203, 0.5);
	}

	hr {
		border: none;
		border-top: 1px solid rgba(100, 100, 100, 0.2);
		width: 100%;
	}

	button:hover {
		transform: scale(1.1);
		transition: transform 0.2s ease-in-out;
	}
</style>
