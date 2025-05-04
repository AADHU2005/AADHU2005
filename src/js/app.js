particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.8,
          "random": true
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        }
      },
      "retina_detect": true
    }
  );

document.getElementById('theme-toggle').addEventListener('change', function() {
    const html = document.documentElement;
    if (this.checked) {
        html.setAttribute('data-theme', 'light');
        pJSDom[0].pJS.particles.array.forEach(particle => {
            particle.color.value = "#333333";
            particle.color.rgb = {r: 51, g: 51, b: 51};
        });
        pJSDom[0].pJS.particles.line_linked.color = "#333333";
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = {r: 51, g: 51, b: 51};
    } else {
        html.setAttribute('data-theme', 'dark');
        // Update particles color for dark theme
        pJSDom[0].pJS.particles.array.forEach(particle => {
            particle.color.value = "#ffffff";
            particle.color.rgb = {r: 255, g: 255, b: 255};
        });
        pJSDom[0].pJS.particles.line_linked.color = "#ffffff";
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = {r: 255, g: 255, b: 255};
    }
});

const quotes = [
    "Code is poetry in motion",
    "Life is short, code something meaningful",
    "Stay hungry, stay foolish",
    "Code dreams into reality",
    "Think different, code better",
    "Debug life's challenges",
    "Commit to excellence",
    "Push beyond limits",
    "Code with passion",
    "Hello World, Hello Future"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = getRandomQuote();
}

document.addEventListener('DOMContentLoaded', updateQuote);

document.getElementById('new-quote').addEventListener('click', updateQuote);

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const progress = loader.querySelector('.loading-progress');
    const percentage = document.getElementById('loading-percentage');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 300);
        } else {
            width += Math.random() * 15;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
            percentage.textContent = Math.round(width) + '%';
        }
    }, 100);
});