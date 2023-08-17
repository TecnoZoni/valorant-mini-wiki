const agentsContainer = document.getElementById('agentes');
const urlAgents = 'https://valorant-api.com/v1/agents/?language=es-MX&isPlayableCharacter=true';

const mapasContainer = document.getElementById('mapas');
const urlMapas = 'https://valorant-api.com/v1/maps/?language=es-MX';

const arsenalContainer = document.getElementById('arsenal');
const urlArsenal = 'https://valorant-api.com/v1/weapons/?language=es-MX';

const botonMenu = document.getElementById('movil-menu');
const headerMenu = document.getElementById('header-menu');

//peticion a la API pidiendo la informacion
//tomo la respuesta y la trasnformo en JSON, luego la muestro en consola para saber como llega la informacion y por ultimo con un ciclo forEach empiezo a tomar los datos y a crear las Tarjetas de los diferentes agentes, mapas y arsenal.
fetch(urlAgents)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(agents => {
            const CardAgent = document.createElement('div');
            CardAgent.classList.add("card-agent");

            const imgAgent = document.createElement('img');
            imgAgent.classList.add("card-agent-img");

            const nameAgent = document.createElement('h3');
            nameAgent.classList.add("card-agent-name");

            imgAgent.setAttribute('src', agents.displayIcon)
            nameAgent.innerText = agents.displayName

            CardAgent.appendChild(imgAgent);
            CardAgent.appendChild(nameAgent);

            agentsContainer.appendChild(CardAgent);
        });
    })
    .catch(err => console.log(err))

fetch(urlMapas)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(maps => {
            const CardMap = document.createElement('div');
            CardMap.classList.add("card-map");

            const nameMap = document.createElement('h3');
            nameMap.classList.add("card-map-name");

            const imgMap = document.createElement('img');
            imgMap.classList.add("card-map-img");

            imgMap.setAttribute('src', maps.splash)
            nameMap.innerText = maps.displayName

            CardMap.appendChild(nameMap);
            CardMap.appendChild(imgMap);

            mapasContainer.appendChild(CardMap);
        })
    })

fetch(urlArsenal)
.then(response => response.json())
.then(data=>{
    console.log(data);
    data.data.forEach(arma =>{
        const CardArsenal = document.createElement('div');
        CardArsenal.classList.add("card-arsenal");

            const nameArsenal = document.createElement('h3');
            nameArsenal.classList.add("card-arsenal-name");

            const imgArsenal = document.createElement('img');
            imgArsenal.classList.add("card-arsenal-img");

            imgArsenal.setAttribute('src', arma.displayIcon)
            nameArsenal.innerText = arma.displayName

            CardArsenal.appendChild(nameArsenal);
            CardArsenal.appendChild(imgArsenal);

            arsenalContainer.appendChild(CardArsenal);
    })
})

function abrirMenu(){
    const estadoMenu =headerMenu.classList.contains('active');
    if (estadoMenu) {
        headerMenu.classList.remove('active');

        // const svgBotonMenu = botonMenu.appendChild;
        //     svgBotonMenu.

    } else {
        headerMenu.classList.add('active');
    }
}

botonMenu.addEventListener('click', abrirMenu)