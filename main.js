const key= "0be69f1cd66d4421a80404bcc81230f3";
const Api=`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${key}`;
let articles=[]
let data=document.getElementById("data")

async function DispalyNewsdata(){
    let response =await fetch(Api);
    let data=await response.json();
     articles=data.articles
    Display()

}
DispalyNewsdata()

function Display(){
    let result=``;
    let img
    let description
    
    articles.forEach(function(element){
        if(element.description!=null){
            description=element.description;
    
        }
        else{
            description="أخبار اليوم"
        }
        if(element.urlToImage!=null){
            img=element.urlToImage;
    
        }
        else{
            img="download.png"
        }
    result+=`<div class="col-md-4">
    <div class="card py-2 my-1 mx-1 ">
    <img src="${img}">
    <h2>${element.title}</h2>
    <p>${description}</p>
    <a href="${element.url}">أقرأ المزيد</a>
</div>
</div>`
        
    });
    data.innerHTML=result

}
