import { useEffect } from "react";

export default function app() {

  async function test() {
    const response = await fetch('http://localhost:3000/');
    const data = response.json();
    console.log(data);
  }

  useEffect(() => { 
    test();
  }, []);


  return (
    <div>
      Hello World!
    </div>
  )
}