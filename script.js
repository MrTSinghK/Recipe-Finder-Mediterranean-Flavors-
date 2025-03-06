document.addEventListener('DOMContentLoaded', function() {
    // Recipe data - this would typically come from a database
    const recipes = [
        {
            id: 1,
            title: "Greek Salad",
            description: "Crispy fresh vegetables with tangy feta cheese",
            image: "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9-3.jpeg",
            prepTime: "15 mins",
            calories: "200 kcal",
            ingredients: [
                "1 cucumber, diced",
                "4 large tomatoes, cut into wedges",
                "1 red onion, thinly sliced",
                "1 green bell pepper, sliced",
                "200g feta cheese, cubed",
                "100g kalamata olives",
                "2 tsp dried oregano",
                "4 tbsp extra virgin olive oil",
                "2 tbsp red wine vinegar",
                "Salt and pepper to taste"
            ],
            instructions: [
                "In a large bowl, combine cucumber, tomatoes, red onion, and green bell pepper.",
                "Add olives and feta cheese on top.",
                "In a small bowl, whisk together olive oil, red wine vinegar, dried oregano, salt, and pepper.",
                "Pour the dressing over the salad just before serving.",
                "Toss gently to combine all ingredients.",
                "Sprinkle with a little extra oregano on top if desired."
            ],
            cuisine: "Greek",
            tags: ["salad", "vegetarian", "quick"]
        },
        {
            id: 2,
            title: "Hummus",
            description: "Creamy chickpea dip with tahini and lemon",
            image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipes%2F2024-08-hummus%2Fhummus-198-vertical",
            prepTime: "10 mins",
            calories: "100 kcal",
            ingredients: [
                "400g canned chickpeas, drained and rinsed",
                "2 tbsp tahini",
                "2 cloves garlic, minced",
                "Juice of 1 lemon",
                "2 tbsp olive oil, plus more for drizzling",
                "1 tsp ground cumin",
                "Salt to taste",
                "Paprika for garnish",
                "Fresh parsley, chopped (optional)"
            ],
            instructions: [
                "Add chickpeas, tahini, garlic, lemon juice, olive oil, and cumin to a food processor.",
                "Blend until smooth, adding a little water if needed to reach desired consistency.",
                "Season with salt to taste.",
                "Transfer to a serving bowl and create a well in the center.",
                "Drizzle with olive oil and sprinkle with paprika and chopped parsley if using."
            ],
            cuisine: "Middle Eastern",
            tags: ["appetizer", "vegetarian", "dip"]
        },
        {
            "id": 2,
            "title": "Tabbouleh",
            "description": "Herb-packed bulgur wheat salad",
            "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipes%2F2024-08-hummus%2Fhummus-198-vertical",
            "prepTime": "25 mins",
            "calories": "150 kcal",
            "ingredients": [
                "½ cup fine bulgur wheat",
                "1 cup boiling water",
                "2 cups fresh parsley, finely chopped",
                "½ cup fresh mint, finely chopped",
                "2 medium tomatoes, finely diced",
                "2 green onions, finely chopped",
                "Juice of 1 lemon",
                "2 tbsp olive oil",
                "Salt to taste",
                "Black pepper to taste"
            ],
            "instructions": [
                "Place bulgur wheat in a bowl and pour boiling water over it. Cover and let it sit for 10-15 minutes until softened, then drain any excess water.",
                "In a large bowl, combine finely chopped parsley, mint, tomatoes, and green onions.",
                "Add the softened bulgur wheat to the vegetable mixture and mix well.",
                "Drizzle with lemon juice and olive oil. Season with salt and black pepper to taste.",
                "Toss everything together until well combined.",
                "Let the salad sit for a few minutes to absorb the flavors before serving."
            ],
            "cuisine": "Middle Eastern",
            "tags": ["salad", "vegetarian", "healthy"]
        },
        {
            "id": 3,
            "title": "Quinoa Salad",
            "description": "A nutritious and refreshing quinoa-based salad",
            "image": "https://wendypolisi.com/wp-content/uploads/2022/05/SQ-mediterranean-quinoa-salad-5.jpg",
            "prepTime": "30 mins",
            "calories": "200 kcal",
            "ingredients": [
                "1 cup quinoa, rinsed",
                "2 cups water",
                "1 cup cherry tomatoes, halved",
                "1 cup cucumber, diced",
                "½ cup red bell pepper, diced",
                "¼ cup red onion, finely chopped",
                "¼ cup fresh parsley, chopped",
                "¼ cup fresh mint, chopped",
                "Juice of 1 lemon",
                "3 tbsp olive oil",
                "Salt to taste",
                "Black pepper to taste",
                "½ tsp ground cumin (optional)",
                "½ cup crumbled feta cheese (optional)",
                "¼ cup toasted almonds or walnuts (optional)"
            ],
            "instructions": [
                "In a saucepan, bring 2 cups of water to a boil. Add quinoa, reduce heat to low, cover, and simmer for about 15 minutes or until quinoa is cooked and water is absorbed.",
                "Remove from heat and let quinoa cool to room temperature.",
                "In a large bowl, combine cherry tomatoes, cucumber, red bell pepper, red onion, parsley, and mint.",
                "Add the cooled quinoa to the bowl and toss everything together.",
                "Drizzle with lemon juice and olive oil. Season with salt, black pepper, and cumin (if using).",
                "Mix well to ensure everything is evenly coated.",
                "If desired, top with crumbled feta cheese and toasted almonds or walnuts.",
                "Let the salad sit for a few minutes to allow the flavors to blend before serving."
            ],
            "cuisine": "Mediterranean",
            "tags": ["salad", "vegetarian", "healthy", "gluten-free"]
        },
        {
            "id": 4,
            "title": "Chicken Souvlaki",
            "description": "Greek-style marinated grilled chicken skewers",
            "image": "https://www.halfbakedharvest.com/wp-content/uploads/2019/06/Chicken-Souvlaki-Bowls-with-Garlic-Fries-1.jpg",
            "prepTime": "40 mins (plus marinating time)",
            "calories": "320 kcal",
            "ingredients": [
                "1.5 lbs boneless, skinless chicken breast, cut into 1-inch cubes",
                "3 tbsp olive oil",
                "Juice of 1 lemon",
                "3 cloves garlic, minced",
                "1 tsp dried oregano",
                "1 tsp dried thyme",
                "½ tsp ground cumin",
                "½ tsp salt",
                "½ tsp black pepper",
                "½ tsp paprika",
                "Wooden skewers (soaked in water for 30 minutes)"
            ],
            "instructions": [
                "In a large bowl, whisk together olive oil, lemon juice, garlic, oregano, thyme, cumin, salt, black pepper, and paprika to create the marinade.",
                "Add the cubed chicken to the marinade, ensuring all pieces are well coated. Cover and refrigerate for at least 30 minutes (or up to 4 hours for deeper flavor).",
                "Preheat a grill or grill pan over medium-high heat.",
                "Thread the marinated chicken onto the soaked wooden skewers.",
                "Grill for about 10-12 minutes, turning occasionally, until the chicken is fully cooked and slightly charred.",
                "Remove from the grill and let rest for a couple of minutes before serving.",
                "Serve with warm pita bread, tzatziki sauce, and a side of Greek salad."
            ],
            "cuisine": "Greek",
            "tags": ["grilled", "chicken", "Mediterranean", "high-protein"]
        },
        {
            "id": 5,
            "title": "Eggplant Parmesan",
            "description": "Classic Italian baked eggplant with marinara and cheese",
            "image": "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2023/09/simple-eggplant-parmesan-12-scaled.jpg?fit=1200%2C800&ssl=1",
            "prepTime": "1 hour",
            "calories": "350 kcal",
            "ingredients": [
                "2 medium eggplants, sliced into ¼-inch rounds",
                "1 tbsp salt (for sweating the eggplant)",
                "1 cup all-purpose flour",
                "2 large eggs, beaten",
                "1 cup breadcrumbs",
                "½ cup grated Parmesan cheese",
                "1 tsp dried oregano",
                "½ tsp garlic powder",
                "2 cups marinara sauce",
                "2 cups shredded mozzarella cheese",
                "½ cup fresh basil leaves, chopped",
                "Olive oil for frying"
            ],
            "instructions": [
                "Place eggplant slices on a baking sheet, sprinkle with salt, and let sit for 30 minutes to remove excess moisture. Pat dry with a paper towel.",
                "Preheat oven to 375°F (190°C).",
                "Set up a breading station with three bowls: flour in the first, beaten eggs in the second, and a mixture of breadcrumbs, Parmesan cheese, oregano, and garlic powder in the third.",
                "Dredge each eggplant slice in flour, then dip into eggs, and coat with the breadcrumb mixture.",
                "Heat olive oil in a large skillet over medium heat and fry eggplant slices until golden brown on both sides. Drain on paper towels.",
                "Spread a thin layer of marinara sauce in a baking dish. Layer fried eggplant slices, more marinara sauce, and shredded mozzarella cheese. Repeat until all eggplant is used, finishing with cheese on top.",
                "Bake for 25-30 minutes until the cheese is melted and bubbly.",
                "Garnish with fresh basil before serving."
            ],
            "cuisine": "Italian",
            "tags": ["baked", "vegetarian", "cheesy", "comfort food"]
        },
        {
            "id": 6,
            "title": "Shrimp Scampi",
            "description": "Garlic butter shrimp with a white wine sauce, served over pasta",
            "image": "https://bakerbynature.com/wp-content/uploads/2023/02/shrimp-scampi-119.jpg",
            "prepTime": "25 mins",
            "calories": "400 kcal",
            "ingredients": [
                "1 lb large shrimp, peeled and deveined",
                "8 oz linguine or spaghetti",
                "3 tbsp unsalted butter",
                "2 tbsp olive oil",
                "4 cloves garlic, minced",
                "½ tsp red pepper flakes (optional)",
                "½ cup dry white wine",
                "Juice of 1 lemon",
                "½ tsp salt",
                "¼ tsp black pepper",
                "¼ cup fresh parsley, chopped",
                "¼ cup grated Parmesan cheese (optional)"
            ],
            "instructions": [
                "Cook the pasta according to package instructions until al dente. Drain and set aside.",
                "In a large skillet, heat olive oil and 2 tbsp butter over medium heat.",
                "Add minced garlic and red pepper flakes, sautéing until fragrant (about 1 minute).",
                "Add shrimp, season with salt and black pepper, and cook for 2-3 minutes per side until pink and opaque.",
                "Pour in white wine and lemon juice, simmering for 2 minutes to reduce slightly.",
                "Stir in the remaining 1 tbsp butter and chopped parsley.",
                "Add the cooked pasta to the skillet, tossing to coat in the sauce.",
                "Serve immediately, garnished with Parmesan cheese if desired."
            ],
            "cuisine": "Italian",
            "tags": ["seafood", "pasta", "quick meal", "garlic butter"]
        },
        {
            "id": 7,
            "title": "Falafel",
            "description": "Crispy, golden chickpea fritters with herbs and spices",
            "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/falafel-recipe.jpg",
            "prepTime": "45 mins (plus soaking time)",
            "calories": "250 kcal",
            "ingredients": [
                "1 ½ cups dried chickpeas (soaked overnight)",
                "½ cup fresh parsley, chopped",
                "½ cup fresh cilantro, chopped",
                "½ small onion, chopped",
                "3 cloves garlic, minced",
                "1 tsp ground cumin",
                "1 tsp ground coriander",
                "½ tsp cayenne pepper (optional)",
                "1 tsp salt",
                "½ tsp black pepper",
                "1 tsp baking powder",
                "3 tbsp all-purpose flour (or chickpea flour)",
                "Vegetable oil for frying"
            ],
            "instructions": [
                "Drain and rinse the soaked chickpeas. Pat them dry with a paper towel.",
                "In a food processor, combine chickpeas, parsley, cilantro, onion, garlic, cumin, coriander, cayenne pepper, salt, and black pepper. Process until a coarse paste forms.",
                "Add baking powder and flour, then pulse until the mixture holds together when pressed.",
                "Transfer the mixture to a bowl, cover, and refrigerate for 30 minutes.",
                "Heat vegetable oil in a deep pan to 350°F (175°C).",
                "Form the mixture into small balls or patties, about 1-inch in diameter.",
                "Fry in batches for 3-4 minutes per side until golden brown and crispy.",
                "Drain on paper towels and serve hot with hummus, tahini sauce, or in pita bread."
            ],
            "cuisine": "Middle Eastern",
            "tags": ["vegetarian", "vegan", "fried", "protein-rich"]
        },
        {
            "id": 8,
            "title": "Panzanella",
            "description": "A refreshing Italian bread and tomato salad",
            "image": "https://dishingouthealth.com/wp-content/uploads/2020/08/SummerPanzanella_Square.jpg",
            "prepTime": "15 mins",
            "calories": "200 kcal",
            "ingredients": [
                "4 cups stale bread, cut into 1-inch cubes",
                "3 large tomatoes, diced",
                "½ red onion, thinly sliced",
                "½ cup cucumber, diced",
                "¼ cup fresh basil leaves, torn",
                "¼ cup extra virgin olive oil",
                "2 tbsp red wine vinegar",
                "1 tsp salt",
                "½ tsp black pepper",
                "1 clove garlic, minced (optional)"
            ],
            "instructions": [
                "Place the bread cubes in a large bowl and sprinkle with a little water to soften slightly. Let sit for 10 minutes.",
                "In another bowl, mix tomatoes, red onion, cucumber, and basil.",
                "In a small bowl, whisk together olive oil, red wine vinegar, salt, black pepper, and garlic (if using).",
                "Squeeze excess water from the bread cubes and add them to the vegetables.",
                "Pour the dressing over the salad and toss well.",
                "Let the salad sit for 15-20 minutes to absorb the flavors before serving."
            ],
            "cuisine": "Italian",
            "tags": ["salad", "vegetarian", "summer", "bread"]
        },
        {
            "id": 9,
            "title": "Lentil Soup",
            "description": "Hearty and nutritious lentil soup with vegetables",
            "image": "https://cookieandkate.com/images/2019/01/best-lentil-soup-recipe-4.jpg",
            "prepTime": "40 mins",
            "calories": "180 kcal",
            "ingredients": [
                "1 cup dried lentils, rinsed",
                "1 tbsp olive oil",
                "1 small onion, chopped",
                "2 carrots, diced",
                "2 celery stalks, diced",
                "3 cloves garlic, minced",
                "1 tsp ground cumin",
                "1 tsp ground coriander",
                "½ tsp smoked paprika",
                "6 cups vegetable or chicken broth",
                "1 can (14 oz) diced tomatoes",
                "1 bay leaf",
                "½ tsp salt",
                "¼ tsp black pepper",
                "½ tsp red pepper flakes (optional)",
                "1 tbsp lemon juice",
                "¼ cup fresh parsley, chopped"
            ],
            "instructions": [
                "Heat olive oil in a large pot over medium heat.",
                "Add onion, carrots, and celery, sautéing for 5 minutes until softened.",
                "Stir in garlic, cumin, coriander, and smoked paprika, cooking for another minute until fragrant.",
                "Pour in the broth, diced tomatoes, lentils, bay leaf, salt, and black pepper.",
                "Bring to a boil, then reduce heat and let simmer for 30-35 minutes until lentils are tender.",
                "Remove the bay leaf and stir in lemon juice and fresh parsley.",
                "Adjust seasoning as needed and serve hot."
            ],
            "cuisine": "Mediterranean",
            "tags": ["soup", "vegetarian", "healthy", "high-protein"]
        },
        {
            "id": 10,
            "title": "Spanakopita",
            "description": "A savory Greek spinach and feta phyllo pastry",
            "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2FPhoto%2FRecipes%2F2024-08-spanakopita%2Fspanakopita",
            "prepTime": "1 hour",
            "calories": "320 kcal",
            "ingredients": [
                "1 lb fresh spinach, chopped",
                "1 small onion, finely chopped",
                "2 cloves garlic, minced",
                "3 tbsp olive oil",
                "½ tsp salt",
                "¼ tsp black pepper",
                "¼ tsp ground nutmeg",
                "½ cup fresh parsley, chopped",
                "2 green onions, chopped",
                "8 oz feta cheese, crumbled",
                "2 large eggs, beaten",
                "10 sheets phyllo dough",
                "¼ cup unsalted butter, melted"
            ],
            "instructions": [
                "Preheat oven to 375°F (190°C).",
                "Heat 1 tbsp olive oil in a pan over medium heat. Sauté onion and garlic until soft.",
                "Add spinach, salt, black pepper, and nutmeg. Cook until wilted and excess moisture evaporates. Let cool.",
                "In a bowl, mix spinach mixture with parsley, green onions, feta cheese, and eggs.",
                "Brush a baking dish with melted butter. Layer 5 sheets of phyllo dough, brushing each with butter.",
                "Spread the spinach filling evenly over the phyllo.",
                "Layer the remaining 5 sheets of phyllo dough on top, brushing each with butter.",
                "Tuck in edges and bake for 35-40 minutes until golden brown.",
                "Let cool slightly before slicing and serving."
            ],
            "cuisine": "Greek",
            "tags": ["savory pastry", "vegetarian", "baked", "Mediterranean"]
        },
        {
            "id": 11,
            "title": "Gyro",
            "description": "Greek-style seasoned meat wrapped in pita with toppings",
            "image": "https://assets.epicurious.com/photos/59513832a5db170587cf62b9/4:3/w_6551,h_4913,c_limit/shutterstock_220309672.jpg",
            "prepTime": "1 hour",
            "calories": "450 kcal",
            "ingredients": [
                "1 lb ground lamb (or beef, or a mix)",
                "½ small onion, grated",
                "3 cloves garlic, minced",
                "1 tsp dried oregano",
                "1 tsp ground cumin",
                "½ tsp salt",
                "¼ tsp black pepper",
                "½ tsp smoked paprika",
                "1 tbsp olive oil",
                "4 pita breads",
                "½ cup Tzatziki sauce",
                "½ cup sliced tomatoes",
                "½ cup sliced red onions",
                "½ cup shredded lettuce"
            ],
            "instructions": [
                "Preheat oven to 375°F (190°C).",
                "In a bowl, mix ground lamb (or beef) with onion, garlic, oregano, cumin, salt, black pepper, and paprika.",
                "Shape the mixture into a loaf and bake for 40 minutes until cooked through.",
                "Let the meat rest, then slice thinly.",
                "Heat a pan with olive oil and sear the slices for a crispy texture.",
                "Warm the pita bread and fill with gyro meat, Tzatziki sauce, tomatoes, onions, and lettuce.",
                "Serve immediately."
            ],
            "cuisine": "Greek",
            "tags": ["Greek", "wrap", "street food", "savory"]
        },
        {
            "id": 12,
            "title": "Tzatziki",
            "description": "Cool and creamy Greek yogurt and cucumber dip",
            "image": "https://rainbowplantlife.com/wp-content/uploads/2023/02/HERO_03_Tzatziki.jpg",
            "prepTime": "15 mins",
            "calories": "120 kcal",
            "ingredients": [
                "1 cup Greek yogurt",
                "½ cucumber, grated and drained",
                "1 clove garlic, minced",
                "1 tbsp lemon juice",
                "1 tbsp olive oil",
                "1 tsp dried dill (or fresh dill, chopped)",
                "½ tsp salt",
                "¼ tsp black pepper"
            ],
            "instructions": [
                "Grate the cucumber and squeeze out excess moisture with a paper towel.",
                "In a bowl, mix Greek yogurt, grated cucumber, garlic, lemon juice, olive oil, dill, salt, and black pepper.",
                "Refrigerate for at least 15 minutes before serving.",
                "Serve chilled as a dip or sauce."
            ],
            "cuisine": "Greek",
            "tags": ["dip", "sauce", "Mediterranean", "healthy"]
        },
        {
            "id": 13,
            "title": "Couscous",
            "description": "Light and fluffy North African-style semolina dish",
            "image": "https://wanderingchickpea.com/wp-content/uploads/2023/11/moroccan-spiced-chicken-and-couscous-skillet-1-2-1-735x1103.jpg",
            "prepTime": "15 mins",
            "calories": "220 kcal",
            "ingredients": [
                "1 cup couscous",
                "1 cup boiling water or vegetable broth",
                "1 tbsp olive oil",
                "½ tsp salt",
                "¼ tsp black pepper",
                "¼ cup fresh parsley, chopped",
                "¼ cup cherry tomatoes, halved (optional)",
                "1 tbsp lemon juice"
            ],
            "instructions": [
                "In a bowl, combine couscous, olive oil, salt, and black pepper.",
                "Pour boiling water or broth over the couscous, cover, and let sit for 5 minutes.",
                "Fluff with a fork and stir in parsley, cherry tomatoes (if using), and lemon juice.",
                "Serve warm or at room temperature."
            ],
            "cuisine": "North African / Mediterranean",
            "tags": ["grain", "side dish", "quick", "healthy"]
        },
        {
            "id": 14,
            "title": "Pasta",
            "description": "Simple pasta cooked to perfection",
            "image": "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/roasted-tomato-sauce-portion-800x1200.jpg",
            "prepTime": "20 mins",
            "calories": "350 kcal",
            "ingredients": [
                "8 oz pasta (spaghetti, penne, or preferred type)",
                "4 cups water",
                "1 tsp salt",
                "1 tbsp olive oil (optional)"
            ],
            "instructions": [
                "Bring water to a boil in a large pot.",
                "Add salt and pasta, cooking according to package instructions until al dente.",
                "Drain and toss with olive oil if desired.",
                "Serve with your favorite sauce or toppings."
            ],
            "cuisine": "Italian",
            "tags": ["pasta", "staple", "easy", "versatile"]
        }
        
        // Additional recipes would be added here
    ];

    // Initialize search functionality
    initSearch();
    
    // Initialize recipe cards
    initRecipeCards();
    
    // Initialize newsletter form
    initNewsletterForm();
    
    // Initialize dropdown menu for mobile
    initMobileMenu();

    // Search functionality
    function initSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const searchTerm = searchInput.value.toLowerCase().trim();
                if (searchTerm) {
                    searchRecipes(searchTerm);
                }
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const searchTerm = searchInput.value.toLowerCase().trim();
                    if (searchTerm) {
                        searchRecipes(searchTerm);
                    }
                }
            });
        }
    }
    
    // Search recipes
    function searchRecipes(term) {
        const recipeCards = document.querySelectorAll('.recipe-card');
        let foundCount = 0;
        
        recipeCards.forEach(card => {
            const title = card.querySelector('.recipe-title').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(term) || description.includes(term)) {
                card.style.display = 'block';
                foundCount++;
                // Add a subtle highlight effect
                card.classList.add('search-highlight');
                setTimeout(() => {
                    card.classList.remove('search-highlight');
                }, 1500);
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show message if no recipes found
        const recipeGrid = document.querySelector('.recipe-grid');
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (foundCount === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.style.textAlign = 'center';
                noResultsMsg.style.padding = '2rem';
                noResultsMsg.style.gridColumn = '1 / -1';
                recipeGrid.appendChild(noResultsMsg);
            }
            noResultsMsg.textContent = `No recipes found for "${term}". Try another search term.`;
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }
    
    // Make recipe cards clickable and show recipe details
    function initRecipeCards() {
        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            card.addEventListener('click', function() {
                const title = card.querySelector('.recipe-title').textContent;
                const recipe = recipes.find(r => r.title === title) || {
                    title: title,
                    description: card.querySelector('p').textContent,
                    image: card.querySelector('.recipe-image').src,
                    prepTime: card.querySelector('.recipe-meta span:first-child').textContent,
                    calories: card.querySelector('.recipe-meta span:last-child').textContent,
                    ingredients: ["Ingredients not available for this recipe"],
                    instructions: ["Full instructions not available for this recipe"]
                };
                
                showRecipeModal(recipe);
            });
        });
    }
    
    // Show recipe details in a modal
    function showRecipeModal(recipe) {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'recipe-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.padding = '20px';
        modal.style.overflow = 'auto';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'recipe-modal-content';
        modalContent.style.backgroundColor = 'white';
        modalContent.style.borderRadius = '15px';
        modalContent.style.maxWidth = '800px';
        modalContent.style.width = '100%';
        modalContent.style.maxHeight = '90vh';
        modalContent.style.overflow = 'auto';
        modalContent.style.position = 'relative';
        modalContent.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '×';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '15px';
        closeBtn.style.right = '15px';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.border = 'none';
        closeBtn.style.background = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = 'var(--olive)';
        closeBtn.style.zIndex = '10';
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Recipe content
        const recipeContent = `
            <div style="position: relative;">
                <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px 15px 0 0;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.7)); padding: 20px; color: white;">
                    <h2 style="margin: 0; font-family: 'Playfair Display', serif; font-size: 28px;">${recipe.title}</h2>
                    <p style="margin: 5px 0 0;">${recipe.description}</p>
                </div>
            </div>
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 20px; color: var(--sea);">
                    <span>⏱ ${recipe.prepTime}</span>
                    <span>🔥 ${recipe.calories}</span>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h3 style="color: var(--olive); font-family: 'Playfair Display', serif; border-bottom: 2px solid var(--sage); padding-bottom: 10px;">Ingredients</h3>
                    <ul style="padding-left: 20px;">
                        ${recipe.ingredients.map(ingredient => `<li style="margin-bottom: 8px;">${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3 style="color: var(--olive); font-family: 'Playfair Display', serif; border-bottom: 2px solid var(--sage); padding-bottom: 10px;">Instructions</h3>
                    <ol style="padding-left: 20px;">
                        ${recipe.instructions.map(step => `<li style="margin-bottom: 12px;">${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div style="margin-top: 30px; text-align: center;">
                    <button class="print-recipe" style="background: var(--sunset); color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-family: 'Raleway', sans-serif;">Print Recipe</button>
                    <button class="save-recipe" style="background: var(--sea); color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; margin-left: 10px; font-family: 'Raleway', sans-serif;">Save Recipe</button>
                </div>
            </div>
        `;
        
        modalContent.innerHTML = recipeContent;
        modalContent.appendChild(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Print recipe functionality
        const printBtn = modal.querySelector('.print-recipe');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                const printWindow = window.open('', '_blank');
                printWindow.document.write(`
                    <html>
                    <head>
                        <title>Print: ${recipe.title}</title>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
                            h1 { color: #808000; }
                            h2 { color: #2E8B57; border-bottom: 1px solid #9DC183; padding-bottom: 5px; }
                            img { max-width: 100%; height: auto; }
                            .meta { display: flex; justify-content: space-between; color: #2E8B57; margin: 10px 0 20px; }
                            ul, ol { padding-left: 20px; }
                            li { margin-bottom: 8px; }
                        </style>
                    </head>
                    <body>
                        <h1>${recipe.title}</h1>
                        <p>${recipe.description}</p>
                        <div class="meta">
                            <span>Prep Time: ${recipe.prepTime}</span>
                            <span>Calories: ${recipe.calories}</span>
                        </div>
                        <h2>Ingredients</h2>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        <h2>Instructions</h2>
                        <ol>
                            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                        <script>window.onload = function() { window.print(); }</script>
                    </body>
                    </html>
                `);
                printWindow.document.close();
            });
        }
        
        // Save recipe functionality (simulated)
        const saveBtn = modal.querySelector('.save-recipe');
        if (saveBtn) {
            saveBtn.addEventListener('click', function() {
                this.textContent = 'Saved!';
                this.style.background = '#9DC183';
                
                // Show a notification
                const notification = document.createElement('div');
                notification.textContent = 'Recipe saved to your favorites!';
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = 'var(--olive)';
                notification.style.color = 'white';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = '5px';
                notification.style.zIndex = '2000';
                notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 3000);
            });
        }
    }
    
    // Newsletter form submission
    function initNewsletterForm() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value.trim();
                
                if (email) {
                    // Simulate form submission
                    emailInput.value = '';
                    
                    // Show success message
                    const successMsg = document.createElement('div');
                    successMsg.textContent = 'Thank you for subscribing!';
                    successMsg.style.color = 'white';
                    successMsg.style.marginTop = '10px';
                    successMsg.style.padding = '5px';
                    
                    // Remove any existing message
                    const existingMsg = newsletterForm.querySelector('.success-message');
                    if (existingMsg) {
                        newsletterForm.removeChild(existingMsg);
                    }
                    
                    successMsg.className = 'success-message';
                    newsletterForm.appendChild(successMsg);
                }
            });
        }
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu toggle button
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.style.display = 'none';
        mobileMenuToggle.style.background = 'none';
        mobileMenuToggle.style.border = 'none';
        mobileMenuToggle.style.color = 'white';
        mobileMenuToggle.style.fontSize = '24px';
        mobileMenuToggle.style.cursor = 'pointer';
        
        const navContainer = document.querySelector('.nav-container');
        if (navContainer && navLinks) {
            navContainer.insertBefore(mobileMenuToggle, navLinks);
            
            // Add CSS for mobile menu
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-toggle {
                        display: block !important;
                        position: absolute;
                        top: 20px;
                        right: 20px;
                    }
                    .nav-links {
                        display: none;
                        width: 100%;
                        flex-direction: column;
                        align-items: center;
                        margin-top: 20px;
                    }
                    .nav-links.active {
                        display: flex;
                    }
                    .search-bar {
                        margin-top: 20px;
                    }
                    .nav-container {
                        flex-direction: column;
                        align-items: flex-start;
                        position: relative;
                    }
                    .dropdown-menu {
                        position: static;
                        box-shadow: none;
                        display: none;
                        padding: 0;
                        margin-top: 10px;
                    }
                    .dropdown:hover .dropdown-menu {
                        display: none;
                    }
                    .dropdown.active .dropdown-menu {
                        display: block;
                    }
                    .recipe-card {
                        margin-bottom: 20px;
                    }
                    .search-highlight {
                        animation: highlight 1.5s ease;
                    }
                    @keyframes highlight {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }
                }
            `;
            document.head.appendChild(style);
            
            // Toggle mobile menu
            mobileMenuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Handle dropdown menus in mobile view
            const dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(dropdown => {
                const link = dropdown.querySelector('a');
                if (link) {
                    link.addEventListener('click', function(e) {
                        if (window.innerWidth <= 768) {
                            e.preventDefault();
                            dropdown.classList.toggle('active');
                        }
                    });
                }
            });
        }
    }
});