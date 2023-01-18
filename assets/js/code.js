




let footer = document.getElementById("tableContentWrapper");
let search2 = document.getElementById("search2");
let switchContainer = document.getElementById('themeSwitch'); 
let themeSwitch = document.getElementById('switch'); 
let body = document.getElementById('body');
let currentTheme = document.body.classList[0];
let pertiWeight = document.getElementById('pertiWeight');
let pertiLength = document.getElementById('pertiLength');
let pertiList = document.querySelectorAll('ul.pertiList');
let prefaceText = document.getElementById('prefaceText');
let program = document.getElementById("wholeProgram");
let aboutProgram = document.getElementById("aboutProgram");
let contactUs = document.getElementById("contactUs");
let continueToProgram = document.getElementById("continueToProgram");



let prefaceList = document.querySelectorAll("ul#prefaceMenu li");
let search1 = document.getElementById("search1");
let searching = document.getElementById("searching");
let loadingText = document.getElementById('loadingText');
let productLoadingName = document.getElementById('productLoadingName');
let rowForWeight = document.querySelectorAll('.rowForWeight');
let rowForLength = document.querySelectorAll('.rowForLength');
let mainPage = document.getElementById("mainPage");
let table1 = document.getElementById("table1");
let table2 = document.getElementById("table2");
let tableHeader1 = document.getElementById("header1");
let tableHeader2 = document.getElementById("header2");
let lastFooter = document.getElementById('lastFooter');
let billetDimentions = document.getElementById("billetDimentions");
let billetDimentions2 = document.getElementById("billetDimentions2");
let factories = document.getElementById("factory");
let factories2 = document.getElementById("factory2");
let billetLength = document.getElementById("billetLength");
let billetLength2 = document.getElementById("billetLength2");
let billetAverageWeight = document.getElementById("billetAverageWeight");
let billetAverageWeight2 = document.getElementById("billetAverageWeight2");
let billetWeightPerMeter = document.getElementById("billetWeightPerMeter");
let billetWeightPerMeter2 = document.getElementById("billetWeightPerMeter2");
let firstCutLength = document.getElementById("firstCutLength");
let firstCutLength2 = document.getElementById("firstCutLength2");
let firstCutAvergeWight = document.getElementById("firstCutAvergeWight");
let firstCutAvergeWight2 = document.getElementById("firstCutAvergeWight2");
let sarGheichi = document.getElementById("sarGheichi");
let sarGheichi2 = document.getElementById("sarGheichi2");
let sarGheichiLength = document.getElementById("sarGheichiLength");
let sarGheichiLength2 = document.getElementById("sarGheichiLength2");
let sarBili = document.getElementById("sarBili");
let sarBili2 = document.getElementById("sarBili2");
let sarBiliLength = document.getElementById("sarBiliLength");
let sarBiliLength2 = document.getElementById("sarBiliLength2");
let tahBili = document.getElementById("tahBili");
let tahBili2 = document.getElementById("tahBili2");
let tahBiliLength = document.getElementById("tahBiliLength");
let tahBiliLength2 = document.getElementById("tahBiliLength2");
let boradeArre = document.getElementById("boradeArre");
let boradeArre2 = document.getElementById("boradeArre2");
let boradeArreLength = document.getElementById("boradeArreLength");
let boradeArreLength2 = document.getElementById("boradeArreLength2");
let darsadOxid = document.getElementById("darsadOxid");
let darsadOxid2 = document.getElementById("darsadOxid2");
let shakhes = document.getElementById("shakhes");
let shakhes2 = document.getElementById("shakhes2");
let standardWeight = document.getElementById("standardWeight");
let standardWeight2 = document.getElementById("standardWeight2");
let eachTwelveMeterProductWeight = document.getElementById("eachTwelveMeterProductWeight");
let eachTwelveMeterProductWeight2 = document.getElementById("eachTwelveMeterProductWeight2");
let darsadstandardWeight = document.getElementById("darsadstandardWeight");
let darsadstandardWeight2 = document.getElementById("darsadstandardWeight2");
let numberOfTwelveMeterProductForEachBillet = document.getElementById("numberOfTwelveMeterProductForEachBillet");
let numberOfTwelveMeterProductForEachBillet2 = document.getElementById("numberOfTwelveMeterProductForEachBillet2");
let eachTwelveMeterProductWeightInputs = document.querySelectorAll('input.eachTwelveMeterProductWeight');
let normalLength = document.getElementById("normalLength");
let normalLength2 = document.getElementById("normalLength2");
let productLength = document.getElementById("productLength");
let productLength2 = document.getElementById("productLength2");
let productLengthinformation = document.getElementById("productLengthinformation");
let productLengthinformation2 = document.getElementById("productLengthinformation2");
let selectProduct = document.getElementById('selectProduct');
let selectProduct2 = document.getElementById('selectProduct2');
let equations = document.querySelectorAll('span.equation');
let onlyOneDeltaL = document.querySelectorAll('div.onlyOneDeltaL');
let twoDeltaL = document.querySelectorAll('div.twoDeltaL');
let colorize = document.getElementById("colorize");
let colorize2 = document.getElementById("colorize2");
let print = document.getElementById("print");
let whichTonagSelectListItem = document.getElementById("whichTonagSelectListItem");
let whichTonagSelect = document.getElementById("whichTonagSelect");
let back = document.getElementById("back");
let nav = document.getElementById("nav");
let backIcon = document.getElementById("backIcon");
let mode = "totalTonag"; // "totalTonag" || "khalesTonag" ==> get From Select Option in Program



let pertiLengthOrWeight = 'weight';
let billetDimentionsValue = 150;
let billetDimentionsValue2 = 150;
let billetLengthValue ;
let billetLengthValue2 ;
let billetAverageWeightValue;
let billetAverageWeightValue2;
let billetWeightPerMeterValue;
let billetWeightPerMeterValue2;
let firstCutAvergeWightValue;
let firstCutAvergeWightValue2;
let snackbarIsShown = false;
let snackbarIsShown2 = false;
let sarGheichiWeightValue;
let sarGheichiWeightValue2;
let sarGheichiLengthValue;
let sarGheichiLengthValue2;
let tahGheichiLengthValue;
let tahGheichiLengthValue2;
let sarBiliWeightValue;
let sarBiliWeightValue2;
let sarBiliLengthValue;
let sarBiliLengthValue2;
let tahBiliWeightValue;
let tahBiliWeightValue2;
let tahBiliLengthValue;
let tahBiliLengthValue2;
let boradeArreWeightValue;
let boradeArreWeightValue2;
let boradeArreLengthValue;
let boradeArreLengthValue2;
let darsadOxidValue;
let darsadOxidValue2;
let shakhesValue;
let shakhesValue2;
let standardWeightValue;
let standardWeightValue2;
let eachTwelveMeterProductWeightValue;
let eachTwelveMeterProductWeightValue2;
let darsadstandardWeightValue;
let darsadstandardWeightValue2;
let plusOrMinus;
let numberOfTwelveMeterProductForEachBilletValue;
let numberOfTwelveMeterProductForEachBilletValue2;
let normalLengthValue;
let normalLengthValue2;
let increasing = false;
let decreasing = false;
let preNormalLengthValue = undefined ;
let counter = 0;
let productLengthValue;
let productLengthValue2;
let pertiLengthValue;
let pertiLengthValue2;
let productLengthCheck = 72;
let shear = false;
let shear2 = false;
let deltaL11 ;
let deltaL12 ;
let deltaL21 ;
let deltaL22 ;
//let alpha = 12 * Math.pow(10,-6);
let alpha = 12e-6;
let deltaThetha = (670-40);
let originalProductLengthValue;
let originalProductLengthValue2;
let shearText;
let shearText2;
let cut11 ;
let cut12 ;
let cut21 ;
let cut22 ;
let cut11Value ;
let cut12Value ;
let cut21Value ;
let cut22Value ;
let backUpOriginalProductLengthValue ;
let makeRed = false;
let makeRed2 = false;
let table = '';
let table1Content = '';
let table2Content = '';
let tableHeaderContent1 = '';
let tableHeaderContent2 = '';
let tonag ;
let pcs;
let tonagValue;
let pcsValue;
let finalResult;
let finalFix ;
let finalPrint ;
let firstCell_1;
let secondCell_1;
let firstCell_2;
let secondCell_2;
let totalTonag ;
let khalesTonag ;
let pcs1 ;
let pcs2 ;
let tonag1;
let tonag2;
let khalesTonag1;
let khalesTonag2;
let formValues ;
let placeHolderValuesForTonag = [ '' , '' ] ;







whichTonagSelect.addEventListener('change' , (e) => {
	mode = e.target.value;
});



print.addEventListener('click' , (e) => {
	
	updateInformation();
	
	if( mode == "khalesTonag" ) {
		swalFireForKhalesTonag();
	} else if ( mode == "totalTonag" ) {
		swalFire();
	}
	/*
	
	*/
	
});


let goToMainPage = () => {
	
	//console.log(mainPage ,footer , print , finalResult , back , whichTonagSelectListItem );
	
	
	mainPage.style.display = "flex";
	footer.style.display = "none";
	print.style.display = "block";
	//search.style.display = "block";
	
	if(finalResult) {
		finalResult.style.display = "none";
	}
	
	back.style.display = "none";
	
	whichTonagSelectListItem.style.display = "block";
}







document.addEventListener('keyup' , (e) => {
	if(e.key == 'q' || e.key == 'Q' || e.key == 'ض') {
		closeThePrintPage();
	}
});


let closeThePrintPage = () => {
	goToMainPage();
	nav.style.display = 'block';
	//finalResult.style.display = 'none';
	switchContainer.style.display = "block";
	mainHeader.classList.remove('flexCenter');
	contactUs.style.display = 'none';
	document.getElementById("mainTitle").classList.add("title");
	//document.getElementById("mainTitle").classList.remove("titleForPrint");
}

document.addEventListener( 'keyup' , (e) => {
	let keyboardPress = e.key ;
	if( keyboardPress == 'p' || keyboardPress == 'P' ) {
		exitSearching = true;
	}
	if ( e.key === "Escape" ) {
		if ( showReportTable == true ) {
			reportContainer.style.display = "none";
			showReportTable = false;
		} else {
			closeTheTableContainer();
		}
		
	}
});



let closeTheSearchingLoader = () => {
	searching.style.display = "none";
}

let closeTheTableContainer = () => {
	tableContainer.style.display = "none";
	tableContainerForFirstPart.style.display = "none";
	
	closeThePrintPage();
	continueToProgramFunction();
}





let products = [
{ name : 'IPE 140 Light(I7)' , weight : 136.8 , dimentions : 150 },
{ name : 'IPE 140 Heavy(I2)' , weight : 154.8 , dimentions : 150 },
{ name : 'IPE 160 Light(I7)' , weight : 172.8 , dimentions : 150 },
{ name : 'IPE 160 Heavy(I2)' , weight : 189.6 , dimentions : 150 },
{ name : 'IPE 180 Light(I7)' , weight : 211.2 , dimentions : 150 },
{ name : 'IPE 180 Heavy(I2)' , weight : 225.6 , dimentions : 150 },
{ name : 'IPE 200 Light(I7)' , weight : 247.2 , dimentions : 200 },
{ name : 'IPE 200 Heavy(I2)' , weight : 268.8 , dimentions : 200 },
{ name : 'IPE 220 Light(I7)' , weight : 314.4 , dimentions : 200 },
{ name : 'IPE 220 Heavy(I2)' , weight : 314.4 , dimentions : 200 },
{ name : 'IPE 240 Heavy(I2)' , weight : 368.4 , dimentions : 200 },
{ name : 'UPN 140 GOST ( Light )' , weight : 147.6 , dimentions : 150 },
{ name : 'UPN 140 DIN ( Heavy )' , weight : 192 , dimentions : 150 },
{ name : 'UPN 160 GOST ( Light )' , weight : 170.4 , dimentions : 150 },
{ name : 'UPN 160 DIN ( Heavy )' , weight : 225.6 , dimentions : 150 },
{ name : 'UPN 180 GOST ( Light )' , weight : 195.6 , dimentions : 200 },
{ name : 'UPN 180 DIN ( Heavy )' , weight : 264 , dimentions : 200 },
{ name : 'UPN 200 GOST ( Light )' , weight : 220.8 , dimentions : 200 },
{ name : 'UPN 200 DIN ( Heavy )' , weight : 303.6 , dimentions : 200 },
{ name : 'UPN 220 GOST ( Light )' , weight : 252 , dimentions : 200 },
{ name : 'UPN 220 DIN ( Heavy )' , weight : 352.8 , dimentions : 200 },
{ name : 'UPN 240 GOST ( Light )' , weight : 288 , dimentions : 200 },
{ name : 'UPN 240 DIN ( Heavy )' , weight : 398 , dimentions : 200 },
{ name : 'ANG 100*10' , weight :  180 , dimentions : 150 },
];




let dimentions = [
{ value : 150 },
{ value : 180 },
{ value : 200 }
];




let factories150 = [
{ name : 'فولاد کاوه جنوب کیش' , weight : 2085 } ,
{ name : 'شرکت فولاد سيرجان ايرانيان' , weight : 2122 } ,
{ name : 'شركت مجتمع فولاد خراسان (نيشابور)' , weight : 2151 },
{ name : 'شرکت صنعتی معدنی چادرملو' , weight : 2120 } , 
{ name : 'فولاد ارفع یزد' , weight : 2065 } ,
]

let factories180 = [
{ name : 'فولاد ارفع یزد' , weight : 3050 } ,
]


let factories200 = [
{ name : 'فولاد ارفع یزد' , weight : 3730 } ,
]


let factoryName = factories150[1].name ;
let factoryName2 = factories150[1].name ;






billetLength.addEventListener('keyup', (e) => {
	changeBilletLength(e.target.value);
});

billetLength2.addEventListener('keyup', (e) => {
	changeBilletLength(e.target.value);
});



billetDimentions.addEventListener( 'change' , (e) => {
	changeBilletDimentions(Number(e.target.value));
});






billetAverageWeight.addEventListener('keyup', (e) => {
	
	changeBilletAverageWeight(Number(e.target.value));
	
});


firstCutLength.addEventListener('keyup' , (e) => {
	changeFirstCutLengthValue(Number(e.target.value),true);
});



standardWeight.addEventListener('keyup' , (e) => {
	changeEachTwelveMeterProductWeightValue(e.target.value);
});


eachTwelveMeterProductWeight.addEventListener('keyup' , (e) => {
	try {
		eachTwelveMeterProductWeightValue = Number(e.target.value);
		eachTwelveMeterProductWeightValue2 = eachTwelveMeterProductWeightValue;
		eachTwelveMeterProductWeight2.value = eachTwelveMeterProductWeightValue2;
		//calculateDarsadStandardWeight();
		//calculateNormal();
		//calculateShakhes();
		//calculateproductLengthValue();
		makeAllProcessing();
	} catch(e) {
		
	}
});





eachTwelveMeterProductWeight2.addEventListener('keyup' , (e) => {
	try {
		eachTwelveMeterProductWeightValue2 = Number(e.target.value);
		//calculateDarsadStandardWeight();
		//calculateNormal();
		//calculateShakhes();
		//calculateproductLengthValue();
		makeAllProcessing(true);
	} catch(e) {
		
	}
});


numberOfTwelveMeterProductForEachBillet.addEventListener('keyup' , (e) => {
	try {
		numberOfTwelveMeterProductForEachBilletValue = Number(e.target.value);
		makeAllProcessing();
	} catch(e) {
		
	}
});





selectProduct.addEventListener('change' , (e) => {
	let name = e.target.value;
	productName = name;
	for(let i=0;i<products.length;i++) {
		if(products[i].name == productName ) {
			
			selectProduct2.options[i].selected = true;

			selectProductWithIndex(i);
			
			changeBilletDimentions(products[i].dimentions);
			
			break;
		}
	}
});




