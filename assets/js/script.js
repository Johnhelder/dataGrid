const configdgv={
  endpoint:"produtos.json",
  idDestino:"dvgDados",
}
const dgv=(configdgv=>{
  const dvgDados = document.getElementById(configdgv.idDestino);
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

      const c2 = document.createElement("div");
      c1.setAttribute("class", "c2");
      c2.innerHTML = el.produto;
      dgvLinha.appendChild(c2);

      const c3 = document.createElement("div");
      c3.setAttribute("class", "c3");
      c3.innerHTML = el.marca;
      dgvLinha.appendChild(c3);

      const c4 = document.createElement("div");
      c4.setAttribute("class", "c4");
      c1.innerHTML = el.modelo;
      dgvLinha.appendChild(c4);

      const c5 = document.createElement("div");
      c5.setAttribute("class", "c5");
      c5.innerHTML = "DEV";
      dgvLinha.appendChild(c5);

      dvgDados.appendChild(dgvLinha);
    });
  });
}