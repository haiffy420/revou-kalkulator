function triangleSection() {
    document.getElementById("triangle").style.display = '';
    document.getElementById("parallelogram").style.display = 'none';
}
function parallelogramSection() {
    document.getElementById("triangle").style.display = 'none';
    document.getElementById("parallelogram").style.display = '';
}

function calculateTriangleArea() {
	const base = document.getElementById("base").value;
	const height = document.getElementById("height").value;
    if (base === "" || height === "") {
		alert("Please enter a valid base and height.");
		return;
	}
	const area = 0.5 * base * height;
    const process = `A = 1/2 * base * height = 1/2 * ${base} * ${height} = ${area.toFixed(2)}`;
	document.getElementById("resultTriangleArea").innerHTML = `The area of the triangle is ${area}. <br> ${process}`;
}

function calculateTrianglePerimeter() {
	const sideA = document.getElementById("sideA").value;
	const sideB = document.getElementById("sideB").value;
	const sideC = document.getElementById("sideC").value;
    if (sideA === "" || sideB === "" || sideC === "") {
		alert("Please enter a valid value for each sides.");
		return;
	}
	const perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
    const process = `P = Side A + Side B + Side C = ${sideA} + ${sideB} + ${sideC} = ${perimeter.toFixed(2)}`;
	document.getElementById("resultTrianglePerimeter").innerHTML = `The perimeter of the triangle is ${perimeter.toFixed(2)}. <br> ${process}`;
}

function calculateParallelogramArea() {
	const base = document.getElementById("base-parallelogram").value;
	const height = document.getElementById("height-parallelogram").value;
    if (base === "" || height === "") {
		alert("Please enter a valid base and height.");
		return;
	}
	const area = parseFloat(base) * parseFloat(height);
    const process = `A = base * height = ${base} * ${height} = ${area.toFixed(2)}`;
	document.getElementById("resultParallelogramArea").innerHTML = `The area of the parallelogram is ${area.toFixed(2)}. <br> ${process}`;
}

function calculateParallelogramPerimeter() {
	const base = document.getElementById("base-parallelogram-2").value;
	const side = document.getElementById("side-parallelogram").value;
    if (base === "" || side === "") {
		alert("Please enter a valid base and side.");
		return;
	}
	const perimeter = 2 * (parseFloat(base) + parseFloat(side));
    const process = `P = 2 * (base + side) = 2 * (${base} + ${side}) = ${perimeter.toFixed(2)}`;
	document.getElementById("resultParallelogramPerimeter").innerHTML = `The perimeter of the parallelogram is ${perimeter.toFixed(2)}. <br> ${process}`;
}

function resetInput() {
	document.getElementById("base").value = "";
	document.getElementById("height").value = "";
    document.getElementById("base-parallelogram").value = "";
    document.getElementById("base-parallelogram-2").value = "";
	document.getElementById("height-parallelogram").value = "";
	document.getElementById("side-parallelogram").value = "";
	document.getElementById("sideA").value = "";
	document.getElementById("sideB").value = "";
	document.getElementById("sideC").value = "";
	document.getElementById("resultTriangleArea").innerHTML = "";
	document.getElementById("resultTrianglePerimeter").innerHTML = "";
    document.getElementById("resultParallelogramArea").innerHTML = "";
	document.getElementById("resultParallelogramPerimeter").innerHTML = "";
}