selectProduct2.addEventListener('change' , (e) => {
	let name2 = e.target.value;
	productName2 = name2;
	for(let i=0;i<products.length;i++) {
		if(products[i].name == productName2 ) {
			
			//selectProduct2.options[i].selected = true;
			
			selectProductWithIndexForSecondPart(i);
			
			break;
		}
	}
});





back.addEventListener( 'click' , () => {
	goToMainPage();
});





for(let i=0;i<pertiList.length;i++){
	pertiList[i].addEventListener('click' , (e) => {
		selectAllRelatedPertiListItem(e.target.dataset.index);
		makeVisibleRelatedDataForPerti(e.target.dataset.index);
	});
}




let continueToProgramFunction = () => {
	program.style.display = 'block';
	aboutProgram.style.display = 'none';
	contactUs.style.display = 'none';
}



continueToProgram.addEventListener('click' , () => {
	continueToProgramFunction();
});

for(let i=0;i<prefaceList.length;i++) {
	prefaceList[i].addEventListener('click' , (e) => {
		selectPrefaceSubject(i);
	});
}

document.addEventListener('keyup' , (e) => {
	if( e.key == 'p' ) {
		printStatisticsForMe();
	}
});

themeSwitch.addEventListener('change' , () => {
	/*
	if( darkTheme == false ) {
		body.classList.add('bodyDarkTheme');
		body.classList.remove('bodyLightTheme');
	} else {
		body.classList.add('bodyLightTheme');
		body.classList.remove('bodyDarkTheme');
	}
	*/
	
	if ( currentTheme == 'bodyDarkTheme' ) {
		body.classList.add('bodyLightTheme');
		body.classList.remove('bodyDarkTheme');
		currentTheme = 'bodyLightTheme';
		backIcon.src = "./assets/images/back.png" ;
	} else {
		body.classList.add('bodyDarkTheme');
		body.classList.remove('bodyLightTheme');
		currentTheme = 'bodyDarkTheme';
		backIcon.src = "./assets/images/backWhite.png" ;
	}		
	// darkTheme = !darkTheme;
	
});











let changeBilletDimentions = (value) => {
	billetDimentionsValue2 = billetDimentionsValue = value;
	
	
	
	for(let i=0;i<dimentions.length;i++) {
		if(dimentions[i].value == billetDimentionsValue ) {
			
			billetDimentions.options[i].selected = true;
			billetDimentions2.options[i].selected = true;
			
			if( billetDimentionsValue == 200 || billetDimentionsValue == 180 ) {
				changeFactory('فولاد ارفع یزد');
			} else {
				changeFactory('شرکت فولاد سيرجان ايرانيان');
			}
			
			
			getFactoryWeight(factoryName);
			
			break;
		}
	}	
}






let changeBilletDimentionsForSecondProduct = (value) => {
	billetDimentionsValue2  = value;
	
	for(let i=0;i<dimentions.length;i++) {
		if(dimentions[i].value == billetDimentionsValue2 ) {
			
			billetDimentions2.options[i].selected = true;
			
			if( billetDimentionsValue2 == 200 || billetDimentionsValue2 == 180 ) {
				changeFactory('فولاد ارفع یزد');
			} else {
				changeFactory('شرکت فولاد سيرجان ايرانيان');
			}
			
			break;
		}
	}
}
















let changeFactory = (value) => {
	factoryName = value;
	
	for(let i=0;i<factories.options.length;i++) {
		if( factoryName == factories.options[i].text ) {
			factories.options[i].selected = true;
			
			getFactoryWeight(factoryName);
			break;
		}
	}
	
	for(let i=0;i<factories2.options.length;i++) {
		if( factoryName == factories2.options[i].text ) {
			factories2.options[i].selected = true;
			
			getFactoryWeight(factoryName);
			break;
		}
	}
}




factories.addEventListener( 'change' , (e) => {
	changeFactory(e.target.value);
});





let dontFindAverageWeight = true;


let getFactoryWeight = (factoryName) => {
	
	dontFindAverageWeight = true;
	
	if(billetDimentionsValue == 150) {
		for(let i=0;i<factories150.length;i++) {
			if( factories150[i].name == factoryName ) {
				billetAverageWeightValue = factories150[i].weight;
				billetAverageWeightValue2 = factories150[i].weight;
				dontFindAverageWeight = false;
			}
		}
	} else if(billetDimentionsValue == 180) {
		for(let i=0;i<factories180.length;i++) {
			if( factories180[i].name == factoryName ) {
				billetAverageWeightValue = factories180[i].weight;
				billetAverageWeightValue2 = factories180[i].weight;
				dontFindAverageWeight = false;
			}
		}
	} else if (billetDimentionsValue == 200) {
		for(let i=0;i<factories200.length;i++) {
			if( factories200[i].name == factoryName ) {
				billetAverageWeightValue = factories200[i].weight;
				billetAverageWeightValue2 = factories200[i].weight;
				dontFindAverageWeight = false;
			}
		}
	}
	


	
	if( dontFindAverageWeight == true ) {
		billetAverageWeightValue = 0;
		billetAverageWeightValue2 = 0;
		billetAverageWeight.value = billetAverageWeightValue;
		billetAverageWeight2.value = billetAverageWeightValue2;
	} else {
		billetAverageWeight.value = billetAverageWeightValue;
		billetAverageWeight2.value = billetAverageWeightValue2;
		changeBilletAverageWeight(billetAverageWeightValue);
	}
	
}









let getFactoryWeightForSecond = (factoryName) => {
	
	dontFindAverageWeight = true;
	
	if(billetDimentionsValue == 150) {
		for(let i=0;i<factories150.length;i++) {
			if( factories150[i].name == factoryName ) {
				billetAverageWeightValue2 = factories150[i].weight;
				dontFindAverageWeight = false;
			}
		}
	} else if(billetDimentionsValue == 180) {
		for(let i=0;i<factories180.length;i++) {
			if( factories180[i].name == factoryName ) {
				billetAverageWeightValue2 = factories180[i].weight;
				dontFindAverageWeight = false;
			}
		}
	} else if (billetDimentionsValue == 200) {
		for(let i=0;i<factories200.length;i++) {
			if( factories200[i].name == factoryName ) {
				billetAverageWeightValue2 = factories200[i].weight;
				dontFindAverageWeight = false;
			}
		}
	}
	
	

	
	if( dontFindAverageWeight == true ) {
		billetAverageWeightValue2 = 0;
		billetAverageWeight2.value = billetAverageWeightValue2;
	} else {
		billetAverageWeight2.value = billetAverageWeightValue2;
		changeBilletAverageWeightForSecond(billetAverageWeightValue2);
	}
	
}








let changeBilletLength = (number) => {
	try {
		billetLengthValue = Number(number);
		
		billetLengthValue2 = Number(number);
		billetLength2.value = billetLengthValue2;

		makeAllProcessing();
	} catch(e) {
		
	}
}


changeBilletLength(12);

let firstCutLengthValue = 6;
let firstCutLengthValue2 = billetLengthValue - firstCutLengthValue;
firstCutLength2.value = Number(firstCutLengthValue2);


let changeBilletAverageWeight = (number) => {
	try {
		billetAverageWeightValue = Number(number);
		billetAverageWeightValue2 = Number(number);
		billetAverageWeight.value = billetAverageWeightValue;
		billetAverageWeight2.value = billetAverageWeightValue2;
		
		
		calculateBilletWeightPerMeterValue();
		calculatefirstCutAvergeWeightValue();
		makeAllProcessing();
	} catch(e) {
		
	}

}




let changeBilletAverageWeightForSecond = (number) => {
	try {
		billetAverageWeightValue2 = Number(number);
		billetAverageWeight2.value = billetAverageWeightValue2;
		
		
		calculateBilletWeightPerMeterValue();
		calculatefirstCutAvergeWeightValue();
		makeAllProcessing();
	} catch(e) {
		
	}

}




changeFactory(factoryName);
getFactoryWeight(factoryName);





let test = document.getElementById('test');










let calculateBilletWeightPerMeterValue = () => {

	try {
		billetWeightPerMeterValue = billetAverageWeightValue / billetLengthValue;
		billetWeightPerMeterValue = Number(billetWeightPerMeterValue.toFixed(2));
		billetWeightPerMeter.value = billetWeightPerMeterValue;
		
		billetWeightPerMeterValue2 = billetAverageWeightValue2 / billetLengthValue2;
		billetWeightPerMeterValue2 = Number(billetWeightPerMeterValue2.toFixed(2));
		billetWeightPerMeter2.value = billetWeightPerMeterValue2;
	} catch(e) {
		
	}
		
}






let showSnackBar = () => {
  // Get the snackbar DIV
  let snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout( function() { 
	snackbar.className = snackbar.className.replace("show", ""); 
	snackbarIsShown = false;
  }, 4000);
}





let showSnackBar2 = () => {
  // Get the snackbar DIV
  let snackbar2 = document.getElementById("snackbar2");

  // Add the "show" class to DIV
  snackbar2.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout( function() { 
	snackbar2.className = snackbar2.className.replace("show", ""); 
	snackbarIsShown2 = false;
  }, 4000);
}




let calculateFirstCutLengthValue2 = () => {
	firstCutLengthValue2 = Number((billetLengthValue - firstCutLengthValue).toFixed(2)) ;
	firstCutLength2.value = Number(firstCutLengthValue2);
}




let changeFirstCutLengthValue = (value , keyboardPress ) => {
	try {
		firstCutLengthValue = value;
		if(keyboardPress == true ) {
			
		} else {
			firstCutLength.value = value;
		}
		
		
		if( firstCutLengthValue < 5.7 || firstCutLengthValue > 6.3 ) {
			
			if ( snackbarIsShown == false ) {
				firstCutLength.style.backgroundColor = 'red';
				firstCutLength.style.color = 'white' ;
				
				firstCutLength2.style.backgroundColor = 'red';
				firstCutLength2.style.color = 'white' ;
				
				showSnackBar();
				
				snackbarIsShown = true;
			} else {

			}				
			
			
		} else {
			firstCutLength.style.backgroundColor = 'white';
			firstCutLength.style.color = 'black' ;
			
			firstCutLength2.style.backgroundColor = 'white';
			firstCutLength2.style.color = 'black' ;
		}
		
		calculateFirstCutLengthValue2();
		makeAllProcessing();
	} catch(e) {
		
	}
}




let calculatefirstCutAvergeWeightValue = () => {
	
	firstCutAvergeWightValue = (firstCutLengthValue * billetAverageWeightValue) / billetLengthValue;
	
	firstCutAvergeWightValue = Number(firstCutAvergeWightValue.toFixed(2));
	firstCutAvergeWight.value = firstCutAvergeWightValue.toFixed(2);
	
	firstCutAvergeWightValue2 = billetAverageWeightValue - firstCutAvergeWightValue - ( (0.08 * billetAverageWeightValue) / 100 ) ;
	
	firstCutAvergeWightValue2 = Number(firstCutAvergeWightValue2.toFixed(2));
	firstCutAvergeWight2.value = firstCutAvergeWightValue2;
	
	calculatePerti();

}










let convertToCentimeterIfNeeded = (value , container) => {
	if ( value < 1 ) {
		value *= 100;
		container.parentNode.children[1].innerText = 'سانتی متر';
	}
	return Number(value.toFixed(2));
}




let calculatePerti = () => {
	
	sarGheichi.value = sarGheichiWeightValue = (firstCutAvergeWightValue * 0.4)/100;
	sarGheichi.value = sarGheichiWeightValue = Number(sarGheichiWeightValue.toFixed(2));
	sarGheichiLengthValue = (billetLengthValue * sarGheichiWeightValue) / eachTwelveMeterProductWeightValue;
	tahGheichiLengthValue = sarGheichiLengthValue = Number(sarGheichiLengthValue.toFixed(2));
	sarGheichiLength.value = convertToCentimeterIfNeeded(sarGheichiLengthValue , sarGheichiLength);
	
	
	sarBiliWeightValue = (firstCutAvergeWightValue * 0.5)/100;
	sarBili.value = sarBiliWeightValue = Number(sarBiliWeightValue.toFixed(2));
	sarBiliLengthValue = ( billetLengthValue * sarBiliWeightValue ) / eachTwelveMeterProductWeightValue;
	sarBiliLengthValue = Number(sarBiliLengthValue.toFixed(2));
	sarBiliLength.value = convertToCentimeterIfNeeded(sarBiliLengthValue , sarBiliLength);
	
	tahBili.value = tahBiliWeightValue = (firstCutAvergeWightValue * 1.5)/100;
	tahBili.value = tahBiliWeightValue = Number(tahBiliWeightValue.toFixed(2));
	tahBiliLengthValue = ( billetLengthValue * tahBiliWeightValue ) / eachTwelveMeterProductWeightValue;
	tahBiliLengthValue = Number(tahBiliLengthValue.toFixed(2));
	tahBiliLength.value = convertToCentimeterIfNeeded(tahBiliLengthValue , tahBiliLength);
	
	boradeArre.value = boradeArreWeightValue = (firstCutAvergeWightValue * 0.1)/100;
	boradeArre.value = boradeArreWeightValue = Number(boradeArreWeightValue.toFixed(2));
	boradeArreLengthValue = ( billetLengthValue * boradeArreWeightValue ) / eachTwelveMeterProductWeightValue ; 
	boradeArreLengthValue = Number(boradeArreLengthValue.toFixed(2));
	boradeArreLength.value = convertToCentimeterIfNeeded(boradeArreLengthValue , boradeArreLength);
	
	darsadOxid.value = darsadOxidValue = (firstCutAvergeWightValue * 1.5)/100;
	darsadOxid.value = darsadOxidValue = Number(darsadOxidValue.toFixed(2));
	
	
	
	
	
	sarGheichi2.value = sarGheichiWeightValue2 = (firstCutAvergeWightValue2 * 0.4)/100;
	sarGheichi2.value = sarGheichiWeightValue2 = Number(sarGheichiWeightValue2.toFixed(2));
	sarGheichiLengthValue2 = (billetLengthValue2 * sarGheichiWeightValue2) / eachTwelveMeterProductWeightValue2;
	tahGheichiLengthValue2 = sarGheichiLengthValue2 = Number(sarGheichiLengthValue2.toFixed(2));
	sarGheichiLength2.value = convertToCentimeterIfNeeded(sarGheichiLengthValue2 , sarGheichiLength2);
	
	
	sarBiliWeightValue2 = (firstCutAvergeWightValue2 * 0.5)/100;
	sarBili2.value = sarBiliWeightValue2 = Number(sarBiliWeightValue2.toFixed(2));
	sarBiliLengthValue2 = ( billetLengthValue2 * sarBiliWeightValue2 ) / eachTwelveMeterProductWeightValue2;
	sarBiliLengthValue2 = Number(sarBiliLengthValue2.toFixed(2));
	sarBiliLength2.value = convertToCentimeterIfNeeded(sarBiliLengthValue2 , sarBiliLength2);
	
	
	tahBili2.value = tahBiliWeightValue2 = (firstCutAvergeWightValue2 * 1.5)/100;
	tahBili2.value = tahBiliWeightValue2 = Number(tahBiliWeightValue2.toFixed(2));
	tahBiliLengthValue2 = ( billetLengthValue2 * tahBiliWeightValue2 ) / eachTwelveMeterProductWeightValue2;
	tahBiliLengthValue2 = Number(tahBiliLengthValue2.toFixed(2));
	tahBiliLength2.value = convertToCentimeterIfNeeded(tahBiliLengthValue2 , tahBiliLength2);
	
	
	boradeArre2.value = boradeArreWeightValue2 = (firstCutAvergeWightValue2 * 0.1)/100;
	boradeArre2.value = boradeArreWeightValue2 = Number(boradeArreWeightValue2.toFixed(2));
	boradeArreLengthValue2 = ( billetLengthValue2 * boradeArreWeightValue2 ) / eachTwelveMeterProductWeightValue2 ; 
	boradeArreLengthValue2 = Number(boradeArreLengthValue2.toFixed(2));
	boradeArreLength2.value = convertToCentimeterIfNeeded(boradeArreLengthValue2 , boradeArreLength2);
	
	
	darsadOxid2.value = darsadOxidValue2 = (firstCutAvergeWightValue2 * 1.5)/100;
	darsadOxid2.value = darsadOxidValue2 = Number(darsadOxidValue2.toFixed(2));
	
	
	
	if( productLengthValue <= productLengthCheck ) {
		sarGheichi.value = sarGheichiLength.value = sarGheichiWeightValue = sarGheichiLengthValue = 0;
		productLengthinformation.textContent = 'قیچی متراژ ندارد';
		shear = false;
	}
	if( productLengthValue2 <= productLengthCheck ) {
		sarGheichi2.value = sarGheichiLength2.value =  sarGheichiWeightValue2 = sarGheichiLengthValue2 = 0;
		productLengthinformation2.textContent = 'قیچی متراژ ندارد';
		shear2 = false;
	} 
	
}





