<script>
    let currentImageIndex = 0;
    const images = [
      "/images/photo1.jpg", // Replace with actual image paths
      "/images/photo2.jpg",
      "/images/photo3.jpg"
    ];
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    function previousImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
  </script>
  
  <div class="relative bg-gray-300 rounded-lg h-96 w-full">
    <!-- Display the current image -->
    <img src={images[currentImageIndex]} alt="Slideshow image" class="object-cover w-full h-full rounded-lg" />
  
    <!-- Previous/Next buttons -->
    <button class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white py-2 px-4 rounded-l-lg hover:bg-primary-dark transition-colors" on:click={previousImage}>Previous</button>
    <button class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white py-2 px-4 rounded-r-lg hover:bg-primary-dark transition-colors" on:click={nextImage}>Next</button>
  </div>
  
  