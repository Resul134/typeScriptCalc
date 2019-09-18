interface Person {
    firstName: string;
    lastName: string;
}

//#region Save, clear, show.
let words: string[] = [];

let word : string;

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


