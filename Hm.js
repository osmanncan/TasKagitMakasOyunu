const hamleler = ['Taş', 'Kağit', 'Makas'];
let oyuncuSkor = 0;
let bilgisayarSkor = 0;


function bilgisayarOyna() {
  return hamleler.at(Math.floor(Math.random() * 3));
}

function oyna(){
const hamle = this.innerText;
oyuncuHamle.innerHTML = hamle;


const bilgisayarinHamlesi = bilgisayarOyna();
bilgisayarHamle.innerHTML = bilgisayarinHamlesi;

if (hamle === bilgisayarinHamlesi){
    KazananBilgi.innerHTML = 'Berabere';
}else if(hamle === 'Taş' && bilgisayarinHamlesi === 'Makas'){
        KazananBilgi.innerHTML = 'Oyuncu';
        oyuncuSkor++;
}else if (hamle === 'Kağıt' && bilgisayarinHamlesi === 'Taş'){
        KazananBilgi.innerHTML = 'Oyuncu';
        oyuncuSkor++;
}else if (hamle === 'Makas' && bilgisayarinHamlesi === 'Kağit'){
        KazananBilgi.innerHTML = 'Oyuncu';
        oyuncuSkor++;
}else { 
    KazananBilgi.innerHTML = 'Bilgisayar';
    bilgisayarSkor++;
}

oyuncuSkorTxt.innerHTML = oyuncuSkor;
bilgisayarSkorTxt.innerHTML = bilgisayarSkor;

}


const oyunbuton = document.querySelectorAll('.oyunBtn');

for (const btn of oyunbuton){
    btn.addEventListener('click', oyna);
}

// sıfırlama

function skorclear(){
oyuncuHamle.innerHTML = '-';
bilgisayarHamle.innerHTML = '-';
KazananBilgi.innerHTML = '-';


oyuncuSkor = 0;
bilgisayarSkor = 0;

oyuncuSkorTxt.innerHTML = oyuncuSkor;
bilgisayarSkorTxt.innerHTML = bilgisayarSkor;

}

SifirlaBtn.addEventListener('click', skorclear);



