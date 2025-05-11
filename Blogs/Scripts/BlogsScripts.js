document.addEventListener('DOMContentLoaded', function() {
    // Select all blog posts on the page
    const blogPosts = document.querySelectorAll('.blog-post');
    
    // Add toggle functionality to each
    blogPosts.forEach(post => {
      const excerpt = post.querySelector('.excerpt');
      const fullContent = post.querySelector('.full-content');
      const readMoreBtn = post.querySelector('.read-more');
      const readLessBtn = post.querySelector('.read-less');
      
      // Toggle visibility function
      function toggleContent() {
        excerpt.style.display = excerpt.style.display === 'none' ? 'block' : 'none';
        fullContent.style.display = fullContent.style.display === 'none' ? 'block' : 'none';
      }
      
      // Add event listeners
      readMoreBtn.addEventListener('click', toggleContent);
      readLessBtn.addEventListener('click', toggleContent);
    });
  });