<!-- src/routes/+layout.svelte -->
<script>
	// Import the global CSS where Tailwind CSS directives are included
	import "../app.css";
	import Header from "../components/Header.svelte";
  import Heading from "../components/Heading.svelte";
  import Graphics from "../components/Graphics.svelte";
</script>

<!-- navigation bar -->
<Header />

<!-- Main Content -->
<div
	id="home"
	class="min-h-screen bg-background flex flex-col items-center justify-center p-8"
>
<!-- Main Content -->
<div id="home" class="min-h-screen bg-background flex justify-center p-8 mt-48 flex items-start">
  <div class="flex w-full max-w-7xl space-x-8">
    <!-- Left Side: Welcome Text -->
    <div class="flex-1 pr-12">
      <Heading
        heading="WELCOME TO MY PORTFOLIO"
        subheading="On this website, you will learn about me and my projects. On this website, you will "
      />
    </div>  
    
    <!-- Right Side: Placeholder for Graphics -->
    <div class="flex-1 h-44">
      <Graphics placeholderText="GRAPHICS/VIDEO.............            " />
    </div>
  </div>
</div>
</div>

<!-- Add more sections like PROJECTS and ABOUT here if needed -->
<main class="pt-20">
	<!-- Adjust padding-top to account for the fixed header height -->
	<slot />
	<!-- Render child routes -->
</main>

<!-- Include the slot to render child routes -->
<slot />
