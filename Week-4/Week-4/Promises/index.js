const button =document.getElementById('button');
const text =document.getElementById('text');

const getNumber =() =>
 new Promise((res,rej) =>
{
  const randomNumber=Math.floor(Math.random() * 100);
  setTimeout(()=>{
    if(randomNumber % 5 ===0){
        rej(`Rejected with number:${ randomNumber}`);
    }
    res(`Rejected with number:${ randomNumber}`);
  })
});

const clickHandler = ()=> {
   display("Loading...");
   const numberPromise = getNumber();
   numberPromise.then(display).catch(display);
};

const display =(content) => {
    text.innerText=content;
}
button.addEventListener("click",clickHandler);