const projectData = {

    //PROJECT 1
    'project1': {
        title: 'Digital Arts',
        description: "These are some of the Character Concepts, Character Reimagined, Character Concepts, Original Characters, Fanarts i did.",
        images: [
            'images/project1/a.png', 
            'images/project1/b.png',
            'images/project1/c.png',
            'images/project1/d.png',
            'images/project1/e.png',
            'images/project1/f.png',
            'images/project1/g.png',
            'images/project1/h.png',
            'images/project1/i.png',
            'images/project1/j.png',
            'images/project1/k.png',
            'images/project1/l.png',
            'images/project1/m.png',
            'images/project1/n.png',
            'images/project1/o.png',
            'images/project1/p.png',
            'images/project1/q.png',
            'images/project1/r.png',
            'images/project1/s.png',
            'images/project1/t.png',
            'images/project1/u.png',
            'images/project1/v.png',
            'images/project1/w.png',
            'images/project1/x.png',
            'images/project1/y.png'
        ]
    },

    //PROJECT 2
    'project2': {
        title: 'Finding Aerith Fanmade Game',
        description: "Finding Aerith Fanmade is a School Project Game and is inspired by Final Fantasy VII Remake. We do not claim ownership, assets, characters, or stories related to Square Enix's intellectual Property. All Rights remain with their respective creators.",
        technologies: 'Unity, C#, Digital Art, UI/UX Design.',
        link: 'https://youtu.be/IkHQmNMBdh0',
        images: [
            'images/project2/a.png',
            'images/project2/b.png',
            'images/project2/c.png',
            'images/project2/d.png',
            'images/project2/e.png',
            'images/project2/f.png',
            'images/project2/g.png',
            'images/project2/h.png',
            'images/project2/i.png'
        ]
    },

    // PROJECT 3
    'project3': {
        title: 'Graphic Designs',
        description: "These are some backdrops i made in Jesus Is Lord Church Malabon, and others are Movie Titles and Logos I made.",
        images: [
            'images/project4/graphic/a.png',
            'images/project4/graphic/b.png',
            'images/project4/graphic/c.png',
            'images/project4/graphic/d.png',
            'images/project4/graphic/e.png',
            'images/project4/graphic/f.png',
            'images/project4/graphic/g.png',
            'images/project4/graphic/h.png', 
            'images/project4/graphic/i.png',
            'images/project4/graphic/j.png',
            'images/project4/graphic/k.png',
            'images/project4/graphic/l.png',
            'images/project4/graphic/m.png',
            'images/project4/graphic/n.png',           
        ]
    },
    
    // PROJECT 4
    'project4': {
        title: 'Zujomenji Zone Zero',
        description: "My Commission Website (Deleted).",
        images: [
            'images/project4/commission/1.png',
            'images/project4/commission/2.png',
            'images/project4/commission/3.png',
            'images/project4/commission/4.png',
            'images/project4/commission/5.png',
            'images/project4/commission/6.png',
            'images/project4/commission/7.png',
            'images/project4/commission/8.png',
            'images/project4/commission/9.png',
            'images/project4/commission/10.png',
            'images/project4/commission/11.png',
            'images/project4/commission/12.png',
        ]
    },

    // PROJECT 5
    'project5': {
        title: 'Registrar Document Requests Queuing Information',
        description: "School Project Defense.",
        images: [
            'images/project4/queuing/1.png',
            'images/project4/queuing/2.png',
            'images/project4/queuing/3.png',
            'images/project4/queuing/4.png',
            'images/project4/queuing/5.png',
            'images/project4/queuing/6.png',
            'images/project4/queuing/7.png',
            'images/project4/queuing/8.png',
        ]
    },
    'project6': {
        title: 'Visitor Log System',
        description: "School Project Defense.",
        images: [
            'images/project4/visitor/1.png',
            'images/project4/visitor/2.png',
            'images/project4/visitor/3.png',
            'images/project4/visitor/4.png',
            'images/project4/visitor/5.png',
            'images/project4/visitor/6.png',
        ]
    },
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const modalLink = document.getElementById('modalLink');

let currentProjectImages = [];
let currentImageIndex = 0;

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const modalLinkContainer = modalLink.parentElement;

    // 1. Populate Text Content
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // 2. Handle Link Visibility
    if (project.link) {
        modalLink.href = project.link;
        modalLinkContainer.style.display = 'block';
    } else {
        modalLinkContainer.style.display = 'none';
    }

    // 3. Set Image Carousel Data
    currentProjectImages = project.images;
    currentImageIndex = 0;
    updateModalImage();
    
    // 4. Show the modal
    modal.style.display = 'flex';
}

function updateModalImage() {
    if (currentProjectImages.length > 0) {
        modalImage.src = currentProjectImages[currentImageIndex];
    } else {
        modalImage.src = '';
    }

    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (currentProjectImages.length > 1) {
        prevArrow.style.display = 'block';
        nextArrow.style.display = 'block';

        prevArrow.style.opacity = (currentImageIndex === 0) ? '0.5' : '1';
        nextArrow.style.opacity = (currentImageIndex === currentProjectImages.length - 1) ? '0.5' : '1';
    } else {
        prevArrow.style.display = 'none';
        nextArrow.style.display = 'none';
    }
}

function changeImage(step) {
    let newIndex = currentImageIndex + step;
    
    if (newIndex >= 0 && newIndex < currentProjectImages.length) {
        currentImageIndex = newIndex;
        updateModalImage();
    }
}

function closeModal() {
    modal.style.display = 'none';
    currentProjectImages = []; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === 'block') {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle the 'active' class on click
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Optional: You might want to add a class to the toggle itself for an 'X' animation later
            // menuToggle.classList.toggle('is-open'); 
        });

        // Close menu when a link is clicked (to navigate sections)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                // menuToggle.classList.remove('is-open'); 
            });
        });
    }
    
    // Check if the script needs to initialize modal/carousel functions here as well
    // (Assuming modal/carousel logic is also in script.js)
    
});
