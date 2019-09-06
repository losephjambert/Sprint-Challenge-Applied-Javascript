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

const CardsContainer = document.querySelector('.cards-container');
const baseURL = 'https://lambda-times-backend.herokuapp.com/articles';

axios
  .get(baseURL)
  .then(res => {
    const { articles } = res.data;
    for (let subject in articles) {
      articles[subject].forEach(article => {
        CardsContainer.appendChild(ArticleCard(article));
      });
    }
  })
  .catch(err => {
    console.error(err);
  });

const stubbedData = {
  headline: 'Bootstrap 5: Get a Sneak Peak at all the New Features',
  authorPhoto: './assets/fido.jpg',
  authorName: 'FIDO WALKSALOT',
};

function ArticleCard(data) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('.card');
  headline.classList.add('.headline');
  author.classList.add('.author');
  imgContainer.classList.add('.img-container');

  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.appendChild(authorImg);

  headline.textContent = data.headline;
  authorImg.src = data.authorPhoto;
  authorName.textContent = data.authorName;

  return card;
}
