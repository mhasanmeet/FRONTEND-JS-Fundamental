
// window onload
window.onload = () =>{
    main()
}

// generate RGB color function 
function generateHEXcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // Convert RGB into HEX code
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// get elements
function main(){
    const root =  document.getElementById("root");
    const changeBtn = document.getElementById("change-button");
    const output = document.getElementById("output")
    const copyBtn = document.getElementById("copyBtn");


    // When Click button, insert color code into body bg
    changeBtn.addEventListener('click', function(){
        const bgColor = generateHEXcolor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })

    // Copy to Clipboard and change Button color to green
    copyBtn.addEventListener('click', function(){
        // Copy to Clipboard
        navigator.clipboard.writeText(output.value)

        //When Copy to clipboard button clicked then this function call occurred
        generateToastMessage(`${output.value} Copied`)
       
    })

    // Generate Toast function
    function generateToastMessage(msg){
        //Create a new div element
        const div = document.createElement('div')
        // pass HTML div element by function argument
        div.innerHTML = msg
        // create a clasName for div section
        div.className = 'toast'
        //show div element into HTML
        document.body.appendChild(div)
        // After 1 section then this div section will be removed
        setTimeout(() => div.remove(), 1000);
    }
    
}




