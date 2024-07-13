let counter = 1
const bored = (num) => {
if(num % 5 === 0){
  console.log(counter++ +" divisible by 5 "+num)
} else{
  console.log(counter-- +" non-divisble "+num)
}

  }

bored(1)
bored(5)
bored(53)
bored(67)
bored(85)
bored(56)