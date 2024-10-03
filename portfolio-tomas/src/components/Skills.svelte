<script>
import { skillCategories } from "$lib/data.js"; //import "skills" data
</script>

<section class="w-full max-w-7xl mx-auto px-4 py-12 mt-16">
	<div class="bg-white shadow-lg rounded-lg overflow-hidden">
		<h2 class="text-center text-3xl font-bold my-8 text-secondary">I can...</h2>
		{#each skillCategories as category, index}
			<div class="p-6">
				<h3 class="text-2xl font-bold mb-4 text-secondary">{category.name}</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each category.skills as skill}
						<div class="bg-white rounded-lg p-4 flex flex-col justify-between shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-103">
							<div class="flex items-center space-x-3 mb-2">
								<i class="{skill.icon} text-2xl" style="color: #48CFCB;"></i>
								<h4 class="text-xl font-semibold" style="color: #424242;">
									{skill.name}
								</h4>
							</div>
							<p class="text-base" style="color: #424242;">{skill.description}</p>
							<p class="text-base font-semibold mt-2" style="color: #424242;">
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
	.hover\:scale-103:hover {
		transform: scale(1.03);
	}
</style>