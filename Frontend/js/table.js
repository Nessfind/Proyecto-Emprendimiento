const cabecera= ["Empresa","Ubicación","Sector"]
const datos = [
    ["Suzuki Motor de Colombia S.A.", "Pereira", "Automotriz"],
    ["Empresa de Acueducto y Alcantarillado de Pereira S.A.S. E.S.P.", "Pereira", "Servicios Públicos"],
    ["Caja de Compensación Familiar de Risaralda", "Pereira", "Servicios Sociales"],
    ["Camposol Colombia S.A.S.", "Pereira", "Agroindustria"],
    ["Eje Construcciones S.A.S.", "Pereira", "Construcción"],
    ["Papeles Nacionales S.A.S.", "Pereira", "Manufactura"],
    ["Empresa de Energía de Pereira S.A. E.S.P.", "Pereira", "Energía"],
    ["Ingenio Risaralda S.A.", "Pereira", "Agroindustria"],
    ["Eve Distribuciones S.A.S.", "Pereira", "Distribución"],
    ["Industrias Electromecánicas Magnetron S.A.S.", "Pereira", "Manufactura"],
    ["Frisby S.A. BIC", "Pereira", "Alimentación"],
    ["IPS Especializada S.A.", "Pereira", "Salud"],
    ["Grupo UMAZF S.A.S.", "Pereira", "Comercio"],
    ["Super Pagos S.A.S.", "Pereira", "Servicios Financieros"],
    ["Coomeva Medicina Prepagada", "Pereira", "Salud"],
    ["Alimentos Cárnicos S.A.S.", "Pereira", "Alimentación"],
    ["Comfamiliar Risaralda", "Pereira", "Servicios Sociales"],
    ["Megaproyectos S.A.S.", "Pereira", "Construcción"],
    ["Multinacional de Seguros S.A.", "Pereira", "Seguros"],
    ["Colanta S.A.", "Pereira", "Alimentación"]
];
// Selecciona el cuerpo de la tabla existente
const tbody = document.querySelector("table tbody");

// Inserta los datos dinámicamente en la tabla
datos.forEach((fila, index) => {
    const tr = document.createElement("tr");

    // Agrega el índice como primera columna
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = index + 1;
    tr.appendChild(th);

    // Agrega las demás columnas
    fila.forEach(celda => {
        const td = document.createElement("td");
        td.textContent = celda;
        tr.appendChild(td);
    });

    // Agrega la fila al cuerpo de la tabla
    tbody.appendChild(tr);
});