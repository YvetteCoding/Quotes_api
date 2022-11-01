


const api_url = "https://api.quotable.io/random";

async function generateQuote(url)
{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById('quote').innerHTML = data.content; 
    document.getElementById('author').innerHTML = data.author;
}

generateQuote(api_url);





