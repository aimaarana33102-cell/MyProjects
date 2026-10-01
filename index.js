let data = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9fb05bac087245ee94752e65901abea7')
.then(data => data.json())
.then(data => {
    data.articles.map((data)=>{
        document.getElementById('demo').innerHTML +=
        `
            <div class="inner">
        <img src=${data.urlToImage} alt="">
        <div class="date_author">
            <span class="author">${data.author}</span>
            <span class="date">${data.publishedAt}</span>
        </div>
        <h2 class="title">${data.title}</h2>
        <p><b>Description:</b>${data.description}</p>
        <p><b>Content:</b>${data.content}</p>
        <a href=${data.url}>
            <button>Learn More</button>
        </a>
    </div>
        
        `
    })
})