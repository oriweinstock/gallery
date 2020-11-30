'use strict'

console.log('Starting up projects service');
window.onload = createProjects();

var gProjects;

// CREATE
function createProjects() {

    gProjects = [
        {
            id: 1,
            name: 'MineSweeper',
            title: 'Sweep Mines & More',
            desc: 'lorem',
            url: 'www.google.com',
            imgUrl: 'img/portfolio/mine sweeper.png',
            publishedAt: Date.now(),
            labels: ['Matrixes', 'User Input']
        },
        {
            id: 2,
            name: 'Book Shop',
            title: 'La Nostra Libreria',
            desc: 'lorem',
            url: 'www.amazon.co.it',
            imgUrl: 'img/portfolio/la nostra.png',
            publishedAt: Date.now(),
            labels: ['Data', 'MVC']
        },
        {
            id: 3,
            name: 'Pac-Man',
            title: 'Eat Those Cherries!',
            desc: 'lorem',
            url: 'www.arcades.com',
            imgUrl: 'img/portfolio/pacman.png',
            publishedAt: Date.now(),
            labels: ['Games', 'Design']
        },
        {
            id: 4,
            name: 'Ball Game',
            title: 'Collect Those Balls!',
            desc: 'lorem',
            url: 'www.nba.com',
            imgUrl: 'img/portfolio/ball game.png',
            publishedAt: Date.now(),
            labels: ['Games', 'User Input']
        },
        {
            id: 5,
            name: 'Touch Nums',
            title: 'Can You Count?',
            desc: 'lorem',
            url: 'www.math.co.il',
            imgUrl: 'img/portfolio/touch nums.png',
            publishedAt: Date.now(),
            labels: ['Games', 'Time']
        },
        {
            id: 6,
            name: 'To Do',
            title: 'Task: Click this!',
            desc: 'lorem',
            url: 'www.anydo.com',
            imgUrl: 'img/portfolio/todo.png',
            publishedAt: Date.now(),
            labels: ['Games', 'Design']
        }
    ]
}

// READ ..................................................................
function getProjects() {
    return gProjects;
}

function getProjectById(projId) {
    var proj = gProjects.find(function (proj) {
        return proj.id === projId;
    });
    return proj;
}