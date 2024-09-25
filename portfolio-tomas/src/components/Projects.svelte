<script>
    import { onMount } from 'svelte';
    import SecondaryHeading from './SecondaryHeading.svelte';
  
    const projects = [
      {
        name: 'Personal Finance Manager',
        type: 'university',
        description: `This project was a comprehensive web application for managing personal finances and budgeting. It involved creating a user-friendly interface for inputting income and expenses, generating visual reports, and providing personalized financial advice.`,
        learnings: `Through this project, I gained valuable experience in full-stack development. I improved my skills in state management using Redux, learned best practices for designing and implementing RESTful APIs, and deepened my understanding of database design and optimization.`,
        developed: `I developed the entire application from scratch, including the front-end user interface using React, the back-end API using Node.js and Express, and the database schema using MongoDB. Key features I implemented include real-time transaction updates, bill reminders, and savings goal tracking.`,
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
        images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
        liveDemo: 'https://finance-manager-demo.example.com'
      },
      {
        name: 'E-commerce Chatbot',
        type: 'personal',
        description: `This project focused on developing an AI-powered chatbot for customer support in e-commerce. The chatbot utilized natural language processing to understand customer queries and provide accurate, context-aware responses.`,
        learnings: `This project significantly enhanced my understanding of machine learning and natural language processing. I learned how to train and fine-tune language models, implement context management in conversational AI, and integrate AI models with traditional backend systems.`,
        developed: `I developed the core NLP model using TensorFlow and integrated it with a Flask-based API. I also created a product database and order management system to enable the chatbot to provide personalized assistance, including order tracking and product recommendations.`,
        technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL', 'NLP'],
        images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
      },
    ];
  
    let currentImageIndices = projects.map(() => 0);
    let slideIntervals = [];
  
    function nextImage(projectIndex) {
      currentImageIndices[projectIndex] = (currentImageIndices[projectIndex] + 1) % projects[projectIndex].images.length;
    }
  
    function previousImage(projectIndex) {
      currentImageIndices[projectIndex] = (currentImageIndices[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
    }
  
    function goToSlide(projectIndex, imageIndex) {
      currentImageIndices[projectIndex] = imageIndex;
      resetInterval(projectIndex);
    }
  
    function startAutoSlide(projectIndex) {
      slideIntervals[projectIndex] = setInterval(() => nextImage(projectIndex), 5000);
    }
  
    function resetInterval(projectIndex) {
      clearInterval(slideIntervals[projectIndex]);
      startAutoSlide(projectIndex);
    }
  
    onMount(() => {
      projects.forEach((_, index) => startAutoSlide(index));
      return () => slideIntervals.forEach(clearInterval);
    });
  </script>
  
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="mt-12 space-y-24">
        {#each projects as project, projectIndex}
          <div class="bg-white shadow-xl rounded-lg overflow-hidden relative">
            <div class="absolute top-0 right-0 bg-primary text-white py-1 px-3 rounded-bl-lg z-10">
              {project.type}
            </div>
            <div class="md:flex {projectIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}">
              <div class="md:w-1/2">
                <div class="relative aspect-video">
                  <div class="flex transition-transform duration-700 ease-in-out" style="transform: translateX(-{currentImageIndices[projectIndex] * 100}%)">
                    {#each project.images as image, i}
                      <img src={image} alt="Project screenshot {i + 1}" class="w-full h-full object-cover" />
                    {/each}
                  </div>
                  
                  <button
                    class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
                    on:click={() => { previousImage(projectIndex); resetInterval(projectIndex); }}
                  >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  
                  <button
                    class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
                    on:click={() => { nextImage(projectIndex); resetInterval(projectIndex); }}
                  >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
  
                  <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {#each project.images as _, i}
                      <button
                        class="w-3 h-3 rounded-full {i === currentImageIndices[projectIndex] ? 'bg-primary' : 'bg-gray-300'}"
                        on:click={() => goToSlide(projectIndex, i)}
                      />
                    {/each}
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <div class="space-y-4">
                  <div>
                    <h4 class="text-lg font-semibold text-gray-700">Description</h4>
                    <p class="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-700">What I Learned</h4>
                    <p class="text-gray-600 leading-relaxed">{project.learnings}</p>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-700">What I Developed</h4>
                    <p class="text-gray-600 leading-relaxed">{project.developed}</p>
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-700">Technologies Used</h4>
                    <p class="text-gray-600">{project.technologies.join(', ')}</p>
                  </div>
                  {#if project.liveDemo}
                    <div>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" class="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300">
                        Live Demo
                      </a>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>