<script>
  import { CheckCircle, XCircle } from "lucide-svelte";
  
  const strengths = [
    "I naturally take on leadership roles in teams, ensuring clarity on goals and tasks",
    "I quickly identify solutions without focusing on unsolvable problems",
    "I notice when others are struggling or need better support",
    "I effectively plan my tasks and days to stay on track with deadlines"
  ];

  const weaknesses = [
    "I occasionally struggle with nervousness in certain public speaking situations",
    "I find heated disagreements difficult to manage and often withdraw",
    "I strive for perfection, sometimes slowing down task completion",
    "I hesitate to delegate tasks unless I'm confident in my teammates' abilities"
  ];

  let isStrengthsFlipped = false;
  let isWeaknessesFlipped = false;

  function flipCard(card) {
    if (card === 'strengths') {
      isStrengthsFlipped = !isStrengthsFlipped;
    } else {
      isWeaknessesFlipped = !isWeaknessesFlipped;
    }
  }
</script>

<div class="container mx-auto px-4 py-8">
  <div class="grid md:grid-cols-2 gap-24">
    <!-- Strengths Card -->
    <div class="relative" style="height: 500px; perspective: 1000px;">
      <div class="absolute inset-0 w-full h-full" class:flipped={isStrengthsFlipped} style="transform-style: preserve-3d; transition: transform 0.6s;">
        <div class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md">
          <div class="h-full flex flex-col">
            <div class="px-6 py-4 bg-gray-200">
              <h3 class="flex items-center text-secondary text-2xl font-semibold glow-green">
                <CheckCircle class="mr-2" size={20} /> Strengths
              </h3>
            </div>
            <div class="px-6 py-4 bg-background flex-grow pt-8">
              <ul class="space-y-12">
                {#each strengths as strength}
                  <li class="flex items-start">
                    <CheckCircle class="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" size={16} />
                    <span>{strength}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md" style="transform: rotateY(180deg);">
          <div class="h-full bg-background p-6 flex flex-col">
            <h3 class="text-secondary text-2xl font-semibold mb-4">How I Use My Strenghts</h3>
            <p class="text-text flex-grow">
              I make the most of my strengths by taking the lead in team settings, solving problems with efficiency, and always being there to support the people im working with. Planning and presenting with confidence helps me stay on top of deadlines and communicate my ideas effectively. I'm always working on improving these skills and pushing myself to take on bigger challenges and leadership roles.
            </p>
          </div>
        </div>
      </div>
      <div class="absolute bottom-4 left-0 right-0 flex justify-center" style="z-index: 10;">
        <button on:click={() => flipCard('strengths')} class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors">
          {isStrengthsFlipped ? 'View Strengths' : 'How I use them'}
        </button>
      </div>
    </div>

    <!-- Weaknesses Card (similar structure to Strengths Card) -->
    <div class="relative" style="height: 500px; perspective: 1000px;">
      <div class="absolute inset-0 w-full h-full" class:flipped={isWeaknessesFlipped} style="transform-style: preserve-3d; transition: transform 0.6s;">
        <div class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md">
          <div class="h-full flex flex-col">
            <div class="px-6 py-4 bg-gray-200">
              <h3 class="flex items-center text-text text-2xl font-semibold">
                <XCircle class="mr-2" size={20} /> Weaknesses
              </h3>
            </div>
            <div class="px-6 py-4 bg-background flex-grow pt-8">
              <ul class="space-y-12">
                {#each weaknesses as weakness}
                  <li class="flex items-start">
                    <XCircle class="mr-2 h-5 w-5 text-text flex-shrink-0 mt-0.5" size={16} />
                    <span>{weakness}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md" style="transform: rotateY(180deg);">
          <div class="h-full bg-background p-6 flex flex-col">
            <h3 class="text-secondary text-2xl font-semibold mb-4">How I Improve  </h3>
            <p class="text-text flex-grow">
              I think that recognizing these weaknesses is the first step toward improvement. I've recognized that building confidence (e.g., for public speaking) starts with taking care of myself and viewing myself in a more positive light. I'm working on staying present in difficult conversations, rather than stepping away. I’m also finding a balance between perfectionism and efficiency, and improving my delegation by learning to trust others while providing clear guidance
          </div>
        </div>
      </div>
      <div class="absolute bottom-4 left-0 right-0 flex justify-center" style="z-index: 10;">
        <button on:click={() => flipCard('weaknesses')} class="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors">
          {isWeaknessesFlipped ? 'View Weaknesses' : 'How I improve'}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .glow-green {
    text-shadow: 0 0 5px rgba(34, 197, 94, 0.5), 0 0 10px rgba(34, 197, 94, 0.3);
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .backface-hidden {
    backface-visibility: hidden;
  }
</style>