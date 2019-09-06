// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const TopicsContainer = document.querySelector('.topics');

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    const { topics } = res.data;
    topics.forEach(topic => TopicsContainer.appendChild(Tab(topic)));
  })
  .catch(err => {
    console.error(err);
  });

function Tab(subject) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = subject;
  tab.setAttribute(`data-subject`, subject);

  tab.addEventListener('click', e => {
    const articles = [].slice.call(document.querySelectorAll('.card'));
    let filtered = articles.filter(
      article => article.getAttribute('data-subject') !== e.target.getAttribute('data-subject')
    );
    filtered.forEach(article => {
      article.classList.toggle('hide');
    });
  });

  return tab;
}
