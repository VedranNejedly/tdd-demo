//1.Funkcija ne smije biti dulja od 5-6 redaka(short methods)
//2. Single responsibility principal
//3. No code duplication
//4. No ifs
//a.Strukture podataka su superiorne kodu
//b. bez prijevremene optimizacije
function convertToRoman(num) {
    var arr =''
    for(i in brojevi){
            while(num>=brojevi[i]){
                arr+=i
                num -=brojevi[i]
            }
    }
    return arr;
}

const brojevi = {
    "X":10,
    "IX":9,
    "V":5,
    "IV":4,
    "I":1,

};



module.exports = convertToRoman;