function salvarConteudo() {
  var conteudo = document.getElementById("conteudo").value;
  localStorage.setItem("meuDiario", conteudo);
  document.getElementById("conteudo-salvo").innerHTML =
    "Conteúdo salvo com sucesso!";
}

window.onload = function () {
  var conteudoSalvo = sessionStorage.getItem("meuDiario");
  if (conteudoSalvo) {
    document.getElementById("conteudo").value = conteudoSalvo;
    document.getElementById("conteudo-salvo").innerHTML =
      "Último conteúdo salvo.";
  }
};
