
// Função para iniciar o downlo
// Insira aqui o link para o arquivo PDFad do PDF quando o botão for clicado
function downloadPDF(){
   // Verificar se o formulário está preenchido
   const nome = document.getElementById('inputNome').value;
   const sobrenome = document.getElementById('inputSobrenome').value;
   const email = document.getElementById('inputEmail3').value;



   if (nome.trim() === '' || email.trim() === '' || sobrenome.trim() === '') {
     alert('Por favor, preencha todos os campos do formulário antes de baixar o E-book.');
     return;
   }
      // Se o formulário estiver preenchido, prosseguir com o download
      //montar o link do pdf
      const linkDoPDF = 'EbookDeReparos.pdf';

      //criar um link temporario para o download
  const templink = document.createElement('a');
  templink.href = linkDoPDF;
  templink.download = 'EbookDeReparos.pdf';

// Adicionar o link temporário à página e simular o clique nele para iniciar o download
    document.body.appendChild(templink);
    templink.click();
    document.body.removeChild(templink);
  }
  
 // Adicionar um evento de clique ao botão "Baixar E-book"
 const btnDownload = document.getElementById('btnDownload');
 btnDownload.addEventListener('click', downloadPDF);


 