const form= document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();


    const hight=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const msg=document.querySelector("#msg");

    if(hight===""|| hight<=0||isNaN(hight)){
        msg.innerHTML="wrong height!";
    }
    else if(weight===""|| weight<=0||isNaN(weight)){
        msg.innerHTML="wrong weight!";
    }
    else{
        const calc=(weight/((hight*hight)/10000)).toFixed(2);
        
        var msg2="";
        
        if(calc<18.5){
            msg2="Underweight"
        }else if(calc>=18.5&&calc<=24.9){
            msg2="Normal"

        }else if(calc>=25.0&&calc<=29.9){
            msg2="Overweight"

        }else if(calc<=30){
            msg2="Very overweight"

        }
        msg.innerHTML=`bmi=${calc}<br>And you are ${msg2}`;
    }
    
    



})