let sumOfPerti = () => {
	return sarBiliWeightValue + sarGheichiWeightValue + tahBiliWeightValue + boradeArreWeightValue + darsadOxidValue;
}


let sumOfPerti2 = () => {
	return sarBiliWeightValue2 + sarGheichiWeightValue2 + tahBiliWeightValue2 + boradeArreWeightValue2 + darsadOxidValue2;
}


let calculateShakhes = () => {
	shakhesValue = firstCutAvergeWightValue - sumOfPerti();
	shakhesValue = Number(shakhesValue.toFixed(2));
	shakhes.value = shakhesValue;
	
	shakhesValue2 = firstCutAvergeWightValue2 - sumOfPerti2();
	shakhesValue2 = Number(shakhesValue2.toFixed(2));
	shakhes2.value = shakhesValue2;

	doColorize();
}
















let changeEachTwelveMeterProductWeightValue = (number , withOutProcessing ) => {
	try {
		
		let value = Number(number);
		
		if( withOutProcessing == false) {
			
		} else {
			standardWeightValue = value;
		}
		
		eachTwelveMeterProductWeightValue = value;
		eachTwelveMeterProductWeight.value = value;
		
		if( withOutProcessing == false) { 
		} else {
			standardWeightValue2 = value;
		}
		eachTwelveMeterProductWeightValue2 = value;
		eachTwelveMeterProductWeight2.value = value;
		
		if( withOutProcessing ) {
			
		} else {
			makeAllProcessing(); 
		}
		
	} catch(e) {
		
	}
}





let changeEachTwelveMeterProductWeightValueSecond = (number , dontCheckNormalMessage) => {
	let value = Number(number);
	
	try {
		if( dontCheckNormalMessage == true ) {
			
		} else {
			standardWeightValue2 = value;
		}
		
		eachTwelveMeterProductWeightValue2 = value;
		eachTwelveMeterProductWeight2.value = value;
		
		makeAllProcessing();
	} catch(e) {
		
	}
}




let addOptionsToSelectedProducts = () => {
	let selectOptionValues = '';

	for( let i = 0 ; i < products.length; i++ ) {
		selectOptionValues += `<option>${products[i].name}</option>`;
	}

	selectProduct.innerHTML = selectOptionValues;
	selectProduct2.innerHTML = selectOptionValues;
}





let addOptionsToBilletDimentions = () => {
	let selectOptionValues = '';

	for( let i = 0 ; i < products.length; i++ ) {
		selectOptionValues += `<option>${dimentions[i].value}</option>`;
	}

	billetDimentions.innerHTML = selectOptionValues;
	billetDimentions2.innerHTML = selectOptionValues;
}










let calculateDarsadStandardWeight = () => {
	darsadstandardWeightValue = ( ( Number(eachTwelveMeterProductWeightValue)- standardWeightValue ) / standardWeightValue ) * 100 ;
	darsadstandardWeightValue = Number(darsadstandardWeightValue.toFixed(2));
	
	let difference = eachTwelveMeterProductWeightValue - standardWeightValue;

	let plus = '+';
	
	if( difference > 0 ) {
		plus = '+';
	} else {
		plus = '';
	}
	
	
	if( Math.abs(darsadstandardWeightValue) <= 1 ) { 
			eachTwelveMeterProductWeightInputs[0].style.color = 'white';
			eachTwelveMeterProductWeightInputs[0].style.background = 'rgb(3,107,97)';
			eachTwelveMeterProductWeightInputs[0].style.background = 'linear-gradient(90deg, rgba(3,107,97,1) 0%, rgba(6,139,46,1) 100%)';
	} else if ( Math.abs(darsadstandardWeightValue) <= 2 ) {
			eachTwelveMeterProductWeightInputs[0].style.color = 'black';
			eachTwelveMeterProductWeightInputs[0].style.background = '#ffea00';
			eachTwelveMeterProductWeightInputs[0].style.background = 'linear-gradient(90deg, #ffea00 0%, #ffc300 100%)';
	} else {
			eachTwelveMeterProductWeightInputs[0].style.color = 'white';
			eachTwelveMeterProductWeightInputs[0].style.background = 'rgb(82,3,3)';
			eachTwelveMeterProductWeightInputs[0].style.background = 'linear-gradient(90deg, rgba(82,3,3,1) 0%, rgba(140,4,4,1) 100%)';
	}
	
	
	
	
	darsadstandardWeight.textContent = plus + `${darsadstandardWeightValue}% Nominal`;


	darsadstandardWeightValue2 = ( ( Number(eachTwelveMeterProductWeightValue2)	- 
	standardWeightValue2 ) / standardWeightValue2 ) * 100 ;
	darsadstandardWeightValue2 = Number(darsadstandardWeightValue2.toFixed(2));
	
	let difference2 = eachTwelveMeterProductWeightValue2 - standardWeightValue2;

	let plus2 = '+';
	
	if( difference2 > 0 ) {
		plus2 = '+';
	} else {
		plus2 = '';
	}
	
	darsadstandardWeight2.textContent = plus2 + `${darsadstandardWeightValue2}% Nominal`;
	
	
	
	if( Math.abs(darsadstandardWeightValue2) <= 1 ) { 
			eachTwelveMeterProductWeightInputs[1].style.color = 'white';
			eachTwelveMeterProductWeightInputs[1].style.background = 'rgb(3,107,97)';
			eachTwelveMeterProductWeightInputs[1].style.background = 'linear-gradient(90deg, rgba(3,107,97,1) 0%, rgba(6,139,46,1) 100%)';
	} else if ( Math.abs(darsadstandardWeightValue2) <= 2 ) {
			eachTwelveMeterProductWeightInputs[1].style.color = 'black';
			eachTwelveMeterProductWeightInputs[1].style.background = '#ffea00';
			eachTwelveMeterProductWeightInputs[1].style.background = 'linear-gradient(90deg, #ffea00 0%, #ffc300 100%)';
	} else {
			eachTwelveMeterProductWeightInputs[1].style.color = 'white';
			eachTwelveMeterProductWeightInputs[1].style.background = 'rgb(82,3,3)';
			eachTwelveMeterProductWeightInputs[1].style.background = 'linear-gradient(90deg, rgba(82,3,3,1) 0%, rgba(140,4,4,1) 100%)';
	}
	
	
	
	

}






let calculateNormal = (dontCheckNormalMessage) => {

	counter++;
	
	normalLengthValue = ( shakhesValue - 
	( eachTwelveMeterProductWeightValue *
	numberOfTwelveMeterProductForEachBilletValue) ) / ( standardWeightValue / 12 )
	normalLengthValue = Number(normalLengthValue.toFixed(2));
	normalLength.value = normalLengthValue;
	
	
	
	normalLengthValue2 = ( shakhesValue2 - 
	( eachTwelveMeterProductWeightValue2 *
	numberOfTwelveMeterProductForEachBilletValue2) ) / ( standardWeightValue2 / 12 )
	normalLengthValue2 = Number(normalLengthValue2.toFixed(2));
	normalLength2.value = normalLengthValue2;
	
	
	
	if(dontCheckNormalMessage == true) {
		
	} else {
		if( normalLengthValue < 0 || normalLengthValue2 < 0 ) {
			if( normalLengthValue < -1 || normalLengthValue2 < -1 ) {
				showSnackBar2();
			}
		}
	}
	
	
}












let calculateDeltaL = () => {
	
}








let calculateCut1 = ( deltaL1  = 0, deltaL2 = 0 ) => {
	
	
	if( deltaL1 != 0 && deltaL2 != 0 ) {
		
		cut11Value = Number(cut11Value);
		cut12Value = Number(cut12Value);
		
		cut11Value += deltaL1; 
		cut12Value += deltaL2; 
		
		cut11Value = Number(cut11Value.toFixed(2)); 
		cut12Value = Number(cut12Value.toFixed(2)); 
		

		
		return;
	}
	
	
	
	if( ( productLengthValue / 2 ) % 12 == 0 ) {
		cut11Value = cut12Value = (productLengthValue / 2);
	} else {
		cut11Value = Math.floor(((productLengthValue / 2)/12))*12 + sarBiliLengthValue + (sarGheichiLengthValue/2) + deltaL1 ;
		cut11Value = Number(cut11Value);
		backUpOriginalProductLengthValue = originalProductLengthValue;
		//cut12Value = (productLengthValue - cut11Value) + tahBiliLengthValue2 + (sarGheichiLengthValue2/2) + boradeArreLengthValue2 + deltaL2 ; 
		cut12Value = (originalProductLengthValue - Math.floor(((productLengthValue / 2)/12))*12) + tahBiliLengthValue2 + (sarGheichiLengthValue2/2) + deltaL2 ; 
		cut12Value = Number(cut12Value);
	}
	
	
	
	
	
	
	
	
}



let calculateCut2 = ( deltaL1 = 0 , deltaL2 = 0 ) => {
	
	if( deltaL1 != 0 && deltaL2 != 0 ) {
		cut21Value = Number(cut21Value);
		cut22Value = Number(cut22Value);
		
		cut21Value += deltaL1;
		cut22Value += deltaL2; 
		
		cut21Value = Number(cut21Value.toFixed(2)); 
		cut22Value = Number(cut22Value.toFixed(2)); 
		
		return;
	}
	
	
	if( ( productLengthValue2 / 2 ) % 12 == 0 ) {
		cut21Value = cut22Value = (productLengthValue2 / 2);
	} else {
		cut21Value = Math.floor(((productLengthValue2 / 2)/12))*12 + sarBiliLengthValue + (sarGheichiLengthValue/2) + deltaL1;
		cut21Value = Number(cut21Value);
		//cut22Value = (productLengthValue2 - cut21Value) + tahBiliLengthValue2 + (sarGheichiLengthValue2/2) + boradeArreLengthValue2 + deltaL2 ; 
		cut22Value = (  originalProductLengthValue2 - Math.floor(((productLengthValue2 / 2)/12))*12  ) + tahBiliLengthValue2 + (sarGheichiLengthValue2/2) + deltaL2 ; 
		cut22Value = Number(cut22Value);
	}
	
}




let hideOnlyOneDeltaL = () => {
	for(let i=0;i<onlyOneDeltaL.length;i++) {
		onlyOneDeltaL[i].style.display = 'none';
	}
}

let showOnlyOneDeltaL = () => {
	for(let i=0;i<onlyOneDeltaL.length;i++) {
		onlyOneDeltaL[i].style.display = 'block';
	}
}

let hideTwoDeltaL = () => {
	for(let i=0;i<twoDeltaL.length;i++) {
		twoDeltaL[i].style.display = 'none';
	}
}



let showTwoDeltaL = () => {
	for(let i=0;i<twoDeltaL.length;i++) {
		twoDeltaL[i].style.display = 'block';
	}
}


let showTheSecondDeltaOrNot = ( container , delta1 , delta2 ) => {

	if( delta1 == delta2 ) {
		//container.style.display = 'none';
		hideTwoDeltaL();
		showOnlyOneDeltaL();
		document.getElementById('theOnlyDeltaValue1').innerHTML = ` ${Math.floor(delta1*100)} cm `;
		document.getElementById('theOnlyDeltaValue2').innerHTML = ` ${Math.floor(delta2*100)} cm `;
		
		
	} else {
		//container.style.display = 'flex';
		hideOnlyOneDeltaL();
		showTwoDeltaL();
	}
	
	
}





