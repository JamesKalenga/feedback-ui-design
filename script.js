const boxes = document.querySelectorAll('.box');
const btn = document.querySelector('.button');
const container = document.querySelector('.container')
const container2 = document.querySelector('.container2')


btn.addEventListener('click', sendFeedBack)

boxes.forEach((box) =>{
    box.addEventListener('click', sortClass)
})

function sortClass(e){
   removeClasses(boxes);
 
    if (e.target.classList.value.includes('box')) {
        e.target.classList.add('active')
    }
    else if(e.target.parentNode.classList.value.includes('box')){
        e.target.parentNode.classList.add('active')
    }
}

function removeClasses(boxes)
{
    boxes.forEach((box)=> box.classList.remove('active'))

}

function sendFeedBack()
{
    boxes.forEach((box)=> {
        
        
       if( box.classList.value.includes('active')){
        container.remove()
        container2.classList.remove('hide');


        container2.innerHTML = `
        <div class="first-row">
            <i class="fa-solid fa-heart"></i>
            <span>Thank You!</span>
        </div>

        <p>Feedback: <span>Satisfied</span></p>

        <span>We'll use your feedback to improve our</span>
        <span>customer support</span>`
  
   
    }
    
    
    
    })
}