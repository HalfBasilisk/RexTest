


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

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