let calculateproductLengthValue = () => {
	
	

	
	productLengthValue = (12 * numberOfTwelveMeterProductForEachBilletValue) + normalLengthValue;
	originalProductLengthValue = productLengthValue = Number(productLengthValue.toFixed(2));
	

	
	if( productLengthValue <= productLengthCheck ) {
		sarGheichi.value = sarGheichiLength.value = sarGheichiWeightValue = sarGheichiLengthValue = 0;
		productLengthinformation.textContent = 'قیچی متراژ ندارد';
		shear = false;
	} else {
		calculatePerti();
		
		productLengthinformation.textContent = 'قیچی متراژ دارد';
		shear = true;
	}
	
	shearText = (shear == true ? 'دارد' : 'ندارد');
	
	productLength.value = productLengthValue;
	
	
	
	
	
	
	productLengthValue2 = (12 * numberOfTwelveMeterProductForEachBilletValue2) + normalLengthValue2;
	originalProductLengthValue2 = productLengthValue2 = Number(productLengthValue2.toFixed(2));
	
	
	

	
	
	if( productLengthValue2 <= productLengthCheck ) {
		sarGheichi2.value = sarGheichiLength2.value =  sarGheichiWeightValue2 = sarGheichiLengthValue2 = 0;
		productLengthinformation2.textContent = 'قیچی متراژ ندارد';
		shear2 = false;
	} else {
		calculatePerti();
		productLengthinformation2.textContent = 'قیچی متراژ دارد';
		shear2 = true;
		
	}
	
	
	
	
	
	
	shearText2 = (shear2 == true ? 'دارد' : 'ندارد' );
	productLength2.value = productLengthValue2;
	
	
	
	
	
	
	
	
	
	if ( shear == false ) {
		pertiLengthValue = sarGheichiLengthValue + sarBiliLengthValue + tahBiliLengthValue + boradeArreLengthValue ;
		pertiLengthValue = Number(pertiLengthValue.toFixed(2)) ;
		productLengthValue += pertiLengthValue ;

		deltaL11 = productLengthValue * alpha * deltaThetha ;
		deltaL11 = Number(deltaL11.toFixed(2)) ;

		
		
		productLengthValue += deltaL11;
		productLengthValue = Number(productLengthValue.toFixed(2));
		
		document.getElementById('deltaLValue11').innerHTML = ` ${Math.floor(deltaL11 * 100)} cm  `;


		
		pertiLengthValue = sarGheichiLengthValue + sarBiliLengthValue + tahBiliLengthValue + boradeArreLengthValue ;
		pertiLengthValue = Number(pertiLengthValue.toFixed(2));
		originalProductLengthValue += pertiLengthValue;
		
		deltaL12 = originalProductLengthValue * alpha * deltaThetha;
		deltaL12 = Number(deltaL12.toFixed(2));
		
		originalProductLengthValue += deltaL12;
		productLengthValue = Number(originalProductLengthValue.toFixed(2));
		
		
		showTheSecondDeltaOrNot( document.getElementById('seconddelta1') , deltaL11 , deltaL12);
		document.getElementById('deltaLValue12').innerHTML = `  ${Math.floor(deltaL12 * 100)} cm `;
		
		



	} else if ( shear == true ) {
		pertiLengthValue = sarGheichiLengthValue + sarBiliLengthValue + tahBiliLengthValue + boradeArreLengthValue ;
		pertiLengthValue = Number(pertiLengthValue.toFixed(2));
		productLengthValue += pertiLengthValue;

		calculateCut1();

		deltaL11 = cut11Value * alpha * deltaThetha;
		deltaL11 = Number(deltaL11.toFixed(2));

		
		productLengthValue += deltaL11;
		productLengthValue = Number(productLengthValue.toFixed(2));
		
		
		
		document.getElementById('deltaLValue11').innerHTML = ` ${Math.floor(deltaL11*100)} cm `;
		

		
		
		pertiLengthValue = sarGheichiLengthValue + sarBiliLengthValue + tahBiliLengthValue + boradeArreLengthValue ;
		pertiLengthValue = Number(pertiLengthValue.toFixed(2));
		originalProductLengthValue += pertiLengthValue;
		
		deltaL12 = cut12Value * alpha * deltaThetha;
		deltaL12 = Number(deltaL12.toFixed(2));

	
		
		originalProductLengthValue += deltaL12;
		productLengthValue = Number(originalProductLengthValue.toFixed(2));


		showTheSecondDeltaOrNot( document.getElementById('seconddelta1') , deltaL11 , deltaL12);
		document.getElementById('deltaLValue12').innerHTML = ` ${Math.floor(deltaL12*100)} cm `;

		calculateCut1(deltaL11 , deltaL12);
		
		
		

	}
	
	
	
	

	
	
	if ( shear2 == false ) {
		pertiLengthValue2 = sarGheichiLengthValue2 + sarBiliLengthValue2 + tahBiliLengthValue2 + boradeArreLengthValue2;
		pertiLengthValue2 = Number(pertiLengthValue2.toFixed(2));
		productLengthValue2 += pertiLengthValue2;

		deltaL21 = productLengthValue2 * alpha * deltaThetha;
		deltaL21 = Number(deltaL21.toFixed(2));
		
		productLengthValue2 += deltaL21;
		productLengthValue2 = Number(productLengthValue2.toFixed(2));

		document.getElementById('deltaLValue21').innerHTML = ` ${Math.floor(deltaL21 * 100)} cm `;

		
		pertiLengthValue2 = sarGheichiLengthValue2 + sarBiliLengthValue2 + tahBiliLengthValue2 + boradeArreLengthValue2;
		pertiLengthValue2 = Number(pertiLengthValue2.toFixed(2));
		originalProductLengthValue2 += pertiLengthValue2;
		
		deltaL22 = originalProductLengthValue2 * alpha * deltaThetha;
		deltaL22 = Number(deltaL22.toFixed(2));

		originalProductLengthValue2 += deltaL22;
		productLengthValue2 = Number(originalProductLengthValue2.toFixed(2));
		
		
		showTheSecondDeltaOrNot( document.getElementById('seconddelta2') , deltaL21 , deltaL22);
		document.getElementById('deltaLValue22').innerHTML = ` ${Math.floor(deltaL22 * 100)} cm `;

	} else if ( shear2 == true ) {
		
		
		pertiLengthValue2 = sarGheichiLengthValue2 + sarBiliLengthValue2 + tahBiliLengthValue2 + boradeArreLengthValue2 ;
		pertiLengthValue2 = Number(pertiLengthValue2.toFixed(2));
		productLengthValue2 += pertiLengthValue2;
		
		calculateCut2();

		deltaL21 = cut21Value * alpha * deltaThetha;
		deltaL21 = Number(deltaL21.toFixed(2));
		
		productLengthValue2 += deltaL21;
		productLengthValue2 = Number(productLengthValue2.toFixed(2));

		
		document.getElementById('deltaLValue21').innerHTML = ` ${Math.floor(deltaL21*100)} cm  `;
		
		
		pertiLengthValue2 = sarGheichiLengthValue2 + sarBiliLengthValue2 + tahBiliLengthValue2 + boradeArreLengthValue2 ;
		pertiLengthValue2 = Number(pertiLengthValue2.toFixed(2));
		originalProductLengthValue2 += pertiLengthValue2;
		
		deltaL22 = cut22Value * alpha * deltaThetha;
		deltaL22 = Number(deltaL22.toFixed(2));
		

		
		originalProductLengthValue2 += deltaL22;
		productLengthValue2 = Number(originalProductLengthValue2.toFixed(2));
		

		showTheSecondDeltaOrNot( document.getElementById('seconddelta2') , deltaL21 , deltaL22);
		document.getElementById('deltaLValue22').innerHTML = `  ${Math.floor(deltaL22*100)} cm `;

		calculateCut2(deltaL21 , deltaL22);
		
		
	}

	
	
}




let doColorize = () => {
	
	let shakhesTaeed = shakhesValue - 
	( eachTwelveMeterProductWeightValue *
	numberOfTwelveMeterProductForEachBilletValue);
	shakhesTaeed = Number(shakhesTaeed.toFixed(2));
	
	
	
	if( normalLengthValue > 0.05 && normalLengthValue < 3.5  ) {
		makeRed = true;
	} else {
		makeRed = false;
	}

	
	if( makeRed ) {
		colorize.classList.add('redShakhes');
		colorize.classList.remove('greenShakhes');
	} else {
		colorize.classList.add('greenShakhes');
		colorize.classList.remove('redShakhes');
	}

	
	let shakhesTaeed2 = shakhesValue2 - 
	( eachTwelveMeterProductWeightValue2 *
	numberOfTwelveMeterProductForEachBilletValue2) ;
	shakhesTaeed2 = Number(shakhesTaeed2.toFixed(2));
	
	
	
	if( normalLengthValue2 > 0.05 &&  normalLengthValue2 < 3.5 ) {
		makeRed2 = true;
	} else {

		makeRed2 = false;
	}
	
	
	
	
	
	if( makeRed2 ) {
		colorize2.classList.add('redShakhes');
		colorize2.classList.remove('greenShakhes');
	} else {
		colorize2.classList.add('greenShakhes');
		colorize2.classList.remove('redShakhes');
	}
	
	
}







let makeAllProcessing = (dontCheckNormalMessage) => {
	
	calculateShakhes();
	calculateBilletWeightPerMeterValue();
	


	
	if( shakhesValue && eachTwelveMeterProductWeightValue ) {
		try {
			
			let preCalculateNumberOfTwelveMeterProductForEachBillet = Number((shakhesValue / eachTwelveMeterProductWeightValue));
			
			if( Math.ceil(preCalculateNumberOfTwelveMeterProductForEachBillet) - 
				preCalculateNumberOfTwelveMeterProductForEachBillet  < 0.01 ) {
				preCalculateNumberOfTwelveMeterProductForEachBillet = Math.ceil(preCalculateNumberOfTwelveMeterProductForEachBillet);
			} else {
				preCalculateNumberOfTwelveMeterProductForEachBillet = Math.floor(preCalculateNumberOfTwelveMeterProductForEachBillet);
			}
			numberOfTwelveMeterProductForEachBillet.value = preCalculateNumberOfTwelveMeterProductForEachBillet;
			
			numberOfTwelveMeterProductForEachBilletValue = preCalculateNumberOfTwelveMeterProductForEachBillet;
		} catch(e) {
			
		}
	}
	
	
	
	
	
	if( shakhesValue2 && eachTwelveMeterProductWeightValue2 ) {
		try {
			let preCalculateNumberOfTwelveMeterProductForEachBillet2 = Number(( shakhesValue2 / eachTwelveMeterProductWeightValue2 ));
			
			if( Math.ceil(preCalculateNumberOfTwelveMeterProductForEachBillet2) - 
				preCalculateNumberOfTwelveMeterProductForEachBillet2  < 0.01 ) {
				preCalculateNumberOfTwelveMeterProductForEachBillet2 = Math.ceil(preCalculateNumberOfTwelveMeterProductForEachBillet2);
			} else {
				preCalculateNumberOfTwelveMeterProductForEachBillet2 = Math.floor(preCalculateNumberOfTwelveMeterProductForEachBillet2);
			}
			
			
			numberOfTwelveMeterProductForEachBillet2.value = preCalculateNumberOfTwelveMeterProductForEachBillet2;
			
			numberOfTwelveMeterProductForEachBilletValue2 = preCalculateNumberOfTwelveMeterProductForEachBillet2;
		} catch(e) {
			
		}
	}
	
	
	
	
	
	try {
		calculateBilletWeightPerMeterValue();
		calculatefirstCutAvergeWeightValue();
		calculatePerti();
		calculateDarsadStandardWeight();
		calculateShakhes();
		calculateNormal(dontCheckNormalMessage);
		calculateproductLengthValue();
		updateInformation();
		doColorize();
	} catch(e) {
		
	}
	
	
}





let changeStandardWeightValues = (weight) => {
	standardWeight.value = weight;
	standardWeightValue = weight;
	
	standardWeight2.value = weight;
	standardWeightValue2 = weight;
}




let selectProductWithIndex = (i) => {
	standardWeight.value = products[i].weight;
	standardWeightValue = products[i].weight;
	
	standardWeight2.value = products[i].weight;
	standardWeightValue2 = products[i].weight;
	
	productName = productName2 = products[i].name;
	
	changeEachTwelveMeterProductWeightValue(products[i].weight);
	
	makeAllProcessing();
}


let selectProductWithIndexForTesting = (i) => {
	standardWeightValue = products[i].weight;
	standardWeightValue2 = products[i].weight;
	
	productName = productName2 = products[i].name;
	
	changeEachTwelveMeterProductWeightValue(products[i].weight);
	
	makeAllProcessing();
}



let selectProductWithIndexForSecondPart = (i,dontCheckNormalMessage) => {

	
	productName2 = products[i].name;
	standardWeight2.value = products[i].weight;
	standardWeightValue2 = products[i].weight;
	
	selectProduct2.options[i].selected = true;
	
	changeEachTwelveMeterProductWeightValueSecond(products[i].weight , dontCheckNormalMessage);
	
	
	makeAllProcessing(dontCheckNormalMessage);
}


let selectProductWithIndexForSecondPartForTesting = (i,dontCheckNormalMessage) => {
	productName2 = products[i].name;
	standardWeightValue2 = products[i].weight;
	
	changeEachTwelveMeterProductWeightValueSecond(products[i].weight , dontCheckNormalMessage);
	makeAllProcessing(dontCheckNormalMessage);
}





let productName = products[0].name;
let productName2 = products[0].name;

addOptionsToSelectedProducts();

selectProductWithIndex(0);

makeAllProcessing();






let dateObj = new Date();
let m = dateObj.getUTCMonth() + 1; //months from 1-12
let d = dateObj.getUTCDate();
let y = dateObj.getUTCFullYear();

newdate = y + "/" + m + "/" + d;



//let today = document.getElementById("today");

//today.innerHTML = newdate;

//let dateContent = 'تاریخ امروز : '
let dateContent = '' ;

