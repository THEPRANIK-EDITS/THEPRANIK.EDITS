/* cursor glow */

const cursor=document.getElementById("cursor")

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px"
cursor.style.top=e.clientY+"px"
})

/* hover play reels */

document.querySelectorAll(".reel").forEach(video=>{

video.addEventListener("mouseenter",()=>{
video.play()
})

video.addEventListener("mouseleave",()=>{
video.pause()
})

})

/* fullscreen preview */

const fullscreen=document.getElementById("fullscreen")

document.querySelectorAll(".reel, .thumbGrid img").forEach(el=>{

el.addEventListener("click",()=>{

fullscreen.innerHTML=""

if(el.tagName==="VIDEO"){

const v=document.createElement("video")

v.src=el.querySelector("source").src
v.controls=true
v.autoplay=true
v.style.maxWidth="90%"

fullscreen.appendChild(v)

}else{

const img=document.createElement("img")
img.src=el.src
img.style.maxWidth="90%"

fullscreen.appendChild(img)

}

fullscreen.style.display="flex"

})

})

fullscreen.addEventListener("click",()=>{
fullscreen.style.display="none"
})

/* particles */

const canvas=document.getElementById("particles")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
speed:Math.random()*1
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
p.y+=p.speed
if(p.y>canvas.height)p.y=0
ctx.fillStyle="#00aaff"
ctx.fillRect(p.x,p.y,2,2)
})

requestAnimationFrame(animate)

}

animate()
