'use strict'
$(onInit)
function onInit() {
    renderProjects()
}

function renderProjects() {
   var projects =  getGprjoects()
   console.log('prjoects',projects);
  const projsSTR= projects.map(project => {
     return `
   <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${project.url}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.title}</h4>
            <p class="text-muted">${project.labels[0]}</p>
          </div>
        </div>
   ` 
})
$('.projects-container').html(projsSTR)
}



// var newDate = new Date (2022,02,17).getTime()
// // var newDatet = newDate.getTime()

// console.log(new Date(newDate));
// // console.log('read',newDatet);