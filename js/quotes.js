const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function selectQuotes(jsonObject) {
    const num = Math.floor(Math.random() * jsonObject.length);
    const object = jsonObject[num];

    return object || extractQuotes(jsonObject);
}

function getQuotes() {
    const _url = "https://type.fit/api/quotes";
    fetch(_url).then((res) => res.json()).then((json) => {
        const quotes = selectQuotes(json);

        quote.innerText = quotes.text;
        author.innerText = quotes.author;
    }).catch((err) => console.log(err));
}

getQuotes();
