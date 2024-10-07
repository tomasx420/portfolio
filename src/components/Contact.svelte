<script lang="ts">
	import { Mail, Phone, Github, Linkedin } from "lucide-svelte";
</script>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="bg-white shadow-xl rounded-lg overflow-hidden">
		<div class="p-6 sm:p-10">
			<h2 class="text-4xl font-bold text-gray-800 mb-2">TOMAS TOMKEVICIUS</h2>
			<h3 class="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
			<p class="text-lg text-gray-600 mb-8">
				I'm always excited to engage in new projects, collaborations, and
				discussions about technology and development. If you have internship offers
				or feedback on my personal projects, feel free to reach out! I welcome any
				questions or suggestions you might have about this portfolio as well. You
				can contact me through any of the channels below.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="space-y-4">
					<div class="flex items-center">
						<Mail class="w-6 h-6 text-primary mr-4" />
						<a
							href="mailto:tomas@example.com"
							class="text-lg text-gray-700 hover:text-primary transition-colors"
						>
							tomk0002@hz.nl
						</a>
					</div>
					<div class="flex items-center">
						<Phone class="w-6 h-6 text-primary mr-4" />
						<a
							href="tel:+37061234567"
							class="text-lg text-gray-700 hover:text-primary transition-colors"
						>
							+370 606 16 321
						</a>
					</div>
				</div>
				<div class="space-y-4">
					<div class="flex items-center">
						<Github class="w-6 h-6 text-primary mr-4" />
						<a
							href="https://github.com/tomasx420"
							target="_blank"
							rel="noopener noreferrer"
							class="text-lg text-gray-700 hover:text-primary transition-colors"
						>
							github.com/tomasx420
						</a>
					</div>
					<div class="flex items-center">
						<Linkedin class="w-6 h-6 text-primary mr-4" />
						<a
							href="https://linkedin.com/in/tomas-tomkevicius"
							target="_blank"
							rel="noopener noreferrer"
							class="text-lg text-gray-700 hover:text-primary transition-colors"
						>
							linkedin.com/in/tomas-tomkevicius
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
