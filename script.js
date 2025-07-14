// Define all subject prerequisites based on the curriculum
const prerequisites = {
    // Semestre I -> II
    'biologia-ii': ['biologia-i'],
    'lab-biologia-ii': ['lab-biologia-i'],
    'espanol-ii': ['espanol-i'],
    'quimica-i': ['razonamiento-logico'],
    'lab-quimica-i': ['razonamiento-logico'],
    
    // Semestre II -> III
    'fisica-i': ['matematicas-ciencias'],
    'lab-fisica-i': ['matematicas-ciencias'],
    'quimica-ii': ['quimica-i'],
    'lab-quimica-ii': ['quimica-i', 'lab-quimica-i'],
    
    // Semestre III -> Segundo Año Semestre I
    'biologia-celular': ['biologia-ii'],
    'lab-biologia-celular': ['biologia-ii', 'lab-biologia-ii'],
    'fisica-ii': ['fisica-i'],
    'lab-fisica-ii': ['fisica-i', 'lab-fisica-i'],
    'quimica-organica-i': ['quimica-ii'],
    'lab-quimica-organica-i': ['quimica-ii', 'lab-quimica-ii'],
    
    // Segundo Año Semestre I -> II
    'intro-anatomia': ['biologia-ii'],
    'intro-fisiologia': ['fisica-i'],
    'ingles-ii': ['ingles-i'],
    'quimica-organica-ii': ['quimica-organica-i'],
    'lab-quimica-organica-ii': ['quimica-organica-i', 'lab-quimica-organica-i'],
    
    // Segundo Año Semestre II -> III
    'microbiologia-general': ['biologia-ii'],
    'lab-microbiologia-general': ['biologia-ii'],
    'ingles-iii': ['ingles-ii'],
    'psicologia-salud-ii': ['psicologia-salud-i'],
    'metodologia-investigacion': ['matematicas-ciencias'],
    
    // Prerequisites for Ciencias Médicas Básicas
    'fundamentos-medicina': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'ciencias-morfologicas-i': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'ciencias-fisiologicas-i': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'inmunologia-i': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'bioquimica-i': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'bioestadistica': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    'biologia-molecular': ['orientacion-academica', 'espanol-ii', 'biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'antropologia-cristiana', 'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general', 'psicologia-salud-ii', 'metodologia-investigacion'],
    
    // Ciencias Médicas Básicas internal prerequisites
    'ciencias-morfologicas-ii': ['ciencias-morfologicas-i'],
    'ciencias-fisiologicas-ii': ['ciencias-fisiologicas-i'],
    'inmunologia-ii': ['inmunologia-i'],
    'bioquimica-ii': ['bioquimica-i'],
    'destrezas-medicas-i': ['fundamentos-medicina', 'ciencias-morfologicas-i'],
    'epidemiologia-campo': ['bioestadistica'],
    'microbiologia-parasitologia': ['biologia-molecular'],
    
    // Semester III of 3rd year
    'ingles-salud': ['ingles-iii'],
    'salud-publica': ['destrezas-medicas-i'],
    'bioetica-medica': ['fundamentos-medicina', 'antropologia-cristiana'],
    'fisiopatologia-i': ['ciencias-morfologicas-ii', 'bioquimica-ii'],
    'farmacologia-i': ['bioquimica-ii'],
    'epidemiologia-clinica': ['epidemiologia-campo'],
    'destrezas-medicas-ii': ['destrezas-medicas-i'],
    
    // 4th year semester I
    'gestion-salud': ['salud-publica'],
    'patologia-i': ['fisiopatologia-i', 'microbiologia-parasitologia'],
    'farmacologia-ii': ['fisiopatologia-i', 'farmacologia-i', 'microbiologia-parasitologia'],
    'medicina-familiar-i': ['salud-publica', 'destrezas-medicas-i'],
    'fisiopatologia-ii': ['fisiopatologia-i'],
    'medicina-evidencia': ['salud-publica', 'epidemiologia-clinica'],
    
    // 4th year semester II (Preinternado)
    'patologia-ii': ['patologia-i'],
    'medicina-familiar-ii': ['medicina-familiar-i'],
    'salud-mental': ['destrezas-medicas-ii'],
    'neurologia': ['fisiopatologia-ii'],
    'neurociencias': ['farmacologia-ii'],
    'tema-tesis': ['gestion-salud', 'medicina-evidencia'],
    
    // 4th year semester III
    'moral-medica': ['bioetica-medica'],
    'pediatria-i': ['patologia-ii', 'salud-mental', 'neurociencias'],
    'cardiopulmonar': ['patologia-ii', 'neurociencias'],
    'ciencias-basicas-integradas': ['patologia-ii', 'neurociencias'],
    'anteproyecto-tesis': ['tema-tesis'],
    'nefrologia': ['patologia-ii', 'neurociencias'],
    'medicina-familiar-iii': ['medicina-familiar-ii'],
    
    // 5th year semester I
    'medicina-legal': ['moral-medica'],
    'hemato-oncologia': ['ciencias-basicas-integradas'],
    'geriatria': ['neurociencias'],
    'gastroenterologia': ['ciencias-basicas-integradas'],
    'pediatria-ii': ['ciencias-basicas-integradas', 'neurociencias'],
    'tesis': ['anteproyecto-tesis'],
    'endocrinologia': ['ciencias-basicas-integradas'],
    'obstetricia': ['ciencias-basicas-integradas'],
    
    // 5th year semester II
    'ginecologia': ['ciencias-basicas-integradas'],
    'urologia': ['ciencias-basicas-integradas'],
    'oto-oftalmologia': ['ciencias-basicas-integradas'],
    'infectologia': ['ciencias-basicas-integradas'],
    'reumatologia': ['ciencias-basicas-integradas'],
    'cirugia-anestesia': ['ciencias-basicas-integradas'],
    'trauma-ortopedia': ['ciencias-basicas-integradas'],
    'dermatologia': ['ciencias-basicas-integradas'],
    
    // Internados - all require multiple prerequisites
    'internado-cirugia': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis'],
    'internado-medicina-social': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis'],
    'internado-pediatria': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis'],
    'internado-ginecologia': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis'],
    'internado-psiquiatria': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis'],
    'internado-medicina-interna': ['medicina-legal', 'hemato-oncologia', 'geriatria', 'gastroenterologia', 'pediatria-ii', 'endocrinologia', 'obstetricia', 'ginecologia', 'urologia', 'oto-oftalmologia', 'infectologia', 'reumatologia', 'cirugia-anestesia', 'trauma-ortopedia', 'dermatologia', 'anteproyecto-tesis']
};

// Track completed subjects
let completedSubjects = new Set();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSubjects();
    updateSubjectStates();
    
    // Add event listeners to all subjects
    document.querySelectorAll('.subject').forEach(subject => {
        subject.addEventListener('click', handleSubjectClick);
    });
    
    // Add reset button functionality
    document.getElementById('resetBtn').addEventListener('click', resetMalla);
});

