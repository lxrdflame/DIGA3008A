document.addEventListener('DOMContentLoaded', function() {
    // Select all blog posts on the page
    const blogPosts = document.querySelectorAll('.blog-post');
    
    // Add toggle functionality to each
    blogPosts.forEach(post => {
      const excerpt = post.querySelector('.excerpt');
      const fullContent = post.querySelector('.full-content');
      const readMoreBtn = post.querySelector('.read-more');
      const readLessBtn = post.querySelector('.read-less');

      const originalStyles = {
        width: post.style.width || getComputedStyle(post).width,
        margin: post.style.margin || getComputedStyle(post).margin,
        position: post.style.position || getComputedStyle(post).position,
        top: post.style.top || getComputedStyle(post).top,
        left: post.style.left || getComputedStyle(post).left,
        height: post.style.height || getComputedStyle(post).height
      };

      // Toggle visibility and width function
      function toggleContent() {
        const isExpanding = excerpt.style.display !== 'none';

        
        if (isExpanding) {
          // Expanding - show full content and enlarge
          excerpt.style.display = 'none';
          fullContent.style.display = 'block';
          post.style.width = '90%'; // Or your desired expanded width
          post.style.maxWidth = '1300px'; // Optional max width
          post.style.margin = '20px auto'; // Center the expanded post
          post.style.transition = 'width 0.01s ease'; // Smooth animation

          post.style.height = '90%'; // Or your desired expanded width
          post.style.maxHeight = '100%'; // Optional max width
          post.style.margin = '20px auto'; // Center the expanded post
        } else {
            // Collapse - return to original
            excerpt.style.display = 'block';
            fullContent.style.display = 'none';

            post.style.width = originalStyles.width,
            post.style.margin = originalStyles.margin,
            post.style.position = originalStyles.position,
            post.style.top = originalStyles.top,
            post.style.left = originalStyles.left,
            post.style.height = originalStyles.height

        }
      }
      
      // Add event listeners
      readMoreBtn.addEventListener('click', toggleContent);
      readLessBtn.addEventListener('click', toggleContent);
    });
  });