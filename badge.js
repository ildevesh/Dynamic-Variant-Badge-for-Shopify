(function () {
  const badgeClass = 'custom-variant-badge';
  const titleSelector = '.product__title';
  const optionName = 'Color';

  function createBadge() {
    const badge = document.createElement('span');
    badge.className = badgeClass;
    Object.assign(badge.style, {
      marginLeft: '10px',
      padding: '2px 6px',
      backgroundColor: 'orange',
      color: 'white',
      borderRadius: '4px',
    });
    return badge;
  }

  function updateBadge() {
    const selectedOption = document.querySelector(`input[type="radio"][name*="${optionName}"]:checked`);
    if (!selectedOption) return;

    let badge = document.querySelector(`.${badgeClass}`);
    if (!badge) {
      const container = document.querySelector(titleSelector);
      if (!container) return;
      badge = createBadge();
      container.appendChild(badge);
    }

    badge.textContent = selectedOption.value;
  }

  function init() {
    const form = document.querySelector('form[action*="/cart/add"]');
    if (!form) return;

    form.addEventListener('change', () => setTimeout(updateBadge, 50));
    setTimeout(updateBadge, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
