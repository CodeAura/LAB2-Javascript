const array = [" Zondag", " Maandag", " Dinsdag", " Woensdag", " Donderdag", " Vrijdag", " Zaterdag"];


document.write("<h2 id=test> Alle dagen van de week zijn: </h2>");
document.write(array);
document.write("<h2> De werkdagen zijn: </h2>");
document.write(array.slice(0,5));
document.write("<h2> De vrijedagen zijn: </h2>");
document.write(array.slice(5,7));
document.write("<h2> Alle dagen van de week in omgekeerde volgorde zijn: </h2>");
document.write(array.reverse(array));
document.write("<h2> De werkdagen in omgekeerde volgorde zijn: </h2>");
document.write(array.slice(2,7));
document.write("<h2> De weekenddagen in omgekeerde volgorde zijn: </h2>");
document.write(array.slice(0,2));

