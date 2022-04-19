let credit = document.querySelector(".credit");
let percentCredit = document.querySelector(".percent");
let periodCredit = document.getElementById("period");
let ifAnnuit = document.querySelector(".annuit");
let ifDiff = document.querySelector(".diff");
let creditDan = document.querySelector("#credit-dan");
let creditPereplata = document.querySelector("#credit-pereplata");
let creditSum = document.querySelector("#credit-sum");
let percentPere = document.querySelector(".percent-pere");
let eshPlat = document.querySelector(".esh-plat");
let table = document.querySelector(".table-credit");
let buttonSovle = document.querySelector(".sovle");
let displayTable = document.querySelector(".open-table");
let dispsect = document.querySelector(".section-table");
let footerPerc = document.querySelector(".footer-perc");
let footerCredit = document.querySelector(".footer-credit");
let footerSumCredit = document.querySelector(".footer-sum-credit");

creditSolveAnnuit();

displayTable.onclick = function(){
	table.classList.toggle("hidden");
	dispsect.classList.toggle("hidden")
}

periodCredit.onchange = function () {
	if(ifAnnuit.checked === true){
		creditSolveAnnuit();
	}else if (ifDiff.checked === true){
		creditSolveDiff();
	}
}

credit.onchange = function(){
	if(ifAnnuit.checked === true){
		creditSolveAnnuit();
	}else if (ifDiff.checked === true){
		creditSolveDiff();
	}
}

percentCredit.onchange = function(){
	if(ifAnnuit.checked === true){
		creditSolveAnnuit();
	}else if (ifDiff.checked === true){
		creditSolveDiff();
	}
}

buttonSovle.onclick =function(){
	if(ifAnnuit.checked === true){
		creditSolveAnnuit();
	}else if (ifDiff.checked === true){
		creditSolveDiff();
	}
}

ifAnnuit.onclick = function(){
	ifDiff.checked = false;
}

ifDiff.onclick = function(){
	ifAnnuit.checked = false;
}

function creditSolveAnnuit() {

	//Удаляем ненужные элементы таблицы для добавления новых
	let tac = document.querySelectorAll(".added");
	for(v of tac){
		v.remove();
	}


	//Удобные сокращения, куда без них
	let perc = percentCredit.value;
	let per = periodCredit.value;

	//Механизм расчета ежемесячного платежа
	eshPlat.textContent = (credit.value*((perc/(100*12)/(1-((1+perc/(100*12))**(-per)))))).toFixed(2);

	creditDan.textContent = credit.value;

	//Пустые массивы для того, чтобы манипулировать таблицей, хоть и ограниченно, но это работает
	let massiveCredit = [];
	let creditPerc = [];
	let sumCredit = [];

	for (let i = 1;i <= per;i++) {
		if(i===1){
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = 1;
			let col5 = (credit.value*((perc/(100*12)/(1-((1+perc/(100*12))**(-per)))))).toFixed(2);
			let col3 = credit.value*(perc/(100*12)).toFixed(2);
			let col4 = (col5-col3).toFixed(2);
			let col2 = (credit.value-col4).toFixed(2);
			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			creditPerc.push(col3);
			massiveCredit.push(col2);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}else if(i!=per){
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = i;
			let col5 = (credit.value*((perc/(100*12)/(1-((1+perc/(100*12))**(-per)))))).toFixed(2);
			let col3 = (massiveCredit[i-2]*(perc/(100*12))).toFixed(2);
			let col4 = (col5-col3).toFixed(2);
			let col2 = (massiveCredit[i-2]-col4).toFixed(2);
			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			massiveCredit.push(col2);
			creditPerc.push(col3);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}else{
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = i;
			let col5 = (credit.value*((perc/(100*12)/(1-((1+perc/(100*12))**(-per)))))).toFixed(2);
			let col3 = (massiveCredit[i-2]*(perc/(100*12))).toFixed(2);
			let col4 = (col5-col3).toFixed(2);
			let col2 = (massiveCredit[i-2]-col4).toFixed(2);

			if(col2 != 0){
				col5 = (Number(col5)+Number(col2)).toFixed(2);
				col4 = (Number(col4)+Number(col2)).toFixed(2);
				col2 = 0;
			}

			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			massiveCredit.push(col2);
			creditPerc.push(col3);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}

		let sum1 = 0;
		let sum2 = 0;

		for(let plat1 of sumCredit){
			sum1=sum1+Number(plat1);
		}

		for(let plat2 of creditPerc){
			sum2=sum2+Number(plat2);
		}


		creditSum.textContent = sum1.toFixed(2);

		creditPereplata.textContent = sum2.toFixed(2);

		percentPere.textContent = ((creditPereplata.textContent/credit.value)*100).toFixed(2);

		footerPerc.textContent = creditPereplata.textContent;
		footerCredit.textContent = credit.value;
		footerSumCredit.textContent = creditSum.textContent;
	}
}

