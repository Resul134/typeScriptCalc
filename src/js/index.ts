interface Person {
    firstName: string;
    lastName: string;
}

//#region Save, clear, show.
let words: string[] = [];

let word : string;

let listWord : string;

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");

let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveButton");
saveButton.addEventListener("click", saveWords);

let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showButton");
showButton.addEventListener("click", showWords);

let clearButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearButton");
clearButton.addEventListener("click", clearWords);

let outputElement: HTMLElement = <HTMLElement>document.getElementById("output");

//String manipulations

let inputManiuplation: HTMLInputElement = <HTMLInputElement>document.getElementById("userInput")

let doItButton : HTMLInputElement = <HTMLInputElement>document.getElementById("convertText")
doItButton.addEventListener("click", convertString)

let output : HTMLElement = <HTMLElement>document.getElementById("outputManipulation")

let optionToLower : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Lower")
let optionToUpper : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Upper")


//liste element
let inputListElement : HTMLElement = <HTMLElement>document.getElementById("listInput")


//Calculator
let calcInput1 : HTMLInputElement = <HTMLInputElement>document.getElementById("calcInput1")
let calcInput2 : HTMLInputElement = <HTMLInputElement>document.getElementById("calcInput2")
let calcOutput : HTMLElement = <HTMLElement>document.getElementById("calcOutput")

let allOptions : HTMLSelectElement = <HTMLSelectElement>document.getElementById("SelectedNumber")
let optionPlus : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Plus")
let optionMinus : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Minus")
let optionGange : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Gange")
let optionDivider : HTMLOptionElement = <HTMLOptionElement>document.getElementById("Divider")
let buttonCalc : HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonCalculate")
buttonCalc.addEventListener("click", Calculate)



function Calculate(): void{

    let number1string: string = calcInput1.value;
    let number2string: string = calcInput2.value;
    

    let number1: number = Number(number1string);
    let number2: number = Number(number2string)
    if(optionPlus.selected)
    {
        let sum1 : number = Number(number1 + number2);
        calcOutput.innerHTML = sum1.toString();
        console.log(calcOutput.innerHTML)
        
    }
    else if(optionMinus.selected)
    {
        let sum2 : number = Number(number1 - number2)
        calcOutput.innerHTML = sum2.toString();
        console.log(calcOutput.innerHTML)
    }
    else if(optionGange.selected)
    {
        let sum3 : number = Number(number1 * number2)
        calcOutput.innerHTML = sum3.toString();
        console.log(calcOutput.innerHTML)
    }
    else if(optionDivider.selected)
    {
        let sum4 : number = Number(number1 / number2)
        calcOutput.innerHTML = sum4.toString();
        console.log(calcOutput.innerHTML)
    }



}






function sayHello(): void{
    let inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
    let name : string = inputElement.value;
    console.log("name: " + name);
    outputElement.innerHTML = "Hello" +" "+ name;
}



function saveWords(): void{

    words = inputElement.value.split(",");
    console.log(words);

    
}

function showWords(): void{
    words = inputElement.value.split(",");
    if(words.length > 0)
    outputElement.innerHTML = words.toString();
}


function clearWords(): void{

    words = [];
    outputElement.innerHTML = "";
    inputElement.value = "";
    console.log("Cleared" + words);

}

function convertString(): void{
    if(optionToUpper.selected != null && optionToLower.selected != null)
    {
        if(optionToLower.selected)
        {   
            var word = inputManiuplation.value;
        output.innerHTML = word.toLocaleLowerCase();
        }
        
        console.log("To Lower Selected: "+optionToLower.selected);

        if(optionToUpper.selected)
        {
            var word = inputManiuplation.value;
            output.innerHTML = word.toUpperCase();
        }
        console.log("To upper Selected: "+optionToUpper.selected);
    
    }
    
}

function addListELement(): void{
    listWord = inputListElement.value;

    let listElement : HTMLElement = document.createElement("li");
    word = listElement.innerHTML;
    listElement.appendChild(listElement)
    console.log("list element apended")
    listElement.addEventListener("copy", (keyevent: KeyboardEvent)=> {
        if(keyevent.keyCode === 13)
        {
            addListELement();
        }
    })
}




