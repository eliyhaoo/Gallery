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
          <a id="${project.id}"class="portfolio-link" data-toggle="modal" onclick="onClickedProject(this.id)" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
            <span class="badge badge-info">${project.labels[0]}</span> <span class="badge badge-info">${project.labels[1]}</span> <span class="badge badge-info">${project.labels[2]}</span>  
          </div>
        </div>
   ` 
})
$('.projects-container').html(projsSTR)
}

function onClickedProject(projId){
  var projects = getGprjoects()
  var project = projects.find(proj =>  proj.id === projId)
  updateModal(project)

}

function updateModal(project){
  $('.modal-body h2').text(project.name)
  $('.modal-body p.item-intro').text(project.desc)
  $('.modal-body img').attr('src',`img/portfolio/${project.id}.png`)
  $('.modal-body .date').text(_getDate(project.publishedAt))
  $('.modal-body .check-out').attr('href',project.url)

  
}

function onSubmitForm(){
  var email = $('.contact input[id=defaultContactFormEmail]').val()
  var subject = $('.contact input[id=defaultContactFormName]').val()
  var message = $('.contact textarea[id=exampleFormControlTextarea2]').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=eliyhaoo@gmail.com&su=${subject}&body=${email+'  '+message}`)
  email.text('')
  subject.text('')
  message.text('')

}



function _getDate(date){
  return `${date.getDate()}-${date.getMonth()}-2022`// .getYear doesn't work - should I use a diff method?
}