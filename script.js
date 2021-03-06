const srcInput = document.querySelector('.search-input');
const srcButton = document.querySelector('.search-btn');
const gridRepos = document.querySelector('.grid-repos');
const searchForm = document.querySelector('.search-form');
const loading = document.querySelector('.loading');
const inputText = '';
 
const createCard = (name, description) => {
  const repoCard = document.createElement('div');
  const repoLink = document.createElement('a');
  const repoTxt = document.createElement('p');
  
  repoCard.className = 'repo-card';
  
  repoLink.setAttribute(`href`, `https://github.com/${inputTxt}/${name}`);
  repoLink.textContent = name;
  
  repoTxt.textContent = description || '';
  
  repoCard.appendChild(repoLink);
  repoCard.appendChild(repoTxt);
  
  gridRepos.appendChild(repoCard);
}

const searchRepos = (e) => {
  e.preventDefault();
  inputTxt = srcInput.value;
  
  axios.get(`https://api.github.com/users/${inputTxt}/repos`)
  .then(response => showRepos(response.data))
  .catch(error => window.location.href = 'https://github.com/404')
  .then(() => loading.classList.add('loading'));
}

const showRepos = (repos) => {
  for(let i = 0; i < repos.length; i++) {
    createCard(repos[i].name, repos[i].description);
  }
}

searchForm.addEventListener('submit', event => {
  loading.classList.remove('loading');
  gridRepos.innerText = '';
  searchRepos(event);
});