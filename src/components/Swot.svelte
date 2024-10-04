<script>
	import SecondaryHeading from "./SecondaryHeading.svelte";
	import SwotTable from "./SwotTable.svelte";

</script>
<!-- SVG and Background Div -->
<div class="absolute inset-0 z-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 32" height="100" width="100%" preserveAspectRatio="none">
      <polygon fill="currentColor" points="0 29.91 0 32 360 32 360 0 0 29.91"></polygon>
    </svg>
    <div class="w-full bg-primary h-[1200px] relative text-background">
      <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 32" height="100" width="100%" preserveAspectRatio="none">
        <polygon fill="currentColor" points="0 29.91 0 32 360 32 360 0 0 29.91"></polygon>
      </svg>
    </div>
  </div>

  <!-- Content Container -->
  <div class="relative z-10">
    <!-- Secondary Heading -->
    <div class="flex justify-center text-text mt-48">
      <SecondaryHeading heading="My Strengths and Weaknesses"/>
    </div>

    <!-- SWOT Table -->
    <div class="flex justify-center mt-20 text-text">
      <SwotTable />
    </div>
  </div>