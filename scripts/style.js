const FilterButton= document.getElementById('FilterButton');
const CloseButton= document.getElementById('CloseButton');
const Filter= document.getElementById('Filter')
FilterButton.addEventListener('click',() => {
   
    Filter.classList.add('Open') ;
});
CloseButton.addEventListener('click',() => {
   
    Filter.classList.remove('Open') ;
});






 