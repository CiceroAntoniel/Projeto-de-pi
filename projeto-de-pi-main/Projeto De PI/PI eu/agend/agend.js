const form = document.getElementById('appointment-form');
const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const avisoInput = document.getElementById('aviso');
const appointmentsList = document.getElementById('appointments-list');

// Função para adicionar agendamento
function addAppointment(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const date = dateInput.value;
    const time = timeInput.value;
    const aviso = avisoInput.value;

    if (name && date && time) {
        const listItem = document.createElement('lista');
        listItem.innerHTML = 
        `<div class="imgpacint"> <img class=" imgpac" src="https://ionicframework.com/docs/img/demos/avatar.svg"></div>
         
         <div class="text">
            <div class="pacit">
             <span>Paciente:</span><br>
             <span>Data:</span> <br>
             <span>Hora:</span> <br>
             <span>Contato:</span><br>
             <span>Medico:</span><br>
            </div>
        
            <div class="listaul">
              ${name}<br>
              ${date}<br>
              ${time}<br>
              ${aviso}<br>
              ${medic}<br>
            </div>
         </div>
       
         <div class="btns">
             <button class="btn_conf">Confirmar</button>
             <button class="btn_remo">Cancelar</button>
         </div>`;

        // Adiciona o item à lista de agendamentos
        appointmentsList.appendChild(listItem);

        // Limpa os campos do formulário
        nameInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
        avisoInput.value ='';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Adicionar evento de submit no formulário
form.addEventListener('submit', addAppointment);

// Seleciona o botão e o menu
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('appointment-form');

// Adiciona um evento de clique ao botão
menuButton.addEventListener('click', () => {
    // Alterna a visibilidade do menu
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Exibe o menu
        menuButton.textContent = 'Fechar'; // Muda o texto do botão
    } else {
        menu.style.display = 'none'; // Oculta o menu
        menuButton.textContent = 'Agendar'; // Restaura o texto do botão
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn_remo')) {
      const item = event.target.closest('lista'); // Seleciona o elemento pai com a classe 'item'
      const info = item.querySelector('.info');   // Seleciona a informação adicional (opcional)

      item.remove();           // Remove o próprio item
    }
  });
  document.getElementById('btn_conf').addEventListener('click', function() {
    const local = document.getElementById('lista'); // Seleciona o elemento "local"
    local.style.borderColor = '#00f100 solid 5px'; // Define a cor da borda como verde
  });
