// script_full_base.js
// Estructura de todas las materias con sus prerequisitos y desbloqueos

const materias = [
  { nombre: "Electiva de Arte", requisitos: [], desbloquea: [] },
  { nombre: "Biología I", requisitos: [], desbloquea: ["Biología II"] },
  { nombre: "Laboratorio de Biología I", requisitos: [], desbloquea: ["Laboratorio de Biología II"] },
  { nombre: "Electiva Historia y Sociedad Mundial", requisitos: [], desbloquea: [] },
  { nombre: "Electiva de Ciencia y Humanismo", requisitos: [], desbloquea: [] },
  { nombre: "Español I", requisitos: [], desbloquea: ["Español II"] },
  { nombre: "Razonamiento Lógico y Matemático", requisitos: [], desbloquea: ["Química I", "Laboratorio de Química I"] },
  { nombre: "Orientación Académica", requisitos: [], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Biología II", requisitos: ["Biología I"], desbloquea: ["Biología Celular y Genética", "Laboratorio de Biología Celular y Genética", "Introducción a la Anatomía", "Microbiología General", "Laboratorio de Microbiología General"] },
  { nombre: "Laboratorio de Biología II", requisitos: ["Laboratorio de Biología I"], desbloquea: ["Biología Celular y Genética", "Laboratorio de Biología Celular y Genética"] },
  { nombre: "Electiva de Deporte", requisitos: [], desbloquea: [] },
  { nombre: "Español II", requisitos: ["Español I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Matemáticas para Ciencias", requisitos: [], desbloquea: ["Física I", "Laboratorio de Física I", "Química II", "Laboratorio de Química II", "Fundamentos de Metodología de la Investigación"] },
  { nombre: "Química I", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II", "Laboratorio de Química II"] },
  { nombre: "Laboratorio de Química I", requisitos: ["Razonamiento Lógico y Matemático"], desbloquea: ["Química II", "Laboratorio de Química II"] },
  { nombre: "Electiva de Filosofía", requisitos: [], desbloquea: [] },
  { nombre: "Física I", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Física II", "Laboratorio de Física II", "Introducción a la Fisiología"] },
  { nombre: "Laboratorio de Física I", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Física II", "Laboratorio de Física II"] },
  { nombre: "Electiva Historia y Sociedad Dominicana", requisitos: [], desbloquea: [] },
  { nombre: "Química II", requisitos: ["Química I", "Laboratorio de Química I"], desbloquea: ["Química Orgánica I", "Laboratorio de Química Orgánica I"] },
  { nombre: "Laboratorio de Química II", requisitos: ["Química I", "Laboratorio de Química I"], desbloquea: ["Química Orgánica I", "Laboratorio de Química Orgánica I"] },
  { nombre: "Sociología de la Salud", requisitos: [], desbloquea: [] },
  { nombre: "Biología Celular y Genética", requisitos: ["Biología II", "Laboratorio de Biología II"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Biología Celular y Genética", requisitos: ["Biología II", "Laboratorio de Biología II"], desbloquea: [] },
  { nombre: "Física II", requisitos: ["Física I", "Laboratorio de Física I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Física II", requisitos: ["Física I", "Laboratorio de Física I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Inglés I", requisitos: [], desbloquea: ["Inglés II"] },
  { nombre: "Electiva de Literatura", requisitos: [], desbloquea: [] },
  { nombre: "Química Orgánica I", requisitos: ["Química II", "Laboratorio de Química II"], desbloquea: ["Química Orgánica II", "Laboratorio de Química Orgánica II"] },
  { nombre: "Laboratorio de Química Orgánica I", requisitos: ["Química II", "Laboratorio de Química II"], desbloquea: ["Química Orgánica II", "Laboratorio de Química Orgánica II"] },
  { nombre: "Introducción a la Anatomía", requisitos: ["Biología II"], desbloquea: [] },
  { nombre: "Introducción a la Fisiología", requisitos: ["Física I"], desbloquea: [] },
  { nombre: "Antropología Cristiana", requisitos: [], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética", "Bioética Médica"] },
  { nombre: "Inglés II", requisitos: ["Inglés I"], desbloquea: ["Inglés III"] },
  { nombre: "Psicología de la Salud I", requisitos: [], desbloquea: ["Psicología de la Salud II"] },
  { nombre: "Química Orgánica II", requisitos: ["Química Orgánica I", "Laboratorio de Química Orgánica I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Química Orgánica II", requisitos: ["Química Orgánica I", "Laboratorio de Química Orgánica I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Microbiología General", requisitos: ["Biología II"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Laboratorio de Microbiología General", requisitos: ["Biología II"], desbloquea: [] },
  { nombre: "Electiva de Ciencia Ambiental", requisitos: [], desbloquea: [] },
  { nombre: "Laboratorio de Ciencia Ambiental", requisitos: [], desbloquea: [] },
  { nombre: "Inglés III", requisitos: ["Inglés II"], desbloquea: ["Inglés para la Salud"] },
  { nombre: "Psicología de la Salud II", requisitos: ["Psicología de la Salud I"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Fundamentos de Metodología de la Investigación", requisitos: ["Matemáticas para Ciencias"], desbloquea: ["Fundamentos de Medicina", "Ciencias Morfológicas I", "Ciencias Fisiológicas I", "Inmunología I", "Bioquímica I", "Bioestadística", "Biología Molecular y Genética"] },
  { nombre: "Fundamentos de Medicina", requisitos: ["Química Orgánica II", "Laboratorio de Química Orgánica II", "Psicología de la Salud II", "Fundamentos de Metodología de la Investigación", "Biología Celular y Genética", "Español II", "Física II", "Laboratorio de Física II"], desbloquea: ["Destrezas Médicas I", "Bioética Médica"] },
  { nombre: "Ciencias Morfológicas I", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Ciencias Morfológicas II", "Destrezas Médicas I"] },
  { nombre: "Ciencias Fisiológicas I", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Ciencias Fisiológicas II"] },
  { nombre: "Inmunología I", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Inmunología II"] },
  { nombre: "Bioquímica I", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Bioquímica II"] },
  { nombre: "Bioestadística", requisitos: ["Fundamentos de Medicina"], desbloquea: [] },
  { nombre: "Biología Molecular y Genética", requisitos: ["Fundamentos de Medicina"], desbloquea: ["Microbiología y Parasitología"] },
  { nombre: "Epidemiología de Campo", requisitos: [], desbloquea: ["Epidemiología Clínica"] },
  { nombre: "Ciencias Morfológicas II", requisitos: ["Ciencias Morfológicas I"], desbloquea: ["Fisiopatología I"] },
  { nombre: "Ciencias Fisiológicas II", requisitos: ["Ciencias Fisiológicas I"], desbloquea: [] },
  { nombre: "Inmunología II", requisitos: ["Inmunología I"], desbloquea: [] },
  { nombre: "Bioquímica II", requisitos: ["Bioquímica I"], desbloquea: ["Fisiopatología I", "Farmacología I"] },
  { nombre: "Destrezas Médicas I", requisitos: ["Fundamentos de Medicina", "Ciencias Morfológicas I"], desbloquea: ["Destrezas Médicas II", "Medicina Familiar y Comunitaria I"] },
  { nombre: "Inglés para la Salud", requisitos: ["Inglés III"], desbloquea: [] },
  { nombre: "Salud Pública", requisitos: [], desbloquea: ["Medicina Familiar y Comunitaria I", "Medicina Basada en Evidencia"] },
  { nombre: "Bioética Médica", requisitos: ["Fundamentos de Medicina", "Antropología Cristiana"], desbloquea: [] },
  { nombre: "Fisiopatología I", requisitos: ["Ciencias Morfológicas II", "Bioquímica II"], desbloquea: ["Fisiopatología II", "Patología I", "Farmacología II y Toxicología"] },
  { nombre: "Farmacología I", requisitos: ["Bioquímica II"], desbloquea: ["Farmacología II y Toxicología"] },
  { nombre: "Epidemiología Clínica", requisitos: ["Epidemiología de Campo"], desbloquea: ["Medicina Basada en Evidencia"] },
  { nombre: "Microbiología y Parasitología", requisitos: ["Biología Molecular y Genética"], desbloquea: ["Patología I", "Farmacología II y Toxicología"] },
  { nombre: "Destrezas Médicas II", requisitos: ["Destrezas Médicas I"], desbloquea: ["Salud Mental"] },
  { nombre: "Gestión en Salud", requisitos: [], desbloquea: ["Tema de Tesis"] },
  { nombre: "Patología I", requisitos: ["Fisiopatología I"], desbloquea: ["Patología II"] },
  { nombre: "Farmacología II y Toxicología", requisitos: ["Farmacología I", "Fisiopatología I"], desbloquea: ["Neurociencias Biológicas"] },
  { nombre: "Medicina Familiar y Comunitaria I", requisitos: ["Salud Pública", "Destrezas Médicas I"], desbloquea: ["Medicina Familiar y Comunitaria II"] },
  { nombre: "Fisiopatología II", requisitos: ["Fisiopatología I"], desbloquea: ["Neurología", "Neurociencias Biológicas"] },
  { nombre: "Medicina Basada en Evidencia", requisitos: ["Epidemiología Clínica", "Salud Pública"], desbloquea: ["Tema de Tesis"] },
  { nombre: "Patología II", requisitos: ["Patología I"], desbloquea: ["Pediatría I", "Cardiopulmonar", "Ciencias Médicas Básicas Integradas", "Nefrología"] },
  { nombre: "Medicina Familiar y Comunitaria II", requisitos: ["Medicina Familiar y Comunitaria I"], desbloquea: ["Medicina Familiar y Comunitaria III"] },
  { nombre: "Salud Mental", requisitos: ["Destrezas Médicas II"], desbloquea: ["Pediatría I"] },
  { nombre: "Neurología", requisitos: ["Fisiopatología II"], desbloquea: [] },
  { nombre: "Neurociencias Biológicas", requisitos: ["Fisiopatología II", "Farmacología II y Toxicología"], desbloquea: ["Pediatría I", "Cardiopulmonar", "Ciencias Médicas Básicas Integradas", "Nefrología", "Geriatría", "Pediatría II"] },
  { nombre: "Tema de Tesis", requisitos: ["Gestión en Salud", "Medicina Basada en Evidencia"], desbloquea: ["Anteproyecto de Tesis"] },
  { nombre: "Pediatría I", requisitos: ["Patología II", "Salud Mental", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Cardiopulmonar", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Ciencias Médicas Básicas Integradas", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: ["Hemato/Oncología", "Gastroenterología", "Pediatría II", "Endocrinología y Nutrición", "Obstetricia y Perinatología", "Ginecología", "Urología", "Oto/Oftalmología", "Infectología", "Reumatología", "Cirugía y Anestesia", "Trauma y Ortopedia", "Dermatología"] },
  { nombre: "Anteproyecto de Tesis", requisitos: ["Tema de Tesis"], desbloquea: ["Tesis", "Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Nefrología", requisitos: ["Patología II", "Neurociencias Biológicas"], desbloquea: [] },
  { nombre: "Medicina Familiar y Comunitaria III", requisitos: ["Medicina Familiar y Comunitaria II"], desbloquea: [] },
  { nombre: "Medicina Legal", requisitos: ["Moral Médica"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Hemato/Oncología", requisitos: ["Ciencias Médicas Básicas Integradas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Geriatría", requisitos: ["Neurociencias Biológicas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Gastroenterología", requisitos: ["Ciencias Médicas Básicas Integradas"], desbloquea: ["Internado de Cirugía", "Internado de Medicina Social, Comunitaria y Familiar", "Internado de Pediatría", "Internado de Ginecología y Obstetricia", "Internado de Psiquiatría", "Internado de Medicina Interna"] },
  { nombre: "Tesis", requisitos: ["Anteproyecto de Tesis"], desbloquea: [] },
  { nombre: "Internado de Cirugía", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Medicina Social, Comunitaria y Familiar", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Pediatría", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Ginecología y Obstetricia", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Psiquiatría", requisitos: ["Tesis"], desbloquea: [] },
  { nombre: "Internado de Medicina Interna", requisitos: ["Tesis"], desbloquea: [] },

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
