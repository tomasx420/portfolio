<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Heading from "../components/Heading.svelte";
  import Donut from "../components/Donut.svelte";
  import Waves from "../components/Waves.svelte";  // Import the Waves component
</script>

<Header />

<!-- Main Section with Heading and Donut -->
<main id="home" class="min-h-screen bg-background flex flex-col items-center justify-center mt-8 pt-2">
  <!-- Flex Container for Heading and Donut -->
  <div class="flex w-full max-w-7xl space-x-40">
    
    <!-- Left Side: Welcome Text -->
    <div class="flex-1 pr-24 pl-8 mt-8">
      <Heading
        heading="WELCOME TO MY PORTFOLIO"
        subheading="On this website, you will learn about me and my projects. On this website, you will "
      />
    </div>

    <!-- Right Side: Donut -->
    <div class="relative w-48 h-48 bg-black flex items-center justify-center pr-52">
      <Donut />
    </div>
  </div>

  <!-- Section for Waves (placed below heading and donut) -->
  <section class="w-full mt-52">


    <Waves />
    <div class="content flex bg-primary w-full h-52">
    </div>
  </section>



  <!-- Slot for additional dynamic content (inside the main content area) -->
  <slot />
</main>
