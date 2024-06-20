export class Player {
  constructor(nombre) {
    this.nombre = nombre;
    this.nivel = 1;
    this.puntosDeExperiencia = 0;
    this.puntosParaSubirDeNivel = 100;
  }

  ganarExperiencia(puntos) {
    this.puntosDeExperiencia += puntos;
    console.log(`${this.nombre} ha ganado ${puntos} puntos de experiencia.`);


    while (this.puntosDeExperiencia >= this.puntosParaSubirDeNivel) {
      this.subirDeNivel();
    }
  }

  subirDeNivel() {
    this.nivel++;
    this.puntosDeExperiencia -= this.puntosParaSubirDeNivel;
    this.puntosParaSubirDeNivel *= 1.2; 
    console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
  }
}