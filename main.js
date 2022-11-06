function createGame(team1, time, team2) {
    return `
            <li>
                <img src="./assets/icon=${team1}.svg" alt="${team1}">
                <strong>${time}</strong>
                <img src="./assets/icon=${team2}.svg" alt="${team2}">
            </li>
        `
}
let delay = -0.4;
function createCard(date, day, game) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date}<span>${day}</span></h2>
            <ul>
                ${game}
            </ul>
        </div>
        `
}

document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Sunday", createGame("qatar", "01:00 pm", "ecuador")) +
    createCard("21/11", "Monday", createGame("england", "10:00 am", "iran") + createGame("senegal", "01:00 pm", "netherlands") + createGame("united states", "04:00 pm", "wales")) +
    createCard("22/11", "Tuesday", createGame("argentina", "07:00 am", "saudi arabia") + createGame("denmark", "10:00 am", "tunisia") + createGame("mexico", "01:00 pm", "poland") + createGame("france", "04:00 pm", "australia")) +
    createCard("23/11", "Wednesday", createGame("morocco", "07:00 am", "croatia") + createGame("germany", "10:00 am", "japan") + createGame("spain", "01:00 pm", "costa rica") + createGame("belgium", "04:00 pm", "canada")) +
    createCard("24/11", "Thursday", createGame("switzerland", "07:00 am", "cameroon") + createGame("uruguay", "10:00 am", "south korea") + createGame("portugal", "01:00 pm", "ghana") + createGame("brazil", "04:00 pm", "serbia"))