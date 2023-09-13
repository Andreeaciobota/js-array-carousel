
//inseriamo le immagini dello slider nella pagina in modo dinamico
    //creiamo un array con il nome delle immagini come elementi/stringhe
    const sliderImages = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
    const itemsContainer = document.querySelector(".items-container")
    const preview = document.querySelector(".preview")


    //immagini-elementi in loop e un template literal
    for(let i = 0; i< sliderImages.length; i++){
        const picture = sliderImages[i];
    //cricuito miniature
        const thumbPic = sliderImages[i];

        const box =`<div class="item">
                        <img src="${picture}" alt="landscape">
                    </div>`;

        const thumbBox =`<img class=thumb src="${thumbPic}" alt="landscape">`;

        itemsContainer.innerHTML += box;
        preview.innerHTML += thumbBox;
    }
    const items = document.getElementsByClassName("item");
   
    const thumbs = document.getElementsByClassName("thumb");

    
    let position = 0;
    
    items[position].classList.add("active");
   
    thumbs[position].classList.add("thumb-active");

    
//click frecce 
    const prevArrw = document.querySelector(".prev")
    const nextArrw = document.querySelector(".next")

    nextArrw.addEventListener("click", function(){
      
        if(position < items.length -1){ 
            items[position].classList.remove("active"); 
            thumbs[position].classList.remove("thumb-active"); 

  
            position++;
  
            items[position].classList.add("active"); 
            thumbs[position].classList.add("thumb-active");

        } 
        else { 
            items[position].classList.remove("active");
            
            thumbs[position].classList.remove("thumb-active")

            position = 0;

            items[position].classList.add("active");
            
            thumbs[position].classList.add("thumb-active")
        }
    })

    //Click indietro PREV
    prevArrw.addEventListener("click", function(){
        if(position > 0){ 
            items[position].classList.remove("active");
            thumbs[position].classList.remove("thumb-active");
            position--;
            
            items[position].classList.add("active");
            thumbs[position].classList.add("thumb-active");

        } 
            else {
                items[position].classList.remove("active");
                thumbs[position].classList.remove("thumb-active")
                position = items.length-1;
                
                items[position].classList.add("active");
                thumbs[position].classList.add("thumb-active")
            }
    })

for(let i=0; i < thumbs.length; i++){
    const clickedThumb = thumbs[i];

    clickedThumb.addEventListener("click", function(){
        items[position].classList.remove("active");
        thumbs[position].classList.remove("thumb-active");   
        position = i;

        items[position].classList.add("active");
        thumbs[position].classList.add("thumb-active")
    })
}

