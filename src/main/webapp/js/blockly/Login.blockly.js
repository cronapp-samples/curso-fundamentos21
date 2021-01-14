window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Login = window.blockly.js.blockly.Login || {};

/**
 * Login
 */
window.blockly.js.blockly.Login.abrirCadastro = async function() {

  this.cronapi.screen.showModal("modalCadastro");
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Login.fecharCadastro = async function() {

  this.cronapi.screen.hideModal("modalCadastro");
}
