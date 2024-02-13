// get input function
function getInputValue(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFiText = inputField.value;
    const inputvalue = parseFloat(inputFiText);
return inputvalue;
}
//inner text function
function setInnerText(outputId,calArea){
    const resultArea = document.getElementById(outputId);
    resultArea.innerText = calArea;
    console.log(resultArea);
    console.log(calArea)
}


//rectangle
function calculateRectangle(){
    const recWidth = getInputValue('rec-width');
    const recLength = getInputValue('rec-length');

    const recArea = recWidth * recLength  ;
    setInnerText('rec-area',recArea)
}
//Parallelogram
 function calParallelogram(){
    const paraBase = getInputValue('para_base');
    const paraHight = getInputValue('para_hight');

    const paraArea = paraBase * paraHight ;
    setInnerText('para_area_show',paraArea);
 }
 //Rhombus
 function calRhombus(){
    const D1rhombus = getInputValue('rhom_d1');
    const d2Rhombus = getInputValue('rhom_d2');
    const RhombusResult = 0.5 * D1rhombus * d2Rhombus;
    setInnerText('rhom_area',RhombusResult);
 }
 //pentagon
 function calpentagon(){
    const perimeterPentagon = getInputValue('p_penta');
    const basePentagon = getInputValue('b_penta');
    const pentagonResult = 0.5 * perimeterPentagon * basePentagon;
    setInnerText('area_penta',pentagonResult);
 }
 //ellipse
 function calEllipse(){
    const a = getInputValue('a_ellipse');
    const b = getInputValue('b_ellipse');
    const ellipseArea = 3.1416 * a * b;
    setInnerText('area_ellipse',ellipseArea);
 }
 