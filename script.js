const materias = [
  { nombre: "Biología I", requisitos: [], desbloquea: ["Biología II"] },
  { nombre: "Biología II", requisitos: ["Biología I"], desbloquea: [] },
  { nombre: "Laboratorio de Biología I", requisitos: [], desbloquea: ["Laboratorio de Biología II"] },
  { nombre: "Laboratorio de Biología II", requisitos: ["Laboratorio de Biología I"], desbloquea: [] },
  { nombre: "Razonamiento Lógico y Matemático", requisitos: [], desbloquea: ["Química I", "Laboratorio de Química I"] },
  { nombre: "Química I", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II"] },
  { nombre: "Química II", requisitos: ["Química I"], desbloquea: [] },
];

let aprobadas = new Set();

function actualizarProgreso() {
  const total = materias.length;
  const completadas = aprobadas.size;
  const porcentaje = Math.round((completadas / total) * 100);
  document.getElementById("progress-bar").style.width = porcentaje + "%";
  document.getElementById("progress-text").innerText = porcentaje + "%";
}

function renderMaterias() {
  const contenedor = document.getElementById("grid-container");
  contenedor.innerHTML = "";

  materias.forEach((materia) => {
    const btn = document.createElement("div");
    btn.innerText = materia.nombre;
    btn.classList.add("course");

    const requisitosCumplidos = materia.requisitos.every((req) => aprobadas.has(req));
    if (!requisitosCumplidos && !aprobadas.has(materia.nombre)) {
      btn.classList.add("locked");
    } else if (aprobadas.has(materia.nombre)) {
      btn.classList.add("completed");
    }

    btn.onclick = () => {
      if (btn.classList.contains("locked")) return;
      if (aprobadas.has(materia.nombre)) {
        aprobadas.delete(materia.nombre);
      } else {
        aprobadas.add(materia.nombre);
      }
      renderMaterias();
      actualizarProgreso();
    };

    contenedor.appendChild(btn);
  });
}

renderMaterias();
actualizarProgreso();