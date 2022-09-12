//  function startApp() {
// };
  
// solution:
//grab the input field's value
// listen for keyup event
//compare the input fields value with the list of numbers 
//if it matches display its logo

 const number = document.getElementById ("number");
 let logo = document.getElementById ("logo");
 logo.style.display = "none";

 number.addEventListener("keyup", function(event){
   let typedNumber = event.target.value;
   let mtnTelecomPrefixes = ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903", "0906"]
   let gloTelecomPrefixes = ["0805", "0807", "0811", "0705", "0815", "0905"] 
   let etisalatTelecomPrefixes = ["0809", "0817", "0818", "0908", "0905", "0909"] 
   let airtelTelecomPrefixes = ["0802", "0808", "0812", "0902", "0901", "0708", "0701", "0904", "0907"] 

   let mtnLine = mtnTelecomPrefixes.includes(typedNumber)
   let gloLine = gloTelecomPrefixes.includes(typedNumber)
   let etisalatLine = etisalatTelecomPrefixes.includes(typedNumber)
   let airtelLine = airtelTelecomPrefixes.includes(typedNumber)

   
   if (mtnLine){
    logo.src = "./mtn logo.png"
    logo.style.display = "block"
   }else if(gloLine){
    logo.src = "./glo logo.jpg"
    logo.style.display = "block"
   }else if(etisalatLine){
    logo.src = "./9mobile.png"
    logo.style.display = "block"
   }else if (airtelLine){
    logo.src = "./airtel.png"
    logo.style.display = "block"
   }
  
 })





























  
  // // ======= DO NOT EDIT ============== //
  // export default startApp;
  // // ======= EEND DO NOT EDIT ========= //
