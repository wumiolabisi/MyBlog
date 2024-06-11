/**
 * Une fonction globale à Utils.js pour générer un nombre au hasard
 * @param {number} range 
 * @returns number
 */
const randomNumber = (range) => Math.floor(Math.random() * range);

/**
 * Une fonction permettant de choisir deux mots d'une phrase et d'appliquer un style différent à ces deux mots
 * méthodologie :
 * Je récup le titre
 * je l'explose
 * Je choisis 2 mots dans ce titre
 * J'applique le style sur ces 2 mots
 * je reconstruit la chaine avec ces 2 mots
 * je renvoie la chaine stylisée
 * 
 */
export const differentStyleForTwoWords = (title = '', classToApply = '') => {

    let stylizedTitle = '';
    let splittedTitle;
    let array = [];

    splittedTitle = title.split(' ');

    for (let i = 0; i < 2; i++) {
        array.push('<span className="' + classToApply + '">' + splittedTitle[randomNumber(splittedTitle.length)] + '</span>');

    }

    console.log(array);





    return stylizedTitle;

}