
const materias = [
  { nombre: "Electiva de Arte", requisitos: [] },
  { nombre: "Biología I", requisitos: [] },
  { nombre: "Biología II", requisitos: ["Biología I"] },
  { nombre: "Laboratorio de Biología I", requisitos: [] },
  { nombre: "Laboratorio de Biología II", requisitos: ["Laboratorio de Biología I"] },
  { nombre: "Electiva Historia y Sociedad Mundial", requisitos: [] },
  { nombre: "Electiva de Ciencia y Humanismo", requisitos: [] },
  { nombre: "Español I", requisitos: [] },
  { nombre: "Español II", requisitos: ["Español I"] },
  { nombre: "Razonamiento Lógico y Matemático", requisitos: [] },
  { nombre: "Química I", requisitos: ["Razonamiento Lógico y Matemático"] },
  { nombre: "Laboratorio de Química I", requisitos: ["Razonamiento Lógico y Matemático"] },
  // Agrega el resto de tus materias aquí con sus respectivos requisitos
];

const aprobadas = new Set();

function actualizarProgreso() {
  const total = materias.length;
  const completadas = aprobadas.size;
  const porcentaje = Math.round((completadas / total) * 100);
  document.getElementById("progress-bar").style.width = porcentaje + "%";
  document.getElementById("progress-text").innerText = porcentaje + "%";
}

function renderMaterias() {
  document.querySelectorAll('.course').forEach(btn => {
    const nombre = btn.dataset.nombre;
    const materia = materias.find(m => m.nombre === nombre);
    if (!materia) return;

    const requisitosCumplidos = materia.requisitos.every(req => aprobadas.has(req));
    btn.classList.remove("locked", "completed");

    if (!requisitosCumplidos && !aprobadas.has(nombre)) {
      btn.classList.add("locked");
    } else if (aprobadas.has(nombre)) {
      btn.classList.add("completed");
    }

    btn.onclick = () => {
      if (btn.classList.contains("locked")) return;
      if (aprobadas.has(nombre)) {
        aprobadas.delete(nombre);
      } else {
        aprobadas.add(nombre);
      }
      renderMaterias();
      actualizarProgreso();
    };
  });
}

renderMaterias();
actualizarProgreso();
