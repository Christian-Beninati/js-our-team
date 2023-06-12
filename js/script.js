console.log('JS OK')

// Recupero l'elemento del DOM 
const teamList = document.getElementById('team-list');

// Creo l'array di oggetti
 const teamsData = [
 {
    name: 'Wayne Barnett',
    position: 'Founder & CEO' ,
    photo: 'img/wayne-barnett-founder-ceo.jpg' ,
 } ,
 {
    name: 'Angela Caroll',
    position: 'Chief Editor' ,
    photo: 'img/angela-caroll-chief-editor.jpg' ,
 } ,
 {
    name: 'Walter Gordon',
    position: 'Office Manager' ,
    photo: 'img/walter-gordon-office-manager.jpg' ,
 } ,
 {
    name: 'Angela Lopez',
    position: 'Social Media Manager' ,
    photo: 'img/angela-lopez-social-media-manager.jpg' ,
 } ,
 {
    name: 'Scott Estrada',
    position: 'Developer' ,
    photo: 'img/scott-estrada-developer.jpg' ,
 } ,
 {
    name: 'Barbara Ramos',
    position: 'Graphic Designer' ,
    photo: 'img/barbara-ramos-graphic-designer.jpg' ,
 } ,
];

// Itero attraverso l'array e stampo le informazioni in console
for (let member of teamsData) {
   console.log('Name:', member.name);
   console.log('Position:', member.position);
   console.log('Photo:', member.photo);
   console.log('--------------------------------');
}

//  Preparo una variabile con la list vuota (che conterrà le stringhe HTML)
let list = '';

// Itero attraverso l'array e costruisco le stringhe HTML
for (let member of teamsData) {
   list += `
     <li>
       <p>Name: ${member.name}</p>
       <p>Position: ${member.position}</p>
       <img src="${member.photo}" alt="${member.name}">
     </li>
   `;
}
 
// Inserisco le stringhe HTML nell'elemnto del DOM
teamList.innerHTML = list;