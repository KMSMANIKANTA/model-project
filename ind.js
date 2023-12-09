var d=document.querySelector('.btn')
var data=document.querySelector('.overlay')
d.addEventListener('click',function(){
    data.classList.add('active')
})
var cross=document.querySelector('.cross')
cross.addEventListener('click',function(){
    data.classList.remove('active')
})