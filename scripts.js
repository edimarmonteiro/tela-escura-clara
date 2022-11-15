
function changeMode(){
    changeClasses();
    changeText();
}

//Mudando as cores
function changeClasses(){
    /*Irei mecher com o css=classList
    toggle()=Ira adicionar ou remover o class escolhida */
    button.classList.toggle(darkModeClass);
    h2.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//Mudando os textos
function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    /*se dentro do conteudo do butão exirtir a class 'darkModeClass' execute*/
    //Se o 'body' estiver em Dark Mode avera a mudança nos elementos escolhidos
    if(body.classList.contains(darkModeClass)){
        button.innerHTML= lightMode;
        h2.innerHTML= darkMode + " ON";
        //Para sair da função depois do ocorido(substituindo o else)
        return;
    }

    button.innerHTML = darkMode
    h2.innerHTML = lightMode + " ON"
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('modo-selector');
/*Chamo a costante. Adiciono a o ouvinte de evento.
Fala o tio do evento. Chama a function*/
const h2 = document.getElementById('page-title');
//Ira retorna Arrays
/*[0] Porque só exister um 'body'. Refere o primeiro elemento do array
(caso existisse mais de um 'body' precisaris expecificar qual queria puxar[0],[1],[2]...*/
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);


	

