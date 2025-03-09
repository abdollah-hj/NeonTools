// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer with correct paths
    const isToolPage = window.location.pathname.includes('/tools/');
    const headerPath = isToolPage ? '../header.html' : 'header.html';
    const footerPath = isToolPage ? '../footer.html' : 'footer.html';
    
    loadComponent('header-placeholder', headerPath);
    loadComponent('footer-placeholder', footerPath);
    
    // Populate tool cards
    populateToolCards();
    
    // Initialize search functionality
    initSearch();
    
    // Fix logo paths in tool pages
    fixLogoPaths();
});

// Function to load HTML components (header, footer)
function loadComponent(targetId, filePath) {
    const target = document.getElementById(targetId);
    if (!target) return;
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            return response.text();
        })
        .then(html => {
            target.innerHTML = html;
            
            // If we're loading the header, initialize dropdown functionality
            if (targetId === 'header-placeholder') {
                initializeDropdowns();
                
                // Fix header links in tool pages
                if (window.location.pathname.includes('/tools/')) {
                    fixHeaderLinks();
                }
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
            target.innerHTML = `<div class="alert alert-danger">Failed to load ${filePath}. Error: ${error.message}</div>`;
        });
}

// Initialize Bootstrap dropdowns after header is loaded
function initializeDropdowns() {
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
    const dropdownList = [...dropdownElementList].map(dropdownToggleEl => {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });
}

// Populate tool cards based on the tools data
function populateToolCards() {
    // Get all tool container elements
    const toolContainers = document.querySelectorAll('.tools-container');
    
    // Process each container
    toolContainers.forEach(container => {
        const sectionId = container.closest('.tools-section').id;
        const categoryTools = getToolsByCategory(sectionId);
        
        // Create HTML for each tool
        const toolsHTML = categoryTools.map(tool => {
            return `
                <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card tool-card neon-card h-100">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${tool.name}</h5>
                            <p class="card-text flex-grow-1">${tool.description}</p>
                            <a href="${tool.url}" class="btn btn-primary mt-auto">Use Tool</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Insert the HTML into the container
        container.innerHTML = toolsHTML;
    });
}

// Get tools by category from the tools data
function getToolsByCategory(categoryId) {
    // Map the section ID to the category in the tools data
    const categoryMap = {
        'image-tools': 'image',
        'seo-tools': 'seo',
        'text-tools': 'text',
        'developer-tools': 'developer',
        'math-calculators': 'math',
        'unit-converters': 'converter',
        'security-tools': 'security',
        'social-media-tools': 'social',
        'miscellaneous-tools': 'misc'
    };
    
    const category = categoryMap[categoryId];
    if (!category) return [];
    
    // Filter tools by the category
    return toolsData.filter(tool => tool.category === category);
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('search-tools');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // If search term is empty, show all tools
        if (searchTerm === '') {
            populateToolCards();
            return;
        }
        
        // Search through all tools
        const allTools = document.querySelectorAll('.tool-card');
        allTools.forEach(toolCard => {
            const toolTitle = toolCard.querySelector('.card-title').textContent.toLowerCase();
            const toolDescription = toolCard.querySelector('.card-text').textContent.toLowerCase();
            
            // Check if the tool matches the search term
            const isMatch = toolTitle.includes(searchTerm) || toolDescription.includes(searchTerm);
            
            // Show or hide the tool based on the match
            toolCard.closest('.col-sm-6').style.display = isMatch ? 'block' : 'none';
        });
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for the fixed header
                behavior: 'smooth'
            });
        }
    }
});

// Fix logo paths in tool pages
function fixLogoPaths() {
    // Check if we're in a tool page
    if (window.location.pathname.includes('/tools/')) {
        // Find all logo images and update their src
        setTimeout(() => {
            const logoImages = document.querySelectorAll('.logo-glow');
            logoImages.forEach(img => {
                if (img.src.includes('img.jpg')) {
                    img.src = '../img.jpg';
                }
            });
        }, 500); // Small delay to ensure header is loaded
    }
}

// Fix header links in tool pages
function fixHeaderLinks() {
    setTimeout(() => {
        const navLinks = document.querySelectorAll('.navbar-brand, .nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === 'index.html') {
                link.setAttribute('href', '../index.html');
            } else if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
                // Keep anchor links as they are
            }
        });
        
        // Fix dropdown links
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            if (item.getAttribute('href') && item.getAttribute('href').startsWith('#')) {
                item.setAttribute('href', '../index.html' + item.getAttribute('href'));
            }
        });
    }, 100);
} 