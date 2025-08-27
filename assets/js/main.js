/**
* Template Name: Personal - v4.10.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
* Modified: Removed unused libraries for cleaner code
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
  const navbar = select('#navbar');
  navbar.classList.toggle('navbar-mobile');
  this.classList.toggle('bi-list');
  this.classList.toggle('bi-x');
})

/**
 * Scroll with offset on links with nav-link class
 */
on('click', '#navbar .nav-link', function(e) {
  let section = select(this.hash)
  if (section) {
    e.preventDefault()
    
    let navbar = select('#navbar')
    let header = select('#header')
    let sections = select('section', true)
    let navlinks = select('#navbar .nav-link', true)
    
    navlinks.forEach((item) => {
      item.classList.remove('active')
    })
    
    this.classList.add('active')
    
    // Close mobile menu if open
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.add('bi-list')
      navbarToggle.classList.remove('bi-x')
    }
    
    if (this.hash == '#header') {
      header.classList.remove('header-top')
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      return;
    }
    
    if (!header.classList.contains('header-top')) {
      header.classList.add('header-top')
      setTimeout(function() {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }, 350);
    } else {
      sections.forEach((item) => {
        item.classList.remove('section-show')
      })
      section.classList.add('section-show')
    }
    
    scrollto(this.hash)
  }
}, true)

  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }

      /**
   * Research Interests Toggle
   */
  const interestBoxes = document.querySelectorAll('.interests .icon-box');
  if (interestBoxes.length > 0) {
    interestBoxes.forEach(box => {
      box.addEventListener('click', function(e) {
        e.preventDefault();

        // Close other boxes for accordion behavior
        interestBoxes.forEach(otherBox => {
          if (otherBox !== this) {
            otherBox.classList.remove('active');
          }
        });

        // Toggle current box
        this.classList.toggle('active');
      });
    });
  }
 


  });

  /**
   * Animation on scroll (for any elements with data-aos attributes)
   * Simple implementation without external library
   */
  window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        element.classList.add('aos-animate');
      }
    });
  });

  /**
   * Smooth scroll for anchor links
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /**
   * Back to top button
   */
  const backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    window.addEventListener('scroll', toggleBacktotop)
  }

  /**
   * Preloader
   */
  window.addEventListener('load', () => {
    const preloader = select('#preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 100);
    }
  });

})()
