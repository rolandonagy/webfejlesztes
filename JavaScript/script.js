/*Divek eltárolása változóba, hogy meg tudjuk őket jeleníteni*/
let kTartalom = document.getElementById('konnyu');
let kpTartalom = document.getElementById('kozepes');
let nTartalom = document.getElementById('nehez');
let bekuldG = document.getElementById('bekuldesGomb');

let konnyutvalasztott = 0;
let kozepesetvalasztott = 0;
let nehezetvalasztott = 0;
/*Konnyu játék megjelenítése*/
document.getElementById('konnyuG').addEventListener("click", konnyuKiv);
function konnyuKiv() {
    kTartalom.style.display = 'flex';
    kpTartalom.style.display = 'none';
    nTartalom.style.display = 'none';
    bekuldG.style.display = 'flex';
    konnyutvalasztott = 1;
}
/*Közepes játék megjelenítése*/
document.getElementById('kozepesG').addEventListener("click", kozepesKiv);
function kozepesKiv() {
    kTartalom.style.display = 'none';
    kpTartalom.style.display = 'flex';
    nTartalom.style.display = 'none';
    bekuldG.style.display = 'flex';
    kozepesetvalasztott = 1;
}
/*Nehéz játék megjelenítése*/
document.getElementById('nehezG').addEventListener("click", nehezKiv);
function nehezKiv() {
    kTartalom.style.display = 'none';
    kpTartalom.style.display = 'none';
    nTartalom.style.display = 'flex';
    bekuldG.style.display = 'flex';
    nehezetvalasztott = 1;
}
/*Új játék, divek elrejtése és szöveg kinullázása*/
document.getElementById('ujra').addEventListener("click", ujjatek);
function ujjatek() {
    document.getElementById('eredmeny').innerHTML = "";
    kTartalom.style.display = 'none';
    kpTartalom.style.display = 'none';
    nTartalom.style.display = 'none';
    bekuldG.style.display = 'none';
    if (konnyutvalasztott == 1) {
        document.getElementById('konnyu1').value = "ures";
        document.getElementById('konnyu2').value = "ures";
        document.getElementById('konnyu3').value = "ures";
        document.getElementById('konnyu4').value = "ures";
        konnyutvalasztott = 0;
    }
    if (kozepesetvalasztott == 1) {
        document.getElementById('kozepes1').value = null;
        document.getElementById('kozepes2').value = null;
        document.getElementById('kozepes3').value = null;
        document.getElementById('kozepes4').value = null;
        kozepesetvalasztott = 0;
    }
    if (nehezetvalasztott == 1) {
        document.getElementById('nehez1').value = null;
        nehezetvalasztott = 0;
    }
}

/*Válaszok kiértékelése*/
document.getElementById('bekuldes').addEventListener("click", bekuld);

function bekuld() {
    let pont = 0;
    if (konnyutvalasztott == 1) {
        if (document.getElementById('konnyu1').value == 2) {
            pont = pont + 1;
        }
        if (document.getElementById('konnyu2').value == 1) {
            pont = pont + 1;
        }
        if (document.getElementById('konnyu3').value == 2) {
            pont = pont + 1;
        }
        if (document.getElementById('konnyu4').value == 4) {
            pont = pont + 1;
        }
    }

    if (kozepesetvalasztott == 1) {
        let nev = document.getElementById('kozepes1').value;
        let kor = parseInt(document.getElementById('kozepes2').value);
        let elsoprofi = parseInt(document.getElementById('kozepes3').value);
        let miotafradi = parseInt(document.getElementById('kozepes4').value);
        if (nev == "Varga Barnabás" || nev == "Varga" || nev == "Barnabás") {
            pont = pont + 1;
        }
        if (kor == 29) {
            pont = pont + 1;
        }
        if (elsoprofi == 16) {
            pont = pont + 1;
        }
        if (miotafradi == 2023) {
            pont = pont + 1;
        }
    }

    if (nehezetvalasztott == 1) {
        let valasz = document.getElementById('nehez1').value;
        if (valasz.includes("Dibusz") || valasz.includes("Dénes") || valasz.includes("Dibusz Dénes")) {
            pont = pont + 1;
        }
        if (valasz.includes("33")) {
            pont = pont + 1;
        }
        if (valasz.includes("18")){
            pont = pont + 1;
        }
        if (valasz.includes("2014")){
            pont = pont + 1;
        }
    }
    switch (pont) {
        case 0:
            document.getElementById('eredmeny').innerHTML = "Sajnos ez most " + pont + " pont lett. Próbáld újra!";
            break;
        case 1:
            document.getElementById('eredmeny').innerHTML = pont + " pontot értél el! Megy ez jobban töltsd ki újra!";
            break;
        case 2:
            document.getElementById('eredmeny').innerHTML = pont + " pontot értél el! Megy ez jobban töltsd ki újra!";
            break;
        case 3:
            document.getElementById('eredmeny').innerHTML = "Ez igen, " + pont + " pontot értél el. Majdnem hibátlan! Ügyes vagy!";
            break;
        case 4:
            document.getElementById('eredmeny').innerHTML = "Gratulálok! " + pont + " Pontot értél el, te egy igazi Fradista vagy!";
            break;
        default:
            break;
    }
}