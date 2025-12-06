function fn(){
  console.log(5+5)
}

fn()

function fn_1(a,b){
  a = 1 
  b = 5
  console.log(a+b)
}

fn_1()

function fn_2(a,b,c){
  console.log(a+b-c)
}

fn_2(5,3,1)

//////////////////////////
function sum(a, b) {
  return a + b
}

let x = sum(5, 3)
console.log(x)
//////////////////////////

function fn_3(a, b, c, d) {
  if (a > 2) {
    return a - c
  } else {
    return "a is too small"
  }
}

console.log(fn_3(1, 2, 3, 4)) 
