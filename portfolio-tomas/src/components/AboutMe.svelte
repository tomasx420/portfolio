<script>
	let currentSection = "intro"; // Default section

	// Function to show a specific section when a button is clicked
	function showSection(section) {
		currentSection = section;
	}
</script>

<!-- Main Container for the About Me section -->
<div class="bg-white shadow-lg rounded-lg p-6 pt-8 mt-8 max-w-xl mx-auto">
	<!-- Dynamic Content Sections -->
	{#if currentSection === "intro"}
		<p class="text-lg text-gray-700 leading-relaxed">
			I’m a 21-year-old student from Lithuania, currently in my third year studying Information and Communication Technologies at HZ University in the Netherlands. I’d describe myself as confident, humorous, and always open to new experiences. I moved to the Netherlands not only for the education but also to immerse myself in the culture and meet new people. My passion for technology drives me to constantly push boundaries and explore the creative side of programming and web design.
		</p>
	{/if}

	{#if currentSection === "hobbies"}
		<p class="text-lg text-gray-700 leading-relaxed">
			I have a variety of hobbies that help me balance my creative and active sides. I regularly go to the gym to stay fit and clear my mind, but I also enjoy sports like football, volleyball, and padel, although I play them less frequently. Beyond sports, I love producing music, designing sounds, editing videos, and building websites. Going for walks is another way I like to unwind, allowing me to relax and gather my thoughts. And when I’m not being active or creative, you’ll often find me diving into books or learning about business.
		</p>
	{/if}

	{#if currentSection === "motivation"}
		<p class="text-lg text-gray-700 leading-relaxed">
			My journey into programming began when I was still in high school. I started playing around with coding just for fun, learning bits and pieces here and there. When the pandemic hit, I had more time to dive deeper into it and realized how much I enjoyed it. This led me to choose ICT as my field of study. The fast-paced, ever-evolving nature of the tech industry excites me—it’s challenging but rewarding to stay on top of the latest developments, and I thrive in an environment where adaptation is key.
		</p>
	{/if}

	<!-- Styled Horizontal Line -->
    <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
     -->
	<!-- Button Controls Below the Paragraph -->
	<div class="flex justify-center space-x-4 mt-12">
		<button
			class={`py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "intro" ? 'bg-primary glow-effect' : 'bg-gray-300 hover:bg-gray-400'}`}
			on:click={() => showSection("intro")}
		>
			Short Intro
		</button>
		<button
			class={`py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "hobbies" ? 'bg-primary glow-effect' : 'bg-gray-300 hover:bg-gray-400'}`}
			on:click={() => showSection("hobbies")}
		>
			Hobbies
		</button>
		<button
			class={`py-2 px-4 rounded-lg relative transition-all focus:outline-none ${currentSection === "motivation" ? 'bg-primary glow-effect' : 'bg-gray-300 hover:bg-gray-400'}`}
			on:click={() => showSection("motivation")}
		>
			Motivation
		</button>
	</div>
</div>

<!-- Custom Glow Effect CSS -->
<style>
	.glow-effect {
		box-shadow: 0 0 15px rgba(72, 207, 203, 0.8), 0 0 30px rgba(72, 207, 203, 0.5);
	}

	button:hover {
		transform: scale(1.1);
		transition: transform 0.2s ease-in-out;
	}
</style>
