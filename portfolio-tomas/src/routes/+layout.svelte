<!-- src/routes/+layout.svelte -->
<script>
	// Import the global CSS where Tailwind CSS directives are included
	import "../app.css";
    import Header from '../components/Header.svelte';
</script>

  <Header />
  
  <main class="pt-20"> <!-- Adjust padding-top to account for the fixed header height -->
    <slot /> <!-- Render child routes -->
  </main>

<!-- Include the slot to render child routes -->
<slot />

