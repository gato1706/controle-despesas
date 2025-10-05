export function getDespesas() {
  return JSON.parse(localStorage.getItem("despesas")) || [];
}

export function salvarDespesas(despesas) {
  localStorage.setItem("despesas", JSON.stringify(despesas));
}
