const configdgv={
  endpoint:"produtos.json",
}
const dgv=(configdgv=>{
  fetch(configdgv.endpoint)
  .then(res=>res.json())
  .then(res=>{
    res.forEach(el =>{
      const dgvLinha = document.createElement("div");
      dgvLinha.setAttribute("class", "dgvLinha");

      const c1 = document.createElement("div");
      c1.setAttribute("class", "c1");
      c1.innerHTML = el.id;
      dgvLinha.appendChild(c1);
    });
// console.log(res);
  });
}