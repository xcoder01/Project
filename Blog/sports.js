        // JavaScript to add interactivity
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.addEventListener('mouseover', () => {
                    section.style.transform = 'scale(1.02)';
                    section.style.transition = 'transform 0.3s ease-in-out';
                });
                section.addEventListener('mouseout', () => {
                    section.style.transform = 'scale(1)';
                    section.style.transition = 'transform 0.3s ease-in-out';
                });
            });
        });