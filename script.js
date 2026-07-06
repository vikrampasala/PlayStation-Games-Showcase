const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        category: "rpg",
        image: "https://specials-images.forbesimg.com/imageserve/61f695933c4524ba288b8f46/960x0.jpg",
        rating: 9,
        year: 2020,
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dystopian megalopolis of Night City, where you play as V—a cybernetically-enhanced mercenary outlaw—racing against time to survive a deadly, consciousness-altering implant."
    },
    {
        id: 2,
        title: "God of War Ragnorok",
        category: "rpg",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1776465233s",
        rating: 9.4,
        year: 2022,
        description: "God of War Ragnarök is an action-adventure game where the Spartan warrior Kratos and his teenage son, Atreus, journey across the nine realms to prevent the prophesied apocalypse while battling the wrathful Norse gods, including Thor and Odin."
    },
    {
        id: 3,
        title: "Spider Man 2",
        category: "rpg",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
        rating: 8.6,
        year: 2023,
        description: "In Marvel's Spider-Man 2 for the PS5, players control both Peter Parker and Miles Morales as they balance their personal lives and protect an expanded New York City from formidable villains, including Kraven the Hunter and the alien Venom symbiote."
    },
    {
        id: 4,
        title: "Rachet and Clank: Rift Apart",
        category: "adventure",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOB_-lJ8j5Y8vyROrTcJbvLGxSz87K2d39p4Gd6O1_wFvWLALXBiRQGrI&s=10",
        rating: 8.9,
        year: 2021,
        description: "In Ratchet & Clank: Rift Apart, the intergalactic duo is separated and scattered across dimensions by an evil robotic emperor, forcing them to team up with a new resistance fighter to traverse reality and save the multiverse."
    },
    {
        id: 5,
        title: "Astro Bot",
        category: "adventure",
        image: "https://images.pushsquare.com/955e65e519d2b/large.jpg",
        rating: 9.4,
        year: 2024,
        description: "Astro Bot for the PS5 is a vibrant, critically acclaimed 3D platformer where players embark on a massive intergalactic rescue mission across more than 50 colorful planets to rebuild their shattered, PlayStation 5-shaped mothership and recover hundreds of lost crewmates."
    },
    {
        id: 6,
        title: "Ghost of Yotei",
        category: "action",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202504/2116/8e338bd036dd9b25b61134e58c16aeac323a86d5945cc3bf.jpg",
        rating: 8.6,
        year: 2025,
        description: "Ghost of Yōtei is an open-world action-adventure game set in feudal Japan that follows a vengeful rōnin named Atsu as she travels through the dangerous wilderness surrounding Mount Yōtei."
    },
    {
        id: 7,
        title: "Ghost of Tsushima",
        category: "rpg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrXUR-VTimZ27gapUFngDSFVNvUOxJBQXWiy_4zUUr8uRqZdIIE4fRNkD&s=10",
        rating: 9.1,
        year: 2020,
        description: "Ghost of Tsushima is an open-world action-adventure game that follows Jin Sakai, a samurai warrior on a quest to protect Tsushima Island from a brutal Mongol invasion in 13th-century Japan."
    },
    {
        id: 8,
        title: "Saros",
        category: "adventure",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202512/0120/29617d8e70b24ffa3f63508187fcc886f6696a69b413cdc5.jpg?w=440",
        rating: 8.8,
        year: 2026,
        description: "Saros is a sci-fi action-adventure game that follows an enforcer navigating a shape-shifting alien planet plagued by cosmic horror to rescue a missing colonist."
    }
];

// ===================================
// HELPER FUNCTIONS
// ===================================

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates star rating visual representation
 * @param {number} rating - Rating value (0-5)
 * @returns {string} String of star emojis
 */
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 10 - fullStars - halfStar;
    
    let stars = '';
    stars += '⭐'.repeat(fullStars);
    if (halfStar) stars += '⭐';
    stars += '☆'.repeat(emptyStars);
    
    return stars;
}

// ===================================
// MAIN DISPLAY FUNCTION
// ===================================

/**
 * Displays game cards in the DOM
 * @param {Array} gamesToShow - Array of game objects to display
 */
function displayGames(gamesToShow) {
    const gamesContainer = document.getElementById('gamesContainer');
    
    // Clear existing content
    gamesContainer.innerHTML = '';
    
    // Check if there are games to display
    if (gamesToShow.length === 0) {
        gamesContainer.innerHTML = '<p class="no-results">😔 No games found. Try a different search or filter.</p>';
        return;
    }
    
    // Loop through games and create cards
    gamesToShow.forEach(game => {
        // Create game card HTML using template literals
        const gameCard = `
            <article class="game-card" data-category="${game.category}">
                <img src="${game.image}" alt="${game.title}" class="game-image" onerror="this.src='https://via.placeholder.com/400x200/6C5CE7/FFFFFF?text=${encodeURIComponent(game.title)}'">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-genre">${capitalizeFirst(game.category)}</p>
                    <div class="game-rating">
                        <span class="stars">${getStarRating(game.rating)}</span>
                        <span class="rating-number">${game.rating}</span>
                    </div>
                    <p class="game-description">${game.description}</p>
                    <p class="game-year">Released: ${game.year}</p>
                </div>
            </article>
        `;
        
        // Add the card to the container
        gamesContainer.innerHTML += gameCard;
    });
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    
    // Filter games based on search term and category
    const filteredGames = games.filter(game => {
        // Check if game matches search term (title or description)
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) || 
                            game.description.toLowerCase().includes(searchTerm);
        
        // Check if game matches selected category
        const matchesCategory = categoryFilter === 'all' || game.category === categoryFilter;
        
        // Return true only if both conditions are met
        return matchesSearch && matchesCategory;
    });
    
    // Display filtered results
    displayGames(filteredGames);
});

// ===================================
// CATEGORY FILTER FUNCTIONALITY
// ===================================

const categoryFilter = document.getElementById('categoryFilter');

categoryFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filter games based on category and search term
    const filteredGames = games.filter(game => {
        const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
        const matchesSearch = game.title.toLowerCase().includes(searchTerm) || 
                            game.description.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    // Display filtered results
    displayGames(filteredGames);
});

// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Hero button - scroll to games section
const heroButton = document.querySelector('.btn-primary');
if (heroButton) {
    heroButton.addEventListener('click', function() {
        const gamesSection = document.querySelector('.games-section');
        if (gamesSection) {
            gamesSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

// Display all games when page first loads
displayGames(games);

// Log success message to console
console.log('🎮 Gaming Hub loaded successfully!');
console.log(`📊 Total games in database: ${games.length}`);