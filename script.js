document.addEventListener('DOMContentLoaded', async function () {
    const searchTerms = [
        'Acura MDX', 'Acura RDX', 'Acura TL', 'Acura TLX', 'Acura TSX',
        'Alfa Romeo 4C', 'Alfa Romeo Giulia', 'Alfa Romeo Stelvio', 'Aston Martin DB11', 'Aston Martin DB9',
        'Aston Martin DBS Superleggera', 'Aston Martin Vantage', 'Audi A3', 'Audi A4', 'Audi A5',
        'Audi A6', 'Audi A7', 'Audi A8', 'Audi Q3', 'Audi Q5',
        'Audi Q7', 'Audi Q8', 'Audi R8', 'Audi TT', 'Bentley Bentayga',
        'Bentley Continental GT', 'Bentley Flying Spur', 'BMW 1 Series', 'BMW 2 Series', 'BMW 3 Series',
        'BMW 4 Series', 'BMW 5 Series', 'BMW 6 Series', 'BMW 7 Series', 'BMW 8 Series',
        'BMW i3', 'BMW i8', 'BMW X1', 'BMW X2', 'BMW X3',
        'BMW X4', 'BMW X5', 'BMW X6', 'BMW X7', 'BMW Z4',
        'Buick Enclave', 'Buick Encore', 'Buick Envision', 'Buick LaCrosse', 'Buick Regal',
        'Cadillac ATS', 'Cadillac CT4', 'Cadillac CT5', 'Cadillac CT6', 'Cadillac CTS',
        'Cadillac Escalade', 'Cadillac XT4', 'Cadillac XT5', 'Cadillac XT6', 'Chevrolet Blazer',
        'Chevrolet Bolt', 'Chevrolet Camaro', 'Chevrolet Colorado', 'Chevrolet Corvette', 'Chevrolet Cruze',
        'Chevrolet Equinox', 'Chevrolet Impala', 'Chevrolet Malibu', 'Chevrolet Silverado', 'Chevrolet Sonic',
        'Chevrolet Spark', 'Chevrolet Suburban', 'Chevrolet Tahoe', 'Chevrolet Traverse', 'Chevrolet Trax',
        'Chrysler 300', 'Chrysler Pacifica', 'Chrysler Voyager', 'Citroen C3', 'Citroen C4',
        'Citroen DS5', 'Dodge Challenger', 'Dodge Charger', 'Dodge Durango', 'Dodge Grand Caravan',
        'Dodge Journey', 'Dodge Ram 1500', 'Dodge Viper', 'Ferrari 488', 'Ferrari California',
        'Ferrari F8 Tributo', 'Ferrari Portofino', 'Ferrari Roma', 'Ferrari SF90 Stradale', 'Fiat 124 Spider',
        'Fiat 500', 'Fiat 500L', 'Fiat 500X', 'Ford Bronco', 'Ford EcoSport',
        'Ford Edge', 'Ford Escape', 'Ford Expedition', 'Ford Explorer', 'Ford F-150',
        'Ford Fiesta', 'Ford Focus', 'Ford Fusion', 'Ford Mustang', 'Ford Ranger', 'Ford Taurus', 'Ford Transit', 'Genesis G70', 'Genesis G80', 'Genesis G90',
        'GMC Acadia', 'GMC Canyon', 'GMC Sierra', 'GMC Terrain', 'GMC Yukon',
        'Honda Accord', 'Honda Civic', 'Honda CR-V', 'Honda Fit', 'Honda HR-V',
        'Honda Odyssey', 'Honda Passport', 'Honda Pilot', 'Honda Ridgeline', 'Hyundai Accent',
        'Hyundai Elantra', 'Hyundai Genesis', 'Hyundai Kona', 'Hyundai Palisade', 'Hyundai Santa Fe',
        'Hyundai Sonata', 'Hyundai Tucson', 'Hyundai Veloster', 'Infiniti Q50', 'Infiniti Q60',
        'Infiniti Q70', 'Infiniti QX50', 'Infiniti QX60', 'Infiniti QX80', 'Jaguar E-Pace',
        'Jaguar F-Pace', 'Jaguar F-Type', 'Jaguar XE', 'Jaguar XF', 'Jaguar XJ',
        'Jeep Cherokee', 'Jeep Compass', 'Jeep Gladiator', 'Jeep Grand Cherokee', 'Jeep Renegade',
        'Jeep Wrangler', 'Kia Cadenza', 'Kia Forte', 'Kia K900', 'Kia Niro',
        'Kia Optima', 'Kia Rio', 'Kia Seltos', 'Kia Sorento', 'Kia Soul',
        'Kia Sportage', 'Kia Stinger', 'Kia Telluride', 'Lamborghini Aventador', 'Lamborghini Huracan',
        'Lamborghini Urus', 'Land Rover Discovery', 'Land Rover Discovery Sport', 'Land Rover Range Rover', 'Land Rover Range Rover Evoque',
        'Land Rover Range Rover Sport', 'Land Rover Range Rover Velar', 'Lexus ES', 'Lexus GS', 'Lexus GX',
        'Lexus IS', 'Lexus LC', 'Lexus LS', 'Lexus LX', 'Lexus NX',
        'Lexus RC', 'Lexus RX', 'Lexus UX', 'Lincoln Aviator', 'Lincoln Continental',
        'Lincoln Corsair', 'Lincoln MKC', 'Lincoln MKZ', 'Lincoln Nautilus', 'Lincoln Navigator',
        'Maserati Ghibli', 'Maserati GranTurismo', 'Maserati Levante', 'Maserati Quattroporte', 'Mazda 3',
        'Mazda 6', 'Mazda CX-3', 'Mazda CX-30', 'Mazda CX-5', 'Mazda CX-9',
        'Mazda MX-5 Miata', 'McLaren 570S', 'McLaren 720S', 'McLaren GT', 'McLaren Senna',
        'Mercedes-Benz A-Class', 'Mercedes-Benz C-Class', 'Mercedes-Benz CLA', 'Mercedes-Benz CLS', 'Mercedes-Benz E-Class',
        'Mercedes-Benz G-Class', 'Mercedes-Benz GLA', 'Mercedes-Benz GLB', 'Mercedes-Benz GLC', 'Mercedes-Benz GLE',
        'Mercedes-Benz GLS', 'Mercedes-Benz S-Class', 'Mercedes-Benz SL', 'Mercedes-Benz SLC', 'Mini Cooper',
        'Mini Cooper Clubman', 'Mini Cooper Countryman', 'Mitsubishi Eclipse Cross', 'Mitsubishi Mirage', 'Mitsubishi Outlander',
        'Nissan 370Z', 'Nissan Altima', 'Nissan Armada', 'Nissan Frontier', 'Nissan GT-R',
        'Nissan Juke', 'Nissan Leaf', 'Nissan Maxima', 'Nissan Murano', 'Nissan Pathfinder',
        'Nissan Rogue', 'Nissan Sentra', 'Nissan Titan', 'Nissan Versa', 'Nissan Xterra', 'Opel Astra', 'Opel Corsa', 'Opel Insignia', 'Pagani Huayra', 'Pagani Zonda',
        'Peugeot 208', 'Peugeot 308', 'Peugeot 508', 'Plymouth Barracuda', 'Pontiac Firebird',
        'Pontiac GTO', 'Porsche 718 Boxster', 'Porsche 718 Cayman', 'Porsche 911', 'Porsche Cayenne',
        'Porsche Macan', 'Porsche Panamera', 'Porsche Taycan', 'Ram 1500', 'Ram 2500',
        'Renault Clio', 'Renault Megane', 'Rolls-Royce Cullinan', 'Rolls-Royce Dawn', 'Rolls-Royce Ghost',
        'Rolls-Royce Phantom', 'Rolls-Royce Wraith', 'Saab 9-3', 'Saab 9-5', 'Saturn Sky',
        'Scion FR-S', 'Scion tC', 'Scion xB', 'Seat Ibiza', 'Seat Leon',
        'Skoda Fabia', 'Skoda Octavia', 'Skoda Superb', 'Smart Fortwo', 'Subaru BRZ',
        'Subaru Crosstrek', 'Subaru Forester', 'Subaru Impreza', 'Subaru Legacy', 'Subaru Outback',
        'Suzuki Swift', 'Suzuki Vitara', 'Tesla Model 3', 'Tesla Model S', 'Tesla Model X',
        'Tesla Model Y', 'Tesla Roadster', 'Toyota 4Runner', 'Toyota 86', 'Toyota Avalon',
        'Toyota C-HR', 'Toyota Camry', 'Toyota Corolla', 'Toyota FJ Cruiser', 'Toyota Highlander',
        'Toyota Land Cruiser', 'Toyota Prius', 'Toyota RAV4', 'Toyota Sequoia', 'Toyota Sienna',
        'Toyota Supra', 'Toyota Tacoma', 'Toyota Tundra', 'Toyota Yaris', 'Vauxhall Astra',
        'Vauxhall Corsa', 'Vauxhall Insignia', 'Volkswagen Atlas', 'Volkswagen Beetle', 'Volkswagen Golf',
        'Volkswagen Jetta', 'Volkswagen Passat', 'Volkswagen Polo', 'Volkswagen Tiguan', 'Volkswagen Touareg',
        'Volvo C30', 'Volvo S60', 'Volvo S90', 'Volvo V60', 'Volvo V90',
        'Volvo XC40', 'Volvo XC60', 'Volvo XC90', 'Wiesmann GT MF5', 'Zenvo ST1',
        // This pattern continues until the desired number of entries is reached
    ];
    let currentCar = '';
    let currentBrand = '';
    let currentModel = '';
    let guessesLeft = 6;
    let currentGuess = 0;
    let guessHistory = []; // Track previous guesses
    
    // Zoom levels: start very zoomed in and gradually zoom out to normal (1x)
    // 6 wrong guesses will reveal the image progressively
    const zoomLevels = [6, 5, 4, 3, 2, 1.5, 1];

    const userGuess = document.getElementById('userGuess');
    const guessButton = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');
    const carImageElement = document.getElementById('carImage');
    const strikeCounter = document.getElementById('strikeCounter');
    const guessHistoryElement = document.getElementById('guessHistory');

    // Function to parse car name into brand and model
    function parseCarName(carName) {
        const parts = carName.split(' ');
        // Handle multi-word brands like "Land Rover", "Alfa Romeo", "Aston Martin", etc.
        const multiWordBrands = ['Land Rover', 'Alfa Romeo', 'Aston Martin', 'Mercedes-Benz', 'Mini Cooper', 'Rolls-Royce'];
        
        let brand = '';
        let model = '';
        
        for (const multiWordBrand of multiWordBrands) {
            // Case-insensitive comparison
            if (carName.toLowerCase().startsWith(multiWordBrand.toLowerCase())) {
                brand = multiWordBrand;
                model = carName.substring(multiWordBrand.length).trim();
                return { brand, model };
            }
        }
        
        // Default: first word is brand, rest is model
        brand = parts[0];
        model = parts.slice(1).join(' ');
        
        return { brand, model };
    }

    // Function to update strike counter
    function updateStrikeCounter() {
        let counterHTML = '';
        for (let i = 0; i < 6; i++) {
            if (i < guessHistory.length) {
                const guess = guessHistory[i];
                if (guess.result === 'correct') {
                    counterHTML += '<span class="strike-box correct">✓</span>';
                } else if (guess.result === 'partial') {
                    counterHTML += '<span class="strike-box partial">⚠</span>';
                } else {
                    counterHTML += '<span class="strike-box wrong">✗</span>';
                }
            } else {
                counterHTML += '<span class="strike-box empty">□</span>';
            }
        }
        strikeCounter.innerHTML = counterHTML;
    }

    // Function to update guess history display
    function updateGuessHistory() {
        let historyHTML = '';
        guessHistory.forEach((guess, index) => {
            const brandClass = guess.brandCorrect ? 'correct-part' : 'wrong-part';
            const modelClass = guess.modelCorrect ? 'correct-part' : 'wrong-part';
            
            historyHTML += `
                <div class="guess-item">
                    <span class="guess-number">#${index + 1}</span>
                    <span class="${brandClass}">${guess.brand}</span>
                    <span class="${modelClass}">${guess.model}</span>
                </div>
            `;
        });
        guessHistoryElement.innerHTML = historyHTML;
    }

    // Function to fetch images from Wikimedia Commons
    async function fetchCarImage(searchTerm) {
        const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrlimit=1&gsrsearch=${encodeURIComponent(searchTerm)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const page = Object.values(data.query.pages)[0];
            const imageUrl = page.imageinfo[0].url;
            return imageUrl;
        } catch (error) {
            console.error('Failed to load car image:', error);
            return '';
        }
    }

    // Function to initialize the game with a new car image
    async function newGame() {
        currentCar = searchTerms[Math.floor(Math.random() * searchTerms.length)]; // Pick a random search term
        const parsed = parseCarName(currentCar);
        currentBrand = parsed.brand;
        currentModel = parsed.model;
        
        const imageUrl = await fetchCarImage(currentCar);

        if (imageUrl) {
            carImageElement.src = imageUrl;
            carImageElement.style.transform = `scale(${zoomLevels[0]})`; // Start with maximum zoom
            carImageElement.classList.remove('fill-container'); // Remove fill class for gameplay
            feedback.textContent = 'Guess the car brand and model!';
        } else {
            feedback.textContent = 'Failed to load car image. Please try again.';
        }

        userGuess.value = '';
        userGuess.disabled = false;
        guessButton.disabled = false;
        nextButton.style.display = 'none';
        currentGuess = 0;
        guessesLeft = 6;
        guessHistory = [];
        updateStrikeCounter();
        updateGuessHistory();
    }

    // Prevent right-click on image
    carImageElement.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Function to zoom out the car image
    function zoomOutImage() {
        currentGuess++;
        if (currentGuess < zoomLevels.length) {
            carImageElement.style.transform = `scale(${zoomLevels[currentGuess]})`;
        }
    }

    // Event listener for the guess button
    guessButton.addEventListener('click', function () {
        const userInput = userGuess.value.trim();
        if (!userInput) return;
        
        const userParsed = parseCarName(userInput);
        const userBrand = userParsed.brand.toLowerCase();
        const userModel = userParsed.model.toLowerCase();
        
        const brandCorrect = userBrand === currentBrand.toLowerCase();
        const modelCorrect = userModel === currentModel.toLowerCase();
        const fullyCorrect = brandCorrect && modelCorrect;
        
        // Record the guess
        const guessResult = {
            brand: userParsed.brand,
            model: userParsed.model,
            brandCorrect: brandCorrect,
            modelCorrect: modelCorrect,
            result: fullyCorrect ? 'correct' : (brandCorrect || modelCorrect) ? 'partial' : 'wrong'
        };
        guessHistory.push(guessResult);
        
        if (fullyCorrect) {
            feedback.textContent = '🎉 Correct! Well done!';
            userGuess.disabled = true;
            guessButton.disabled = true;
            nextButton.style.display = 'block';
            carImageElement.style.transform = 'scale(1)';
            carImageElement.classList.add('fill-container'); // Fill container, crop if needed
            updateStrikeCounter();
            updateGuessHistory();
        } else {
            guessesLeft--;
            zoomOutImage();
            updateStrikeCounter();
            updateGuessHistory();
            
            if (guessesLeft === 0) {
                feedback.textContent = `Game over! The correct car was ${currentBrand} ${currentModel}.`;
                userGuess.disabled = true;
                guessButton.disabled = true;
                nextButton.style.display = 'block';
                carImageElement.style.transform = 'scale(1)';
                carImageElement.classList.add('fill-container'); // Fill container, crop if needed
            } else {
                if (brandCorrect && !modelCorrect) {
                    feedback.textContent = `⚠️ Brand correct, but wrong model! ${guessesLeft} guesses left.`;
                } else if (!brandCorrect && modelCorrect) {
                    feedback.textContent = `⚠️ Model correct, but wrong brand! ${guessesLeft} guesses left.`;
                } else {
                    feedback.textContent = `❌ Wrong! You have ${guessesLeft} guesses left.`;
                }
            }
        }
        
        userGuess.value = '';
    });

    userGuess.addEventListener('keypress', function (event) {
        // Check if the pressed key is the Enter key
        if (event.key === 'Enter' || event.keyCode === 13) { // The keyCode property is deprecated but included here for broader compatibility
            event.preventDefault(); // Prevent the default action to avoid submitting a form if your input is part of one
            guessButton.click(); // Programmatically trigger the click event of the guess button
        }
    });

    // Event listener for the next button to start a new game
    nextButton.addEventListener('click', newGame);

    // Start a new game when the page loads
    newGame();
})