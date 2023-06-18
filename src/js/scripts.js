// This file is intentionally blank
// Use this file to add JavaScript to your project
const addtoCart= document.getElementById("addtoCart");
const addtoCart1= document.getElementById("addtoCart1");
const addtoCart2= document.getElementById("addtoCart2");
const addtoCart3= document.getElementById("addtoCart3");
const addtoCart4= document.getElementById("addtoCart4");
const addtoCart5= document.getElementById("addtoCart5");
var count=0;
console.log("addtoCart : "+addtoCart.innerText);
addtoCart.onclick=function(){
    console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart.innerText="Remove from Cart";
    }
    else if(addtoCart.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart.innerText="Add to cart";
    }
}
addtoCart1.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart1.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart1.innerText="Remove from Cart";
    }
    else if(addtoCart1.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart1.innerText="Add to cart";
    }
}
addtoCart2.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart2.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart2.innerText="Remove from Cart";
    }
    else if(addtoCart2.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart2.innerText="Add to cart";
    }
}
addtoCart3.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart3.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart3.innerText="Remove from Cart";
    }
    else if(addtoCart3.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart3.innerText="Add to cart";
    }
}
addtoCart1.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart1.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart1.innerText="Remove from Cart";
    }
    else if(addtoCart1.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart1.innerText="Add to cart";
    }
}
addtoCart4.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart4.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart4.innerText="Remove from Cart";
    }
    else if(addtoCart4.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart4.innerText="Add to cart";
    }
}
addtoCart5.onclick=function(){
    //console.log(addtoCart.innerText==="Add to cart");
    if(addtoCart1.innerText==="Add to cart"){
        console.log("Cart count increased");
        count++;
        console.log("Cart count: "+count);
        totalCart.innerHTML=count;
        addtoCart5.innerText="Remove from Cart";
    }
    else if(addtoCart5.innerText==="Remove from Cart"){
        console.log("Cart count reduced");
        count--;
        totalCart.innerHTML=count;
        addtoCart5.innerText="Add to cart";
    }
}