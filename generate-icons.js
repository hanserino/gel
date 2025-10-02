const fs = require('fs');
const { createCanvas } = require('canvas');

// If canvas is not available, create a simple fallback
function createSimpleIcon(size) {
    const canvas = createCanvas ? createCanvas(size, size) : null;
    
    if (!canvas) {
        // Fallback: create a simple SVG-based approach
        const svg = `
            <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
                <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="#4CAF50"/>
                <text x="${size/2}" y="${size/2 + size/12}" text-anchor="middle" fill="white" font-family="Arial" font-size="${size/3}" font-weight="bold">B7</text>
            </svg>
        `;
        return Buffer.from(svg);
    }
    
    const ctx = canvas.getContext('2d');
    
    // Create green circle background
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 2, 0, 2 * Math.PI);
    ctx.fill();
    
    // Add white "B7" text
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size/3}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('B7', size/2, size/2);
    
    return canvas.toBuffer('image/png');
}

// Generate all required icon sizes
const sizes = [16, 32, 72, 96, 128, 144, 152, 167, 180, 192, 384, 512];

sizes.forEach(size => {
    try {
        const iconBuffer = createSimpleIcon(size);
        const filename = `icons/icon-${size}x${size}.png`;
        fs.writeFileSync(filename, iconBuffer);
        console.log(`✅ Generated ${filename}`);
    } catch (error) {
        console.log(`❌ Failed to generate icon-${size}x${size}.png:`, error.message);
    }
});

console.log('\n🎉 Icon generation complete!');
console.log('If some icons failed, you can use the create-icons.html file instead.');
