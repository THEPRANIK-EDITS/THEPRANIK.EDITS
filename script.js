const cursor = document.getElementById("cursor")

document.addEventListener("mousemove", e=>{
cursor.style.transform =
`translate(${e.clientX}px,${e.clientY}px)`
})



const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles=[]

for(let i=0;i<160;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speedX:(Math.random()-0.5)*0.7,
speedY:(Math.random()-0.5)*0.7

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.speedX
p.y+=p.speedY

ctx.fillStyle="rgba(0,150,255,0.7)"

ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()



const reels=document.querySelectorAll(".reel")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.play()
}else{
entry.target.pause()
}

})

},{threshold:0.6})

reels.forEach(r=>observer.observe(r))



const fullscreen=document.getElementById("fullscreen")

function openFull(el){

fullscreen.style.display="flex"

const clone=el.cloneNode(true)

clone.controls=true
clone.autoplay=true

fullscreen.innerHTML=""
fullscreen.appendChild(clone)

}

fullscreen.onclick=()=>{
fullscreen.style.display="none"
}