dateContent += moment(newdate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');


//let splitedDate = dateContent.split('/');

//dayInput.value = parseInt(splitedDate[2]);
//monthInput.value = parseInt(splitedDate[1]);


//today.innerText = dateContent;










let information1 = [];
let information2 = [];
let headerTable1 = [];
let headerTable2 = [];

let updateInformation = () => {
	
	
	headerTable1 = [
		{ name : 'تاریخ' , value : dateContent , unit : '' } , 
		{ name : 'نوع محصول' , value : productName , unit : '' } , 
		{ name : 'ابعاد بیلت' , value : `${billetDimentionsValue}*${billetDimentionsValue}` , unit : 'میلی متر' } , 
	];
	
	
	headerTable2 = [
		{ name : 'تاریخ' , value : dateContent , unit : '' } , 
		{ name : 'نوع محصول' , value : productName2 , unit : '' } , 
		{ name : 'ابعاد بیلت' , value : `${billetDimentionsValue2}*${billetDimentionsValue2}` , unit : 'میلی متر' } , 
	];
	
	
	information1 = [
		{ name : 'طول برش اول ( فیکس )' , value : firstCutLengthValue , unit : 'متر' } , 
		{ name : 'میانگین وزن برش اول' , value : firstCutAvergeWightValue , unit : 'کیلوگرم' } , 
		{ name : 'طول محصول' , value : productLengthValue , unit : 'متر' } , 
		{ name : 'طول نرمال' , value : normalLengthValue , unit : 'متر' } , 
		{ name : 'تعداد شاخه ی 12 متری محصول برای یک بیلت' , value : numberOfTwelveMeterProductForEachBilletValue , unit : 'شاخه' } , 
		{ name : 'وزن استاندارد' , value : standardWeightValue , unit : 'کیلوگرم' } , 
		{ name : 'وزن هر شاخه ی 12 متری محصول' , value : eachTwelveMeterProductWeightValue , unit : 'کیلوگرم' } , 
		{ name : 'Nominal' , value : darsadstandardWeightValue , unit : '' } , 
		{ name : 'قیچی متراژ' , value : shearText , unit : '' } , 
		{ name : 'تناژ' , value : tonag1 , unit : 'تن' } , 
		{ name : 'تعداد بیلت های مورد نیاز برای این محصول' , value : pcs1 , unit : 'شاخه' } , 
		
	];
	
	
	information2 = [
		{ name : 'طول برش دوم ( متغیر )' , value : firstCutLengthValue2 , unit : 'متر' } , 
		{ name : 'میانگین وزن برش دوم' , value : firstCutAvergeWightValue2 , unit : 'کیلوگرم' } , 
		{ name : 'طول محصول' , value : productLengthValue2 , unit : 'متر' } , 
		{ name : 'طول نرمال' , value : normalLengthValue2 , unit : 'متر' } , 
		{ name : 'تعداد شاخه ی 12 متری محصول برای یک بیلت' , value : numberOfTwelveMeterProductForEachBilletValue2 , unit : 'شاخه' } , 
		{ name : 'وزن استاندارد' , value : standardWeightValue2 , unit : 'کیلوگرم' } , 
		{ name : 'وزن هر شاخه ی 12 متری محصول' , value : eachTwelveMeterProductWeightValue2 , unit : 'کیلوگرم' } , 
		{ name : 'Nominal' , value : darsadstandardWeightValue2 , unit : '' } , 
		{ name : 'قیچی متراژ' , value : shearText2 , unit : '' } , 
		{ name : 'تناژ' , value : tonag2 , unit : 'تن' } , 
		{ name : 'تعداد بیلت های مورد نیاز برای این محصول' , value : pcs2 , unit : 'شاخه' } , 
		
	];
		
	
}











let printCutValues = () => {
	
	
	if(shear == true) { 
		
		cut11Value = cut11Value.toString().replace('.', '/');
		cut12Value = cut12Value.toString().replace('.', '/');
	
		let temp11 = `
		<div>برش اول ${cut11Value} متر</div>
		`;
		
		let temp12 = `
		<div>برش دوم ${cut12Value} متر</div>
		`;
		
		firstCell_1.innerHTML = temp11;
		secondCell_1.innerHTML = temp12;
		
		cut11Value = Number(cut11Value.replace('/','.'));
		cut12Value = Number(cut12Value.replace('/','.'));
	}
	
	
	
	if( shear2 == true ) {
		
		cut21Value = cut21Value.toString().replace('.', '/');
		cut22Value = cut22Value.toString().replace('.', '/');
		
		let temp21 = `
		<div>برش اول ${cut21Value} متر</div>
		`;
		
		let temp22 = `
		<div>برش دوم ${cut22Value} متر</div>
		`;
		
		firstCell_2.innerHTML = temp21;
		secondCell_2.innerHTML = temp22;
		
		
		cut21Value = Number(cut21Value.replace('/','.'));
		cut22Value = Number(cut22Value.replace('/','.'));
	}
	

}



let addCuttedValuesToInput = () => {
	
}









let beforePrintAssignments = () => {
	
	

	
		
	finalResult = document.getElementById("finalResult");
	finalFix = document.getElementById("finalFix");
	
	if( shear == true ) {
		cut11 = document.getElementById("cut11");
		cut12 = document.getElementById("cut12");
		
		firstCell_1 = document.getElementById("firstCell_1");
		secondCell_1 = document.getElementById("secondCell_1");
		
		cut11.addEventListener('keyup' , (e) => {
		cut11Value = Number(e.target.value).toFixed(2);
		});

		cut12.addEventListener('keyup' , (e) => {
			cut12Value = Number(e.target.value).toFixed(2);
		});
		
		//calculateCut1(deltaL11,deltaL12);


		cut11.value = cut11Value ;
		cut12.value = cut12Value ;
		
		
		
		
	}
	
	
	if( shear2 == true ) { 
	
		
		cut21 = document.getElementById("cut21");
		cut22 = document.getElementById("cut22");
		

	
		firstCell_2 = document.getElementById("firstCell_2");
		secondCell_2 = document.getElementById("secondCell_2");


		cut21.addEventListener('keyup' , (e) => {
			cut21Value = Number(e.target.value).toFixed(2);
		});

		cut22.addEventListener('keyup' , (e) => {
			cut22Value = Number(e.target.value).toFixed(2);
		});
		
		
		//calculateCut2(deltaL21, deltaL22);
	
		
		cut21.value = cut21Value ;
		cut22.value = cut22Value ;
	}
		
	let mainHeader = document.getElementById('mainHeader');

	finalFix.addEventListener('click' , () => {
		printCutValues();
		
		nav.style.display = 'none';
		finalResult.style.display = 'none';
		switchContainer.style.display = "none";
		mainHeader.classList.add('flexCenter');
		contactUs.style.display = 'none';
		
		document.getElementById("mainTitle").classList.remove("title");
		document.getElementById("mainTitle").classList.remove("titleForPrint");
	});
	
	
	/*
	if( cut11Value && cut12Value  ) {
		//printCutValues();
		addCuttedValuesToInput();
	}
	*/
}




let swalFire = async () => {
	

	
	if( productName == productName2 ) {
		Swal.fire({
		  title: 'تناژ کل تولید را وارد کنید',
		  input: 'text',
		  inputAttributes: {
			autocapitalize: 'off'
		  },
		  inputPlaceholder : 'تناژ کل',
		  inputValue : '1000',
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  showLoaderOnConfirm: true,
		  preConfirm: (data) => {
			  
			  if(Number(data) <= 0) {
					throw new Error(response.statusText)
				} else {
					totalTonag = Number(data);
					
					pcs1 = ( (totalTonag * 1000) / billetAverageWeightValue ) ;
					pcs1 = Math.ceil(Number(pcs1));
					// PCS 2
					pcs2 = ((totalTonag * 1000 ) / billetAverageWeightValue2 ) ;
					pcs2 = Math.ceil(Number(pcs2));
					tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
					tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
					
					makePrePrintPageVisible();

					print.style.display = "none";
					whichTonagSelectListItem.style.display = "none";
					//switchContainer.style.display = "none";
					back.style.display = "block";
					finalResult.style.display = "flex";
					
				}
			try {
				
				
				

			} catch (e) {
				Swal.showValidationMessage(
				  `خطا در مقداردهی`
				)
			}
		  },
		  //allowOutsideClick: () => !Swal.isLoading()
		});
	} else {
		/*
		let { value : formValues } = await Swal.fire({
		  title: 'مقادیر تناژ برای محصول اول و دوم',
		  html:
			`<div class="padding">
				<input 
				id="swal-input1" 
				placeholder="تناژ کل"
				value='${placeHolderValuesForTonag[0] == undefined || placeHolderValuesForTonag[0] == '' ? '' : placeHolderValuesForTonag[0]}'
				class="swal2-input"
				>` +
				`<input 
				id="swal-input2" 
				placeholder="تناژ محصول اول"
				value='${placeHolderValuesForTonag[1] == undefined || placeHolderValuesForTonag[1] == '' ? '' : placeHolderValuesForTonag[1]}'
				class="swal2-input"
				>
			</div>`,
		  focusConfirm: true,
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  preConfirm: () => {
			
			let val1 = document.getElementById('swal-input1').value;
			let val2 = document.getElementById('swal-input2').value
			if( val1 == '' || val2 == '' ) {
				Swal.showValidationMessage(
				  `مقادیر تناژ را وارد کنید`
				)
			} else {
				
			}
			
			return [ 
				document.getElementById('swal-input1').value , 
				document.getElementById('swal-input2').value 
			];
		  }
		})
		*/
		
		Swal.fire({
		  title: 'تناژ محصول اول را وارد کنید',
		  input: 'text',
		  inputAttributes: {
			autocapitalize: 'off'
		  },
		  inputPlaceholder : 'تناژ محصول اول',
		  inputValue : '1000',
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  showLoaderOnConfirm: true,
		  preConfirm: (data) => {
			  
			  if(Number(data) <= 0) {
					throw new Error(response.statusText)
				} else {

					tonag1 = Number(data);
					
					
					
					// PCS 1
					pcs1 = ((tonag1 * 1000 ) / firstCutAvergeWightValue) ;
					pcs2 = pcs1 = Math.ceil(Number(pcs1));
					
					
					tonag2 = Math.floor((pcs2 * firstCutAvergeWightValue2)/1000) ;
					
					// PCS 2
					//pcs2 = ((tonag2 * 1000 ) / firstCutAvergeWightValue2) ;
					//pcs2 = Math.ceil(Number(pcs2));
					//tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
					//tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
					makePrePrintPageVisible();

					print.style.display = "none";
					whichTonagSelectListItem.style.display = "none";
					//switchContainer.style.display = "none";
					back.style.display = "block";
					finalResult.style.display = "flex";
					
				}
			try {
				
				
				

			} catch (e) {
				Swal.showValidationMessage(
				  `خطا در مقداردهی`
				)
			}
		  },
		  //allowOutsideClick: () => !Swal.isLoading()
		});
		
		
		/*
		
		try {
			for( let i=0;i<formValues.length;i++){
				formValues[i] = Number(formValues[i]);
				placeHolderValuesForTonag[i] = formValues[i];
			}
			
		} catch(e) {
			
		}
		
		let errorHappened = false;
		
		if (formValues !== undefined) {
			
			if ( formValues[0] == 0 && formValues[1] == 0 ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ محصولات را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else if( formValues[0] == 0  ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ کل را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else if ( formValues[1] == 0 ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ محصول اول را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else {
				//totalTonag = Number(result.value);
				//tonag1 = formValues[0];
				//tonag2 = formValues[1];
				totalTonag = formValues[0];
				tonag1 = formValues[1];
				
				
				
				// PCS 1
				pcs1 = ((tonag1 * 1000 ) / firstCutAvergeWightValue) ;
				pcs2 = pcs1 = Math.ceil(Number(pcs1));
				
				
				tonag2 = (pcs2 * firstCutAvergeWightValue2)/1000 ;
				
				// PCS 2
				//pcs2 = ((tonag2 * 1000 ) / firstCutAvergeWightValue2) ;
				//pcs2 = Math.ceil(Number(pcs2));
				//tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
				//tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
				makePrePrintPageVisible();

				print.style.display = "none";
				back.style.display = "block";
				finalResult.style.display = "flex";
			}

			
			

		}
		
		*/
		
	}
	
	
	
}























let swalFireForKhalesTonag = async () => {
	

	
	if( productName == productName2 ) {
		Swal.fire({
		  title: 'تناژ خالص تولید را وارد کنید',
		  input: 'text',
		  inputAttributes: {
			autocapitalize: 'off'
		  },
		  inputPlaceholder : 'تناژ خالص',
		  inputValue : '1000',
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  showLoaderOnConfirm: true,
		  preConfirm: (data) => {
			  
			  if(Number(data) <= 0) {
					throw new Error(response.statusText)
				} else {
					khalesTonag = Number(data);
					pcs2 = pcs1 = khalesTonag / ( ( eachTwelveMeterProductWeightValue * numberOfTwelveMeterProductForEachBilletValue) / 1000 ) 
					
					pcs2 = pcs1 = (pcs1/2).toFixed(0);
					
					
					/*
					pcs1 = ( (totalTonag * 1000) / billetAverageWeightValue ) ;
					pcs1 = Math.ceil(Number(pcs1));
					// PCS 2
					pcs2 = ((totalTonag * 1000 ) / billetAverageWeightValue2 ) ;
					pcs2 = Math.ceil(Number(pcs2));
					*/
					
					tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
					tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
					
					makePrePrintPageVisible();

					print.style.display = "none";
					whichTonagSelectListItem.style.display = "none";
					//switchContainer.style.display = "none";
					back.style.display = "block";
					finalResult.style.display = "flex";
					
				}
			try {
				
				
				

			} catch (e) {
				Swal.showValidationMessage(
				  `خطا در مقداردهی`
				)
			}
		  },
		  //allowOutsideClick: () => !Swal.isLoading()
		});
	} else {
		/*
		let { value : formValues } = await Swal.fire({
		  title: 'مقادیر تناژ برای محصول اول و دوم',
		  html:
			`<div class="padding">
				<input 
				id="swal-input1" 
				placeholder="تناژ کل"
				value='${placeHolderValuesForTonag[0] == undefined || placeHolderValuesForTonag[0] == '' ? '' : placeHolderValuesForTonag[0]}'
				class="swal2-input"
				>` +
				`<input 
				id="swal-input2" 
				placeholder="تناژ محصول اول"
				value='${placeHolderValuesForTonag[1] == undefined || placeHolderValuesForTonag[1] == '' ? '' : placeHolderValuesForTonag[1]}'
				class="swal2-input"
				>
			</div>`,
		  focusConfirm: true,
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  preConfirm: () => {
			
			let val1 = document.getElementById('swal-input1').value;
			let val2 = document.getElementById('swal-input2').value
			if( val1 == '' || val2 == '' ) {
				Swal.showValidationMessage(
				  `مقادیر تناژ را وارد کنید`
				)
			} else {
				
			}
			
			return [ 
				document.getElementById('swal-input1').value , 
				document.getElementById('swal-input2').value 
			];
		  }
		})
		*/
		
		Swal.fire({
		  title: 'تناژ خالص محصول اول را وارد کنید',
		  input: 'text',
		  inputAttributes: {
			autocapitalize: 'off'
		  },
		  inputPlaceholder : 'تناژ خالص محصول اول',
		  inputValue : '1000',
		  showCloseButton: true,
		  showCancelButton: false,
		  confirmButtonText: 'تایید',
		  cancelButtonText: 'برگشت',
		  showLoaderOnConfirm: true,
		  preConfirm: (data) => {
			  
			  if(Number(data) <= 0) {
					throw new Error(response.statusText)
				} else {

					khalesTonag1 = Number(data);
					
					pcs2 = pcs1 = khalesTonag1 / ( ( eachTwelveMeterProductWeightValue * numberOfTwelveMeterProductForEachBilletValue) / 1000 ) 
					
					pcs2 = pcs1 = (pcs1/2).toFixed(0);
					
					/*
					// PCS 1
					pcs1 = ((tonag1 * 1000 ) / firstCutAvergeWightValue) ;
					pcs2 = pcs1 = Math.ceil(Number(pcs1));
					*/
					tonag1 = Math.floor((pcs1 * firstCutAvergeWightValue)/1000) ;
					tonag2 = Math.floor((pcs2 * firstCutAvergeWightValue2)/1000) ;
					
					// PCS 2
					//pcs2 = ((tonag2 * 1000 ) / firstCutAvergeWightValue2) ;
					//pcs2 = Math.ceil(Number(pcs2));
					//tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
					//tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
					makePrePrintPageVisible();

					print.style.display = "none";
					whichTonagSelectListItem.style.display = "none";
					//switchContainer.style.display = "none";
					back.style.display = "block";
					finalResult.style.display = "flex";
					
				}
			try {
				
				
				

			} catch (e) {
				Swal.showValidationMessage(
				  `خطا در مقداردهی`
				)
			}
		  },
		  //allowOutsideClick: () => !Swal.isLoading()
		});
		
		
		/*
		
		try {
			for( let i=0;i<formValues.length;i++){
				formValues[i] = Number(formValues[i]);
				placeHolderValuesForTonag[i] = formValues[i];
			}
		} catch(e) {
			
		}
		
		let errorHappened = false;
		
		if (formValues !== undefined) {
			
			if ( formValues[0] == 0 && formValues[1] == 0 ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ محصولات را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else if( formValues[0] == 0  ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ کل را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else if ( formValues[1] == 0 ) {
				Swal.fire({
				  icon : 'error',
				  title : `لطفاً تناژ محصول اول را وارد کنید` ,
				  showCloseButton : true,
				  showCancelButton : false,
				  confirmButtonText : 'بازگشت',
				  preConfirm : () => swalFire(),
				});
				errorHappened = true;
			} else {
				//totalTonag = Number(result.value);
				//tonag1 = formValues[0];
				//tonag2 = formValues[1];
				totalTonag = formValues[0];
				tonag1 = formValues[1];
				
				
				
				// PCS 1
				pcs1 = ((tonag1 * 1000 ) / firstCutAvergeWightValue) ;
				pcs2 = pcs1 = Math.ceil(Number(pcs1));
				
				
				tonag2 = (pcs2 * firstCutAvergeWightValue2)/1000 ;
				
				// PCS 2
				//pcs2 = ((tonag2 * 1000 ) / firstCutAvergeWightValue2) ;
				//pcs2 = Math.ceil(Number(pcs2));
				//tonag1 = ((pcs1 * firstCutAvergeWightValue)/1000).toFixed(3) ;
				//tonag2 = ((pcs2 * firstCutAvergeWightValue2)/1000).toFixed(3) ;
				makePrePrintPageVisible();

				print.style.display = "none";
				back.style.display = "block";
				finalResult.style.display = "flex";
			}

			
			

		}
		
		*/
		
	}
	
	
	
}



















let makePrePrintPageVisible = () => {
	mainPage.style.display = "none";
	footer.style.display = "flex";
	//lastFooter.style.display = 'none';
	
	updateInformation();
	
	makeHeaderTable(headerTable1, 1);
	makeHeaderTable(headerTable2, 2);
	makeTable1(information1 , 1);
	makeTable1(information2 , 2);
	
	table1.innerHTML = table1Content;
	table2.innerHTML = table2Content;
	tableHeader1.innerHTML = tableHeaderContent1;
	tableHeader2.innerHTML = tableHeaderContent2;
	
	beforePrintAssignments();
}





let makeTable1 = ( info , number ) => {
	table = `<table class="informationTable">`;
	
	
	table += `<tbody>`
	
	for(let i=0;i<info.length;i++) {
		
		
		//
		
		if( info[i].name == 'قیچی متراژ' && info[i].value == 'دارد' ) {
			table += `<tr>`;
			table += `<td colspan="2" >${info[i].name} ( ${info[i].value.toString().replace('.', '/') } )</td>`;
			//table += `<td>${info[i].value} ${info[i].unit}</td>`;
			
			table += `
			<td id="verticalCell"> 
			<div id="firstCell_${number}">
			<input class="printInput" id="cut${number}1" type="text" 
			placeholder="برش اول" /> 
			متر
			</div>
			<div id="secondCell_${number}">
			<input class="printInput" id="cut${number}2" type="text" 
			placeholder="برش دوم" />  
			متر
			</div>
			</td>`;
			
			
			table += `</tr>`;
		} else if( info[i].name == 'Nominal' ) {
			table += `<tr class="english">`;
			table += `<td colspan="2"></td>`;
			//if( darsadstandardWeightValue >= 0) {
			if( info[i].value >= 0 ) {
				table += `<td  class="margin">+${info[i].value}% Nominal</td>`;
			} else {
				table += `<td  class="margin">${info[i].value}% Nominal</td>`;
			}
			table += `</tr>`;
		} else if( info[i].name == 'وزن هر شاخه ی 12 متری محصول' ) {
			table += `<tr>`;
			table += `<td colspan="2" class="noBorder" >${info[i].name}</td>`;
			table += `<td class="noBorder" >${info[i].value.toString().replace('.', '/')} ${info[i].unit}</td>`;
			table += `</tr>`;
		} else {
			table += `<tr>`;
			table += `<td colspan="2">${info[i].name}</td>`;
			table += `<td class="valueContainer">
			
			<span class="spanDirection">${info[i].value.toString().replace('.', '/')}</span>
			<span class="spanUnit">${info[i].unit}</span>
			</td>`;
			table += `</tr>`;
		}
		
		
	}
	
	table += `</tbody>`;
	table += `</table>`;
	
	
	if( number == 1 ) {
		table1Content = table;
	} else if ( number == 2 ) {
		table2Content = table;
	}
}


let makeHeaderTable = (theHeaderTable , number) => {
	let tableHeaderContent = '' ;
	
	tableHeaderContent = `<table class="informationTable">`;
	
	
	tableHeaderContent += `<tbody>`;
	
	tableHeaderContent += `<tr>`;
	for(let i=0;i<theHeaderTable.length;i++) {
		tableHeaderContent += `<th>${theHeaderTable[i].name}</th>`;
	}
	tableHeaderContent += `</tr>`;
	tableHeaderContent += `<tr>`;
	for(let i=0;i<theHeaderTable.length;i++) {
		if( theHeaderTable[i].name == 'نوع محصول'
		// || 	theHeaderTable[i].name == 'ابعاد بیلت'
		) {
			tableHeaderContent += `<td class="english center">${theHeaderTable[i].value.toString().replace('.', '/')} ${theHeaderTable[i].unit}</td>`;
		} else {
			tableHeaderContent += `<td class="center">${theHeaderTable[i].value.toString().replace('.', '/')} ${theHeaderTable[i].unit}</td>`;
		}			
	}
	tableHeaderContent += `</tr>`;
	tableHeaderContent += `
	<tr>
	<td style="font-weight : bold">
	کارخانه سازنده بیلت
	</td>
	<td colspan='2' class="center">
	${factoryName}
	</td>
	</tr>
	`;
	
	tableHeaderContent += `</tbody>`;
	tableHeaderContent += `</table>`;
	
	
	if( number == 1 ) {
		tableHeaderContent1 = tableHeaderContent;
	} else if ( number == 2 ) {
		tableHeaderContent2 = tableHeaderContent;
	}		
}






loadingText.innerHTML = 
	`
	در حال جستجوی
	بهترین حالت برش و
	وزن محصول برای 
	`;
productLoadingName.innerHTML =  `${productName}`;

search1.addEventListener( 'click' , () => {
	searching.style.display = "flex";
	
	
	loadingText.innerHTML = 
	`
	در حال جستجوی
	بهترین حالت برش و
	وزن محصول برای 
	`;
	
	
	productLoadingName.innerHTML =  `${productName}`;
	
	let firstPromise = new Promise( (resolve, reject) => {
	  setTimeout( () => searchForBestResult() , 500);
	});
	
	
}) ;






search2.addEventListener( 'click' , () => {
	searching.style.display = "flex";
	//setTimeout( () => searchForBestResult() , 500);
	

	loadingText.innerHTML = 
	`
	<div class="center">
	در حال جستجوی
	بهترین لیست محصولات
	</div>
	<div class="center">
	برای
	برش دوم بیلت
	با اندازه ی
	<span class="english">${firstCutLengthValue2}</span>
	</div>
	`;
	

	productLoadingName.innerHTML =  ``;
	
	
	let secondPromise = new Promise( (resolve, reject) => {
	  setTimeout( () => searchTheBestProductForSecondPart() , 500);
	});
	
	
}) ;



let foundIt = false;
let findingCounter = 0;
let listOfPossibleEachTweleveMeterProductWeightValue = [];
let database = [];

let exitSearching = false;


let searchForTheZeroNormal = (
	startLength ,
	finishLength ,
	startStandardWeightValue ,
	finishStandardWeightValue
) => {
	database = [];
	for(let i = startLength ; i >= finishLength ; i -= 0.05 ) {
		changeFirstCutLengthValue(Number(i.toFixed(2))); 
		//calculateFirstCutLengthValue2();
		
		for( let j = startStandardWeightValue ; j >= finishStandardWeightValue ; j-= 0.01 ) {
			
			findingCounter++;
			changeEachTwelveMeterProductWeightValue( Number(j.toFixed(3)) , false );
			makeAllProcessing(true);
			
			//if( normalLengthValue == -0 || normalLengthValue == 0 ) {
			if( Math.abs(normalLengthValue) == 0 ) {
				database[database.length] = {
					firstCutLengthValue : firstCutLengthValue ,
					normalLengthValue : normalLengthValue ,
					productLengthValue : productLengthValue ,
					standardWeightValue : standardWeightValue ,
					eachTwelveMeterProductWeightValue : eachTwelveMeterProductWeightValue ,
					shakhesValue : shakhesValue ,
					numberOfTwelveMeterProductForEachBilletValue : numberOfTwelveMeterProductForEachBilletValue ,
					nominal : darsadstandardWeightValue ,
				}
				
				//firstCutLength.value = firstCutLengthValue;
				//eachTwelveMeterProductWeight.value = eachTwelveMeterProductWeightValue;
				foundIt = true;
				searching.style.display = "none";
				//break;
			}
		}
	}
}






let database2 = [];

let NormalToleranceForSecondProduct = 0;


let searchForTheZeroNormalForSecondProduct = (
	startStandardWeightValue ,
	finishStandardWeightValue
) => {
	database2 = [];
	
	for( let j = startStandardWeightValue ; j >= finishStandardWeightValue ; j-= 0.01 ) {
			
		findingCounter++;
		changeEachTwelveMeterProductWeightValueSecond( Number(j.toFixed(3)) , true );
		makeAllProcessing(true);
		
		//if( normalLengthValue == -0 || normalLengthValue == 0 ) {
		if( Math.abs(normalLengthValue2) == NormalToleranceForSecondProduct ) {
			database2[database2.length] = {
				firstCutLengthValue2 : firstCutLengthValue2 ,
				normalLengthValue2 : normalLengthValue2 ,
				productLengthValue2 : productLengthValue2 ,
				standardWeightValue2 : standardWeightValue2 ,
				eachTwelveMeterProductWeightValue2 : eachTwelveMeterProductWeightValue2 ,
				shakhesValue2 : shakhesValue2 ,
				numberOfTwelveMeterProductForEachBilletValue2 : numberOfTwelveMeterProductForEachBilletValue2 ,
				nominal2 : darsadstandardWeightValue2 ,
			}
			
			//firstCutLength.value = firstCutLengthValue;
			//eachTwelveMeterProductWeight.value = eachTwelveMeterProductWeightValue;
			foundIt = true;
			searching.style.display = "none";
			//break;
		}
	}
		
	/*	
	for(let i = startLength ; i >= finishLength ; i -= 0.05 ) {
		//changeFirstCutLengthValue(Number(i.toFixed(2))); 
		//calculateFirstCutLengthValue2();
	}
	*/
	
}







let searchDatabaseForBestResult = (searchingDatabase) => {
	
	let minimunNormalIndex ;
	let minimumDifference ;
	let minimumNominal ;
	let normalDifferenceFromZero ;
	let nominalDifferenceFromZero ;
	
	
	
	for( let i=0; i < searchingDatabase.length ; i++ ) {
		normalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].normalLengthValue );
		nominalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].nominal );
		
		if ( i == 0 ) { 
			minimunNormalIndex = i;
			minimumDifference = normalDifferenceFromZero;
			minimumNominal = nominalDifferenceFromZero;
		} else if ( normalDifferenceFromZero <= minimumDifference ) {
			if ( nominalDifferenceFromZero <= minimumNominal ) {
				minimunNormalIndex = i;
				minimumDifference = normalDifferenceFromZero;
				minimumNominal = nominalDifferenceFromZero;
			}				
		}
	}

	
	return minimunNormalIndex;
}






