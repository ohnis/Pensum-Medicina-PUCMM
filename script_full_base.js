// script_full_base.js
// Estructura de todas las materias con sus prerequisitos y desbloqueos

const materias = [
  { nombre: "Electiva de Arte", requisitos: [], desbloquea: [] },
  { nombre: "Biología I", requisitos: [], desbloquea: ["Biología II"] },
  { nombre: "Biología II", requisitos: ["Biología I"], desbloquea: ["Biología Celular y Genética", "Laboratorio de Biología Celular y Genética", "Introducción a la Anatomía", "Microbiología General", "Laboratorio de Microbiología General"] },
  { nombre: "Razonamiento Lógico y Matemático", requisitos: [], desbloquea: ["Química I", "Laboratorio de Química I"] },
  { nombre: "Química I", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II", "Laboratorio de Química II"] },
  { nombre: "Química II", requisitos: ["Química I"], desbloquea: ["Química Orgánica I", "Laboratorio de Química Orgánica I"] },
  { nombre: "Química Orgánica I", requisitos: ["Química II"], desbloquea: ["Química Orgánica II", "Laboratorio de Química Orgánica II"] },
  { nombre: "Química Orgánica II", requisitos: ["Química Orgánica I"], desbloquea: ["Fundamentos de Medicina"] },
  { nombre: "Fundamentos de Medicina", requisitos: ["Química Orgánica II", "Español II", "Biología Celular y Genética", "Psicología de la Salud II", "Fundamentos de Metodología de la Investigación"], desbloquea: ["Destrezas Médicas I", "Bioética Médica"] },

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
