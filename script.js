const srcInput = document.querySelector('.search-input');
const srcButton = document.querySelector('.search-btn');
const gridRepos = document.querySelector('.grid-repos');
const inputText = '';
 
const createCard = (name, description) => {
  const repoCard = document.createElement('div');
  const repoLink = document.createElement('a');
  const repoTxt = document.createElement('p');

  repoCard.className = 'repo-card';

  repoLink.setAttribute(`href`, `http://github.com/${inputTxt}/${name}`);
  repoLink.textContent = name;

  repoTxt.textContent = description || '';

  repoCard.appendChild(repoLink);
  repoCard.appendChild(repoTxt);

  gridRepos.appendChild(repoCard);
}

const searchRepos = () => {
  inputTxt = srcInput.value;

  axios.get(`http://api.github.com/users/${inputTxt}/repos`)
  .then(response => showRepos(response.data))
  .catch(error => console.warn(error));
}

srcButton.onclick = searchRepos;

const showRepos = (repos) => {
  for(let i = 0; i < repos.length; i++) {
    createCard(repos[i].name, repos[i].description);
  }
}