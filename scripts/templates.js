const outputObjectsInArray = document.querySelector('.outputObjectsInArray')
const outputObjectsInArray2 = document.querySelector('.outputObjectsInArray2')
const outputObjectInArray = document.querySelector('.outputObjectInArray')

export const charTmplGrid = (char) => 
outputObjectsInArray.innerHTML =
`
<div class= "characterGrid" </div>
<a href ="character.html?id=${char.id}">
<img class="gridImg" src="${char.img}">
</a>
<p class ="gridName"> ${char.name}</p>
    
    
    `
  





export const charTmplList = (char) => 
outputObjectsInArray2.innerHTML =
        `
        <div class ="characterList"  </div>
        <a href ="character.html?id=${char.id}">
<img class="listImg" src="${char.img}">
</a>
        <p class ="listName"> ${char.name}</p>
        
        `

export const singlePostTmpl = (char) => 
        
outputObjectInArray.innerHTML =
        `
       
        <h1 class ="p3"> ${char.name}</h1>
        <img class ="charImg" src="${char.img}">
        <p class="p4"> From: ${char.media}</p>
        <p class="p4"> Description: <br> <br> ${char.description}</p>
        `
        ;