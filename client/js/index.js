const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');
const githubLink = document.getElementById('github-link-result');
const ghUrlInput = document.getElementById('ghurl-input');
const qInput = document.getElementById('q-input');
const ghLinkCopier = document.getElementById('github-link-copier');
const ghLinkOpener = document.getElementById('github-link-opener');
const activeTab = 'about';

let ghUrl, q;

ghUrlInput.oninput = updateGhUrl;
qInput.oninput = updateQ;
ghLinkCopier.onclick = copyGhLink;

function checkHash() {
  const hash = window.location.hash.substring(1);
  console.log(hash);
  if (hash && hash !== 'about') {
    tabPanes.forEach((t) => t.classList.remove('active'));
    const targetEle = document.getElementById(hash);
    targetEle.classList.add('active');
    tabs.forEach((t) => t.classList.remove('active'));
    document
      .querySelector("[data-target='#" + hash + "']")
      .classList.add('active');
  }
}

checkHash();

tabs.forEach((t) => {
  const target = t.getAttribute('data-target');
  t.addEventListener('click', () => {
    if (!t.classList.contains('active')) {
      tabPanes.forEach((t) => t.classList.remove('active'));
      const targetEle = document.getElementById(target.substring(1));
      targetEle.classList.add('active');
      tabs.forEach((t) => t.classList.remove('active'));
      t.classList.add('active');
      window.location.hash = target;
    }
  });
});

function updateGhUrl(e) {
  ghUrl = e.target.value;
  updateGitHubLink();
}

function updateQ(e) {
  q = e.target.value;
  updateGitHubLink();
}

function updateGitHubLink() {
  const ghLink = `https://github-link.vercel.app/api?ghUrl=${ghUrl}&q=${encodeURIComponent(q)}`;
  githubLink.value = ghLink;
  if (ghUrl && q) {
    ghLinkCopier.disabled = false;
    ghLinkOpener.href = ghLink;
  } else {
    ghLinkCopier.disabled = true;
    ghLinkOpener.removeAttribute('href');
  }
}

function copyGhLink() {
  githubLink.select();
  document.execCommand('copy');
}
