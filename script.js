
 
async function book(){
  try{



    
      
    var data=await fetch(" https://www.anapioficeandfire.com/api/books");
     var resp= await data.json();
     console.log(resp) 
 
     var h=[]
      for(i=0;i<3;i++){
         for(j=0;j<5;j++){
      
         var e= resp[i].characters[j]
         console.log(e)
        
       var data2=await fetch(e)
      // console.log(data2)
        var ret= await data2.json()
        
        h.push(ret.name)
       
      }
      




   // document.body.style.backgroundColor="white"


    var d1=document.createElement('div');
     
    d1.classList.add("container-md-12")
    var img1=document.createElement('img')
    var h1=document.createElement("h1")
    var ul=document.createElement("ul")
   

    
    var l=document.createElement("li")
   
      
    
    var l1=document.createElement("li")
   
    var l2=document.createElement("li")
   
   
    
      
     l.innerText="HOME"
   
   
     l.style.color="white"
     l.style.listStyle="none"

    
       

     l1.innerText="ABOUT"
     l1.style.color="white"
     l1.style.listStyle="none"
     l1.style.marginLeft="10px"

   
     l2.innerText="STORE"
     l2.style.color="white"
      l2.style.listStyle="none"
      l2.style.marginLeft="10px"

       ul.style.marginTop="-10px"   
      ul.appendChild(l)
      ul.appendChild(l1)
      ul.appendChild(l2)

       ul.style.display="inline-flex"
       
      h1.style.color="white"
      h1.innerText="WEL COME TO BOOK STORE"
      h1.style.marginLeft="30%"
      img1.setAttribute("src","https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-taobao-bookstore-creative-poster-banner-background-image_163775.jpg")
       img1.style.width="600px"
       img1.style.height="200px"
       img1.style.marginLeft="350px"

       d1.appendChild(ul) 
       d1.style.width="95%"
       d1.style.height="300px"
       d1.style.marginTop="50px";
       d1.style.marginLeft="20px";
       d1.style.marginRight="20px"
       d1.style.backgroundColor= "#4126FF"   //"#1E90FF "
       d1.appendChild(img1)
       
       d1.appendChild(h1);


       document.body.appendChild(d1)




 


      

    for(var i=0;i<5;i++){

        for(var j=0;j<10;j++){


            



    var d=document.createElement('div');


       
       
       
       var img2=document.createElement('img')
       
       img2.setAttribute("src","https://icon-library.com/images/book-vector-icon/book-vector-icon-25.jpg")
      img2.style.width="100px"
       img2.style.marginLeft="350px"
       img2.style.marginTop="40px"
       img2.style.height="50px"
       
       var bookname=document.createElement("h6");
       var publications=document.createElement("h6");
       var isbn=document.createElement("h6");
       var Pages=document.createElement("h6");
       var characters=document.createElement("p") 
       var rele=document.createElement("p")  



     
    bookname.innerText= resp[j].name

     isbn.innerText="ISBN"+":"+resp[j].isbn 

     Pages.innerText= "Pages"+":"+resp[j].numberOfPages
    publications.innerText="Publisher"+":"+resp[j].publisher   
    characters.innerText= "Characters"+":"+h[0]+","+h[1]+","+h[2]+","+h[3]+","+h[4]
    rele.innerText="Date" +":"+resp[j].released
    
    
     
       d.classList.add('row')
       d.style.width="40%"
       d.style.height="300px"
       d.style.marginTop="100px";
       d.style.marginLeft="20px";
       d.style.marginLeft="50px"
       d.style.marginRight="20px"
       d.style.marginBottom="30px"
       
       d.style.backgroundColor=  "#1E90FF"//"#CBDBD6 "
        
       
       d.style.display="inline-flex"
      // d.style.display=""
       bookname.style.marginTop="5px"
       bookname.style.marginLeft="20px"
    
      // isbn.style.marginTop="50px"
      // isbn.style.marginLeft="-100px"


       
       
       d.appendChild(img2)
       d.appendChild(bookname);
       d.appendChild(isbn)
       d.appendChild(Pages)
       d.appendChild(publications)
       d.appendChild(characters)
       d.appendChild(rele)

          
       document.body.appendChild(d)
    }
    }
    
     
   }
}
   catch(err){
       console.log(err);
   } 

}

book();