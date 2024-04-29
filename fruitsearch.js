const fruits = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 
    'Mango', 'Nectarine', 'Orange', 'Peach', 'Pear', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 
    'Ugli Fruit', 'Vanilla Bean', 'Watermelon', 'Xigua', 'Yellow Plum', 'Zucchini'
];

const searchInput = document.getElementById('searchInput');
const suggestionsContainer = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.trim().toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().startsWith(searchText));
    displaySuggestions(filteredFruits);
});

function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.classList.add('suggestion');
        suggestionDiv.textContent = suggestion;
        suggestionDiv.addEventListener('click', function() {
            searchInput.value = suggestion;
            suggestionsContainer.innerHTML = '';
        });
        suggestionsContainer.appendChild(suggestionDiv);
    });
}
