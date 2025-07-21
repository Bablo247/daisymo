
const images = [
  './OIP.webp',
  './OIP (1).webp',
  './OIP (2).webp',
  './background-use1.jpg',
  './OIP (1).webp',
  './OIP.webp',
  './OIP (2).webp',
  './background-use1.jpg',
  './OIP.webp',
  './background-use1.jpg'
];

const captions = [
  'A timeless love captured',
  'Unforgettable moments',
  'Elegance in every detail',
  'A perfect wedding day',
  'Smiles that last forever',
  'Cherished forever',
  'From yes to I do',
  'Memories in monochrome',
  'Love framed beautifully',
  'Classic wedding bliss'
];

const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const captionBox = document.getElementById('caption');
let current = 0;

function showImage(index) {
  carousel.innerHTML = '';
  const img = document.createElement('img');
  img.src = images[index];
  img.alt = `Slide ${index + 1}`;
  img.className = 'w-full h-full object-cover opacity-0 transition-opacity duration-1000';
  carousel.appendChild(img);
  requestAnimationFrame(() => {
    img.classList.add('opacity-100');
  });

  captionBox.textContent = captions[index];

  document.querySelectorAll('#dots button').forEach((dot, i) => {
    dot.className = `w-2 h-2 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-400'} transition`;
  });
}

function nextSlide() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

function startCarousel() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full bg-gray-400';
    dot.onclick = () => {
      current = i;
      showImage(current);
    };
    dotsContainer.appendChild(dot);
  }

  showImage(current);
  setInterval(() => nextSlide(), 3000);
}

startCarousel();
