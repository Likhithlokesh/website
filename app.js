const tabs = document.querySelectorAll('.tab');

const tabColors = {
  flights: '#19140f',
  stays: '#0d5c66',
  cars: '#3f3d56',
  packages: '#2e2b2b',
};

function setActive(tab) {
  tabs.forEach((btn) => btn.classList.remove('active'));
  tab.classList.add('active');
  const key = tab.dataset.tab;
  document.documentElement.style.setProperty('--ink', tabColors[key]);
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setActive(tab));
});
