document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.modal-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Coleta os valores dos campos do formulário
    const orgao = form.querySelector('input[name="orgao"]').value;
    const banca = form.querySelector('input[name="banca"]').value;
    const dt_inscricao = formatDate(form.querySelector('input[name="dt_inscricao"]').value);
    const dt_pgto = formatDate(form.querySelector('input[name="dt_pgto"]').value);
    const dt_prova = formatDate(form.querySelector('input[name="dt_prova"]').value);
    const f_inscrito = form.querySelector('#inscrito').checked; // Verifica se está marcado
    const f_pago = form.querySelector('#pgto').checked; // Verifica se está marcado
    const valor = parseFloat(form.querySelector('input[name="valor"]').value); // Converte para número
    const candidato = form.querySelector('.candidatos').value;

    // Função para formatar data de mm/dd/yyyy para dd/mm/yyyy
    function formatDate(dateString) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        return parts[2] + '/' + parts[1] + '/' + parts[0]; // Formato dd/mm/yyyy
      }
      return dateString; // Caso não seja possível formatar, retorna a data original
    }

    // Monta o objeto a ser enviado no corpo da requisição
    const body = {
      orgao: orgao,
      banca: banca,
      dt_inscricao: formatDate(dt_inscricao),
      dt_pgto: formatDate(dt_pgto),
      dt_prova: formatDate(dt_prova),
      f_inscrito: f_inscrito ? '1' : '0',
      f_pago: f_pago ? '1' : '0',
      valor: valor,
      f_realizada: "0" // Por padrão, assumindo que a prova não foi realizada
    };

    // Exibe o corpo da requisição no console para verificação
    console.log('Body da Requisição:', body);

    // Configuração da requisição POST
    const url = 'https://reminder-zrt9.onrender.com/adicionarProva';
    const options = {
      method: 'POST',
      body: JSON.stringify(body) 
    };

    // Envia a requisição usando fetch
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        alert('Dados enviados com sucesso:', data);
        // Aqui você pode adicionar código para lidar com a resposta, se necessário
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
        // Aqui você pode adicionar código para lidar com o erro, se necessário
      });
  });
});
