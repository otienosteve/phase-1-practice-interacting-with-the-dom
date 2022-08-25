document.getElementById("comment-form").addEventListener('submit',(e)=>{
    e.preventDefault()
    cmn=document.getElementById("comment-input").value
   console.log(cmn)
   let p=document.createElement('p')
   p.textContent=cmn
   
   document.querySelector('.comments').appendChild(p)
})
let time=0
let current
let interval
timer= document.querySelector('#counter')
document.addEventListener('DOMContentLoaded',()=>{
    
 clock()
})
document.querySelector("#minus").addEventListener('click',()=>{
    time-=1
    timer.textContent=time
})
document.querySelector("#plus").addEventListener('click',()=>{
    time+=1
    timer.textContent=time
})
let likes=0

document.querySelector("#heart").addEventListener('click',()=>{
    let li=document.createElement('li')
    if(current===time){
        likes+=1
        li.innerText=`${time} has been liked ${likes} times`
    }else{
        likes=1
    }
    document.querySelector('.likes').append(li)
})
let clock=()=>{
    interval=setInterval(()=>{
        time+=1
        timer.textContent=time
        current=time
       },1000)
}
let pause=document.querySelector('#pause')
pause.addEventListener("click",()=>{
    console.log(pause.innerText)
    if(pause.innerText==='pause'){
        clearInterval(interval)
        pause.innerHTML='resume'
    }else{
       clock()
           pause.innerHTML='pause'
    }
    
})
// time-store
// if it's still a certain value increment likes
// else you take it back to 1