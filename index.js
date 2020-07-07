const apiKey= '1de7475b68d64bfbbac7b9ced5a61047';
const country=['in','jp','us'];
var fetchedNEWS=[];

// function httpRequestMaker(url,display){
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET',url,false);    
//     xhr.send();   
//     let responseObj=null;
//     // xhr.onload= function(){
//     //     if(this.status===200)
//     //     {
//     //          responseObj=JSON.parse(this.responseText);   
//     //          return responseObj;         
//     //     }
//     // }    
//     // xhr.send(); 
    
//     for(; xhr.readyState !== 4;)

//     if (xhr.status === 200) {

//         console.log('SUCCESS', xhr.responseText);

//     } else console.warn('request_error');

//     return JSON.parse(xhr.responseText);  
// }


// function httpRequestMaker(url,callback){
//     var xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = (e) => {
//       if (xhr.readyState !== 4) {
//         return;
//       }
  
//       if (xhr.status === 200) {
//         // console.log('SUCCESS', xhr.responseText);
//         callback(JSON.parse(xhr.responseText));
//       } else {
//         console.warn('request_error');
//       }
//     };
  
//     xhr.open('GET', url);
//     xhr.send();
//   }





function display(isDisplay,responseObj)
{
    if(!isDisplay){
        fetchedNEWS=fetchedNEWS.concat(responseObj);
        console.log(fetchedNEWS);
    }
}


function httpRequestMaker(url,isDisplay,display){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);           
    xhr.onload= function(){
        if(this.status===200)
        {               
             display(isDisplay,JSON.parse(this.responseText));         
        }
    }    
    xhr.send();
}

function fetchNEWS(source){   
    if(typeof(source)=='object')
    {
        source.forEach(element => {
            let url=`https://crossorigin.me/https://newsapi.org/v2/top-headlines?country=${element}&apiKey=${apiKey}`;
            httpRequestMaker(url,false,display);         
        });        
    }
}

fetchNEWS(country);