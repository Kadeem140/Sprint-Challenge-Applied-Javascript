// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

    // const cardCon = document.querySelector('.cards-container');
    // console.log(cardCon);

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(resolve => {
                const cardCon = document.querySelector('.cards-container');
                console.log(cardCon);
            
                console.log(resolve.data);
                // const art = resolve.data.articles;

                //  javascript, bootstrap, technology, jquery, node

                const javascript = resolve.data.articles.javascript;
                const bootstrap = resolve.data.articles.bootstrap;
                const technology = resolve.data.articles.technology;
                const jquery = resolve.data.articles.jquery;
                const node = resolve.data.articles.node;
                
                javascript.forEach(e => {
                    let newCard = Card(e)
                    cardCon.appendChild(newCard); 

                })

                bootstrap.forEach(e => {
                    let newCard = Card(e)
                    cardCon.appendChild(newCard);
                })

                technology.forEach(e => {
                    let newCard = Card(e)
                    cardCon.appendChild(newCard);
                })

                jquery.forEach(e => {
                    let newCard = Card(e)
                    cardCon.appendChild(newCard);  
                })

                node.forEach(e => {
                    let newCard = Card(e)
                    cardCon.appendChild(newCard); 
                })



        })
        .catch(err => console.log(err))


    function Card(news) {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        headline.innerHTML = news.headline;
        image.src = news.authorPhoto;

        name.innerHTML = `Written By: ${news.authorName}`;


        //Appending elements
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imageContainer);
        author.appendChild(name);
        imageContainer.appendChild(image);

        return card;



    }
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//