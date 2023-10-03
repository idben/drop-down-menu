import { useEffect, useState } from "react";

const Right = ({optionNum})=>{
  const [apiData, setApiData] = useState(null)
  useEffect(()=>{
    let API = "";
    switch(optionNum){
      case 1:
        API = "http://localhost:3000/api/hello";
        break;
      case 2:
        API = "http://localhost:3000/api/hello2";
        break;
      case 3:
        API = "http://localhost:3000/api/hello3";
        break;
      case 4:
        API = "http://localhost:3000/api/hello4";
        break;
      default:
        API = "";
    }
    console.log(`API ${API}`);
    
    (async ()=>{
      if(API !== ""){
        await fetch(API).then(response=>{
          return response.json();
        }).then(result=>{
          setApiData(result)
        }).catch(error=>{
          console.log(error)
        });
      }
    })()
  },[optionNum])
  return(
    <div>
      <div className="d-flex align-items-center">
        <div className="me-3">Right</div>
        <div className="display-1">{apiData && apiData.name || ""}</div>
      </div>
    </div>)
}

export default Right;