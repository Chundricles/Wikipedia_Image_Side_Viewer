(function () {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.right = '0';
    container.style.width = '50vw';
    container.style.height = '100%';
    container.style.overflowY = 'auto';
    container.style.backgroundColor = 'white';
    container.style.zIndex = '9999';
    container.style.borderLeft = '1px solid #ccc';

    document.body.appendChild(container);

    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        const clone = img.cloneNode(true);
        clone.style.marginBottom = '10px';
        container.appendChild(clone);
        img.style.display = 'none'; // Optionally hide original images
    });
})();
