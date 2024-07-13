document.addEventListener('DOMContentLoaded', () => {
    const displayText = document.getElementById('displayText');

    // API request for fun fact
    const factBtn = document.getElementById('fact');
    factBtn.addEventListener('click', function() {
        fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.text)
            displayText.innerText = data.text;
        })
        .catch(error => {
            console.error('Error fetching fact:', error);
        })
    })
    
    
    // API request for trivia question
    const triviaBtn = document.getElementById('trivia');
    triviaBtn.addEventListener('click', function() {
        fetch('https://the-trivia-api.com/v2/questions', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data[0].question)
            displayText.innerText = data[0].question.text;
        })
        .catch(error => {
            console.error('Error fetching trivia question:', error);
        });
    })

    // API request for random dad joke
    const dadJokeBtn = document.getElementById('dadJoke');
    dadJokeBtn.addEventListener('click', function() {
        // fetch dad joke  
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.joke); // Log the joke to the console
            displayText.innerText = data.joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
    })

    // change colours of title
    const title = document.getElementById('title');
    const colors = ['#F45B69', '#59C3C3'];
    let idx = 0;

    function changeColor() {
        title.style.color = colors[idx];
        idx = (idx + 1) % 2; // change this if adding colours
    }

    setInterval(changeColor, 2000);
})
