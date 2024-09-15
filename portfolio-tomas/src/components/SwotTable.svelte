<script>
    import { CheckCircle, XCircle } from "lucide-svelte";
    import { fly } from 'svelte/transition';
    
    const strengths = [
      "I naturally take on leadership roles in teams, ensuring clarity on goals and tasks",
      "I quickly identify solutions without focusing on unsolvable problems",
      "I notice when others are struggling or need better support",
      "I excel in presenting familiar topics clearly and confidently",
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
    <div class="grid md:grid-cols-2 gap-12">
      
      <!-- Strengths Card -->
      <div class="bg-white rounded-lg overflow-hidden relative" style="height: 500px; perspective: 1000px; background-color: rgba(255, 255, 255, 0);">
        <div class="absolute inset-0" class:flipped={isStrengthsFlipped} style="transform-style: preserve-3d; transition: transform 0.6s;">
          <div class="absolute inset-0 backface-hidden bg-white">
            <div in:fly="{{ y: 20, duration: 300 }}" out:fly="{{ y: -20, duration: 300 }}" class="h-full flex flex-col">
              <div class="px-6 py-4 bg-background-second">
                <h3 class="flex items-center text-green-600 text-2xl font-semibold glow-green">
                  <CheckCircle class="mr-2" size={20} />
                  Strengths
                </h3>
              </div>
              <div class="px-6 py-4 bg-background flex-grow">
                <ul class="space-y-4">
                  {#each strengths as strength}
                    <li class="flex items-start">
                      <CheckCircle class="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{strength}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 backface-hidden bg-white" style="transform: rotateY(180deg);">
            <div in:fly="{{ y: 20, duration: 300 }}" out:fly="{{ y: -20, duration: 300 }}" class="h-full bg-background p-6 flex flex-col">
              <h3 class="text-green-600 text-2xl font-semibold mb-4">Leveraging My Strengths</h3>
              <p class="text-text flex-grow">
                By capitalizing on these strengths, I can lead teams effectively, solve problems efficiently, and support my colleagues. 
                My ability to plan and present confidently allows me to meet deadlines and communicate ideas clearly. 
                Moving forward, I aim to further develop these strengths to become an even more valuable team member and leader.
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-4 left-0 right-0 flex justify-center" style="z-index: 10;">
          <button on:click={() => flipCard('strengths')} class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            {isStrengthsFlipped ? 'Show Strengths' : 'Learn More'}
          </button>
        </div>
      </div>
      
      <!-- Weaknesses Card -->
      <div class="bg-background shadow-md rounded-lg overflow-hidden relative" style="height: 500px; perspective: 1000px;">
        <div class="absolute inset-0" class:flipped={isWeaknessesFlipped} style="transform-style: preserve-3d; transition: transform 0.6s;">
          <div class="absolute inset-0 backface-hidden bg-white">
            <div in:fly="{{ y: 20, duration: 300 }}" out:fly="{{ y: -20, duration: 300 }}" class="h-full flex flex-col">
              <div class="px-6 py-4 bg-background-second">
                <h3 class="flex items-center text-red-600 text-2xl font-semibold glow-red">
                  <XCircle class="mr-2" size={20} />
                  Weaknesses
                </h3>
              </div>
              <div class="px-6 py-4 bg-background flex-grow">
                <ul class="space-y-4">
                  {#each weaknesses as weakness}
                    <li class="flex items-start">
                      <XCircle class="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>{weakness}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 backface-hidden bg-white" style="transform: rotateY(180deg);">
            <div in:fly="{{ y: 20, duration: 300 }}" out:fly="{{ y: -20, duration: 300 }}" class="h-full bg-background p-6 flex flex-col">
              <h3 class="text-red-600 text-2xl font-semibold mb-4">Addressing My Weaknesses</h3>
              <p class="text-text flex-grow">
                Recognizing these weaknesses is the first step towards improvement. I'm working on my public speaking skills through practice and workshops. 
                To manage conflicts better, I'm learning negotiation and mediation techniques. I'm also working on finding a balance between perfectionism and efficiency, 
                and I'm practicing delegation by providing clear instructions and feedback to build trust in my team members' abilities.
              </p>
            </div>
          </div>
        </div>
        <div class="absolute bottom-4 left-0 right-0 flex justify-center" style="z-index: 10;">
            <button on:click={() => flipCard('weaknesses')} class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                {isWeaknessesFlipped ? 'Show Weaknesses' : 'Learn More'}
              </button>
        </div>
      </div>
      
    </div>
  </div>
  
  <style>
    .glow-green {
      text-shadow: 0 0 5px rgba(34, 197, 94, 0.5), 0 0 10px rgba(34, 197, 94, 0.3);
    }
  
    .glow-red {
      text-shadow: 0 0 5px rgba(239, 68, 68, 0.5), 0 0 10px rgba(239, 68, 68, 0.3);
    }
  
    .flipped {
      transform: rotateY(180deg);
    }
  
    .backface-hidden {
      backface-visibility: hidden;
    }
  </style>