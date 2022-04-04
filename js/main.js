console.log('Starting up');

function init() {
    renderProjects()
}

function renderPrjoects() {


}

var gProjects = [
    {
        id: "touchNums",
        name: "touchNums",
        title: "Touch The Numbers",
        desc: "In this project you touch the numbers", url: "projs/sokoban",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    }
]


var newDate = new Date (2022,02,17).getTime()
// var newDatet = newDate.getTime()

console.log(new Date(newDate));
// console.log('read',newDatet);