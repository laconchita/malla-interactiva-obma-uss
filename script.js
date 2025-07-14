// script.js
const ramos = {
  "Biología Celular": ["Integrado de Fisiología - Fisiopatología I", "Histoembriología"],
  "Morfología Básica": ["Anatomía Aplicada a la Gineco-Obstetricia"],
  "Química General y Orgánica": ["Bioquímica General"],
  "Antropología": ["Ética"],
  "Integrado de Fisiología - Fisiopatología I": ["Integrado de Fisiología - Fisiopatología II"],
  "Histoembriología": ["Embriología y Genética"],
  "Bioquímica General": ["Microbiología Médica"],
  "Anatomía Aplicada a la Gineco-Obstetricia": ["Proceso de Atención en Matronería"],
  "Microbiología Médica": ["Fisiología Ginecológica y Sexual en el Curso de la Vida"],
  "Integrado de Fisiología - Fisiopatología II": ["Farmacología General", "Fisiología Obstétrica y Neonatal"],
  "Farmacología General": ["Patología Obstétrica y Neonatal", "Patología Ginecológica en el Curso de la Vida"],
  "Fisiología Ginecológica y Sexual en el Curso de la Vida": ["Proceso de Atención en Matronería Médico Quirúrgico", "Patología Ginecológica en el Curso de la Vida"],
  "Fisiología Obstétrica y Neonatal": ["Patología Obstétrica y Neonatal"],
  "Ética": ["Persona y Sociedad"],
  "Patología Obstétrica y Neonatal": ["Matronería en Atención Primaria", "Integrado Perinatal y Ginecológico"],
  "Patología Ginecológica en el Curso de la Vida": ["Consejería en Salud Sexual y Reproductiva", "Salud Reproductiva y Gerontológica"],
  "Consejería en Salud Sexual y Reproductiva": ["Integrado Perinatal y Ginecológico"],
  "Salud Reproductiva y Gerontológica": ["Matronería en Atención Primaria"],
  "Bioética": ["Internado de Especialidades en Matronería", "Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Matronería en Atención Primaria": ["Gestión Clínica y Atención Comunitaria", "Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Integrado Perinatal y Ginecológico": ["Gestión Clínica Obstétrica y Neonatal", "Gestión Clínica Perinatal y Ginecológica", "Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Medicina Legal y Matronería": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Salud Basada en Evidencia": ["Proyecto de Investigación Interdisciplinaria", "Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Electivo II: Formación e Identidad": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Gestión Clínica y Atención Comunitaria": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Gestión Clínica Obstétrica y Neonatal": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Gestión Clínica Perinatal y Ginecológica": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Proyecto de Investigación Interdisciplinaria": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"],
  "Electivo III: Formación e Identidad": ["Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"]
};

const container = document.getElementById("malla");
const estado = {};

function crearBoton(ramo) {
  const btn = document.createElement("div");
  btn.className = "ramo";
  btn.textContent = ramo;
  btn.onclick = () => aprobarRamo(ramo);
  if (tieneRequisitos(ramo)) btn.classList.add("bloqueado");
  estado[ramo] = false;
  container.appendChild(btn);
}

function tieneRequisitos(ramo) {
  return Object.values(ramos).some(arr => arr.includes(ramo));
}

function requisitosAprobados(ramo) {
  const requisitos = Object.entries(ramos).filter(([, deps]) => deps.includes(ramo)).map(([req]) => req);
  return requisitos.every(req => estado[req]);
}

function actualizarBotones() {
  document.querySelectorAll(".ramo").forEach(btn => {
    const ramo = btn.textContent;
    if (!estado[ramo] && requisitosAprobados(ramo)) {
      btn.classList.remove("bloqueado");
    }
  });
}

function aprobarRamo(ramo) {
  if (estado[ramo]) return;
  estado[ramo] = true;
  const btn = [...document.querySelectorAll(".ramo")].find(b => b.textContent === ramo);
  btn.classList.add("aprobado");
  btn.classList.remove("bloqueado");
  actualizarBotones();
}

const todosRamos = [
  "Biología Celular", "Morfología Básica", "Química General y Orgánica", "Fundamentos de la Matronería", "Salud Mental en el Curso de la Vida", "Antropología",
  "Integrado de Fisiología - Fisiopatología I", "Histoembriología", "Bioquímica General", "Salud Digital", "Anatomía Aplicada a la Gineco-Obstetricia", "Educación, Salud y Medio Ambiente",
  "Integrado de Fisiología - Fisiopatología II", "Embriología y Genética", "Microbiología Médica", "Bioestadística y Salud", "Proceso de Atención en Matronería",
  "Farmacología General", "Salud Poblacional", "Fisiología Ginecológica y Sexual en el Curso de la Vida", "Fisiología Obstétrica y Neonatal", "Ética",
  "Epidemiología", "Proceso de Atención en Matronería Médico Quirúrgico", "Patología Obstétrica y Neonatal", "Patología Ginecológica en el Curso de la Vida", "Persona y Sociedad",
  "Metodología de la Investigación", "Salud Familiar y Comunitaria", "Gestión y Calidad en Salud", "Consejería en Salud Sexual y Reproductiva", "Salud Reproductiva y Gerontológica", "Electivo I: Formación e Identidad",
  "Bioética", "Matronería en Atención Primaria", "Integrado Perinatal y Ginecológico", "Medicina Legal y Matronería", "Salud Basada en Evidencia", "Electivo II: Formación e Identidad",
  "Gestión Clínica y Atención Comunitaria", "Gestión Clínica Obstétrica y Neonatal", "Gestión Clínica Perinatal y Ginecológica", "Proyecto de Investigación Interdisciplinaria", "Electivo III: Formación e Identidad",
  "Internado de Especialidades en Matronería", "Internado en Salud Familiar y Comunitaria", "Internado Intrahospitalario", "Electivo 1", "Electivo 2"
];

todosRamos.forEach(crearBoton);
