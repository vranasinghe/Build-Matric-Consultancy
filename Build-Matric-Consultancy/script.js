// JavaScript logic for MatTrix Website

document.addEventListener('DOMContentLoaded', () => {
  // Navigation scroll behavior
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Animated Numbers Counter
  const statsSection = document.querySelector('.stats');
  let animated = false;

  const animateStats = () => {
    const stats = [
      { id: 'stat1', target: 150 },
      { id: 'stat2', target: 210 },
      { id: 'stat3', target: 9 },
      { id: 'stat4', target: 18 }
    ];

    stats.forEach(stat => {
      const el = document.getElementById(stat.id);
      if (!el) return;
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / stat.target));

      const timer = setInterval(() => {
        start += 1;
        el.textContent = start;
        if (start >= stat.target) {
          el.textContent = stat.target;
          clearInterval(timer);
        }
      }, stepTime);
    });
  };

  // Intersection Observer for Stats
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animateStats();
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  if (statsSection) {
    observer.observe(statsSection);
  }
});

// FAQ Accordion Toggle Function
function toggleFaq(id) {
  const item = document.getElementById(id);
  if (!item) return;

  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('active');

  // Close all open FAQs
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('active');
    const ans = el.querySelector('.faq-answer');
    if (ans) ans.style.maxHeight = null;
  });

  // Toggle current FAQ
  if (!isOpen) {
    item.classList.add('active');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}
