$(document).ready(function() {

  $(document).on("scroll", function() {
    var pos = $(document).scrollTop();
    if (pos > 470) {
      console.log("fixed");
      $("#total-budget").css("position", "fixed");
      $("#total-budget").css("bottom", "130px");
    } else {
      console.log("relative");
      $("#total-budget").css("position", "relative");
      $("#total-budget").css("bottom", "auto");
      $("#total-budget").css("float", "right");
    }
  })

  $('input').change(function() {
    updateResult();
  });

  $('#wage').change(function() {
    updateResult();
  })

  function updateResult() {

    var $salario = Number($('#wage').val());
    var $horasSem = 40;

    var $totalBudget = $('#total-budget');
    var $vivienda = $('#vivienda');
    var $utilidadesServicios = $('#utilidades-servicios');
    var $transporte = $('#transporte');
    var $gastosMedicos = $('#gastos-medicos');
    var $deudasPrestamos = $('#deudas-prestamos');
    var $comida = $('#comida');
    var $householdEssentials = $('#household-essentials');
    var $impuestos = $('#impuestos');
    var $otrosGastos = $('#otros-gastos');

    result = ($salario * $horasSem * 52) - (
      (Number(($vivienda.val()) || 0)*12) +
      (Number(($utilidadesServicios.val())|| 0)*12) +
      (Number(($transporte.val()) || 0)*12) +
      (Number(($gastosMedicos.val()) || 0)*12) +
      (Number(($deudasPrestamos.val()) || 0)*12) +
      (Number(($comida.val()) || 0)*12) +
      (Number(($householdEssentials.val()) || 0)*12) +
      (Number(($impuestos.val()) || 0)*12) +
      (Number(($otrosGastos.val()) || 0)*12)
    );

    setTimeout(function(){
      odometer.innerHTML = result;
    }, 100);

    if(result < 0) {
      var additionalHours = -(result / $salario / 52);
      $('#note-total').html("de déficit anual o el equivalente de " + additionalHours.toFixed(1) + " horas adicionales de trabajo a la semana");
    }
    if(result === ($salario * $horasSem * 52)) {
      $('#note-total').html("de salario anual");
    }
    if(result > 0 && result !== ($salario * $horasSem * 52)) {
      $('#note-total').html("restantes para el año");
    }

  };

  $('#reset-button').click(function() {

    $('#vivienda').val(0);
    $('#utilidades-servicios').val(0);
    $('#transporte').val(0);
    $('#gastos-medicos').val(0);
    $('#deudas-prestamos').val(0);
    $('#comida').val(0);
    $('#household-essentials').val(0);
    $('#impuestos').val(0);
    $('#otros-gastos').val(0);

    setTimeout(function(){
      odometer.innerHTML = (Number($salario) * $horasSem * 52);
    }, 100);

    $('#note-total').html("de salario anual");

    updateResult();

  });

});
