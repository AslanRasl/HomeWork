let elStrong = document.querySelectorAll('.strong')
let elinp = document.querySelector('.inp')
function fn(value) {
    let sim = value.match(/[,./!?({})"']/gi)
    let lett = value.match(/[a-z]/gi)
    let dig = value.match(/[0-9]/gi)
    if (sim || dig || lett) {
        elStrong[0].style.backgroundColor = 'red'
        elStrong[1].style.backgroundColor = 'grey'
        elStrong[2].style.backgroundColor = 'grey'
        elStrong[3].style.backgroundColor = 'grey'
    }
    if (sim && lett|| sim && dig || dig && lett) {
        elStrong[0].style.backgroundColor = 'yellow'
        elStrong[1].style.backgroundColor = 'yellow'
        elStrong[2].style.backgroundColor = 'grey'
        elStrong[3].style.backgroundColor = 'grey'
    }
    if (sim && lett && dig && elinp.value.length >= 8) {
        elStrong[0].style.backgroundColor = 'green'
        elStrong[1].style.backgroundColor = 'green'
        elStrong[2].style.backgroundColor = 'green'
        elStrong[3].style.backgroundColor = 'green'
    }
}