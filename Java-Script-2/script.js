
document.querySelector("#change-text-btn").addEventListener("click", function () {
    const title = document.querySelector("#title");
    title.innerHTML = "Заголовок змінено! 🔥";
});

document.querySelector("#image").addEventListener("click", function () {
    const image = document.querySelector("#image");
    const currentSrc = image.getAttribute("src");

    if (currentSrc === "https://placehold.co/300x300") {
        image.setAttribute("src", "https://placehold.co/350x350");
    } else {
        image.setAttribute("src", "https://placehold.co/300x300");
    }
});

document.querySelector("#toggle-image-btn").addEventListener("click", function () {
    const image = document.querySelector("#image");
    image.classList.toggle("border");
    image.classList.toggle("border-primary");
});

// Оновлення опису
document.querySelector("#update-description-btn").addEventListener("click", function () {
    const description = document.querySelector("#description");
    description.innerHTML = "Опис оновлено! 🚀";
});
