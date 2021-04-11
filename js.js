const input=document.querySelector('.input-value');
const input1=document.querySelector('.input-value-1');
const seacrhingTool=document.querySelector('.searching-tool');
const seacrhingTool1=document.querySelector('.searching-tool-1');
const theResults=document.querySelector('.the-results');
const secondSection=document.querySelector('.second-section');
const searchBox=document.querySelector('.search-box');
const Allfoodimages=document.querySelectorAll('.food-images');
const searchbox1=document.querySelector('.search-box-1')


Allfoodimages.forEach((image)=>{
  image.addEventListener('click',function(){
    let value=image.alt;
    DisplayingresultForoptions(value)

  })
})


seacrhingTool.addEventListener('click',DisplayingResult);
seacrhingTool1.addEventListener('click',DisplayingResult1);

function DisplayingResult1(){
  let inputValue1=input1.value;


  fetch(`https://api.edamam.com/search?q=${inputValue1}&app_id=88aceac2&app_key=
  8f48d1a6b9755d13c02580daed3ecd39&from=0&to=3&calories=591-722&health=alcohol-free
  `).then(response => response.json())
  .then(response => {

    if(response.hits.length===0)
    {}
    
    else{
    theResults.style.display='grid';
    GettingData(response)}
  })
  .catch(err => {
    console.error(err);
  });

}

input.addEventListener('keypress',function(e){
  if(e.key==='Enter'){DisplayingResult()}
})
input1.addEventListener('keypress',function(e){
  if(e.key==='Enter'){DisplayingResult1()}
})





function DisplayingresultForoptions(vl){
  
  fetch(`https://api.edamam.com/search?q=${vl}&app_id=88aceac2&app_key=
  8f48d1a6b9755d13c02580daed3ecd39&from=0&to=3&calories=591-722&health=alcohol-free
  `).then(response => response.json())
  .then(response => {

    if(response.hits.length===0)
    {}
    
    else{
    secondSection.style.display='none';
    searchbox1.style.display='flex';
    theResults.style.display='grid'
    GettingData(response)}
  })
  .catch(err => {
    console.error(err);
  });

}


function DisplayingResult(){
  let inputValue=input.value;
  
  

  fetch(`https://api.edamam.com/search?q=${inputValue}&app_id=88aceac2&app_key=
  8f48d1a6b9755d13c02580daed3ecd39&from=0&to=3&calories=591-722&health=alcohol-free
  `).then(response => response.json())
  .then(response => {

    if(response.hits.length===0)
    {}
    
    else{
    secondSection.style.display='none';
    searchbox1.style.display='flex';
    theResults.style.display='grid';
    GettingData(response)}
  })
  .catch(err => {
    console.error(err);
  });


}


function GettingData(data){
  let newArray=data.hits;
  console.log(newArray);
  let result='';
  let b='';


  newArray.map((e)=>{
   console.log(e)

   if(e.recipe.image===undefined)
   {e.recipe.image=""}
   if(e.recipe.label===undefined)
   {e.recipe.label=""}
   if(e.recipe.cuisineType===undefined)
   {e.recipe.cuisineType=""}
   if(e.recipe.calories===undefined)
   {e.recipe.calories=""}

   let c=e.recipe.ingredientLines;
   
   for(let i=0;i<c.length;i++){
     b+=
     `<p class='ing'>  
       ${c[i]}
       </p>`}

  
   result +=
   
   `<div class='searched-recipe'>   
     <div class='title-cusineType-learnMore'>
      <div class='title-image'>

        <img src="${e.recipe.image}" alt="imageofsearchedrecipe" class='searched-recipe-image'>
        <h2 class='title-of-searched-recipe'>${e.recipe.label}</h2>
      </div>
      
      <h3 class='cusine-type'>Cuisine type:${e.recipe.cuisineType}</h3>
      <h3 class='calories'>${e.recipe.calories.toFixed(1)} Calories</h3>
      <a href=${e.recipe.url} class='learn-more'>Learn more</a>

     </div>
      


       <div class='detail-of-searched-recipe'>
        
         <div class='ingredients'>Ingredients:${b}</div>
      
       </div>


    </div>`;

   


})
theResults.innerHTML=result;

}



// animating burger menu
const MenuBurger=document.querySelector('.burger-btn-1')
const Menu=document.querySelector('.menu-burger')


MenuBurger.addEventListener('click',function(){
 MenuBurger.classList.toggle('open')
 Menu.classList.toggle('changing')
})

