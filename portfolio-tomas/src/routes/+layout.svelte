<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Heading from "../components/Heading.svelte";
  import Donut from "../components/Donut.svelte"; // Import the Donut component
</script>

<Header />

<div
  id="home"
  class="min-h-screen bg-background flex flex-col items-center justify-center p-8"
>
  <div id="home" class="min-h-screen bg-background flex justify-center p-8 mt-8 flex items-start">
    <div class="flex w-full max-w-7xl space-x-8">
      <!-- Left Side: Welcome Text -->
      <div class="flex-1 pr-24 pl-8 mt-36">
        <Heading
          heading="WELCOME TO MY PORTFOLIO"
          subheading="On this website, you will learn about me and my projects. On this website, you will "
        />
      </div>

      <!-- <div class="w-52 h-52 bg-text flex items-center justify-center absolute top-[335px] left-[1065px] overflow-hidden z-0">
        s
      </div> -->
    <div class="relative w-48 h-48 bg-black flex items-center justify-center pr-52">
      <!-- Donut positioned inside the black background -->
      <Donut />
    </div>
  </div>
</div>
</div>

<main class="pt-20">
  <slot />
</main>

<slot />
