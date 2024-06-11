/**
 * Une fonction globale à Utils.js pour générer un nombre au hasard
 * @param {number} range 
 * @returns number
 */
const randomNumber = (range) => Math.floor(Math.random() * range);

/**
 * Une fonction permettant de choisir deux mots d'une phrase et d'appliquer un style différent à ces deux mots
 * -- Méthodologie :
 * Je récup le titre
 * je l'explose
 * Je choisis 2 mots dans ce titre
 * J'applique le style sur ces 2 mots
 * Je remplace le mot stylisé directement => OK
 * Je renvoie la chaine stylisée
 *  
 * @param {string} title 
 * @param {string} classToApply 
 * @returns {string}
 * 
 */
export const differentStyleForTwoWords = (title = '', classToApply = '') => {

    let splittedTitle, r, customHTML;


    splittedTitle = title.split(' ');

    for (let i = 0; i < 2; i++) {
        // récup nbre au hasard, dans la limite de la taille du tableau contenant le titre
        r = randomNumber(splittedTitle.length);
        splittedTitle[r] = '<span class="' + classToApply + '">' + splittedTitle[r] + '</span>';
    }

    const parser = new DOMParser();
    const html = parser.parseFromString(splittedTitle.join(" "), 'text/html');

    return (
        <div
            dangerouslySetInnerHTML={{ __html: html.body.innerHTML }}
        />
    );



}