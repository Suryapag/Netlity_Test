async function fetchData() {
    try {
        const response = await fetch('/.netlify/functions/fetch-data');
        const data = await response.json();

        const list = document.getElementById('data-list');
        list.innerHTML = '';

        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name || 'Unnamed Document';
            list.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data on page load
window.onload = fetchData;
