document.addEventListener('DOMContentLoaded', function() {
    const properties = [
        { 
            image: 'house1.jpg',
            title: 'Beautiful Family Home',
            price: 'Rs.250,000',
            description: 'A spacious 3-bedroom house with a large backyard.'
        },
        { 
            image: 'house2.jpg',
            title: 'Modern Apartment',
            price: 'Rs.150,000',
            description: 'A cozy 1-bedroom apartment in the city center.'
        },
    ];

    const propertyListings = document.getElementById('property-listings');
    function generatePropertyHTML(property) {
        return `
            <div class="property">
                <img src="${property.image}" alt="${property.title}">
                <h2>${property.title}</h2>
                <p><strong>Price:</strong> ${property.price}</p>
                <p>${property.description}</p>
            </div>
        `;
    }
    function displayProperties() {
        properties.forEach(property => {
            propertyListings.innerHTML += generatePropertyHTML(property);
        });
    }
    displayProperties();
});
