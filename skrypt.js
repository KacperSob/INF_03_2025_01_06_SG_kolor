let input_el = document.querySelector("#srodkowy > input");
let wynik_el = document.querySelector("#srodkowy > p");

function reverseString(x){
    let wynik = "";
    for(let i = x.length-1; i >= 0; i--){
        wynik += x[i];
    }
    return wynik;
}

function przelicz(){
    let incrementor = 0;
    let wynik= "";
    let input_val = input_el.value;
    if(input_val != null && input_val != ""){
        while(input_val > 0){
            if(incrementor == 4){
                wynik += ` ${input_val % 2}`;
                incrementor = 0;
            } else {
                wynik += `${input_val % 2}`;
            }
            incrementor++;
            input_val = input_val / 2;
            input_val = Math.floor(input_val);
        }
        wynik_el.innerHTML = `${reverseString(wynik)}<sub>(2)</sub>`;
    }
}