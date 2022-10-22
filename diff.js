let secoundDifferntialConstant = document.querySelector(
  "#secound-differential"
);

let firstDifferentialConstant = document.querySelector("#first-differntial");

let constant = document.querySelector("#constant");

let result = document.querySelector("#result");

const solveQuadraticEquation = () => {
  let a = secoundDifferntialConstant.value;
  let b = firstDifferentialConstant.value;
  let c = constant.value;

  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  if (b > 0 && c > 0) {
    result.innerHTML = `The general equation is of 
        ${a}m<sup>2</sup>+ ${b}m + ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b > 0 && c < 0) {
    result.innerHTML = `The general equation is of
        ${a}m<sup>2</sup> + ${b}m ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b < 0 && c > 0) {
    result.innerHTML = `The general equation is of 
        ${a}m<sup>2</sup>  ${b}m + ${c}. This is done by letting y= e<sup>2m</sup>`;
  } else if (b < 0 && c < 0) {
    result.innerHTML = `The general form is of 
        ${a}m<sup>2</sup> ${b}m ${c}. This is done by letting y= e<sup>2m</sup>`;
  }

  let quadraticSolutions = document.createElement("div");

  let rootFirst;
  let rootSecound;
  const determinant = (b * b) - (4 * a * c);
  let posDeterminant = (Math.sqrt(determinant) / 2*a);
  let negDeterminant = (Math.sqrt(-determinant) /2*a).toFixed(2);
  let partSol = (-b / (2 * a));
  
  
  if (determinant > 0) {
    rootFirst = (partSol + posDeterminant).toFixed(2);
    rootSecound = (partSol - posDeterminant).toFixed(2);
   quadraticSolutions.innerHTML = 
   `<p>The roots are ${rootFirst} and ${rootSecound} this is done by using the almighty formmula</p> 
   <p>So we use the general solution c<sub>1</sub>e<sup>xm<sub>1</sub></sup> + c<sub>2</sub>e<sup>xm<sub>2</sub></sup> </p> 
   <p>Therefore the solution is y = c<sub>1</sub>e<sup>${rootFirst}x</sup> + c<sub>2</sub>e<sup>${rootSecound}x</sup></p>`;

  }else if (determinant === 0) {
    rootFirst = rootSecound = (partSol + posDeterminant).toFixed(2);
    quadraticSolutions.innerHTML =
    `<p>The roots are ${rootFirst} and ${rootSecound} this is done by using the almighty formmula</p> 
    <p>So we use the general solution c<sub>1</sub>e<sup>xm<sub>1</sub></sup> + c<sub>2</sub>xe<sup>xm<sub>2</sub></sup> </p> 
    <p>Therefore the solution is y = c<sub>1</sub>e<sup>${rootFirst}x</sup> + c<sub>2</sub>xe<sup>${rootSecound}x</sup></p>`;

  }else if(determinant < 0){
    rootFirst = `${partSol} + ${(negDeterminant + 'i')}`
    rootSecound = `${partSol} - ${(negDeterminant + 'i')}` 
    quadraticSolutions.innerHTML =  
    `<p>The roots are ${rootFirst} and ${rootSecound} by using the almighty formmula</p>
    <p>Then we get our α real part of our complex equation which is ${partSol} and β the imaginary part which is ${negDeterminant}</p>
    <p>Then apply the general solution y = e<sup>αx</sup>[c<sub>1</sub>cos(β) + c<sub>2</sub>sin(β)]</p>
    <p>Therefore the equation is y = e<sup>${partSol}x</sup>[c<sub>1</sub>cos(${negDeterminant}) + c<sub>2</sub>sin(${negDeterminant})] </p>`
  }
  result.append(quadraticSolutions)
  console.log(rootFirst, rootSecound);
};

document
  .querySelector("button")
  .addEventListener("click", solveQuadraticEquation);
