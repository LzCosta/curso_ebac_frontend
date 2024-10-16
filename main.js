$(document).ready(function () {
  // documento ... pronto para a ...
  $(".btn-success").click(function () {
    if ($("#text").val().length != 0) {
      var x = $("ul").html();
      var y =
        `<li class="alert alert-success alert-dismissible fade in" style="list-style-type: none"> 
<a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                   ` +
        $("#text").val() +
        `</li>`;
      $("ul").html(y + x);
      $("#text").val("");
    } else alert("Adicione uma tarefa");
  });
  // When Task is clicked
  $(document).on("click", ".alert", function () {
    // Documento -> ao clique, alerta, função =====>
    if ($(this).css("text-decoration-line") == "none")
      // se ... no css ...
      $(this).css("text-decoration-line", "line-through"); // isto ocorre ...
    else $(this).css("text-decoration-line", "none"); // caso contrário ...
  });
});
