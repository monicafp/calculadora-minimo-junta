$(document).ready(function() {

  $('input').change(function() {
    updateResult();
  });

  function updateResult() {

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

    result = 8840 - (
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
      $('#note-total').html("de deuda anual");
    }
    if(result === 8840) {
      $('#note-total').html("de salario anual");
    }
    if(result > 0 && result !== 8840) {
      $('#note-total').html("restantes para el año");
    }

  };

});
