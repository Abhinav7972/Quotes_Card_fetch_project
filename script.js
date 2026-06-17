
const card_container = document.querySelector(".card-container");



function getID(id)
{   

        fetch(`https://dummyjson.com/quotes/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('id not found')
                }
                return res.json();
            })
            .then((res) => {
                displayquote(res, 'beforeend');
                console.log('next', res);
                return fetch(`https://dummyjson.com/quotes/${id-1}`)
            })
            .catch(err => console.error(err))
            .then((res) => {
                if (!res.ok) {
                    throw new Error('previous id not found')
                }
                return res.json();
            })
    
            .then((res) => {
                displayquote(res, 'beforeend');
                console.log('previous', res);
                return fetch(`https://dummyjson.com/quotes/${id - 1}`)
            })
            .catch(err => console.error(err))
    
}


function displayquote(data,pos)
{
    const card = `<div class="card">
            <h3 id="quote">${data.quote}</h3>
             <p id="author">${data.author}</p>
        </div>`
    
    card_container.insertAdjacentHTML(pos, card);
}





for(let i = 4; i <= 10; i += 2) {
    getID(i);
}