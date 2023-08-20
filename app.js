const agentsContainer = document.getElementById('agentes');
const urlAgents = 'https://valorant-api.com/v1/agents/?language=es-MX&isPlayableCharacter=true';

const mapasContainer = document.getElementById('mapas');
const urlMapas = 'https://valorant-api.com/v1/maps/?language=es-MX';

const arsenalContainer = document.getElementById('arsenal');
const urlArsenal = 'https://valorant-api.com/v1/weapons/?language=es-MX';

const botonMenu = document.getElementById('movil-menu');
const headerMenu = document.getElementById('header-menu');

const modal = document.getElementById('modal-agent')

const botonCerrar = document.getElementById('botonCerrar');

//peticion a la API pidiendo la informacion
//tomo la respuesta y la trasnformo en JSON, luego la muestro en consola para saber como llega la informacion y por ultimo con un ciclo forEach empiezo a tomar los datos y a crear las Tarjetas de los diferentes agentes, mapas y arsenal.
fetch(urlAgents)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(agents => {
            // CARGANDO AGENTES A LA PAGINA //
            const CardAgent = document.createElement('div');
            const imgAgent = document.createElement('img');
            const nameAgent = document.createElement('h3');

            CardAgent.classList.add("card-agent");
            imgAgent.classList.add("card-agent-img");
            nameAgent.classList.add("card-agent-name");

            imgAgent.setAttribute('src', agents.displayIcon)
            nameAgent.innerText = agents.displayName

            CardAgent.appendChild(imgAgent);
            CardAgent.appendChild(nameAgent);
            agentsContainer.appendChild(CardAgent);
            // CARGANDO AGENTES A LA PAGINA //

            //MODAL DE LOS AGENTES//
            CardAgent.addEventListener('click', () => {
                const containInfo = document.getElementById('containInfo');
                const containImg = document.getElementById('containImg');
                containInfo.innerHTML = '';
                containImg.innerHTML = '';

                const modalName = document.createElement('h2');
                const modalNameHabilidades = document.createElement('h2');
                const modalDescipt = document.createElement('p');
                const containHabil = document.createElement('div');
                const imgModalAgent = document.createElement('img');

                modalName.classList.add('modal-h2-name');
                modalNameHabilidades.classList.add('modal-h2-name');
                modalDescipt.classList.add('modal-parrafo');
                containHabil.classList.add('modal-habilidades');
                containImg.style.backgroundImage = `url('${agents.background}')`;
                containImg.style.backgroundSize = 'cover';
                containImg.style.backgroundPosition = 'center'

                modalName.innerText = agents.displayName;
                modalNameHabilidades.innerText = "Habilidades";
                modalDescipt.innerText = agents.description;

                imgModalAgent.setAttribute('src', agents.fullPortraitV2);

                containInfo.appendChild(modalName);
                containInfo.appendChild(modalDescipt);
                containInfo.appendChild(modalNameHabilidades);
                containInfo.appendChild(containHabil);
                containImg.appendChild(imgModalAgent);

                agents.abilities.forEach(habilidad => {
                    console.log(habilidad);
                    const slotHabilidad = document.createElement('div');
                    const nameHabilidad = document.createElement('h3')
                    const logoHabilidad = document.createElement('img');

                    nameHabilidad.innerText = habilidad.displayName;
                    logoHabilidad.setAttribute('src', habilidad.displayIcon)

                    slotHabilidad.appendChild(nameHabilidad);
                    slotHabilidad.appendChild(logoHabilidad);
                    containHabil.appendChild(slotHabilidad);

                    slotHabilidad.classList.add('habilidad');
                })

                modal.style.display = 'block';
            })
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

            //MODAL DE MAPAS
            CardMap.addEventListener('click',()=>{
                const containInfo = document.getElementById('containInfo');
                const containImg = document.getElementById('containImg');
                containInfo.innerHTML = '';
                containImg.innerHTML = '';

                const modalName = document.createElement('h2');
                const imgInfoMap = document.createElement('img')
                const imgModalMaps = document.createElement('img');

                modalName.classList.add('modal-h2-name');
                modalName.innerText = maps.displayName;

                imgInfoMap.classList.add('modal-info-map')
                imgModalMaps.classList.add('modal-img-map')

                imgInfoMap.setAttribute('src', maps.displayIcon)
                imgModalMaps.setAttribute('src', maps.splash);

                containInfo.appendChild(modalName);
                containInfo.appendChild(imgInfoMap);
                containImg.appendChild(imgModalMaps);

                modal.style.display = 'block';
            })
        })
    })

fetch(urlArsenal)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(arma => {
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


function abrirMenu() {
    const estadoMenu = headerMenu.classList.contains('active');
    if (estadoMenu) {
        headerMenu.classList.remove('active');
    } else {
        headerMenu.classList.add('active');
    }
}

botonMenu.addEventListener('click', abrirMenu)

botonCerrar.addEventListener('click', () => {

    modal.style.display = 'none';
})