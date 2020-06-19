function node() {
   let div= document.getElementById('main')
   var b=document.createElement('h2')
   b.className='blue-color'
   b.innerText='this is ad through java script'
   div.appendChild(b)
}
function json(params) {
    var a=localStorage.getItem('item')
    a=JSON.parse(a)
    a.push(params)
    //a.append(params)
    console.log(a)
    localStorage.setItem('item',JSON.stringify(a))

}