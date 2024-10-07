function showAlert() {
  alert("selamat anda mendapat undian 1 Miliar!");
}

function validateForm() {
  var nrp = document.getElementById("nrpku"); //membaca object

  // nrp harus 10 digit (</> 10 digit false)
  if (nrp.value.length != 10) {
    alert("NRP harus 10 digit!");
    nrp.focus();
    return false;
  }
  //harus angka pada form nrp
  if (isNaN(nrp.value) == true) {
    alert("NRP harus Angka!");
    nrp.focus();
    return false;
  }
}
