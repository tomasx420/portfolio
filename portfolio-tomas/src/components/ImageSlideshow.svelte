<script>
  import { onMount } from 'svelte';

  import photo1 from '$lib/assets/1.png';
  import photo2 from '$lib/assets/2.png';
  import photo3 from '$lib/assets/3.png';

  let currentImageIndex = 0;
  const images = [photo1, photo2, photo3];
  let slideInterval;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }

  function goToSlide(index) {
    currentImageIndex = index;
    resetInterval();
  }

  // Set up the automatic sliding every 2 seconds
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      nextImage();
    }, 2000); // Change slide every 2 seconds
  }

  // Reset the interval when user interacts
  function resetInterval() {
    clearInterval(slideInterval);
    startAutoSlide(); // Restart the interval
  }

  // Start automatic sliding when the component mounts
  onMount(() => {
    startAutoSlide();
    return () => clearInterval(slideInterval); // Cleanup on component destroy
  });
</script>

<!-- Square Container for the Carousel -->
<div class="relative w-full max-w-[1080px] aspect-square overflow-hidden">
  <!-- Carousel wrapper -->
  <div class="flex transition-transform duration-700 ease-in-out" style="transform: translateX(-{currentImageIndex * 100}%)">
    {#each images as image, i}
      <div class="min-w-full">
        <img src={image} class="w-full h-full object-cover" alt="Carousel Image" />
      </div>
    {/each}
  </div>

  <!-- Slider indicators (Bubbles) -->
  <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
    {#each images as _, i}
      <button
        type="button"
        class={`w-3 h-3 rounded-full ${i === currentImageIndex ? 'bg-primary' : 'bg-gray-300 border-2 border-gray-500'}`}
        aria-current={i === currentImageIndex ? "true" : "false"}
        aria-label={`Slide ${i + 1}`}
        on:click={() => goToSlide(i)}
      >
      </button>
    {/each}
  </div>

  <!-- Slider controls -->
  <button
    type="button"
    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    on:click={() => { previousImage(); resetInterval(); }}
  >
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 group-focus:ring-white group-focus:outline-none">
      <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
      <span class="sr-only">Previous</span>
    </span>
  </button>

  <button
    type="button"
    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    on:click={() => { nextImage(); resetInterval(); }}
  >
    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 group-focus:ring-white group-focus:outline-none">
      <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9l4-4-4-4"/>
      </svg>
      <span class="sr-only">Next</span>
    </span>
  </button>
</div>
