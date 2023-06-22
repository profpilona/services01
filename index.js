/**
 * Programme pour démontrer le fonctionnement de Express et de Mongoose
 * dans le cadre du labo 01 du cours programmation de services Web
 * Alain Pilon - 22 juin 2023
 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://alain:test911@cluster0.yml6m.mongodb.net/labo01');
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('erreur de BD:', err);
});
db.once('open', ()=>{
    console.log('Connexion à la BD OK');
})
app.get('/', (requete, reponse)=>{
    reponse.send('Allo tout le monde!');
});
app.get('/index.html', (requete, reponse)=>{
    reponse.send('Allo tout le monde de la page index.html!');
});
app.listen(PORT);
console.log(`Serveur Web fonctionnel sur le port ${PORT}`);