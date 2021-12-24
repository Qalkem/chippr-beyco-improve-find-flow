 const FilterButton= document.getElementById('FilterButton');
const CloseButton= document.getElementById('CloseButton');
const Filter= document.getElementById('Filter')
FilterButton.addEventListener('click',() => {
   
    Filter.classList.add('Open') ;
});
CloseButton.addEventListener('click',() => {
   
    Filter.classList.remove('Open') ;
});




'use strict'

const boardList = document.querySelectorAll('main article')

document.querySelector('fieldset.filter').addEventListener('click', filterHandler)
 
 
function filterHandler(event) {
  
  if (isButton(event.target)) {
 
    document.querySelector('fieldset.filter .active').classList.remove('active')

    filterByType(event.target.id)

    event.target.classList.toggle('active')
  }
}
 
function filterByType(type) {

  boardList.forEach((board) => {
   
    board.classList.remove('hidden')
   
    if (board.querySelector('.type').innerHTML.toLowerCase() !== type && type !== 'all') {
      board.classList.add('hidden')
    }
  })
}


 
function isButton(element) {
  return element.nodeName === 'BUTTON'
}
