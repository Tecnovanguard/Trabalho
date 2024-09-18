document.addEventListener('DOMContentLoaded', () => {
    // Acessibilidade: Função para ler texto em voz alta
    const speakText = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'pt-BR';
        window.speechSynthesis.speak(speech);
    };

    // Botão para ouvir um episódio
    document.getElementById('play-audio').addEventListener('click', () => {
        //speakText('Ouça o episódio mais recente do nosso podcast sobre educação financeira. Explore tópicos sobre orçamento, investimentos e muito mais!');
        alert("OLÁ!");
    });

    // Formulário de contato: Validação e submissão
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Sua mensagem foi enviada com sucesso!');
        // Aqui você pode adicionar a lógica para enviar a mensagem para o servidor
    });
});