function arrow(){
    setTimeout(()=>console.log(this),1000) //arrow {}
}
const p1 = new arrow()

function not_arrow(){
    setTimeout(function(){console.log(this)},1000) 
    //node.js에서는 timeout||브라우저에서는 window
}
const p2 = new not_arrow()