let searchDatabaseForBestResult2 = (searchingDatabase , getIndex ) => {
	
	let minimunNormalIndex ;
	let minimumDifference ;
	let minimumNominal ;
	
	
	let normalDifferenceFromZero ;
	let nominalDifferenceFromZero ;
	
	
	
	for( let i=0; i < searchingDatabase.length ; i++ ) {
		normalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].normalLengthValue2 );
		nominalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].nominal2 );
		
		if ( i == 0 ) { 
			if( getIndex == true ) {
				minimunNormalIndex = searchingDatabase[i].index;
			} else {
				minimunNormalIndex = i;
			}
			minimumDifference = normalDifferenceFromZero;
			minimumNominal = nominalDifferenceFromZero;
		} else if ( normalDifferenceFromZero <= minimumDifference ) {
			//if ( nominalDifferenceFromZero < minimumNominal ) {
				if( getIndex == true ) {
					minimunNormalIndex = searchingDatabase[i].index;
				} else {
					minimunNormalIndex = i;
				}
				minimumDifference = normalDifferenceFromZero;
				minimumNominal = nominalDifferenceFromZero ;
			//}
		}
	}
	
	return minimunNormalIndex;
}










let searchFinalDatabaseForBestResult2 = (searchingDatabase , getIndex ) => {
	
	let minimunNormalIndex ;
	let minimumDifference ;
	let minimumNominal ;
	
	
	let normalDifferenceFromZero ;
	let nominalDifferenceFromZero ;
	
	
	
	for( let i=0; i < searchingDatabase.length ; i++ ) {
		normalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].normalLengthValue2 );
		nominalDifferenceFromZero = Math.abs(  0 - searchingDatabase[i].nominal2 );
		
		if ( i == 0 ) { 
			if( getIndex == true ) {
				minimunNormalIndex = searchingDatabase[i].index;
			} else {
				minimunNormalIndex = i;
			}
			minimumDifference = normalDifferenceFromZero;
			minimumNominal = nominalDifferenceFromZero;
		} else if ( normalDifferenceFromZero <= minimumDifference ) {
			if ( nominalDifferenceFromZero <= minimumNominal ) {
				if( getIndex == true ) {
					minimunNormalIndex = searchingDatabase[i].index;
				} else {
					minimunNormalIndex = i;
				}
				minimumDifference = normalDifferenceFromZero;
				minimumNominal = nominalDifferenceFromZero ;
			}
		}
	}
	
	return minimunNormalIndex;
}



let changeSliderRangeValues = (min , max) => {
	minimunNominalFromSliderRange = min / 100;
	maximumNominalFromSliderRange = max / 100;
	
	
}





let searchForBestResult = () => {
	
	let startLength = 6.25;
	let finishLength = 5.4;


	let startPercent = maximumNominalFromSliderRange;
	let finishPercent = minimunNominalFromSliderRange;
	
	let startStandardWeightValue = standardWeightValue + (  standardWeightValue * startPercent ) ;
	let finishStandardWeightValue = standardWeightValue + ( standardWeightValue * finishPercent ) ;
	

	startStandardWeightValue = Number(startStandardWeightValue.toFixed(3)) ; 
	finishStandardWeightValue = Number(finishStandardWeightValue.toFixed(3)) ; 
	
	

	


	searchForTheZeroNormal( 
		startLength , 
		finishLength , 
		startStandardWeightValue , 
		finishStandardWeightValue , 
	);
	/*
	if( foundIt == false ) {
		searchForTheZeroNormal( 
			startLength , 
			finishLength , 
			startStandardWeightValue , 
			standardWeightValue , 
		);
	}
	*/
	
	//console.log(database);
	
	
	if(database.length > 0 ) {
		

		
		let backUpDatabase = [];
		let tempCell ;
		for(let i=0;i<database.length;i++) {
			if(i == 0) {
				tempCell = database[i]
				backUpDatabase.push(database[i]);
			} else {
				if( tempCell.firstCutLengthValue == database[i].firstCutLengthValue ) {
					continue;
				} else {
					backUpDatabase.push(database[i]);
				}
			}
			tempCell = database[i];
		}
		
		database = backUpDatabase;
		
		sortSelectionTableForFirstPart(database);
		closeTheSearchingLoader();
		makeTableForBestSelectionForFirstPart(database);
		
		initializeAfterBestProductTableForFirst();
		
	} else {
		
	}
	
	
	
	
	/*
	let bestResultIndex = searchDatabaseForBestResult(database);
	
	
	
	if( bestResultIndex == undefined ) {
		changeFirstCutLengthValue(6);
		changeEachTwelveMeterProductWeightValue( standardWeightValue , false );
	} else {
		changeFirstCutLengthValue(database[bestResultIndex].firstCutLengthValue); 
		changeEachTwelveMeterProductWeightValue( database[bestResultIndex].eachTwelveMeterProductWeightValue , false );
	}
	
	makeAllProcessing(true);
	
	if( foundIt == false ) {
		searching.style.display = "none";
		changeFirstCutLengthValue(6);
		changeEachTwelveMeterProductWeightValue(standardWeightValue);
	}
	
	*/
	
}






let printStatisticsForMe = () => {
	
	
	/*
	console.table({
		pertiLengthValue , 
		pertiLengthValue2
	});
	*/
	
	
	console.table({
		darsadstandardWeightValue ,
		darsadstandardWeightValue2
	});
	
	
	/*
	
	console.table({
		productLength : productLengthValue ,
		productLengthValue : Math.floor(((productLengthValue / 2)/12))*12 ,
		sarGheichiWeightValue ,
		sarGheichiLengthValue ,
		sarBiliWeightValue , 
		sarBiliLengthValue ,
		tahBiliWeightValue ,
		tahBiliLengthValue ,
		boradeArreWeightValue ,
		boradeArreLengthValue , 
	});
	
	
	
	console.table({
		originalProductLengthValue : backUpOriginalProductLengthValue ,
		productLengthValue : Math.floor(((productLengthValue / 2)/12))*12 ,
		sarGheichiWeightValue2 ,
		sarGheichiLengthValue2 ,
		sarBiliWeightValue2 , 
		sarBiliLengthValue2 ,
		tahBiliWeightValue2 ,
		tahBiliLengthValue2 ,
		boradeArreWeightValue2 ,
		boradeArreLengthValue2 , 
	});
	
	*/
	
	/*
	console.table({
		productLengthValue ,
		originalProductLengthValue ,
		productLengthValue2 ,
		originalProductLengthValue2 ,
		pertiLengthValue ,
		pertiLengthValue2
	});
	
	
	console.table({
		cut21Value ,
		productLengthValue2 : Math.floor(((productLengthValue2 / 2)/12))*12 ,
		sarBiliLengthValue ,
		sarGheichiLengthValue : (sarGheichiLengthValue/2) ,
		boradeArreLengthValue ,
		deltaL11,
	});
	
	
	console.table({
		cut22Value ,
		originalProductLengthValue2 ,
		productLengthValue2 : Math.floor(((productLengthValue2 / 2)/12))*12 , 
		tahBiliLengthValue2 ,
		sarGheichi2 : (sarGheichiLengthValue2/2) ,
		boradeArreLengthValue2 ,
		deltaL22
	});
	*/
	
	
	
	/*
	console.table({
		originalProductLengthValue : originalProductLengthValue ,
		productLengthValue , 
		sarGheichiLengthValue ,
		sarBiliLengthValue ,
		tahBiliLengthValue ,
		boradeArreLengthValue ,
		pertiLengthValue ,
		deltaL ,
		normalLengthValue ,
	});
	
	
	console.table({
		originalProductLengthValue : originalProductLengthValue2 ,
		productLengthValue2 , 
		sarGheichiLengthValue2 ,
		sarBiliLengthValue2 ,
		tahBiliLengthValue2 ,
		boradeArreLengthValue2 ,
		pertiLengthValue2 ,
		deltaL2 ,
		normalLengthValue2 ,
	});
	
	*/
}








