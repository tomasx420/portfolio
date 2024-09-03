<!-- src/components/Section.svelte -->
<script>
    export let id;
    export let title;
    export let content;
    export let backgroundColor = 'bg-white'; // Default background color
  </script>
  
  <section id={id} class={`py-20 px-4 text-center ${backgroundColor}`}>
    <h2 class="text-3xl font-semibold">{title}</h2>
    <p class="mt-4 text-lg">{content}</p>
  </section>
  