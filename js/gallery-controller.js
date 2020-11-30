'use strict'

window.onload = onInit();

function onInit() {
    renderProjects();
    $('.portfolio-link').click(function () { renderModal($(this).data('proj-id')); });
}
function renderProjects() {
    var projects = getProjects();
    var strHtmls = projects.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-proj-id="${proj.id}" data-toggle="modal" href="#portfolioModal">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content">
                                    <i class="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.png" alt="">
                        </a>
                        <div class="portfolio-caption">
                            <h4>${proj.name}</h4>
                            <p class="text-muted">${proj.title}</p>
                        </div>
                    </div>`

    });
    $('.my-projects').html(strHtmls.join(''));
}

function renderModal(projId) {
    var proj = getProjectById(projId);
    var $elModal = $('.modal-body');
    console.log('elModal$$$', $elModal);
    var strHtml = `<h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}-full.png" alt="">
                    <p>${getLongDesc(proj.id)}</p>
                    <ul class="list-inline">
                        <li>Date: November 2020</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                    </div>`;
    $elModal.html(strHtml);
}

/*
    <div class="modal-body">
    <!-- Project Details Go Here -->
    <h2>Project Name</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
        dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
        <li>Date: January 2017</li>
        <li>Client: Threads</li>
        <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    </div>
            </div>
*/