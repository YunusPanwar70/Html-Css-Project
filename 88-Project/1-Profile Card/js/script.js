const analyticsContainer = document.getElementById('analyticsContainer');

analyticsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('data')) {
        updateAnalytics(event.target);
    }
});

function updateAnalytics(element) {
    const index = element.getAttribute('data-index');
    const countElement = document.getElementById(getId(index));

    if (countElement) {
        const currentCount = parseInt(countElement.innerText);
        countElement.innerText = `${currentCount + 1}k`;
    }
}

function getId(index) {
    switch (index) {
        case '0':
            return 'heartCount';
        case '1':
            return 'messageCount';
        case '2':
            return 'shareCount';
        default:
            return '';
    }
}