//let minimunNominalFromSliderRange = 2.5 / 100;
//let maximumNominalFromSliderRange = - 2 / 100;



let minimunNominalFromSliderRange = - 4 / 100;
let maximumNominalFromSliderRange = 4 / 100;



let searchForBestResultForSecondProduct = () => {
	
	let startPercent = maximumNominalFromSliderRange;
	let finishPercent = minimunNominalFromSliderRange;
	
	let startStandardWeightValue = standardWeightValue2 + (  standardWeightValue2 * startPercent ) ;
	let finishStandardWeightValue = standardWeightValue2 + ( standardWeightValue2 * finishPercent ) ;
	

	startStandardWeightValue = Number(startStandardWeightValue.toFixed(3)) ; 
	finishStandardWeightValue = Number(finishStandardWeightValue.toFixed(3)) ; 
	



	searchForTheZeroNormalForSecondProduct( 
		startStandardWeightValue , 
		finishStandardWeightValue , 
	);
	/*
	if( foundIt == false ) {
		searchForTheZeroNormal( 
			startLength , 
			finishLength , 
			startStandardWeightValue , 
			standardWeightValue , 
		);
	}
	*/
	
	
	let bestResultIndex = searchFinalDatabaseForBestResult2(database2);
	
	return database2[bestResultIndex];
	
	/*
	if( bestResultIndex == undefined ) {
		changeEachTwelveMeterProductWeightValueSecond( standardWeightValue2 , true ) ;
	} else {
		changeEachTwelveMeterProductWeightValueSecond( database2[bestResultIndex].eachTwelveMeterProductWeightValue2 , true );
	}
	//changeFirstCutLengthValue(database[bestResultIndex].firstCutLengthValue); 
	//changeEachTwelveMeterProductWeightValue( database[bestResultIndex].eachTwelveMeterProductWeightValue , false );
	
	makeAllProcessing(true);
	
	if( foundIt == false ) {
		searching.style.display = "none";
		//changeFirstCutLengthValue(6);
		//changeEachTwelveMeterProductWeightValue(standardWeightValue);
	}



	*/
}









let bestOfAllSecondProducts = [];
let secondProductsDatabase = [];




let selectProductWithTheBestNormalAndNominalValueAndMakeProcessing = (bestOfAllSecondProducts) => {
	
	let minimunNormalIndex ;
	let minimumDifference ;
	let minimumNominal ;
	
	
	let normalDifferenceFromZero ;
	let nominalDifferenceFromZero ;
	
	
	
	for( let i=0; i < bestOfAllSecondProducts.length ; i++ ) {
		
		
		if( bestOfAllSecondProducts[i].bestOptionForEachProduct == false ) {
			continue;
		} else {
		
		}
		
		
		
		
		normalDifferenceFromZero = Math.abs( 0 - bestOfAllSecondProducts[i].normalLengthValue2 );
		nominalDifferenceFromZero = Math.abs( 0 - bestOfAllSecondProducts[i].nominal2 );
		
		if ( minimunNormalIndex == undefined ) { 
			minimunNormalIndex = i;
			minimumDifference = normalDifferenceFromZero;
			minimumNominal = nominalDifferenceFromZero;
		}
		else if ( normalDifferenceFromZero <= minimumDifference ) {
			if ( nominalDifferenceFromZero < minimumNominal ) {
				minimunNormalIndex = i;
				minimumDifference = normalDifferenceFromZero;
				minimumNominal = nominalDifferenceFromZero ;
			}
		}
	}
	
	
	return bestOfAllSecondProducts[minimunNormalIndex];
	
	
}





/*
tableContainer.addEventListener('click' , () => {
	closeTheTableContainer();
});
*/



let persianTranslationForSelectionTable = [
{ name : 'productName2' , translation : 'نام محصول' },
{ name : 'eachTwelveMeterProductWeightValue2' , translation : 'وزن محصول' },
{ name :'nominal2' , translation : 'درصد وزن استاندارد' },
{ name : 'normalLengthValue2' , translation : 'طول نرمال' },
//'firstCutLengthValue2' ,
//'numberOfTwelveMeterProductForEachBilletValue2' ,
//'productLengthValue2' ,
//'shakhesValue2' ,
//'standardWeightValue2' ,
];


let returnPersianTranslation = (x) => {
	for( let i = 0 ; i < persianTranslationForSelectionTable.length ; i++ ) {
		if( x == persianTranslationForSelectionTable[i].name ) {
			return persianTranslationForSelectionTable[i].translation
		}
	}
}






let persianTranslationForSelectionTableForFirstPart = [
{ name : 'firstCutLengthValue' , translation : 'طول برش اول' },
{ name : 'eachTwelveMeterProductWeightValue' , translation : 'وزن محصول' },
{ name :'nominal' , translation : 'درصد وزن استاندارد' },
{ name : 'normalLengthValue' , translation : 'طول نرمال' },
//'firstCutLengthValue2' ,
//'numberOfTwelveMeterProductForEachBilletValue2' ,
//'productLengthValue2' ,
//'shakhesValue2' ,
//'standardWeightValue2' ,
];


let returnPersianTranslationForFirstPart = (x) => {
	for( let i = 0 ; i < persianTranslationForSelectionTableForFirstPart.length ; i++ ) {
		if( x == persianTranslationForSelectionTableForFirstPart[i].name ) {
			return persianTranslationForSelectionTableForFirstPart[i].translation
		}
	}
}





let sortSelectionTable = (bestOfAllSecondProducts) => {
	
	for(let i=0;i<bestOfAllSecondProducts.length;i++) {
		if( bestOfAllSecondProducts[i] == undefined ) {
			break;
		}
		
		if( bestOfAllSecondProducts[i].bestOptionForEachProduct == false ) {
			bestOfAllSecondProducts.splice(i,1);
		}
	}
	
	
	let temp;
	
	let minIndex ;
	for(let i=0;i<bestOfAllSecondProducts.length;i++) {
		for(let j=i;j<bestOfAllSecondProducts.length;j++) {
			
			if( j == i ) {
				minIndex = j
			} else {
				if( ( Math.abs(bestOfAllSecondProducts[j].normalLengthValue2) < Math.abs(bestOfAllSecondProducts[minIndex].normalLengthValue2) ) ) {
					minIndex = j ;
				} else if ( Math.abs(bestOfAllSecondProducts[j].normalLengthValue2) == Math.abs(bestOfAllSecondProducts[minIndex].normalLengthValue2) ) {
					if( Math.abs(bestOfAllSecondProducts[j].nominal2) < Math.abs(bestOfAllSecondProducts[minIndex].nominal2 ) ) {
						minIndex = j ;
					}
				} 
			}

		}
		
		temp = bestOfAllSecondProducts[minIndex];
		bestOfAllSecondProducts[minIndex] = bestOfAllSecondProducts[i];
		bestOfAllSecondProducts[i] = temp;
	}
	//return bestOfAllSecondProducts.reverse();
}






let tableContainer = document.getElementById("tableContainer");
let bestSelectionTable = document.getElementById("bestSelectionTable");



let headerPrinted = false;

let makeTableForBestSelection = (bestOfAllSecondProducts) => {
	let selectionTable = `<table id="selectionTable">`;
	
	
	for(let i =0;i<bestOfAllSecondProducts.length;i++) {
		if(bestOfAllSecondProducts[i].bestOptionForEachProduct == false) {
			continue;
		}
		
		if(headerPrinted == false) {
			
			selectionTable += `<tr class="headOfSelectionTable">`;
			for (let variable in bestOfAllSecondProducts[i]) {
				if(
				variable == 'productName2' ||
				variable == 'eachTwelveMeterProductWeightValue2' ||
				variable == 'nominal2' ||
				variable == 'normalLengthValue2' 
				) {
					selectionTable += `<th>`;
					selectionTable += `${returnPersianTranslation(variable)}`;
					selectionTable += `</th>`;
				}
			}
			selectionTable += `</tr>`;
			
			headerPrinted = true;
		}
		
		

		selectionTable += `<tr class="rowOfBestProducts" id="productIndex-${bestOfAllSecondProducts[i].productIndex}">`;
		selectionTable += `<td class="english">${bestOfAllSecondProducts[i].productName2}</td>`;
		selectionTable += `<td class="english center">${bestOfAllSecondProducts[i].normalLengthValue2} ${bestOfAllSecondProducts[i].normalLengthValue2 == 0 ? '' : 'm' }</td>`;
		selectionTable += `<td class="english">${bestOfAllSecondProducts[i].eachTwelveMeterProductWeightValue2} kg</td>`;
		selectionTable += `<td class="english">${bestOfAllSecondProducts[i].nominal2 < 0 ?  '-' + Math.abs(bestOfAllSecondProducts[i].nominal2) :  '+' + bestOfAllSecondProducts[i].nominal2  } %</td>`;
		selectionTable += `</tr>`;
		
	}
	
	selectionTable += `</table>`;
	
	
	tableContainer.style.display = "flex";
	bestSelectionTable.innerHTML = selectionTable;
	
	
		
	// Make the DIV element draggable:
	dragElement(document.getElementById("bestSelectionTable"));
	
	headerPrinted = false;
	
	
};













let sortSelectionTableForFirstPart = (database) => {
	
	let temp;
	
	let minIndex ;
	for(let i=0;i<database.length;i++) {
		for(let j=i;j<database.length;j++) {
			
			if( j == i ) {
				minIndex = j
			} else {
				if( ( Math.abs(database[j].normalLengthValue) < Math.abs(database[minIndex].normalLengthValue) ) ) {
					minIndex = j ;
				} else if ( Math.abs(database[j].normalLengthValue) == Math.abs(database[minIndex].normalLengthValue) ) {
					if( Math.abs(database[j].nominal) < Math.abs(database[minIndex].nominal ) ) {
						minIndex = j ;
					}
				} 
			}

		}
		
		temp = database[minIndex];
		database[minIndex] = database[i];
		database[i] = temp;
	}
	//return bestOfAllSecondProducts.reverse();
}






let tableContainerForFirstPart = document.getElementById("tableContainerForFirstPart");
let bestSelectionTableForFirstPart = document.getElementById("bestSelectionTableForFirstPart");

let headerPrintedForFirstPart = false;

let makeTableForBestSelectionForFirstPart = (bestOfAllSecondProducts) => {
	let selectionTableForFirstPart = `<table id="selectionTableForFirstPart">`;
	
	
	for(let i =0;i<bestOfAllSecondProducts.length;i++) {
		//if(bestOfAllSecondProducts[i].bestOptionForEachProduct == false) {
		//	continue;
		//}
		
		if(headerPrintedForFirstPart == false) {
			
			selectionTableForFirstPart += `<tr class="headOfSelectionTable">`;
			for (let variable in bestOfAllSecondProducts[i]) {
				if(
				variable == 'firstCutLengthValue' ||
				variable == 'eachTwelveMeterProductWeightValue' ||
				variable == 'nominal' ||
				variable == 'normalLengthValue' 
				) {
					selectionTableForFirstPart += `<th>`;
					selectionTableForFirstPart += `${returnPersianTranslationForFirstPart(variable)}`;
					selectionTableForFirstPart += `</th>`;
				}
			}
			selectionTableForFirstPart += `</tr>`;
			
			headerPrintedForFirstPart = true;
		}
		

		selectionTableForFirstPart += `<tr class="rowOfBestProductsForFirstPart" id="productIndex-${i}">`;
		selectionTableForFirstPart += `<td class="english">${bestOfAllSecondProducts[i].firstCutLengthValue}</td>`;
		selectionTableForFirstPart += `<td class="english center">${bestOfAllSecondProducts[i].normalLengthValue} ${bestOfAllSecondProducts[i].normalLengthValue == 0 ? '' : 'm' }</td>`;
		selectionTableForFirstPart += `<td class="english">${bestOfAllSecondProducts[i].eachTwelveMeterProductWeightValue} kg</td>`;
		selectionTableForFirstPart += `<td class="english">${bestOfAllSecondProducts[i].nominal < 0 ? '-' + Math.abs(bestOfAllSecondProducts[i].nominal)  : '+' + bestOfAllSecondProducts[i].nominal} %</td>`;
		selectionTableForFirstPart += `</tr>`;
		
	}
	
	
	selectionTableForFirstPart += `</table>`;
	
	
	tableContainerForFirstPart.style.display = "flex";
	bestSelectionTableForFirstPart.innerHTML = selectionTableForFirstPart;
	
	
		
	// Make the DIV element draggable:
	dragElement(document.getElementById("bestSelectionTableForFirstPart"));
	
	headerPrintedForFirstPart = false;
	
	
};








function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let startXPosition ;
  let startYPosition ;
  
  /*
  if (head) {
    // if present, the header is where you move the DIV from:
    head.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  */
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    startXPosition = pos3 = e.clientX;
    startYPosition = pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
	
	let MouseXPosition = e.clientX;
	let MouseYPosition = e.clientY;
	
	/*
	if( MouseYPosition < 0 ) {
		MouseYPosition = 0;
	}
	*/
	
    // calculate the new cursor position:
    pos1 = pos3 - MouseXPosition;
    pos2 = pos4 - MouseYPosition;
    pos3 = MouseXPosition;
    pos4 = MouseYPosition;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
	
	elmnt.style.top = "50%";
    elmnt.style.left = "50%";
	elmnt.style.transform = "translate(-50% , -50%)";
  }
}






























let searchTheBestProductForSecondPart = () => {
	secondProductsDatabase = [];
	bestOfAllSecondProducts = [];


	
	for(let i=0;i<products.length;i++) {
		if( products[i].dimentions == billetDimentionsValue ) {
		
		
			selectProductWithIndexForSecondPart(i,true);
			
			
			
			let bestOptionForEachProduct = searchForBestResultForSecondProduct();
			
			
			
			if( bestOptionForEachProduct == undefined ) {
				bestOfAllSecondProducts[bestOfAllSecondProducts.length] = {
					productIndex : i ,
					billetDimentionsValue : billetDimentionsValue ,
					bestOptionForEachProduct : false ,
					productName2 : productName2 ,
					
				}
			} else {
				bestOfAllSecondProducts[bestOfAllSecondProducts.length] = {
					productIndex : i ,
					billetDimentionsValue : billetDimentionsValue ,
					bestOptionForEachProduct : true ,
					productName2 : productName2 ,
					...bestOptionForEachProduct
				}; 
			}
			
			
			
			/*
			secondProductsDatabase[secondProductsDatabase.length] = {
				index : i ,
				firstCutLengthValue2 : firstCutLengthValue2 ,
				normalLengthValue2 : normalLengthValue2 ,
				productLengthValue2 : productLengthValue2 ,
				standardWeightValue2 : standardWeightValue2 ,
				eachTwelveMeterProductWeightValue2 : eachTwelveMeterProductWeightValue2 ,
				shakhesValue2 : shakhesValue2 ,
				nominal2 : darsadstandardWeightValue2 ,
				numberOfTwelveMeterProductForEachBilletValue2 : numberOfTwelveMeterProductForEachBilletValue2
			}
			*/
		}
	}
	
	
	
	
	//bestOfAllSecondProducts = sortSelectionTable(bestOfAllSecondProducts);
	sortSelectionTable(bestOfAllSecondProducts);
	//bestOfAllSecondProducts = bestOfAllSecondProducts.reverse();

	
	if( bestOfAllSecondProducts.length == 0 ) {
		Swal.fire({
		  icon : 'error',
		  title : 'هیچ محصول بهینه ای وجود ندارد',
		  showCloseButton : true,
		  showCancelButton : false,
		  confirmButtonText : 'بازگشت',
		});
	} else {
		makeTableForBestSelection(bestOfAllSecondProducts);
	
	
		initializeAfterBestProductTable();
	}
	
	
	
	/*
	
	
	let bestSelectionForSecondProduct = selectProductWithTheBestNormalAndNominalValueAndMakeProcessing(bestOfAllSecondProducts);

	
	
	//let bestResultIndex = searchDatabaseForBestResult2(secondProductsDatabase , true);
	

	
	//selectProductWithIndexForSecondPart(bestResultIndex,true);
	let productIndexNumber = 0;
	
	for(let i=0;i<products.length;i++,productIndexNumber++) {
		
		
		
		if( products[i].dimentions != billetDimentionsValue ) {
				continue;
		}
		
		if(  bestSelectionForSecondProduct.productIndex == i  ) {
			selectProductWithIndexForSecondPart(i,true);
			break;
		}	
		
	}
	
	
	
	
	
	if( bestSelectionForSecondProduct == undefined ) {
		changeEachTwelveMeterProductWeightValueSecond( bestSelectionForSecondProduct.standardWeightValue2 , true ) ;
	} else {
		changeEachTwelveMeterProductWeightValueSecond( bestSelectionForSecondProduct.eachTwelveMeterProductWeightValue2 , true );
	}
	//changeFirstCutLengthValue(database[bestResultIndex].firstCutLengthValue); 
	//changeEachTwelveMeterProductWeightValue( database[bestResultIndex].eachTwelveMeterProductWeightValue , false );
	
	makeAllProcessing(true);
	
	
	
	*/
	
	closeTheSearchingLoader();
	
}


