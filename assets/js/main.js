const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('close-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show__nav');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show__nav');
  });
}

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show__nav');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));

const articlesList = [{
  id: 1,
  image: 'assets/img/tonic.svg',
  title: 'Tonic',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  specs: ['Canopy', 'Back End Dev', '2022'],
  languages: ['javascript', 'html', 'css'],
  live: 'http://kelvinbush.me/kelvin-portfolio/',
  source: 'https://github.com/kelvinbush/kelvin-portfolio',
}, {
  id: 2,
  image: 'assets/img/multi-stories.svg',
  title: 'Multi-Post Stories',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  specs: ['Canopy', 'Back End Dev', '2022'],
  languages: ['javascript', 'html', 'css'],
  live: 'http://kelvinbush.me/kelvin-portfolio/',
  source: 'https://github.com/kelvinbush/kelvin-portfolio',
}, {
  id: 3,
  image: 'assets/img/tonic2.svg',
  title: 'Tonic',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  specs: ['Canopy', 'Back End Dev', '2022'],
  languages: ['javascript', 'html', 'css'],
  live: 'http://kelvinbush.me/kelvin-portfolio/',
  source: 'https://github.com/kelvinbush/kelvin-portfolio',
}, {
  id: 4,
  image: 'assets/img/post.svg',
  title: 'Multi-Post Stories',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  specs: ['Canopy', 'Back End Dev', '2022'],
  languages: ['javascript', 'html', 'css'],
  live: 'http://kelvinbush.me/kelvin-portfolio/',
  source: 'https://github.com/kelvinbush/kelvin-portfolio',
}];
const worksSection = document.getElementById('works');
worksSection.innerHTML = articlesList.map((work, index) => `
    <article class="works_article ${index % 2 !== 0 ? 'reverse' : ''}">
        <img src="${work.image}" alt="Tonic Works Image">
        <div class="article_description">
            <h3>${work.title}</h3>
            <div class="works_specs">
                <h6>${work.specs[0]}</h6>  
                <p>${work.specs[1]}</p>
                <p>${work.specs[2]}</p>
            </div>
            <p class="works__description">${work.description}</p>
            <ul class="works_languages">
                ${work.languages.map((language) => `<li>${language}</li>`).join('')}
            </ul>
            <button data-id=${work.id} class="btn__see" type="button">See Project</button>
        </div>
    </article>
  `).join('');
const modalSection = document.getElementById('modal');
const worksArticles = document.querySelectorAll('.btn__see');
worksArticles.forEach((article) => {
  article.addEventListener('click', (e) => {
    const articleId = e.target.dataset.id;
    const articleData = articlesList.find((article) => article.id === +articleId);
    modalSection.innerHTML = `
      <div class="modal__content">
        <article class="modal__article">
            <h3>${articleData.title}</h3>
            <div class="works_specs">
                <h6>${articleData.specs[0]}</h6>
                <p>${articleData.specs[1]}</p>
                <p>${articleData.specs[2]}</p>
            </div>
            <img class="modal__image" src="${articleData.image}" alt="Tonic Works Image">
            <div class="modal__divider">
                <p class="modal__description">${articleData.description}</p>
                <div class="modal__specs">
                    <ul class="works_languages">
                        ${articleData.languages.map((language) => `<li>${language}</li>`).join('')}
                    </ul>
                    <hr>
                    <div>
                        <button class="modal__btn" type="button"><a href=${articleData.live}>See live <img src="assets/img/live.svg"
                                                                                          alt=""></a>
                        </button>
                        <button class="modal__btn" id="btn-source" type="button"><a href=${articleData.source}>See source <img
                                src="assets/img/source.svg" alt=""></a></button>
                    </div>
                </div>
            </div>
           
            <span id="btn-close" class="modal__exit">
            <img  src="assets/img/exit.svg" alt="">
            </span>
        
        </article>
    </div>
    `;
    modalSection.classList.add('modal_active');
    const closeButton = document.querySelector('.modal__exit');
    closeButton.addEventListener('click', () => {
      modalSection.classList.remove('modal_active');
    });
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modalSection) {
  modalSection.classList.remove('modal_active');
  }
  });
  