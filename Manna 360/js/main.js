function show(){
    let x=document.querySelector('.hover-menu');
    x.style.display='block';
    // result();
    x.addEventListener("mouseover" , showdiv);
    x.addEventListener("mouseout" , hidediv);
    
}
function result(){
    let x=document.querySelector('.hover-menu');
    
    
    

}
function showdiv()
{
    let x=document.querySelector('.hover-menu');
    x.style.display='block';

}
function hidediv()
{
    let x=document.querySelector('.hover-menu');
    x.style.display='none';

}
function hide(){
    let x=document.querySelector('.hover-menu');
    x.style.display='none';
  
}
