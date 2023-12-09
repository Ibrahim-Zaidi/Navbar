
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', function() {

    if ( links.classList.contains('show-links')) {
        
        links.classList.remove('show-links');

    } else {

        links.classList.add('show-links');

    } 
    
    console.log(links.classList);
   
}) 

// 2nd method 

toggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
})





