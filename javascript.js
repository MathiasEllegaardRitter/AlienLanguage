// Test alien text ⏁⟒⌇⏁

// Unicode.
alienA = '\u{23C3}';
alienB = '\u{23DA}';
alienC = '\u{260A}';
alienD = '\u{2385}';
alienE = '\u{27D2}';
alienF = '\u{238E}';
alienG = '\u{260C}';
alienH = '\u{2291}';
alienI = '\u{27DF}';
alienJ = '\u{27CA}';
alienK = '\u{260D}';
alienL = '\u{2330}';
alienM = '\u{22D4}';
alienN = '\u{22CF}';
alienO = '\u{235C}';
alienP = '\u{233F}';
alienQ = '\u{237E}';
alienR = '\u{2340}';
alienS = '\u{2307}';
alienT = '\u{23C1}';
alienU = '\u{238D}';
alienV = '\u{2390}';
alienW = '\u{2359}';
alienX = '\u{2316}';
alienY = '\u{22AC}';
alienZ = '\u{22C9}';



dictionary =  new Map()

// Set up Map.
function setMap(setBool)
{
    // If it's translate human to alien
    if (setBool === "true")
    {
    console.log("you set keys to alpha")
    dictionary.set('A', alienA);
    dictionary.set('B', alienB);
    dictionary.set('C', alienC);
    dictionary.set('D', alienD);
    dictionary.set('E', alienE);
    dictionary.set('F', alienF);
    dictionary.set('G', alienG);
    dictionary.set('H', alienH);
    dictionary.set('I', alienI);
    dictionary.set('J', alienJ);
    dictionary.set('K', alienK);
    dictionary.set('L', alienL);
    dictionary.set('M', alienM);
    dictionary.set('N', alienN);
    dictionary.set('O', alienO);
    dictionary.set('P', alienP);
    dictionary.set('Q', alienQ);
    dictionary.set('R', alienR);
    dictionary.set('S', alienS);
    dictionary.set('T', alienT);
    dictionary.set('U', alienU);
    dictionary.set('V', alienV);
    dictionary.set('W', alienW);
    dictionary.set('X', alienX);
    dictionary.set('Y', alienY);
    dictionary.set('Z', alienZ);
    } else if(setBool === "false") {
        console.log("you set keys to alien")
    dictionary.set(alienA, "A");
    dictionary.set(alienB, "B");
    dictionary.set(alienC, "C");
    dictionary.set(alienD, "D");
    dictionary.set(alienE, "E");
    dictionary.set(alienF, "F");
    dictionary.set(alienG, "G");
    dictionary.set(alienH, "H");
    dictionary.set(alienI, "I");
    dictionary.set(alienJ, "J");
    dictionary.set(alienK, "K");
    dictionary.set(alienL, "L");
    dictionary.set(alienM, "M");
    dictionary.set(alienN, "N");
    dictionary.set(alienO, "O");
    dictionary.set(alienP, "P");
    dictionary.set(alienQ, "Q");
    dictionary.set(alienR, "R");
    dictionary.set(alienS, "S");
    dictionary.set(alienT, "T");
    dictionary.set(alienU, "U");
    dictionary.set(alienV, "V");
    dictionary.set(alienW, "W");
    dictionary.set(alienX, "X");
    dictionary.set(alienY, "Y");
    dictionary.set(alienZ, "Z");
    }
}


document.getElementById("translateBtnFire").addEventListener("click", translateText)


function translateText()
{
    // Get value from options.
    englishOrAlienInput = document.getElementById("langPicker").value

    // Get value from input textarea.
    translateText = document.getElementById("input").value

    if(englishOrAlienInput === "alienLang")
    {
        setMap("false")
        TranslateAlien()
    } else
    { 
        setMap("true")
        TranslateAlphabet();
    }

}


function TranslateAlien()
{
    console.log("Alien text " + translateText)

    // output Result
    alienText = "";

    // translate string to array
    transArray = Array.from(translateText);
    
    transArrayCalc(alienText)
}



function TranslateAlphabet() {
    // Make string to uppercase to generlize it.
    translateText = translateText.toUpperCase();

    // outputResult
    var alienText = "";

    // translate string to array
    transArray = Array.from(translateText);


    transArrayCalc(alienText);
}



function transArrayCalc(alienText) {
    transArray.forEach(element => {
        console.log("this is element " + element);
        // Size of map.
        dictionary.size;
        found = false;
        index = 0;
        // Get a key array to work with loops.
        keyList = Array.from(dictionary.keys());
        console.log("this is size " + dictionary.size);
        while (found === false && index < dictionary.size) {
            console.log("This is letter " + keyList[index]);
            if (keyList[index] === element) {
                console.log("This is unicode " + dictionary.get(element));
                alienText += dictionary.get(element);
                found = true;
            }
            else {
                console.log(keyList[index] + " key is not equal to " + element);
            }
            index++;
        }
    });
    document.getElementById("output").value = alienText;
    return alienText;
}

