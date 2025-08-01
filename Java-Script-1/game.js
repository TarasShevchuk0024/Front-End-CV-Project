let ready = false;
while (!ready) {
    ready = confirm("Чи готові ви зіграти в гру 'Вгадай число'? 🎲");
}

let wins = 0;

while (wins < 3) {
    const target = Math.floor(Math.random() * 10);
    let guess = null;

    while (guess !== target) {
        guess = parseInt(prompt("Вгадайте число від 0 до 9: 🎰"));

        if (isNaN(guess) || guess < 0 || guess > 9) {
            alert("Будь ласка, введіть коректне число від 0 до 9. 👀");
            continue;
        }

        if (guess < target) {
            alert("Занадто мало! Спробуйте більше число. 🙅");
        } else if (guess > target) {
            alert("Занадто багато! Спробуйте менше число. 😵‍💫");
        }
    }

    alert("Вірно! Ви вгадали число! 🎯");
    wins++;

    if (wins < 3) {
        alert(`Ви виграли ${wins} раунд.🏅 Переходимо до наступного раунду! 👻`);
    }
}
alert("Вітаємо! Ви виграли 3 раунди й завершили гру. 🏆🍻🎉");