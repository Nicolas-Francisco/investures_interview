export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  concentration: string | null;
  prescriptionType: string | null;
  package: string | null;
  composition: string | null;
  posology: string | null;
  display: string | null;
  contraindications: string | null;
  indications: string | null;
  containerQuantity: number | null;
  container: string | null;
  availability: {
    status: string;
  };
  imagesUrl: string;
  format: string;
  activePrinciple: string;
  laboratory: string;
};

// ejemplo de un producto:
//
// {
//   "id": 1,
//   "name": "Eutirox",
//   "description": null,
//   "price": 9160,
//   "concentration": "75 mcg",
//   "package": null,
//   "composition": "Eutirox® 25 mcg: Cada comprimido contiene: Levotiroxina Sódica 25 mcg. Eutirox® 50 mcg: Cada comprimido contiene: Levotiroxina Sódica 50 mcg. Eutirox® 75 mcg: Cada comprimido contiene: Levotiroxina Sódica 75 mcg. Eutirox® 88 mcg: Cada comprimido contiene: Levotiroxina Sódica 88 mcg. Eutirox® 100 mcg: Cada comprimido contiene: Levotiroxina Sódica 100 mcg. Eutirox® 112 mcg: Cada comprimido contiene: Levotiroxina Sódica 112 mcg. Eutirox® 125 mcg: Cada comprimido contiene: Levotiroxina Sódica 125 mcg. Eutirox® 137 mcg: Cada comprimido contiene: Levotiroxina Sódica 137 mcg. Eutirox® 150 mcg: Cada comprimido contiene: Levotiroxina Sódica 150 mcg. Eutirox® 175 mcg: Cada comprimido contiene: Levotiroxina Sódica 175 mcg. Eutirox® 200 mcg: Cada comprimido contiene: Levotiroxina Sódica 200 mcg. Excipientes: Lactosa Monohidrato, Almidón de Maíz, Gelatina, Croscarmelosa Sódica, Estearato de Magnesio.",
//   "posology": "Para el tratamiento individual existen comprimidos con contenidos graduados de 50, 75, 88, 100, 112, 125, 137, 150, 175 y 200 mcg de levotiroxina sódica, de manera que generalmente sólo es necesaria una tableta diaria. La dosis diaria individual se comprueba mediante estudios clínicos y de laboratorio. En el caso de pacientes de edad avanzada, aquellos con enfermedades cardíacas coronarias y en pacientes con hipofunción tiroidea grave o de mucho tiempo, el tratamiento con hormonas tiroideas debe comenzarse en forma cuidadosa, es decir, elegir una dosis inicial baja y aumentarla luego de seguidos controles hormonales tiroideos frecuentes y a intervalos de tiempo más amplios. Por experiencias se sabe que una dosis baja es suficiente en el caso de personas de bajo peso y cuando existe un gran bocio nodular. A menos que se prescriba algo diferente, rigen las siguientes pautas de dosificación: Indicación: Dosis recomendada (µg de levotiroxina sódica/día). Tratamiento de bocio eutiroideo: 25-200. Profilaxis de recidiva luego de cirugía por bocio eutiroideo: 75-200. Terapia de sustitución en caso de hipotiroidismo en adultos: Dosis inicial: 25-50. Dosis de mantención: 100-250. Suplementación concomitante durante tratamiento con droga antitiroidea del hipertiroidismo: 50-100. Después de extirpación quirúrgica total de las tiroides: 150-300. Modo y duración del tratamiento: La dosis diaria total se ingiere sin masticar y con algo de líquido, por las mañanas en ayunas, al menos media hora antes del desayuno. Duración del tratamiento: Generalmente durante toda Ia vida en los casos de hipofunción tiroidea (hipotiroidismo) y luego de extracción quirúrgica parcial o total de Ia tiroides; desde algunos meses hasta de por vida para el tratamiento del bocio (bocio eutiroideo) y para Ia profilaxis contra Ia nueva formación de bocio. Además, durante Ia terapia concomitante en el tratamiento de Ia hiperfunción tiroidea luego de alcanzar el estado de función normal. Si olvida tomar Eutirox®: No tome doble dosis para compensar el comprimido olvidado, sino que tome la dosis normal al día siguiente.",
//   "display": "Eutirox® 100: Envases conteniendo 50 y 100 comprimidos. Eutirox® 25, 50, 75, 88, 100, 112, 125, 137, 150, 175 y 200: Envases conteniendo 50 comprimidos.",
//   "contraindications": "Hipersensibilidad a cualquier excipiente del producto. Tirotoxicosis no tratada, infarto agudo del miocardio. Algunos síndromes anginosos. Miocarditis aguda o pancarditis aguda. lnsuficiencia suprarrenal sin corregir, ya que Ia demanda aumentada de hormonas adrenocorticales puede causar una crisis adrenal. Insuficiencia pituitaria no tratada. Hiperfunción tiroídea de cualquier etiología. Excepción: Terapia adicional en los casos de hiperfunción tiroidea tratada luego de alcanzar el estado de función normal. Este tipo de terapia adicional no está indicada durante el embarazo.",
//   "indications": "Terapia de reemplazo o sustitución de Ia función tiroidea ausente o deprimida. Supresión de Ia secreción de tirotrofina. Usos: Bocio simple (bocio eutiroídeo). Prevención de nuevo desarrollo de bocio tras operación de bocio (profilaxis de recidiva de bocio). Medicación adicional en el tratamiento de Ia hiperfunción tiroidea (hipertiroidismo), luego de alcanzar el estado funcional normal. Hipofunción tiroidea (hipotiroidismo). Terapia de substitución en tiroidectomía total por tumor en Ia tiroides.",
//   "containerQuantity": "1",
//   "container": "caja",
//   "availability": {
//     "status": "AVAILABLE"
//   },
//   "imagesUrl": "https://d131ml7m6yr3wl.cloudfront.net/images/8632a5f3-546e-4a60-a4a0-55d7aaa8d8c6/large.jpeg",
//   "format": "Comprimidos",
//   "activePrinciple": "Levotiroxina Sodica",
//   "laboratory": "Merck Sharp & Dohme (msd)"
// },
