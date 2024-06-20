class Player {
  constructor(name,level) {
    this.name = name; 
    this.level = level
    
  }

  
}
class grupoJugadores {
  constructor() {
      this.partyMembers = [];
  }

  addPlayer(player) {
      this.partyMembers.push(player);
  }

  removePlayer(player) {
      const index = this.partyMembers.indexOf(player);
      if (index !== -1) {
          this.partyMembers.splice(index, 1);
      }
  }
}


const party = new grupoJugadores();

const player1 = new Player("Natasha", 10);
const player2 = new Player("Marianne", 12);

party.addPlayer(player1);
party.addPlayer(player2);

console.log("Jugadores:", party.partyMembers);

party.removePlayer(player1);

console.log("Después de remover jugador 1:", party.partyMembers);
