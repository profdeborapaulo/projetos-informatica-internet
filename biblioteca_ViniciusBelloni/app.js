let id = 1;
let activeImage = document.getElementById(`image${id}`); 
let activeDot= document.getElementById(`dot${id}`);

function changeTheClass(){
    activeImage.classList.remove('active');
    activeDot.classList.remove('active');
    id++;

    if(id > 4){
        id = 1;
    }

    activeImage = document.getElementById(`image${id}`);
    activeDot= document.getElementById(`dot${id}`);

    activeImage.classList.add('active'); 
    activeDot.classList.add('active');   
}

setInterval(changeTheClass, 4000);