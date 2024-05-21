let cantidad = prompt('Cuantos alumnos son?');
let alumnos = [];

for (let i=0; i<cantidad; i++){
    alumnos[i]= [A=0,P=0];
}

for (let i=0; i <5; i++){
    for (let j=0; j< cantidad; j++){
        do{
        let presAus = prompt (`Ingrese si el alumno ${alumnos[j]} está presente (P) o ausente (A)`)
        }while(presAus != 'A' || presAus != 'P')
            if(presAus= 'A'){
                alumnos[j]= [A++]
            }
            else alumnos[j]= [B++];
    }
}

for (let i=0; i<5; i++){
    if (alumnos[i[P]]> (30/10)){
        document.write(`El alumno ${alumnos[i]} esta reprobado`)
    }
}
