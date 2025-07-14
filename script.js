const subjects = [
// === Premédica ===
  {"id": "s000", "name": "Electiva de Arte", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s001", "name": "Biología I", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s002", "name": "Laboratorio de Biología I", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s003", "name": "Electiva Historia y Sociedad Mundial", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s004", "name": "Electiva de Ciencia y Humanismo", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s005", "name": "Español I", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s006", "name": "Razonamiento Lógico y Matemático", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s007", "name": "Orientación Académica", "prereqs": [], "semester": "1-1", "cycle": "Premédica"},
  {"id": "s008", "name": "Biología II", "prereqs": ["s001"], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s009", "name": "Laboratorio de Biología II", "prereqs": ["s002"], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s010", "name": "Electiva de Deporte", "prereqs": [], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s011", "name": "Español II", "prereqs": ["s005"], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s012", "name": "Matemáticas para Ciencias", "prereqs": [], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s013", "name": "Química I", "prereqs": ["s006"], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s014", "name": "Laboratorio de Química I", "prereqs": ["s006"], "semester": "1-2", "cycle": "Premédica"},
  {"id": "s015", "name": "Electiva de Filosofía", "prereqs": [], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s016", "name": "Física I", "prereqs": ["s012"], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s017", "name": "Laboratorio de Física I", "prereqs": ["s012"], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s018", "name": "Electiva Historia y Sociedad Dominicana", "prereqs": [], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s019", "name": "Química II", "prereqs": ["s013", "s014"], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s020", "name": "Laboratorio de Química II", "prereqs": ["s013", "s014"], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s021", "name": "Sociología de la Salud", "prereqs": [], "semester": "1-3", "cycle": "Premédica"},
  {"id": "s022", "name": "Biología Celular y Genética", "prereqs": ["s008", "s009"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s023", "name": "Laboratorio de Biología Celular y Genética", "prereqs": ["s008", "s009"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s024", "name": "Física II", "prereqs": ["s016", "s017"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s025", "name": "Laboratorio de Física II", "prereqs": ["s016", "s017"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s026", "name": "Inglés I", "prereqs": [], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s027", "name": "Electiva de Literatura", "prereqs": [], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s028", "name": "Química Orgánica I", "prereqs": ["s019", "s020"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s029", "name": "Laboratorio de Química Orgánica I", "prereqs": ["s019", "s020"], "semester": "2-1", "cycle": "Premédica"},
  {"id": "s030", "name": "Introducción a la Anatomía", "prereqs": ["s008"], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s031", "name": "Introducción a la Fisiología", "prereqs": ["s016"], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s032", "name": "Antropología Cristiana", "prereqs": [], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s033", "name": "Inglés II", "prereqs": ["s026"], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s034", "name": "Psicología de la Salud I", "prereqs": [], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s035", "name": "Química Orgánica II", "prereqs": ["s028", "s029"], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s036", "name": "Laboratorio de Química Orgánica II", "prereqs": ["s028", "s029"], "semester": "2-2", "cycle": "Premédica"},
  {"id": "s037", "name": "Microbiología General", "prereqs": ["s008"], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s038", "name": "Laboratorio de Microbiología General", "prereqs": ["s008"], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s039", "name": "Electiva de Ciencia Ambiental", "prereqs": [], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s040", "name": "Laboratorio de Ciencia Ambiental", "prereqs": [], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s041", "name": "Inglés III", "prereqs": ["s033"], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s042", "name": "Psicología de la Salud II", "prereqs": ["s034"], "semester": "2-3", "cycle": "Premédica"},
  {"id": "s043", "name": "Fundamentos de Metodología de la Investigación", "prereqs": ["s012"], "semester": "2-3", "cycle": "Premédica"},
// === Ciclo Ciencias Médicas Básicas ===
  {"id": "s044", "name": "Fundamentos de Medicina", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-1", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s045", "name": "Ciencias Morfológicas I", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-1", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s046", "name": "Ciencias Fisiológicas I", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-1", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s047", "name": "Inmunología I", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-1", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s048", "name": "Bioquímica I", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-1", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s049", "name": "Bioestadística", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s050", "name": "Biología Molecular y Genética", "prereqs": ["s007", "s011", "s022", "s032", "s042", "s035", "s036", "s043"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s051", "name": "Epidemiología de Campo", "prereqs": [], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s052", "name": "Ciencias Morfológicas II", "prereqs": ["s045"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s053", "name": "Ciencias Fisiológicas II", "prereqs": ["s046"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s054", "name": "Inmunología II", "prereqs": ["s047"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s055", "name": "Bioquímica II", "prereqs": ["s048"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s056", "name": "Destrezas Médicas I", "prereqs": ["s044", "s045"], "semester": "3-2", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s057", "name": "Inglés para la Salud", "prereqs": ["s041"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s058", "name": "Salud Pública", "prereqs": [], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s059", "name": "Bioética Médica", "prereqs": ["s032", "s044"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s060", "name": "Fisiopatología I", "prereqs": ["s052", "s055"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s061", "name": "Farmacología I", "prereqs": ["s055"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s062", "name": "Epidemiología Clínica", "prereqs": ["s051"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s063", "name": "Microbiología y Parasitología", "prereqs": ["s050"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
  {"id": "s064", "name": "Destrezas Médicas II", "prereqs": ["s056"], "semester": "3-3", "cycle": "Ciclo Ciencias Médicas Básicas"},
// === Ciclo de Preinternado ===
  {"id": "s065", "name": "Gestión en Salud", "prereqs": [], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s066", "name": "Patología I", "prereqs": ["s060", "s063"], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s067", "name": "Farmacología II y Toxicología", "prereqs": ["s061", "s060", "s063"], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s068", "name": "Medicina Familiar y Comunitaria I", "prereqs": ["s064", "s058"], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s069", "name": "Fisiopatología II", "prereqs": ["s060"], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s070", "name": "Medicina Basada en Evidencia", "prereqs": ["s062"], "semester": "4-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s071", "name": "Patología II", "prereqs": ["s066"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s072", "name": "Medicina Familiar y Comunitaria II", "prereqs": ["s068"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s073", "name": "Salud Mental", "prereqs": ["s064"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s074", "name": "Neurología", "prereqs": ["s069"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s075", "name": "Neurociencias Biológicas", "prereqs": ["s069", "s067"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s076", "name": "Tema de Tesis", "prereqs": ["s065", "s070"], "semester": "4-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s077", "name": "Moral Médica", "prereqs": [], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s078", "name": "Pediatría I", "prereqs": ["s071", "s073", "s075"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s079", "name": "Cardiopulmonar", "prereqs": ["s071", "s075"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s080", "name": "Ciencias Médicas Básicas Integradas", "prereqs": ["s071", "s075"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s081", "name": "Anteproyecto de Tesis", "prereqs": ["s076"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s082", "name": "Nefrología", "prereqs": ["s071", "s075"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s083", "name": "Medicina Familiar y Comunitaria III", "prereqs": ["s072"], "semester": "4-3", "cycle": "Ciclo de Preinternado"},
  {"id": "s084", "name": "Medicina Legal", "prereqs": ["s077"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s085", "name": "Hemato/Oncología", "prereqs": ["s080"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s086", "name": "Geriatría", "prereqs": ["s075"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s087", "name": "Gastroenterología", "prereqs": ["s080"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s088", "name": "Pediatría II", "prereqs": ["s078", "s080"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s089", "name": "Tesis", "prereqs": ["s081"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s090", "name": "Endocrinología y Nutrición", "prereqs": ["s080"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s091", "name": "Obstetricia y Perinatología", "prereqs": ["s080"], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s092", "name": "Electiva Profesional I", "prereqs": [], "semester": "5-1", "cycle": "Ciclo de Preinternado"},
  {"id": "s093", "name": "Ginecología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s094", "name": "Urología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s095", "name": "Oto/Oftalmología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s096", "name": "Infectología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s097", "name": "Reumatología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s098", "name": "Cirugía y Anestesia", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s099", "name": "Trauma y Ortopedia", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s100", "name": "Dermatología", "prereqs": ["s080"], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
  {"id": "s101", "name": "Electiva Profesional II", "prereqs": [], "semester": "5-2", "cycle": "Ciclo de Preinternado"},
// === Ciclo de Internado ===
  {"id": "s102", "name": "Internado de Cirugía", "prereqs": ["s089", "s084", "s098"], "semester": "6-1", "cycle": "Ciclo de Internado"},
  {"id": "s103", "name": "Internado de Medicina Social, Comunitaria y Familiar", "prereqs": ["s089", "s084"], "semester": "6-1", "cycle": "Ciclo de Internado"},
  {"id": "s104", "name": "Internado de Pediatría", "prereqs": ["s089", "s084", "s088"], "semester": "6-2", "cycle": "Ciclo de Internado"},
  {"id": "s105", "name": "Internado de Ginecología y Obstetricia", "prereqs": ["s089", "s084", "s091", "s093"], "semester": "6-2", "cycle": "Ciclo de Internado"},
  {"id": "s106", "name": "Internado de Psiquiatría", "prereqs": ["s089", "s084", "s073"], "semester": "6-2", "cycle": "Ciclo de Internado"},
  {"id": "s107", "name": "Internado de Medicina Interna", "prereqs": ["s089", "s084"], "semester": "6-2", "cycle": "Ciclo de Internado"}
];


function createSubjectCard(subject) {
  const div = document.createElement("div");
  div.className = "subject locked";
  div.id = subject.id;
  div.innerText = subject.name;
  div.dataset.prereqs = JSON.stringify(subject.prereqs);

  div.addEventListener("click", () => {
    if (!div.classList.contains("locked")) {
      div.classList.toggle("completed");
      unlockSubjects();
    }
  });

  return div;
}

function unlockSubjects() {
  subjects.forEach((subject) => {
    const el = document.getElementById(subject.id);
    const prereqs = subject.prereqs;
    const fulfilled = prereqs.every((pid) => {
      const prereqEl = document.getElementById(pid);
      return prereqEl && prereqEl.classList.contains("completed");
    });

    if (fulfilled) {
      el.classList.remove("locked");
    } else {
      el.classList.add("locked");
    }
  });
}

window.onload = () => {
  const grid = document.getElementById("grid");
  subjects.forEach((subject) => {
    const card = createSubjectCard(subject);
    grid.appendChild(card);
  });
  unlockSubjects();
};
