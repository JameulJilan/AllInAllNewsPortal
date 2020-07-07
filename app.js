const country=['in','jp','us'];

var fetchedNEWS=[];


function display(shouldDisplay,responseObj)
{
    // if(!shouldDisplay){
    //     fetchedNEWS=fetchedNEWS.concat(JSON.parse(responseObj.responseXML));
    //     console.log(fetchedNEWS);
    // }
    // console.log(responseObj.responseXML);
    console.log(responseObj);
}

function httpRequestMaker(country,portal,shouldDisplay,display){
    let url=`proxy.php?country=${country}&portal=${portal}`;
    const xhr=new XMLHttpRequest();           
    xhr.onreadystatechange= function(){
        if(this.readyState===4&& this.status===200)
        {               
             display(shouldDisplay,this.responseText);         
        }
    } ; 
    xhr.open('GET',url,true);  
    xhr.send();
}

function fetchNEWS(source){   
    if(typeof(source)==='object')
    {
        source.forEach(element => {
            // let url=`http://newsapi.org/v2/top-headlines?country=${element}&apiKey=${apiKey}`;
            httpRequestMaker(element,"",false,display);         
        });        
    }
}

fetchNEWS(country);