function initializeSubjects() {
    // All subjects start as locked except first semester subjects
    const firstSemesterSubjects = [
        'electiva-arte', 'biologia-i', 'lab-biologia-i', 'electiva-historia-mundial',
        'electiva-ciencia-humanismo', 'espanol-i', 'razonamiento-logico', 'orientacion-academica'
    ];
    
    document.querySelectorAll('.subject').forEach(subject => {
        const subjectId = subject.getAttribute('data-id');
        if (firstSemesterSubjects.includes(subjectId)) {
            subject.classList.remove('locked');
            subject.classList.add('available');
        }
    });
}

function handleSubjectClick(event) {
    const subject = event.target;
    const subjectId = subject.getAttribute('data-id');
    
    // Can only click on available subjects
    if (!subject.classList.contains('available')) {
        return;
    }
    
    // Toggle completion status
    if (completedSubjects.has(subjectId)) {
        completedSubjects.delete(subjectId);
        subject.classList.remove('completed');
        subject.classList.add('available');
    } else {
        completedSubjects.add(subjectId);
        subject.classList.remove('available');
        subject.classList.add('completed');
    }
    
    // Update all subject states
    updateSubjectStates();
}

function updateSubjectStates() {
    document.querySelectorAll('.subject').forEach(subject => {
        const subjectId = subject.getAttribute('data-id');
        
        // Skip if already completed
        if (completedSubjects.has(subjectId)) {
            return;
        }
        
        // Check if prerequisites are met
        const prereqs = prerequisites[subjectId] || [];
        const prereqsMet = prereqs.every(prereq => completedSubjects.has(prereq));
        
        if (prereqsMet) {
            subject.classList.remove('locked');
            subject.classList.add('available');
        } else {
            subject.classList.remove('available');
            subject.classList.add('locked');
        }
    });
}

