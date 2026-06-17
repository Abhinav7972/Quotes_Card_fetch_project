
const card_container = document.querySelector(".card-container");



function getID(id)
{
    fetch(`https://dummyjson.com/quotes/${id}`)
        .then(res => res.json())
        .then((res) => {
            displayquote(res);
        })
}


function displayquote(data)
{
    const card = `<div class="card">
            <h3 id="quote">${data.quote}</h3>
             <p id="author">${data.author}</p>
        </div>`
    
    card_container.insertAdjacentHTML("beforeend", card);
}



for (let i = 1; i <= 10; i++)
{
    getID(i);
}
