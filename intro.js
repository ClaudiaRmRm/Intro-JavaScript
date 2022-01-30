  // eJercicio 1 Claudia
const Ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
];

for (var i = 0 ; i < Ejercicio1.length; i++){
    if (Ejercicio1[i]%2==1){
        console.log(`El número ${Ejercicio1[i]} es primo`);
    }
};

// Ejercicio 2 Claudia 

const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];

  const AdelanteCaminante = (persona) => {
      if (persona.edad >=18){
          if (persona.esFamiliar == true){
              console.log (`Esta persona ${persona.nombre} sí puede pasar`)
          }
      }
  };

  ejercicio2.forEach ((persona) => {
      AdelanteCaminante(persona);
  });

  // Ejercicio 3
let a=0;
let b=1;
let c= 0;
console.log(b);

for (let fibonacci = 0; fibonacci <= 50; fibonacci++) {
    c =a+b;
    console.log(c);
    a=b;
    b=c;
};