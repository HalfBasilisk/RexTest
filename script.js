


const populateTalent = () => {
    const talentContainer = document.querySelector('.talent-container');
    const geese = [
        { name: 'Sir Reginald Honkington', img: 'images/Geese (1).png', page: 'reginald.html' },
        { name: 'Duchess Quacksworth', img: 'images/Geese (2).png', page: 'duchess.html' },
        { name: 'Baron von Goose', img: 'images/Geese (3).png', page: 'baron.html' },
        { name: 'Lady Gertrude Feathers', img: 'images/Geese (4).png', page: 'gertrude.html' },
        { name: 'Captain Honkbeard', img: 'images/Geese (5).png', page: 'honkbeard.html' },
    ];

    geese.forEach(goose => {
        const card = document.createElement('div');
        card.classList.add('talent-card');
        card.innerHTML = `
            <a href="${goose.page}">
                <img src="${goose.img}" alt="${goose.name}">
                <h4>${goose.name}</h4>
                <p>HONKHONKHONK</p>
            </a>
        `;
        talentContainer.appendChild(card);
    });
}




populateTalent();
