
let figure 

function area(){
    if (figure == "square"){
        let sideNumber = parseFloat(document.getElementById("squareInput").value)
        let operation = sideNumber*sideNumber
        document.getElementById("squareArea").innerText = "Area " + operation + " cm²."
    }else if(figure=="circle"){
        let radius = parseFloat(document.getElementById("cicleRadius").value)
        let operation = Math.PI * Math.pow(radius, 2)
        document.getElementById("circleArea").innerText = "Area " + operation + " cm²."
    }else{
        let base = parseFloat(document.getElementById("baseTriangle").value)
        let height = parseFloat(document.getElementById("heightTriangle").value)
        let operation = (base*height)/2
        document.getElementById("AreaTriangle").innerText = "Area " + operation + " cm²."
    }
}

function perimeter(){
    if (figure == "square"){
        let sideNumber = parseFloat(document.getElementById("squareInput").value)
        let operation = sideNumber*4
        document.getElementById("squarePerimeter").innerText = "Perimeter " + operation + " cm."
    }else if(figure=="circle"){
        let radius = parseFloat(document.getElementById("cicleRadius").value)
        let operation = 2 * Math.PI * radius
        document.getElementById("circlePerimeter").innerText = "Perimeter " + operation + " cm."
    }else{
        let first_side = parseFloat(document.getElementById("first_side").value)
        let second_side = parseFloat(document.getElementById("second_Side").value)
        let base = parseFloat(document.getElementById("baseTriangle").value)
        let operation = first_side + second_side + base
        document.getElementById("perimeterTriangle").innerText = "Perimeter " + operation + " cm."
    }
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        const paragraphs = form.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.textContent = '';
        });
    }
}
function areaSquare(){
    figure = "square"
    area()
}

function areaCircle(){
    figure = "circle"
    area()
}

function areaTriangle(){
    figure = "triangle"
    area() 
}

function perimeterSquare(){
    figure = "square"
    perimeter()
}

function perimeterCircle(){
    figure = "circle"
    perimeter()
}

function perimeterTriangle(){
    figure = "triangle"
    perimeter()
}