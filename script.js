"use strict";

let divForResult = document.querySelector("#forResult")
let h2WithNum = document.querySelector("#numOfLength")
let numOfWord = document.querySelector("#numOfword")
let btnLogLabel = document.querySelector("#logOfLabel")
let tableForAlpha = document.querySelector("#tabForAlphabet")
let btnLogWords = document.querySelector("#logTopwords")
let tableForWords = document.querySelector("#tabForWords")

let inputContain = ""
let countingWord = 0
let countingWordWithFilter = []
let length = 0
let inputAllContain = ""

// ====== proměné související s abecedou
let arrForLabel = ""
    // objekt pro postupné ukládání klíčů - písmen abecedy a jejich počtu v textu
let alphabet = {
a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0
}
let plusLabelAlphabet = []


// ====== proměné související s nejčastějšími slovy ====

let mostWords = { }

// ========= text area EVENT =================
// ===========================================

let area = document.querySelector("#IdYourArea")
area.addEventListener ("input", (event) => {
    
    // ====== počet znaků a počet slov ===========
    // ===========================================
        inputContain = event.target.value // hodnota z textarea

        length = event.target.value.length // délka hodnoty z textarea 
        h2WithNum.innerHTML = `Počet znaků: ${length}` 

        const RegForSplit = (/[^a-záčďéěíňóřšťúůýž]+/i) // regulární výraz pro rozdělení textu na slova - rozděluje podle všech znaků, které nejsou písmeny (s diakritikou) a ignoruje velikost písmen

        countingWord = inputContain.split(RegForSplit) //rozdělí na pole slov

        inputAllContain = inputContain.split ("")
        
        countingWordWithFilter = countingWord.filter (word => word !="") //vezmi každý prvek v poli => prvek je to pouze pokud není "" tzn. nepočítá mezery

        numOfWord.innerHTML = `Počet slov: ${countingWordWithFilter.length}`   

    // ====== počítání jednotlivých písmen v textu =========
    //======================================================
        
    arrForLabel = countingWordWithFilter.join("").split("") // Pole písmen (s diakritikou)z textarey

    // ======== ZBAVENÍ SE DIAKRITIKY A MALÝCH/VELKÝCH PÍSMEN =======
    
        let normalizeAlphabet = inputContain.normalize("NFD")
        let normalizeAplphabetFinal = normalizeAlphabet.toLowerCase().replace(/[\u0300-\u036f]/g, "")   // hotový výstup
        let arrFromNormalize = normalizeAplphabetFinal.split("")  // pole písmen bez diakritiky => pro počítání písmen do objektu

        console.log (arrFromNormalize)
            
    // ======== přidávání počtu písmen do objektu aplhabet =======
    //=============================================================
    
        alphabet = { a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0 }
    
        plusLabelAlphabet = arrFromNormalize.forEach((element)=> {
            if (element in alphabet) {  // pokud je element v klíči objektu alphabet
                alphabet[element] += 1  // přidej plus jedna k jeho hodnotě
            }
        }) 
})

// ======== vytvoření tabulky s písmeny a jejich počtem PO KLIKNUTÍ NA BTN =======
//================================================================================

btnLogLabel.addEventListener("click", (event)=> {
   
   tableForAlpha.innerHTML = ""
   
    for (let value in alphabet) {   // value - libovolný název pro klíč
            
    //vypsání do tabulky
    let tableTR = document.createElement("tr") //vytvoření řádku
    document.querySelector("#tabForAlphabet").appendChild(tableTR)

    let TdOne = document.createElement("td") // bunka pro Klíč
    TdOne.innerHTML = `${value}:`
    tableTR.appendChild(TdOne)

    let TdTwo = document.createElement("td")
    TdTwo.innerHTML = `${alphabet[value]}`
    tableTR.appendChild(TdTwo)

    }            
})

// =========== vytvoření tabulky s nejčastějšími slovy po kliknutí na BTN =======
//===============================================================================

btnLogWords.addEventListener ("click", (event) =>{

    tableForWords.innerHTML = ""
    
    mostWords = {} //vymazání objektu po každém kliknutí

    //====filtrování slov======
    let countingWordWithFilterForWord = countingWordWithFilter.filter(word => word.length>2) // Pole slov - vyfiltruj pouze slova delší než 2 písmena

    //==== počítání slov
    countingWordWithFilterForWord.forEach ((oneArr) => {

        oneArr = oneArr.toLowerCase() //převeď slovo na malá písmena pro správné počítání

        if (oneArr in mostWords) {  //pokud je slovo už v poli přidej 1
            mostWords[oneArr] += 1
        }else {mostWords[oneArr] = 1} //jinak dej slovu hodnotu 1

    })

    //==== // seřazení slov dle počtu výskytu
    let arrForSort = Object.entries(mostWords).sort (   (a,b)=> b[1] - a[1]   ) // object.entries - výpis pole hodnota/klíč, sort: a a b jsou dva páry ["slovo", počet] => b[1] - a[1] řadí od největšího po nejmenší.

    // ====== vypsání první 3 slov s nejvyšším počtem výskytu (pokrytí kdyby slov bylo méně než počet)

    for (let i =0; i < arrForSort.length && i < 3; i++){
        
        console.log (arrForSort)

        let TRforWordsTable = document.createElement("tr") //řádek
        tableForWords.appendChild(TRforWordsTable)

        let TDOneforWordsTable = document.createElement ("td") //jedna buňka v řádku
        TDOneforWordsTable.innerHTML = arrForSort[i][0]
        TRforWordsTable.appendChild(TDOneforWordsTable)

        let TDTwoforWordsTable = document.createElement("td") // druhá buňka v řádku
        TDTwoforWordsTable.innerHTML = arrForSort[i][1]
        TRforWordsTable.appendChild(TDTwoforWordsTable)
    }   
})


