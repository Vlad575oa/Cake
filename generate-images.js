const fs = require('fs');
const { createCanvas } = require('canvas');

const products = [
  { name: 'concealed-grilles', title: 'Concealed Grilles', color1: '#2C5F5D', color2: '#1a3a38' },
  { name: 'floor-convectors', title: 'Floor Convectors', color1: '#3d6b69', color2: '#2C5F5D' },
  { name: 'air-curtains', title: 'Air Curtains', color1: '#4a7a78', color2: '#3d6b69' },
  { name: 'custom-engineering', title: 'Custom Engineering', color1: '#2C5F5D', color2: '#4a7a78' }
];

products.forEach(product => {
  const width = 2000;
  const height = 1500;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, product.color1);
  gradient.addColorStop(1, product.color2);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 120px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(product.title, width / 2, height / 2);

  // Add subtle pattern
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * (height / 20));
    ctx.lineTo(width, i * (height / 20));
    ctx.stroke();
  }

  // Save as JPEG
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync(`public/images/${product.name}.jpg`, buffer);
  console.log(`Generated ${product.name}.jpg`);
});

console.log('All images generated successfully!');
