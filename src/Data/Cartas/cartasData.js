import imagenes from "../../Assets/imagenes";

export const cartasData = () => {

    let cartas = [
        {
            nombre: 'Afrodita',
            imagen: imagenes.afrodita,
            reverso: imagenes.afroditaReverso,
            cualidades: [
                'Sensualidad',
                'Creatividad',
                'Sexualidad',
                'Pasión',
            ],
            estadoVirtuoso: [
                'Sensitiva, seductora y bella',
                'Capacidad de amor propio',
                'Alegre y creativa',
                'Auténtica y espontánea'
            ],
            estadoDesvirtuoso: [
                'Presuntuosa y engreída',
                'Egoísta',
                'Vanidosa y burlesca',
                'Grotesca e inoportuna'
            ]
        },
        {
            nombre: 'Artemisa',
            imagen: imagenes.artemisa,
            reverso: imagenes.artemisaReverso,
            cualidades: [
                'Solidaridad',
                'Pragmatismo',
                'Confianza',
                'Intrépida',
                'Conexión con la naturaleza',
                'Liderazgo'
            ],
            estadoVirtuoso: [
                'Natural y auténtica',
                'Pragmática y objetiva',
                'Carismática',
                'Compañerismo y permanencia'
            ],
            estadoDesvirtuoso: [
                'Superficial y falsa',
                'Insensible y codiciosa',
                'Narcisista y dominante',
                'Generar dependencia y apego'
            ]
        },
        {
            nombre: 'Atenea',
            imagen: imagenes.atenea,
            reverso: imagenes.ateneaReverso,
            cualidades: [
                'Inteligencia',
                'Sabiduría',
                'Estrategia',
                'Observadora',
                'Acciones transformadoras'
            ],
            estadoVirtuoso: [
                'Seguridad, confianza y pulcritud',
                'Estrategia',
                'Meticulosa y prolija',
                'Inteligente y lógica'
            ],
            estadoDesvirtuoso: [
                'Quemeimportismo',
                'Astuta y oportunista',
                'Obsesiva y ansiosa',
                'Juzgadora, crítica e insensible'
            ]
        },
        {
            nombre: 'Demeter',
            imagen: imagenes.demeter,
            reverso: imagenes.demeterReverso,
            cualidades: [
                'Amor, afecto y cariño',
                'Valoración',
                'Nutrición y alimento',
                'Contención emocional'
            ],
            estadoVirtuoso: [
                'Capacidad de protección y entrega',
                'Capacidad de enseñar',
                'Capacidad de perseverar',
                'Acogimiento, contención y afecto'
            ],
            estadoDesvirtuoso: [
                'Incapacidad de poner limites y sobreprotección',
                'Actitud aleccionadora constante',
                'Terquedad y obsesión',
                'Auto anulación y frustración'
            ]
        },
        {
            nombre: 'Hera',
            imagen: imagenes.hera,
            reverso: imagenes.heraReverso,
            cualidades: [
                'Compromiso',
                'Fidelidad',
                'Lealtad',
                'Confianza'
            ],
            estadoVirtuoso: [
                'Sentido de pertenencia',
                'Capacidad de liderazgo',
                'Capacidad de servicio',
                'Empoderamiento'
            ],
            estadoDesvirtuoso: [
                'Permisividad al abuso',
                'Soberbia',
                'Sacrificio',
                'Arrogancia'
            ]
        },
        {
            nombre: 'Hestia',
            imagen: imagenes.hestia,
            reverso: imagenes.hestiaReverso,
            cualidades: [
                'Sabiduria interna',
                'Introspección',
                'Fuego interior',
                'Mistisismo',
                'Serenidad',
                'Sencillez'
            ],
            estadoVirtuoso: [
                'Capacidad de orden',
                'Capacidad de percepción',
                'Capacidad de recogimiento',
                'Sociabilidad'
            ],
            estadoDesvirtuoso: [
                'Obsesión por el orden y la limpieza',
                'Caos y confusión',
                'racismo y fanatismo',
                'Superficialidad y frivolidad'
            ]
        },
        {
            nombre: 'Perséfone',
            imagen: imagenes.persefone,
            reverso: imagenes.persefoneReverso,
            cualidades: [
                'Jovialidad',
                'Intuición',
                'Vitalidad',
                'Inocencia',
                'Prudencia'                
            ],
            estadoVirtuoso: [
                'Vital y jovial',
                'Prudente',
                'Serenidad',
                'Empatía'
            ],
            estadoDesvirtuoso: [
                'Hiperactividad',
                'Timidez y tedio',
                'Dejadez y abandono',
                'Sufrimiento de penas ajenas y dependiente'
            ]
        }
    ];
  return {
    cartas
  }
}