let returnProductWithIndex = (bestProductIndex) => {
	for(let i=0;i<bestOfAllSecondProducts.length;i++) {
		if( bestOfAllSecondProducts[i].productIndex == bestProductIndex ) {
			return bestOfAllSecondProducts[i];
		}
	}
}





let confirmSecondProduct = (value) => {
	let parentID = value.id; 
	let splitted = parentID.split('-');
	let bestProductIndex = Number(splitted[1]);
	let bestSelectionForSecondProduct = returnProductWithIndex(bestProductIndex);
	
	
	Swal.fire({
	  title: `		آیا		<div class="english"> ${bestSelectionForSecondProduct.productName2} </div>		را انتخاب می کنید ؟	  `,
	  showCancelButton: true ,
	  cancelButtonText : 'انصراف' ,
	  confirmButtonText: 'تایید' ,
	}).then((result) => {
	  if (result.isConfirmed) {
		let productIndexNumber = 0;
		for(let i=0;i<products.length;i++,productIndexNumber++) {
			if( products[i].dimentions != billetDimentionsValue ) {
				continue;
			}
			if( bestProductIndex == i  ) {
				selectProductWithIndexForSecondPart(i,true);
				break;
			}	
			
		}
		if( bestSelectionForSecondProduct == undefined ) {
			//changeEachTwelveMeterProductWeightValueSecond( bestSelectionForSecondProduct.standardWeightValue2 , true ) ;
		} else {
			changeEachTwelveMeterProductWeightValueSecond( bestSelectionForSecondProduct.eachTwelveMeterProductWeightValue2 , true );
		}

		makeAllProcessing(true);

		closeTheSearchingLoader();
		closeTheTableContainer();

	  } else if (result.isDenied) {
		//Swal.fire('Changes are not saved', '', 'info')
		
	  }
	});
}








let returnProductWithIndexForFirstPart = (selectedProductIndex) => {
	for(let i=0;i<database.length;i++) {
		if( i == selectedProductIndex ) {
			return database[i];
		}
	}
}


let confirmSecondProductForFirstPart = (value) => {
	let parentID = value.id; 
	let splitted = parentID.split('-');
	let selectedProductIndex = Number(splitted[1]);
	let bestSelectionForFirstProduct = returnProductWithIndexForFirstPart(selectedProductIndex);
	
	
	Swal.fire({
	  title: `آیا محصول		
	<span class="english ltr">${productName}</span>
	با برش
	  <span class="english ltr"> ${bestSelectionForFirstProduct.firstCutLengthValue} </span>	
	  و درصد وزن محصول
	  <span class="english"> %  ${bestSelectionForFirstProduct.nominal < 0 ? Math.abs(bestSelectionForFirstProduct.nominal) + '-' : bestSelectionForFirstProduct.nominal + '+' }     </span>
	  را انتخاب می کنید ؟	  `,
	  showCancelButton: true,
	  cancelButtonText : 'انصراف',
	  confirmButtonText: 'تایید',
	}).then((result) => {
	  if (result.isConfirmed) {
		/*let productIndexNumber = 0;
		for(let i=0;i<products.length;i++,productIndexNumber++) {
			if( products[i].dimentions != billetDimentionsValue ) {
				continue;
			}
			if( selectedProductIndex == i  ) {
				console.log(products[i]);
				selectProductWithIndex(i , true);
				break;
			}	
		}
		if( bestSelectionForFirstProduct == undefined ) {
			//changeEachTwelveMeterProductWeightValue( bestSelectionForFirstProduct.standardWeightValue , true ) ;
		} else {
			changeEachTwelveMeterProductWeightValue( bestSelectionForFirstProduct.eachTwelveMeterProductWeightValue , true );
		}
		*/

		changeStandardWeightValues(database[selectedProductIndex].standardWeightValue);
		changeFirstCutLengthValue(database[selectedProductIndex].firstCutLengthValue); 
		changeEachTwelveMeterProductWeightValue( database[selectedProductIndex].eachTwelveMeterProductWeightValue , false ); 
		
	
		
		
		makeAllProcessing();

		closeTheSearchingLoader();
		closeTheTableContainer();

	  } else if (result.isDenied) {
		//Swal.fire('Changes are not saved', '', 'info')
		
	  }
	});
}






let rowOfBestProducts;
let initializeAfterBestProductTable = () => {
	rowOfBestProducts = document.querySelectorAll("tr.rowOfBestProducts");
	for(let i=0;i<rowOfBestProducts.length;i++) {
		rowOfBestProducts[i].addEventListener( 'click' , (e) => {
			confirmSecondProduct(rowOfBestProducts[i]);
		});
	}
}





let rowOfBestProductsForFirstPart;
let initializeAfterBestProductTableForFirst = () => {
	rowOfBestProductsForFirstPart = document.querySelectorAll("tr.rowOfBestProductsForFirstPart");
	for(let i=0;i<rowOfBestProductsForFirstPart.length;i++) {
		rowOfBestProductsForFirstPart[i].addEventListener( 'click' , (e) => {
			confirmSecondProductForFirstPart(rowOfBestProductsForFirstPart[i]);
		});
	}
}









let selectAllRelatedPertiListItem = (selectedValue) => {
	for(let i=0;i<pertiList.length;i++){
		for(let j=0;j<pertiList[i].children.length;j++) {
			if(pertiList[i].children[j].dataset.index == selectedValue) {
				pertiList[i].children[j].classList.add('active');
			} else {
				pertiList[i].children[j].classList.remove('active');
			}
		}
	}
}




let makeVisibleRelatedDataForPerti = (selectedIndex) => {
	if(selectedIndex == 0) {
		for(let i=0;i<rowForWeight.length;i++) {
			rowForWeight[i].style.display = 'block';
		}
		for(let i=0;i<rowForLength.length;i++) {
			rowForLength[i].style.display = 'none';
		}
	} else {
		for(let i=0;i<rowForLength.length;i++) {
			rowForLength[i].style.display = 'block';
		}
		for(let i=0;i<rowForWeight.length;i++) {
			rowForWeight[i].style.display = 'none';
		}
	}
}





let titlePreface = `
	<div class="preface prefaceTitle" >
	
		<div class="center">
		<h1>
		موضوع پروژه
		</h1>
		</div>
		
		<div class="rightAlign">
		بهينه سازي برش بيلت با توجه به وزن محصول در توليد مقاطع فولادي و افزايش راندمان توليد با استفاده از 
		محاسبه گر
		
		<div class="center">
			<code>BLC</code>
			<code>(Billet Length Calculator)</code>
		</div>
		
		</div>
		
		<div class="horizontalPadding"></div>
		
		<div class="rightAlign">
		مسول فني پروژه و طراحي الگوريتم : 
		
		<div>
		عباس قاسمي
		<span class="smallSize">
		(  کارشناس توليد سکشن ميل  )
		</span>
		</div>
		
		</div>
		
		<div class="horizontalPadding"></div>
		
		<div class="rightAlign">
		برنامه نويس : 
		
		<div>
		سجاد عبداللهي
		<span class="smallSize">
		(  کارشناس IT  )
		</span>
		</div>
		
		</div>
		
		<div class="leftAlign">
		خرداد 1401
		</div>
		
	</div>
`;





let preface = `

	<div class="lineHeight preface">
	
	فرآيند نورد
	<code>(Rolling) </code>
	يکي از بهترين و کاربردي ترين روش هاي شکل
	دادن است
	که
	به معنی
	تغيير
	شکل ماده از طريق عبور بين 
	غلتک‌ها
	مي باشد. 
	محصولات از قبيل تيرآهن، نبشي، ناوداني با مقاطع مختلف
	به وسيله اين فرآيند توليد 
	می‌شوند.
	کوره هاي پيش گرم نورد به منظور گرم کردن بيلت ها
	قبل 
	از فرآيند نورد و رساندن دماي بيلت به دماي مناسب 
	
	جهت نورد
	مورد استفاده قرار می گیرند.
	در اکثر کارخانه هاي نورد عرض کوره کمتر از 12 متر بوده و بيلت هايي که براي 
	
	شارژ مناسب هستند کمتر از 12 متر
	مي باشند.
	بنابراين
	بيلت هاي 12 متري
	با توجه
	شرايط کوره 
	به دو قسمت کوچکتر برش
	می شوند.
	
	از آنجائيکه انتخاب مناسب برش بيلت تاثير مستقيم بر پرتي ها و وزن محصول دارد لذا محاسبه آن از اهميت بسزايي 
	برخوردار است و عدم محاسبه صحيح برش بيلت خسارت هاي مالي بالايي براي کارفرما خواهد داشت.
	در اين پروژه با
	طراحي 
	الگوريتم
	بهینه
	و
	با استفاده از محاسبه گر
	
	
	
	<code>BLC</code>
	<code>(Billet Length Calculator)</code>
	
	
	

	برش بيلت براي محصولات تيرآهن، ناوداني و نبشي با دقت بالايي محاسبه مي گردد.
	در پايان از همه کساني که براي انجام اين پروژه همکاري داشتند صميمانه تقدير و تشکر مي نماييم و باعث مباهات است هرگونه پيشنهادات و انتقادات 
	در جهت ارتقاي اين برنامه را از
	طريق اطلاعاتي که در قسمت 
	تماس با ما  
	قرار دارد با ما در ميان بگذارید.

	</div>
	
`;




let contactUsPreface = `
	<div class="contactus">
	
	
		<table class="contactTable">
		
			<tr>
			<td class="bigSize">
			شماره تماس : 
			</td>
			<td class="bigSize">
			09118961632
			</td>
			</tr>
			
			<tr>
			<td class="bigSize">
			ايميل : 
			</td>
			<td class="bigSize">
			meysam.ghassemi@gmail.com
			</td>
			</tr>
			
		</table>
		
		
		
	</div>
`









let firstTime = true;


let selectPrefaceSubject = (i) => {
	
	for( let j=0;j<prefaceList.length;j++ ) {
		prefaceList[j].classList.remove('active');
		prefaceList[j].classList.remove('hithere');
	}
	
	if( firstTime == true ) {
		prefaceList[i].classList.add('active');
	} else {
		prefaceList[i].classList.add('active');
		prefaceList[i].classList.add('hithere');
	}
	
	if( i == 0 ) {
		prefaceText.innerHTML = titlePreface;
	} else if ( i == 1 ) {
		prefaceText.innerHTML = preface;
	} else if ( i == 2 ) {
		prefaceText.innerHTML = contactUsPreface;
	}
	
	
	firstTime = false;
}




selectPrefaceSubject(0);






let darkTheme = false;


let reportJson = [];
let sarBiliReport ;
let tahBiliReport ;
let sarGheichiReport ;
let boradeArreReport ;
let oxidReport ;


let calculateDarajeOneTonag = () => {
	return totalTonag - (sarBiliReport+tahBiliReport+sarGheichiReport+boradeArreReport+oxidReport);
}


let calculateReportJson = () => {
	reportJson = [];
	
	sarBiliReport = Number(((sarBiliWeightValue * totalTonag) / firstCutAvergeWightValue ).toFixed(2) ) ;
	tahBiliReport = Number(((tahBiliWeightValue * totalTonag) / firstCutAvergeWightValue).toFixed(2)) ;
	sarGheichiReport = Number(((sarGheichiWeightValue * totalTonag) / firstCutAvergeWightValue).toFixed(2)) ;
	boradeArreReport = Number(((boradeArreWeightValue * totalTonag) / firstCutAvergeWightValue).toFixed(2)) ;
	oxidReport = Number(((darsadOxidValue * totalTonag) / firstCutAvergeWightValue).toFixed(2)) ;
	
	reportJson.push({ title :  'تناژ کل تولید' , value :  Number((totalTonag).toFixed(2)) , percent : '-' });
	reportJson.push({ title :  'محصول درجه ی 1' , value :  calculateDarajeOneTonag() , percent : (calculateDarajeOneTonag() * 100 )/totalTonag });
	reportJson.push({ title :  'سر بیلی' , value : sarBiliReport , percent : (sarBiliReport * 100) / totalTonag });
	reportJson.push({ title : 'ته بیلی' , value : tahBiliReport , percent : (tahBiliReport*100)/totalTonag });
	reportJson.push({ title : 'سرقیچی و ته قیچی' , value : sarGheichiReport , percent : (sarGheichiReport*100)/totalTonag });
	reportJson.push({ title : 'براده اره' , value : boradeArreReport , percent : (boradeArreReport*100)/totalTonag });
	reportJson.push({ title : 'اکسید خط' , value : oxidReport , percent : (oxidReport*100)/totalTonag });
}






let reportTolidButton = document.getElementById("reportTolidButton");
let reportContainer = document.getElementById("reportContainer");
let reportTableContainer = document.getElementById("reportTableContainer");
let headerReportTable = false;

let showReportTable = false;

reportTolidButton.addEventListener( 'click' , () => {
	
	showReportTable = true;
	
	calculateReportJson();
	
	console.log(reportJson);
	
	
	reportContainer.style.display = "flex";
	//reportTableContainer.innerHTML = '';
	let reportTable = `<table id="reportTable">`;
	
	
	for(let i =0;i<reportJson.length;i++) {

		if(headerReportTable == false) {
			reportTable += `<tr class="headOfSelectionTable" >`;

			reportTable += `<th colspan="2">`;
			reportTable += `گزارش کلی تولید`;
			reportTable += `</th>`;
			reportTable += `<th >`;
			reportTable += `درصد`;
			reportTable += `</th>`;

			reportTable += `</tr>`;
			headerReportTable = true;
		}
		
		
		reportTable += `<tr class="rowOfBestProducts">`;
		reportTable += `<td class="">${reportJson[i].title}</td>`;
		reportTable += `<td class="english center">${reportJson[i].value} ton</td>`;
		reportTable += `<td class="english center">${reportJson[i].percent == '-' ? reportJson[i].percent : reportJson[i].percent.toFixed(2) + ' %'} </td>`;
		reportTable += `</tr>`;
		
	}
	
	reportTable += `</table>`;
	
	
	
	reportTableContainer.innerHTML = reportTable;
	
	
		
	// Make the DIV element draggable:
	dragElement(document.getElementById("reportTableContainer"));
	headerReportTable = false;
	
	
});