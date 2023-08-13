import { useEffect, useState } from "react";
import Biilingpage from "../Components/pages/biilingpage";


type Body={
    Name:string,
    Image:string,
    Bill_No:number,
    Gender:string,
    Recept_no:string,
    Date:string,
    Phone:number
}

export const Apicall=()=>{
    const [tasks,SetTaks]=useState<Body[]>([]);

const makeAPICall = async () => {
  try {
    const response = await fetch('http://localhost:8080/posts', {mode:'cors'});
    const data = await response.json();
   //console.log({ data })
   SetTaks(data)
  }
  catch (e) {
    console.log(e)
  }
}
useEffect(() => {
  makeAPICall();
}, [])

return (
    <div>
{tasks?.map((el)=>{
    return (
        <>
      
        </>
    )
})}
        
    </div>
)
  


}
