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
    document.getElementById('konnyu1').value = "ures";
    document.getElementById('konnyu2').value = "ures";
    document.getElementById('konnyu3').value = "ures";
    document.getElementById('konnyu4').value = "ures";
    document.getElementById('eredmeny').innerHTML = "";
    kTartalom.style.display = 'flex';
    kpTartalom.style.display = 'none';
    nTartalom.style.display = 'none';
    bekuldG.style.display = 'flex';
    konnyutvalasztott = 1;
}
/*Közepes játék megjelenítése*/
document.getElementById('kozepesG').addEventListener("click", kozepesKiv);
function kozepesKiv() {
    document.getElementById('kozepes1').value = null;
    document.getElementById('kozepes2').value = null;
    document.getElementById('kozepes3').value = null;
    document.getElementById('kozepes4').value = null;
    document.getElementById('eredmeny').innerHTML = "";
    kTartalom.style.display = 'none';
    kpTartalom.style.display = 'flex';
    nTartalom.style.display = 'none';
    bekuldG.style.display = 'flex';
    kozepesetvalasztott = 1;
}
/*Nehéz játék megjelenítése*/
document.getElementById('nehezG').addEventListener("click", nehezKiv);
function nehezKiv() {
    document.getElementById('nehez1').value = null;
    document.getElementById('eredmeny').innerHTML = "";
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

function szame(n) {
    return (n * 1 == n)
}

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
        let kor = document.getElementById('kozepes2').value;
        let elsoprofi = document.getElementById('kozepes3').value;
        let miotafradi = document.getElementById('kozepes4').value;

        if (szame(kor)) {
            kor = parseInt(kor);
        } else {
            alert("Nem számot adott meg a korhoz, adja meg újra!");
            document.getElementById('kozepes2').value = null;
            return;
        }
        if (szame(elsoprofi)) {
            elsoprofi = parseInt(elsoprofi);
        } else {
            alert("Nem számot adott meg az első profi játékhoz, adja meg újra!");
            document.getElementById('kozepes3').value = null;
            return;
        } if (szame(miotafradi)) {
            miotafradi = parseInt(miotafradi);
        } else {
            alert("Nem számot adott meg arra, hogy mióta játszik a Fradiban, adja meg újra!");
            document.getElementById('kozepes4').value = null;
            return;
        }
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
        if (valasz.includes("18")) {
            pont = pont + 1;
        }
        if (valasz.includes("2014")) {
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