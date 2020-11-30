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

function getLongDesc(projId) {
    var projLongDescs = {
        1: 'MineSweeper is a well known game. I remember playing this on my 386 computer running Windows 3.11 for WorkGroups. I guess everyone in Israel was a part of a workgroup back then :-). In my version I took the liberty to add some new features, such as Multiple lives (bombs could be less harmfull), not one, but TWO type of hints (what is around a cell, and where is it safe to click). If that is not enough - why take a chance to be exploded? Why not play the God of Mines? In my verseion, everyone can decide where to place the mines and put their creativity to the test. Now Let\'s Go & Sweep Some Mines!',
        2: 'La Nostra Libreria is a control panel dedicated to help book-stores owners managing their inventory and online presence. In this project I built a custom table to give easy access to all important features a book-store owner would need. As of now I have a LOI from Amazon and perhpas by the time you read this - my system is already being used by the world\'s #1 book retailer.',
        3: `Who can forget this mega-arcade hit!? If you were alive in the 80's you know what I'm talking about. This PacMan game is based on HTML table(!), believe it or not, and can be played like the original game. Well... almost :-). By the way - Though not as good looking as the original one, it is quite as hard as the arcade one. Enjoy!`,
        4: 'TEST4',
        5: 'TEST 5',
        6: 'EXAM'
    };
    return projLongDescs[projId];
}