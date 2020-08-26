let M = document.getElementById('tot')
let tot =M.innerHTML
function Increment(inp1,p,div1){
    let inp=document.getElementById(inp1)
    let val=inp.value
    val++
    inp.value=val
    let subtotal=document.getElementById(div1)
    subtotal.innerHTML=`${val*p}`
    
    
}
function totalPrice(a,b,c,p1,p2,p3){
    let x=document.getElementById(a).value
    let y=document.getElementById(b).value
    let z=document.getElementById(c).value
    M.innerHTML=x*p1+y*p2+z*p3
}
// function removetotal (u,i,p2,p3) {
    // let x=document.getElementById(u).value
    // let y=document.getElementById(i).value
    // M.innerHTML=x*p2+y*p3
// }
function dencrement(id,p,d){
    let inp=document.getElementById(id)
    let val=inp.value
    if (val >1) {
        val--
        inp.value=val
        let mintotal = document.getElementById(d)
    mintotal.innerHTML=val*p
}
else {
    alert('minimum one product')
}
    }
    
// document.getElementById('click',itm).removeChild()
function remitem(x , id ,h) {
    let val =document.getElementById(x)
    console.log(val)
    
    let y =document.getElementById(id).textContent
    console.log(y)
    let z =document.getElementById(h).textContent

    console.log(z)
    M.innerHTML=z-y

    val.parentNode.removeChild(val)
}
    
function changecolor (y){

    let z = document.getElementById(y)
    if (z.style.color =='black') {
        z.style.color = 'red'    
    }
    else {
        z.style.color = 'black'
    }
}


