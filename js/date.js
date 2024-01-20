const dateElement = document.querySelector("h3#date");

function updateDate() {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    dateElement.innerText = `${year}/${month}/${day}`;
}

setInterval(updateDate, 1000);
