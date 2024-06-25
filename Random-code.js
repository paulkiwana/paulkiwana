const duckDuckGoose = () => {
  const input = prompt('enter number ')
  const number = parseInt(input)
  for(let i=1; i<number; i++){
    const randomNumber = Math.floor(Math.random()*50)
if(i % randomNumber === 0){
console.log(i + " Goose🦢 " + "Factor: " +randomNumber )
  
}else{
  console.log(i + " Duck🦆 " + "!Factor: " +randomNumber )
}
    
}
}
duckDuckGoose()


  