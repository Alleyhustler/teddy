// script.js
document.addEventListener('DOMContentLoaded', function () {
    const bouncingImages = document.querySelectorAll('.bouncing');

    bouncingImages.forEach((image, index) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const imgSize = 100; // Adjust to match your image size
        const speed = Math.random() * 6 + 4; // Random speed between 4 and 10 seconds (slower)

        const startX = Math.floor(Math.random() * (width - imgSize));
        const startY = Math.floor(Math.random() * (height - imgSize));
        const directionX = Math.random() > 0.5 ? 1 : -1; // Random horizontal direction
        const directionY = Math.random() > 0.5 ? 1 : -1; // Random vertical direction

        // Apply initial position
        image.style.left = `${startX}px`;
        image.style.top = `${startY}px`;
        
        // Create unique keyframes for each image
        const keyframes = `
            @keyframes bounce${index} {
                0% { transform: translateX(0) translateY(0); }
                25% { transform: translateX(${directionX * (width - imgSize)}px) translateY(0); }
                50% { transform: translateX(${directionX * (width - imgSize)}px) translateY(${directionY * (height - imgSize)}px); }
                75% { transform: translateX(0) translateY(${directionY * (height - imgSize)}px); }
                100% { transform: translateX(0) translateY(0); }
            }
        `;

        // Add keyframes to the document
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);

        // Apply the animation
        image.style.animation = `bounce${index} ${speed}s linear infinite`;
    });
});
