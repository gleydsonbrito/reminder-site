  const form = document.querySelector('.modal-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const orgao = form.querySelector('input[name="orgao"]').value;
    const banca = form.querySelector('input[name="banca"]').value;
    const dt_inscricao = formatDate(form.querySelector('input[name="dt_inscricao"]').value);
    const dt_pgto = formatDate(form.querySelector('input[name="dt_pgto"]').value);
    const dt_prova = formatDate(form.querySelector('input[name="dt_prova"]').value);
    const f_inscrito = form.querySelector('#inscrito').checked;
    const f_pago = form.querySelector('#pgto').checked;
    const valor = parseFloat(form.querySelector('input[name="valor"]').value);
    const candidato = form.querySelector('.candidatos').value;

    function formatDate(dateString) {
      const parts = dateString.split('-');
      if (parts.length === 3) {
        return parts[2] + '/' + parts[1] + '/' + parts[0];
      }
      return dateString;
    }

    const body = {
      orgao: orgao,
      banca: banca,
      dt_inscricao: formatDate(dt_inscricao),
      dt_pgto: formatDate(dt_pgto),
      dt_prova: formatDate(dt_prova),
      f_inscrito: f_inscrito ? '1' : '0',
      f_pago: f_pago ? '1' : '0',
      valor: valor,
      f_realizada: "0",
      candidato: candidato,
    };

    console.log('Body da Requisição:', body);

    const url = 'https://reminder-zrt9.onrender.com/adicionarProva';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        alert('Dados enviados com sucesso:', data);
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  });
