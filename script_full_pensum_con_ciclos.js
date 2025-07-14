// script_full_base.js
// Estructura de todas las materias con sus prerequisitos y desbloqueos

const materias = [
  { nombre: "Electiva de Arte", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Biología I", ciclo: "Premédica", requisitos: [], desbloquea: ["Biología II"] },
  { nombre: "Laboratorio de Biología I", ciclo: "Premédica", requisitos: [], desbloquea: ["Laboratorio de Biología II"] },
  { nombre: "Electiva Historia y Sociedad Mundial", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Electiva de Ciencia y Humanismo", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Español I", ciclo: "Premédica", requisitos: [], desbloquea: ["Español II"] },
  { nombre: "Razonamiento Lógico y Matemático", ciclo: "Premédica", requisitos: [], desbloquea: ["Química I", "Laboratorio de Química I"] },
  { nombre: "Orientación Académica", ciclo: "Premédica", requisitos: [], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Biología II", ciclo: "Premédica", requisitos: ["Biología I"], desbloquea: ["Biología Celular y Genética", "Laboratorio de Biología Celular y Genética", "Introducción a la Anatomía", "Microbiología General", "Laboratorio de Microbiología General"] },
  { nombre: "Laboratorio de Biología II", ciclo: "Premédica", requisitos: ["Laboratorio de Biología I"], desbloquea: ["Biología Celular y Genética", "Laboratorio de Biología Celular y Genética"] },
  { nombre: "Electiva de Deporte", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Español II", ciclo: "Premédica", requisitos: ["Español I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Matemáticas para Ciencias", ciclo: "Premédica", requisitos: [], desbloquea: ["Física I", "Laboratorio de Física I", "Química II", "Laboratorio de Química II", "Fundamentos de Metodología de la Investigación"] },
  { nombre: "Química I", ciclo: "Premédica", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II", "Laboratorio de Química II"] },
  { nombre: "Laboratorio de Química I", ciclo: "Premédica", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II", "Laboratorio de Química II"] },
  { nombre: "Electiva de Filosofía", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Física I", ciclo: "Premédica", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Física II", "Laboratorio de Física II", "Introducción a la Fisiología"] },
  { nombre: "Laboratorio de Física I", ciclo: "Premédica", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Física II", "Laboratorio de Física II"] },
  { nombre: "Electiva Historia y Sociedad Dominicana", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Química II", ciclo: "Premédica", requisitos: ["Química I", "Laboratorio de Química I"], desbloquea: ["Química Orgánica I", "Laboratorio de Química Orgánica I"] },
  { nombre: "Laboratorio de Química II", ciclo: "Premédica", requisitos: ["Química I", "Laboratorio de Química I"], desbloquea: ["Química Orgánica I", "Laboratorio de Química Orgánica I"] },
  { nombre: "Sociología de la Salud", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Biología Celular y Genética", ciclo: "Premédica", requisitos: ["Biología II", "Laboratorio de Biología II"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Biología Celular y Genética", ciclo: "Premédica", requisitos: ["Biología II", "Laboratorio de Biología II"], desbloquea: [] },
  { nombre: "Física II", ciclo: "Premédica", requisitos: ["Física I", "Laboratorio de Física I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Física II", ciclo: "Premédica", requisitos: ["Física I", "Laboratorio de Física I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Inglés I", ciclo: "Premédica", requisitos: [], desbloquea: ["Inglés II"] },
  { nombre: "Electiva de Literatura", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Química Orgánica I", ciclo: "Premédica", requisitos: ["Química II", "Laboratorio de Química II"], desbloquea: ["Química Orgánica II", "Laboratorio de Química Orgánica II"] },
  { nombre: "Laboratorio de Química Orgánica I", ciclo: "Premédica", requisitos: ["Química II", "Laboratorio de Química II"], desbloquea: ["Química Orgánica II", "Laboratorio de Química Orgánica II"] },
  { nombre: "Introducción a la Anatomía", ciclo: "Premédica", requisitos: ["Biología II"], desbloquea: [] },
  { nombre: "Introducción a la Fisiología", ciclo: "Premédica", requisitos: ["Física I"], desbloquea: [] },
  { nombre: "Antropología Cristiana", ciclo: "Premédica", requisitos: [], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética", "Bioética Médica"] },
  { nombre: "Inglés II", ciclo: "Premédica", requisitos: ["Inglés I"], desbloquea: ["Inglés III"] },
  { nombre: "Psicología de la Salud I", ciclo: "Premédica", requisitos: [], desbloquea: ["Psicología de la Salud II"] },
  { nombre: "Química Orgánica II", ciclo: "Premédica", requisitos: ["Química Orgánica I", "Laboratorio de Química Orgánica I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Química Orgánica II", ciclo: "Premédica", requisitos: ["Química Orgánica I", "Laboratorio de Química Orgánica I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Microbiología General", ciclo: "Premédica", requisitos: ["Biología II"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Microbiología General", ciclo: "Premédica", requisitos: ["Biología II"], desbloquea: [] },
  { nombre: "Electiva de Ciencia Ambiental", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Laboratorio de Ciencia Ambiental", ciclo: "Premédica", requisitos: [], desbloquea: [] },
  { nombre: "Inglés III", ciclo: "Premédica", requisitos: ["Inglés II"], desbloquea: ["Inglés para la Salud"] },
  { nombre: "Psicología de la Salud II", ciclo: "Premédica", requisitos: ["Psicología de la Salud I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Fundamentos de Metodología de la Investigación", ciclo: "Premédica", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Fundamentos de Medicina", ciclo: "Ciencias Médicas Básicas", requisitos: ["Química Orgánica II", "Laboratorio de Química Orgánica II", "Psicología de la Salud II", "Fundamentos de Metodología de la Investigación", "Biología Celular y Genética", "Español II", "Física II", "Laboratorio de Física II"], desbloquea: ["Destrezas Médicas I", "Bioética Médica"] },
  { nombre: "Ciencias Morfológicas I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Ciencias Morfológicas II", "Destrezas Médicas I"] },
  { nombre: "Ciencias Fisiológicas I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Ciencias Fisiológicas II"] },
  { nombre: "Inmunología I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Inmunología II"] },
  { nombre: "Bioquímica I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Bioquímica II"] },
  { nombre: "Bioestadística", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: [] },
  { nombre: "Biología Molecular y Genética", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Microbiología y Parasitología"] },
  { nombre: "Epidemiología de Campo", ciclo: "Ciencias Médicas Básicas", requisitos: [], desbloquea: ["Epidemiología Clínica"] },
  { nombre: "Ciencias Morfológicas II", ciclo: "Ciencias Médicas Básicas", requisitos: ["Ciencias Morfológicas I"], desbloquea: ["Fisiopatología I"] },
  { nombre: "Ciencias Fisiológicas II", ciclo: "Ciencias Médicas Básicas", requisitos: ["Ciencias Fisiológicas I"], desbloquea: [] },
  { nombre: "Inmunología II", ciclo: "Ciencias Médicas Básicas", requisitos: ["Inmunología I"], desbloquea: [] },
  { nombre: "Bioquímica II", ciclo: "Ciencias Médicas Básicas", requisitos: ["Bioquímica I"], desbloquea: ["Fisiopatología I", "Farmacología I"] },
  { nombre: "Destrezas Médicas I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina", "Ciencias Morfológicas I"], desbloquea: ["Destrezas Médicas II", "Medicina Familiar y Comunitaria I"] },
  { nombre: "Inglés para la Salud", ciclo: "Ciencias Médicas Básicas", requisitos: ["Inglés III"], desbloquea: [] },
  { nombre: "Salud Pública", ciclo: "Ciencias Médicas Básicas", requisitos: [], desbloquea: ["Medicina Familiar y Comunitaria I", "Medicina Basada en Evidencia"] },
  { nombre: "Bioética Médica", ciclo: "Ciencias Médicas Básicas", requisitos: ["Fundamentos de Medicina", "Antropología Cristiana"], desbloquea: [] },
  { nombre: "Fisiopatología I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Ciencias Morfológicas II", "Bioquímica II"], desbloquea: ["Fisiopatología II", "Patología I", "Farmacología II y Toxicología"] },
  { nombre: "Farmacología I", ciclo: "Ciencias Médicas Básicas", requisitos: ["Bioquímica II"], desbloquea: ["Farmacología II y Toxicología"] },
  { nombre: "Epidemiología Clínica", ciclo: "Ciencias Médicas Básicas", requisitos: ["Epidemiología de Campo"], desbloquea: ["Medicina Basada en Evidencia"] },
  { nombre: "Microbiología y Parasitología", ciclo: "Ciencias Médicas Básicas", requisitos: ["Biología Molecular y Genética"], desbloquea: ["Patología I", "Farmacología II y Toxicología"] },
  { nombre: "Destrezas Médicas II", ciclo: "Ciencias Médicas Básicas", requisitos: ["Destrezas Médicas I"], desbloquea: ["Salud Mental"] },
  { nombre: "Gestión en Salud", ciclo: "Preinternado", requisitos: [], desbloquea: ["Tema de Tesis"] },
  { nombre: "Patología I", ciclo: "Preinternado", requisitos: ["Fisiopatología I"], desbloquea: ["Patología II"] },
  { nombre: "Farmacología II y Toxicología", ciclo: "Preinternado", requisitos: ["Farmacología I", "Fisiopatología I"], desbloquea: ["Neurociencias Biológicas"] },
  { nombre: "Medicina Familiar y Comunitaria I", ciclo: "Preinternado", requisitos: ["Salud Pública", "Destrezas Médicas I"], desbloquea: ["Medicina Familiar y Comunitaria II"] },
  { nombre: "Fisiopatología II", ciclo: "Preinternado", requisitos: ["Fisiopatología I"], desbloquea: ["Neurología", "Neurociencias Biológicas"] },
  { nombre: "Medicina Basada en Evidencia", ciclo: "Preinternado", requisitos: ["Epidemiología Clínica", "Salud Pública"], desbloquea: ["Tema de Tesis"] },
  { nombre: "Patología II", ciclo: "Preinternado", requisitos: ["Patología I"], desbloquea: ["Pediatría I", "Cardiopulmonar", "Ciencias Médicas Básicas Integradas", "Nefrología"] },
  { nombre: "Medicina Familiar y Comunitaria II", ciclo: "Preinternado", requisitos: ["Medicina Familiar y Comunitaria I"], desbloquea: ["Medicina Familiar y Comunitaria III"] },
  { nombre: "Salud Mental", ciclo: "Preinternado", requisitos: ["Destrezas Médicas II"], desbloquea: ["Pediatría I"] },
  { nombre: "Neurología", ciclo: "Preinternado", requisitos: ["Fisiopatología II"], desbloquea: [] },
  { nombre: "Neurociencias Biológicas", ciclo: "Preinternado", requisitos: ["Fisiopatología II", "Farmacología II y Toxicología"], desbloquea: ["Pediatría I", "Cardiopulmonar", "Ciencias Médicas Básicas Integradas", "Nefrología", "Geriatría", "Pediatría II"] },
  { nombre: "Tema de Tesis", ciclo: "Preinternado", requisitos: ["Gestión en Salud", "Medicina Basada en Evidencia"], desbloquea: ["Anteproyecto de Tesis"] },
  { nombre: "Pediatría I", ciclo: "Preinternado", requisitos: ["Patología II", "Salud Mental", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Cardiopulmonar", ciclo: "Preinternado", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Ciencias Médicas Básicas Integradas", ciclo: "Preinternado", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: ["Hemato/Oncología", "Gastroenterología", "Pediatría II", "Endocrinología y Nutrición", "Obstetricia y Perinatología", "Ginecología", "Urología", "Oto/Oftalmología", "Infectología", "Reumatología", "Cirugía y Anestesia", "Trauma y Ortopedia", "Dermatología"] },
  { nombre: "Anteproyecto de Tesis", ciclo: "Preinternado", requisitos: ["Tema de Tesis"], desbloquea: ["Tesis", "Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Nefrología", ciclo: "Preinternado", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Medicina Familiar y Comunitaria III", ciclo: "Preinternado", requisitos: ["Medicina Familiar y Comunitaria II"], desbloquea: [] },
  { nombre: "Medicina Legal", ciclo: "Preinternado", requisitos: ["Moral Médica"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Hemato/Oncología", ciclo: "Preinternado", requisitos: ["Ciencias Médicas Básicas Integradas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Geriatría", ciclo: "Preinternado", requisitos: ["Neurociencias Biológicas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Gastroenterología", ciclo: "Preinternado", requisitos: ["Ciencias Médicas Básicas Integradas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Tesis", ciclo: "Preinternado", requisitos: ["Anteproyecto de Tesis"], desbloquea: [] },
  { nombre: "Internado de Cirugía", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Medicina Social, Comunitaria y Familiar", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Pediatría", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Ginecología y Obstetricia", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Psiquiatría", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Medicina Interna", ciclo: "Internado", requisitos: ["Tesis"], desbloquea: [] },

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
