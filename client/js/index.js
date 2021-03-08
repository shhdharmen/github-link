const tabs = document.querySelectorAll('.tab');
const tabPanes = document.querySelectorAll('.tab-pane');

tabs.forEach((t) => {
  const target = t.getAttribute('data-target');
  t.addEventListener('click', () => {
    if (!t.classList.contains('active')) {
      tabPanes.forEach((t) => t.classList.remove('active'));
      const targetEle = document.getElementById(target.substring(1));
      targetEle.classList.add('active');
      tabs.forEach((t) => t.classList.remove('active'));
      t.classList.add('active');
    }
  });
});
