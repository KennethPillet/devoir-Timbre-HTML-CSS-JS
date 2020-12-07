document.querySelector('.welcome').addEventListener('click', () =>{
    alert('Oups tu as appuyé sur le bouton Bienvenue 😇')
})

document.querySelector('.color').addEventListener('input', () => {
    let color = document.querySelector('.color').value ; // prend la valeur récupere dans l'input
    document.querySelector('body').style.background = color ; // ajoute la valeur récupeere précedemment pour le mettre au background
});

document.querySelector('.bio').addEventListener('input', () => {
    let bio = document.querySelector('.bio').value ;
    document.querySelector('p').innerHTML = bio ; 
});

document.querySelector('.text').addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        let text = document.querySelector('.text').value ; // création d'une variable à laquelle on va attribuer la valeur du text récuperé
        let li = document.createElement('li'); // la variable appeler dis qu'elle va créer la balise li quand elle sera appeler 
        li.innerHTML = text; // la variable est appler dans le html avec la veleur de text
        document.querySelector('.list').appendChild(li);
        
        document.querySelector('.text').replace(document.querySelector('.text').value, 'mais encore?') //tentative de reset quand appuie sur entrée et après avoir créer la balise li mais sans suite
    } 
});