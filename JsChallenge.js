'use strict'

const givenArray = [2, 33, 5, 6, 7, 9 ,3];
let acumulatorMap = 0;
let acumuladorReduce = 0;

let sumaMap = (element) =>{
    acumulatorMap += element;
}

let mapedArray = givenArray.map( element => sumaMap(element));
acumuladorReduce = givenArray.reduce( (previousValue, currentValue,) => previousValue + currentValue);
window.alert(`La suma usando map es: ${acumulatorMap} 
La suma usando reduce es: ${acumuladorReduce}`);
