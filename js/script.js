console.log('JS OK')

// Creo l'array di oggetti
 const teamsData = [
 {
    name: 'Wayne Barnett',
    position: 'Founder & CEO' ,
    photo: 'wayne-barnett-founder-ceo.jpg' ,
 } ,
 {
    name: 'Angela Caroll',
    position: 'Chief Editor' ,
    photo: 'angela-caroll-chief-editor.jpg' ,
 } ,
 {
    name: 'Walter Gordon',
    position: 'Office Manager' ,
    photo: 'walter-gordon-office-manager.jpg' ,
 } ,
 {
    name: 'Angela Lopez',
    position: 'Social Media Manager' ,
    photo: 'angela-lopez-social-media-manager.jpg' ,
 } ,
 {
    name: 'Scott Estrada',
    position: 'Developer' ,
    photo: 'scott-estrada-developer.jpg' ,
 } ,
 {
    name: 'Barbara Ramos',
    position: 'Graphic Designer' ,
    photo: 'barbara-ramos-graphic-designer.jpg' ,
 } ,
];

// Itero attraverso l'array e stampo le informazioni in console
for (let member of teamsData) {
   console.log('Name:', member.name);
   console.log('Position:', member.position);
   console.log('Photo:', member.photo);
   console.log('--------------------------------');
 }
