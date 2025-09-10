class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animais = [

  {
    name: "Rex",
    type: "cao",
    favoriteToys: ["RATO", "BOLA"]
  },

  {
    name: "Mimi",
    type: "gato",
    favoriteToys: ["BOLA", "LASER"]
  },

  {
    name: "Fofo",
    type: "gato",
    favoriteToys: ["BOLA", "RATO", "LASER"]
  },

  {
    name: "Zero",
    type: "gato",
    favoriteToys: ["RATO", "BOLA"]
  },

  {
    name: "Bola",
    type: "cao",
    favoriteToys: ["CAIXA", "NOVELO"]
  },

  {
    name: "Bebe",
    type: "cao",
    favoriteToys: ["LASER", "RATO", "BOLA"]
  },

  {
    name: "Loco",
    type: "jabuti",
    favoriteToys: ["SKATE", "RATO"]
  },

]

const isBrinquedosValido = new Set();
for (const animal of animais) {
      for (const brinquedo of animal.favoriteToys) {
        isBrinquedosValido.add(brinquedo);
      }
    }

    const listaBrinquedosP1 = brinquedosPessoa1.split(',');
    
    const listaBrinquedosP2 = brinquedosPessoa2.split(',');

    const listaAnimais = ordemAnimais.split(',');
    
    if (new Set (listaAnimais).size !== listaAnimais.length) {
      return { erro: 'Animal inválido' };
    }
    
    for (const nomeAnimal of listaAnimais) {
      if (!animais.find(animal => animal.name === nomeAnimal) {
        return { erro: 'Animal inválido' };
      }
    }
    
    if (new Set(listaBrinquedosP1).size !== listaBrinquedosP1.length) {
        return { erro: 'Brinquedo inválido'};
    }

    for (const brinquedo of listaBrinquedosP1) {
      if (!isBrinquedosValido.has(brinquedo)) {
        return { erro: 'Brinquedo inválido'};
      }
    } 
    
    if (new Set(listaBrinquedosP2).size !== listaBrinquedosP2.length) {
        return { erro: 'Brinquedo inválido' };
    }

    for (const brinquedo of listaBrinquedosP2) {
      if (!isBrinquedosValido.has(brinquedo)) {
        return { erro: 'Brinquedo inválido '};
      }
    }
    
    console.log("Todas as validações passaram! Podemos prosseguir para a lógica de adoção");
    return {};

  }
}

function BrinquedoOrdem(brinquedosFavoritos, brinquedosDaPessoa) {
  let indiceFavoritoAtual = 0; 

  for (const brinquedosPessoa of brinquedosDaPessoa) {
    if (indiceFavoritoAtual < brinquedosFavoritos.length){
      if (brinquedosPessoa === brinquedosFavoritos[indiceFavoritoAtual]) {
        indiceFavoritoAtual++; 
        
      }
    }
  return indiceFavoritoAtual === brinquedosFavoritos.length;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