function resetMalla() {
    // Clear completed subjects
    completedSubjects.clear();
    
    // Reset all subjects to locked
    document.querySelectorAll('.subject').forEach(subject => {
        subject.classList.remove('completed', 'available');
        subject.classList.add('locked');
    });
    
    // Re-initialize first semester subjects
    initializeSubjects();
}

// Function to check if all prerequisites for a cycle are completed
function checkCycleCompletion() {
    const premedicalSubjects = [
        'electiva-arte', 'biologia-i', 'lab-biologia-i', 'electiva-historia-mundial',
        'electiva-ciencia-humanismo', 'espanol-i', 'razonamiento-logico', 'orientacion-academica',
        'biologia-ii', 'lab-biologia-ii', 'electiva-deporte', 'espanol-ii', 'matematicas-ciencias',
        'quimica-i', 'lab-quimica-i', 'electiva-filosofia', 'fisica-i', 'lab-fisica-i',
        'electiva-historia-dominicana', 'quimica-ii', 'lab-quimica-ii', 'sociologia-salud',
        'biologia-celular', 'lab-biologia-celular', 'fisica-ii', 'lab-fisica-ii', 'ingles-i',
        'electiva-literatura', 'quimica-organica-i', 'lab-quimica-organica-i', 'intro-anatomia',
        'intro-fisiologia', 'antropologia-cristiana', 'ingles-ii', 'psicologia-salud-i',
        'quimica-organica-ii', 'lab-quimica-organica-ii', 'microbiologia-general',
        'lab-microbiologia-general', 'electiva-ciencia-ambiental', 'lab-ciencia-ambiental',
        'ingles-iii', 'psicologia-salud-ii', 'metodologia-investigacion'
    ];
    
    const premedicalComplete = premedicalSubjects.every(subject => completedSubjects.has(subject));
    
    if (premedicalComplete) {
        console.log('Ciclo Premédica completado - Ciencias Médicas Básicas desbloqueadas');
    }
    
    return premedicalComplete;
}

// Add visual feedback for hover effects
document.addEventListener('DOMContentLoaded', function() {
    const subjects = document.querySelectorAll('.subject');
    
    subjects.forEach(subject => {
        subject.addEventListener('mouseenter', function() {
            if (this.classList.contains('available')) {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            }
        });
        
        subject.addEventListener('mouseleave', function() {
            if (this.classList.contains('available')) {
                this.style.transform = 'translateY(-2px) scale(1)';
            }
        });
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            resetMalla();
        }
    }
});

// Add progress tracking
function getProgress() {
    const totalSubjects = document.querySelectorAll('.subject').length;
    const completedCount = completedSubjects.size;
    return {
        completed: completedCount,
        total: totalSubjects,
        percentage: Math.round((completedCount / totalSubjects) * 100)
    };
}

// Update progress display (you can expand this)
function updateProgressDisplay() {
    const progress = getProgress();
    console.log(`Progreso: ${progress.completed}/${progress.total} (${progress.percentage}%)`);
}

// Add this to the subject click handler
function handleSubjectClick(event) {
    const subject = event.target;
    const subjectId = subject.getAttribute('data-id');
    
    if (!subject.classList.contains('available')) {
        return;
    }
    
    if (completedSubjects.has(subjectId)) {
        completedSubjects.delete(subjectId);
        subject.classList.remove('completed');
        subject.classList.add('available');
    } else {
        completedSubjects.add(subjectId);
        subject.classList.remove('available');
        subject.classList.add('completed');
    }
    
    updateSubjectStates();
    updateProgressDisplay();
}
