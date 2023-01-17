const ativadorToast = document.getElementById('btn-carrinho');
const mensagem = document.getElementById('mensagens-alerta');


if (ativadorToast) {
    ativadorToast.addEventListener('click', function() {
        const toast = new bootstrap.Toast(mensagem);
        toast.show();
    })

}