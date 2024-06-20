export class Player {
    constructor(name, level) {
      this.name = name; 
      this.level = level; 
      this.inventario = {}
      
    }
  
  }

  addItem (item, cantidad = 1); {
      if (this.inventario[item]) {
          this.inventario [item] += cantidad;
      } else {
          
          this.inventario[item] = cantidad;
      }
  }

  removeItem (item, cantidad = 1); {
      if (this.inventario[item]) {
      
          this.inventario[item] -= cantidad;

          if (this.inventario[item] <= 0) {
              delete this.inventario[item];
          }
      }
  }
  displayInventory(); {
      console.log("Inventory:");
      for (const item in this.inventario) {
          console.log(`${item}: ${this.inventario[item]}`);
      }
  }


const player = new Player("Alice", 10);

player.addItem("Potion", 5);
player.addItem("Sword");
player.addItem("Potion", 3);

player.displayInventory();

player.removeItem("Sword");

player.displayInventory();
