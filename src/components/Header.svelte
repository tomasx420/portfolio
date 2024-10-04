something is wrong with my nav bar, i want the HOME to be a bit lower than the other ones, and as you can see its not centered??? but i don't understand if its thee heading that's off center or is it the nav bar?? ill send both of the codes and you tell me:

<!-- src/components/Header.svelte -->
<script>
    // No script needed for this example, but you can add JavaScript if needed
  </script>
  
  <nav class="bg-primary fixed w-full top-0 z-50 shadow-xl h-28 flex items-center text-background">
    <div class="ml-16 flex justify-center w-full font-bold">
      <a href="#about" class="text-lg hover:text-secondary mx-16 transition-all">ABOUT</a>
      <a href="#skills" class="text-lg hover:text-secondary mx-16 transition-all">SKILLS</a>
      <a href="#home" class="text-3xl hover:text-secondary mx-16 transition-all ">HOME</a>
      <a href="#projects" class="text-lg hover:text-secondary mx-16 transition-all ">PROJECTS</a>
      <a href="#contact" class="text-lg hover:text-secondary mx-16 transition-all ">CONTACT</a>
    </div>
  </nav>