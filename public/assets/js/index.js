$(document).ready(function() {

  var $totalBudget = $('#total-budget');
  var $vivienda = $('#vivienda');
  var $utilidadesServicios = $('#utilidades-servicios');
  var $transporte = $('#transporte');
  var $gastosMedicos = $('#gastos-medicos');
  var $deudasPrestamos = $('#deudas-prestamos');
  var $comida = $('#comida');
  var $householdEssentials = $('household-essentials');
  var $impuestos = $('#impuestos');
  var $otrosGastos = $('#otros-gastos');

  $otrosGastos.focusout(function() {
    updateResult();
  });

  function updateResult() {
    var result = 0;
    result = $totalBudget - (
      ($vivienda.val || 0) +
      ($utilidadesServicios.val || 0) +
      ($transporte.val || 0) +
      ($gastosMedicos.val || 0) +
      ($deudasPrestamos.val || 0) +
      ($comida.val || 0) +
      ($householdEssentials.val || 0) +
      ($impuestos.val || 0) +
      ($otrosGastos.val || 0) +
    );
    $totalBudget.val(result);
  };
});
