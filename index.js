
const $=document.querySelector.bind(document)




 function app(){
    var lacXiNgauBtn=$(".xingau")
     lacXiNgauBtn.onclick=()=>{
     
        $(".pending").textContent="Đang lắc...."
      
       setTimeout(()=>{
        $(".pending").textContent=""
       },1000)
       
       
       setTimeout(()=>{
        $(".pending").textContent="Xong"
        var xiNgau1=  Math.floor(Math.random()*6)
        var xiNgau2= Math.floor(Math.random()*6)
        var xiNgau3=  Math.floor(Math.random()*6)
        
        var xn1=$(".xingau1")
        var xn2=$(".xingau2")
        var xn3=$(".xingau3")

  
    switch(xiNgau1){
        case 0:
            xn1.textContent="Nai"
            break;
         case 1:
             xn1.textContent="Bầu"
             break;
         case 2:
             xn1.textContent="Gà"
             break;
         case 3:
             xn1.textContent="Cá"
             break;
         case 4:
             xn1.textContent="Cua"
             break;
         case 5:
             xn1.textContent="Tôm"
             break;
         default:
             console.log("wrong value")
    }
    switch(xiNgau2){
     case 0:
         xn2.textContent="Nai"
         break;
      case 1:
          xn2.textContent="Bầu"
          break;
      case 2:
          xn2.textContent="Gà"
          break;
      case 3:
          xn2.textContent="Cá"
          break;
      case 4:
          xn2.textContent="Cua"
          break;
      case 5:
          xn2.textContent="Tôm"
          break;
      default:
          console.log("wrong value")
 }
 switch(xiNgau3){
     case 0:
         xn3.textContent="Nai"
         break;
      case 1:
          xn3.textContent="Bầu"
          break;
      case 2:
          xn3.textContent="Gà"
          break;
      case 3:
          xn3.textContent="Cá"
          break;
      case 4:
          xn3.textContent="Cua"
          break;
      case 5:
          xn3.textContent="Tôm"
          break;
      default:
          console.log("wrong value")
 }
  
xn1.textContent=="Nai"||xn2.textContent=="Nai"||xn3.textContent=="Nai"?$(".nai--img").style.border="30px solid green":$(".nai--img").style.border="0px solid black"
xn1.textContent=="Bầu"||xn2.textContent=="Bầu"||xn3.textContent=="Bầu"?$(".bau--img").style.border="30px solid green":$(".bau--img").style.border="0px solid black"
xn1.textContent=="Gà"||xn2.textContent=="Gà"||xn3.textContent=="Gà"?$(".ga--img").style.border="30px solid green":$(".ga--img").style.border="0px solid black"
xn1.textContent=="Cá"||xn2.textContent=="Cá"||xn3.textContent=="Cá"?$(".ca--img").style.border="30px solid green":$(".ca--img").style.border="0px solid black"
xn1.textContent=="Cua"||xn2.textContent=="Cua"||xn3.textContent=="Cua"?$(".cua--img").style.border="30px solid green":$(".cua--img").style.border="0px solid black"
xn1.textContent=="Tôm"||xn2.textContent=="Tôm"||xn3.textContent=="Tôm"?$(".tom--img").style.border="30px solid green":$(".tom--img").style.border="0px solid black"










       },2000)
    }
}
app()

//$(".nai--img").style.border="30px solid red"