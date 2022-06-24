const obtenerInformacion = (materia) => {
    let materias = {
        computacion: ["perez","tizi","santi","martin"],
        programacion: ["dalto","tizi","santi","maximusprime"],
        diseño:["joumes","martin","maximusprime"],
        medico: ["rodriguez","juan","maximusprime"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia],materia];
    }
    else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let info = obtenerInformacion(materia)
    let materias = obtenerInformacion();
    
    if (info !== materias) {
        let profesor = info[0];
        let alumnos = info;
        alumnos.shift();
        document.write(`el profesor/a de <b>${materia}</b>
         es <b style="color:blue">${profesor}</b>
         y sus alumnos son: <b style="color:red">${alumnos}</b><br>
         `)
    }
}

const clasesPresentes = (alumno) => {
    let info = obtenerInformacion();
    let cantidadDeClases = 0;

    for (informacion in info) {
        if (info[informacion].includes(alumno)) {
            cantidadDeClases++;
        }
    }
    return `<b style="color:blue">${alumno}</b> esta en <b style="color:green">${cantidadDeClases}</b> clases <br>`;
}

mostrarInformacion("computacion");
mostrarInformacion("programacion");
mostrarInformacion("diseño");
mostrarInformacion("medico");

document.write(clasesPresentes("santi"));
document.write(clasesPresentes("tizi"));
document.write(clasesPresentes("martin"));
document.write(clasesPresentes("juan"));
document.write(clasesPresentes("maximusprime"));