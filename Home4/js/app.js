document.addEventListener('DOMContentLoaded', () => {
    const mehmonForm = document.getElementById('mehmonForm');
    const mehmonlarList = document.getElementById('mehmonlarList');
    const xonaSelect = document.getElementById('xona');

    const xonalar = Array.from({ length: 15 }, (_, i) => i + 1);
    const mehmonlar = [];

    function updateXonaSelect() {
        xonaSelect.innerHTML = '';
        xonalar.forEach(xona => {
            const option = document.createElement('option');
            option.value = xona;
            option.textContent = xona;
            if (mehmonlar.some(mehmon => mehmon.xona === xona)) {
                option.disabled = true;
            }
            xonaSelect.appendChild(option);
        });
    }

    mehmonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ism = mehmonForm.ism.value;
        const familiya = mehmonForm.familiya.value;
        const xona = parseInt(mehmonForm.xona.value);

        mehmonlar.push({ ism, familiya, xona });
        updateMehmonlarList();
        updateXonaSelect();
        mehmonForm.reset();
    });

    function updateMehmonlarList() {
        mehmonlarList.innerHTML = '';
        mehmonlar.forEach((mehmon, index) => {
            const li = document.createElement('li');
            li.textContent = `${mehmon.ism} ${mehmon.familiya} - ${mehmon.xona}-xona`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Ochirish';
            deleteButton.addEventListener('click', () => {
                mehmonlar.splice(index, 1);
                updateMehmonlarList();
                updateXonaSelect();
            });
            li.appendChild(deleteButton);
            mehmonlarList.appendChild(li);
        });
    }

    updateXonaSelect();
});
