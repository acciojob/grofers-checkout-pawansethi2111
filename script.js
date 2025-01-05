const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
let td = document.createElement("td");
let tr = document.createElement("tr");
let table = document.querySelector("table tbody");
let prices = document.querySelectorAll('.price');
let sum = 0;
	for(let t of prices){
		sum+= +t.innerHTML;
	}
 td.innerHTML = sum;
	td.id = "ans";
	tr.append(td);
	table.append(tr);
};

getSumBtn.addEventListener("click", getSum);

"".innerText = sum;