function creditSolveDiff(){
	let perc = percentCredit.value;
	let per = periodCredit.value;

	creditDan.textContent = credit.value;

	let tac = document.querySelectorAll(".added");
	for(v of tac){
		v.remove();
	}

	let massiveCredit = [];
	let creditPerc = [];
	let sumCredit = [];

	for (let i = 1;i <= per;i++) {
		if(i===1){
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = 1;
			let col2 = credit.value;
			let col4 = (credit.value/per).toFixed(2);
			let col3 = (col2*((perc/12)/100)).toFixed(2);
			let col5 = (Number(col4)+Number(col3)).toFixed(2);
			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			creditPerc.push(col3);
			massiveCredit.push(col2);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}else if(i!=per){
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = i;
			let col4 = (credit.value/per).toFixed(2);
			let col2 = (massiveCredit[i-2]-col4).toFixed(2);
			let col3 = (col2*((perc/12)/100)).toFixed(2);
			let col5 = (Number(col4)+Number(col3)).toFixed(2);
			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			massiveCredit.push(col2);
			creditPerc.push(col3);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}else{
			let tableRowSolve = document.createElement("tr");
			let tablecol1 = document.createElement("td");
			let tablecol2 = document.createElement("td");
			let tablecol3 = document.createElement("td");
			let tablecol4 = document.createElement("td");
			let tablecol5 = document.createElement("td");
			let col1 = i;
			let col2 = (massiveCredit[i-2]-credit.value/per).toFixed(2);
			let col4 = col2;
			let col3 = (col2*((perc/12)/100)).toFixed(2);
			let col5 = (Number(col4)+Number(col3)).toFixed(2);

			tablecol1.textContent = col1;
			tablecol2.textContent = col2;
			tablecol3.textContent = col3;
			tablecol4.textContent = col4;
			tablecol5.textContent = col5;

			tableRowSolve.classList.add("added");

			massiveCredit.push(col2);
			creditPerc.push(col3);
			sumCredit.push(col5);

			tableRowSolve.append(tablecol1);
			tableRowSolve.append(tablecol2);
			tableRowSolve.append(tablecol3);
			tableRowSolve.append(tablecol4);
			tableRowSolve.append(tablecol5);

			table.append(tableRowSolve);
		}

		let sum1 = 0;
		let sum2 = 0;

		for(let plat1 of sumCredit){
			sum1=sum1+Number(plat1);
		}

		for(let plat2 of creditPerc){
			sum2=sum2+Number(plat2);
		}

		eshPlat.textContent = sumCredit[0]+" >>>> "+sumCredit[sumCredit.length-1];

		creditSum.textContent = sum1.toFixed(2);

		creditPereplata.textContent = sum2.toFixed(2);

		percentPere.textContent = ((creditPereplata.textContent/credit.value)*100).toFixed(2);

		footerPerc.textContent = creditPereplata.textContent;
		footerCredit.textContent = credit.value;
		footerSumCredit.textContent = creditSum.textContent;
	}
}