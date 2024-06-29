const BASE_URL = 'https://reminder-zrt9.onrender.com/'

const ul = document.querySelector('.exames-list')

function checkUncheck(flag){
  return flag == "0" ? "uncheck" : "check" 
}

function createListItem(values){
  const {
    id,
    orgao, 
    banca, 
    dt_inscricao,
    dt_pgto,
    dt_prova,
    f_inscrito,
    f_pago,
    valor,
    f_realizada
  } = values
  return`
  <li class="l-item">
          <div class="head-container">
            <div class="left">
              <p class="concurso">${orgao}</p>
              <p class="concurso">${banca}</p>
            </div>
            <div class="rigth">
              <p class="valor">R$${valor}</p>
            </div>
          </div>        
          <div class="dt-container">
            <div class="dt">
              <p>Inscrição até</p>
              <p>${dt_inscricao}</p>
            </div>
            <div class="dt">
              <p>Pagamento até</p>
              <p>${dt_pgto}</p>
            </div>
          </div>
          <div class="check-container">
            <div class="checks">
              <p>Inscrito</p>
              <img class="checks-icons" src="./assets/${checkUncheck(f_inscrito)}.png" alt="">
            </div>
            <div class="checks">
              <p>Pago</p>
              <img class="checks-icons" src="./assets/${checkUncheck(f_pago)}.png" alt="">
            </div>
          </div>
          <p class="dt-prova">Dia da prova: ${dt_prova}</p>
        </li>
  `
}

fetch(BASE_URL, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
}
)
.then(res => res.json())
.then(exames => {
  exames.forEach( item => {
    const li = document.createElement('li')
    li.innerHTML = createListItem(item)
    ul.appendChild(li)
  });
})