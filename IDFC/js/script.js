
function credithandle() {
    let creditCard = document.getElementById('checkbox');
    let moreDetails = document.querySelectorAll(".ccard-checked");

    if (creditCard.checked == true) {
        moreDetails.forEach((x) => x.classList.remove("hidden"));
        document.querySelector(".emi").classList.add("hidden");
    } else {
        moreDetails.forEach((x) => x.classList.add("hidden"));
        document.querySelector(".emi").classList.remove("hidden");

    }
}

function loanHandler(val) {
    let loanBack = document.querySelector(".loanb");
    let loanFront = document.querySelector(".loanf");
    console.log(loanBack);
    console.log(loanFront);
    if(val == 1){
        loanBack.classList.remove("hidden");
        loanFront.classList.add("hidden");
    }
  
    else if (val == 2) {
        loanFront.classList.remove("hidden");
        loanBack.classList.add("hidden");
    }
}



function dropdownHandler(val){
    let dropdown = document.querySelector(`.${val}`);
    console.log(val);
    dropdown.classList.toggle('visible');
}




function infoHandler(val){
    
    switch(val){
        case 1: {
            let dropdown = document.querySelector(' .loan-info ');
            console.log(dropdown);
            dropdown.classList.toggle('hidden');
            break;
        }
        case 2: {
            let dropdown = document.querySelector(' .tennure-info ');
            console.log(dropdown);
            dropdown.classList.toggle('hidden');
            break;
        }
    }
   
    
}

