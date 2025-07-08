document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botaoMensagem')
    const mensagem = document.getElementById('mensagem')
    
    function mostrarMensagem() {
        mensagem.style.display = 'block'
        mensagem.innerHTML = 'Quer conhecer mais sobre mim e minha jornada na área da programação? <a href="https://isabela.zambe.com.br/" target="_blank">Veja meu primeiro site</a> sendo atualizado de acordo com meu progresso!!'
    }

    botao.addEventListener('click', mostrarMensagem)

})
