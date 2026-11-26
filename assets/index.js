for (const link of document.querySelectorAll('a[data-target][data-method]')) {
  const query = new URLSearchParams({ target: link.dataset.target, method: link.dataset.method });
  link.href = `viewer.html?${query}`;
}

const copy = document.querySelector('#copy-citation');
const status = document.querySelector('#copy-status');
const citation = document.querySelector('#reference');

if (navigator.clipboard) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      status.textContent = 'Citation copied.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected for copying.';
    }
  });
}
