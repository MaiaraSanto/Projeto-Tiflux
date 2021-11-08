//inicio dos codigos dos elementos das tabelas
let tr = document.createElement("tr");
let positivo = document.querySelector(".positivo");
let negativo = document.querySelector(".negativo");
let diminuir = document.querySelector(".numberDiminuir");
let aumentar = document.querySelector(".numberAcrescentar");

let cont = 0;
let num = 0;
tr.innerHTML = 0;

document.querySelector(".user").appendChild(tr);
positivo.onclick = function () {
  cont++;
  aumentar.innerHTML = `${cont}`;
}

negativo.onclick = function () {
  num--;
  diminuir.innerHTML = `${num}`;
}
//fim dos codigos dos elementos da tabela

//data de criação
let criacao = document.querySelector(".criacao");
let data = new Date();
criacao.innerHTML = data.toLocaleDateString();
// fim do codigo da data de criacão



// Inicio do codigo para adicionar na lista
var cadastro = new cadastro()

class Cadastro {
   
  constructor(){ 
     this.nome = '';
     this.arrayProdutos = [];
  }

    salvar(){ 
      let produto = this.lerDados();

      if(this.validaCampos(produto)){
          this.adicionar(produto);
      } 
      
      this.listaTabela();
      this.cancelar();
    }
  
      listaTabela(){
         let tbody = document.getElementById('tbody');

         for(let i = 0; i < this.arrayProdutos.length; i++) {
          let tr = tbody.insertRow();
          let tr_nome = tr.insertCell();
          let tr_dtcriacao = tr.insertCell();
          let tr_descricao = tr.insertCell();

          tr_nome.innerText = this.arrayProdutos[i].nome;
          tr_dtcriacao.innerText = this.arrayProdutos[i].dtcriacao;
          tr_descricao.innerText = this.arrayProdutos[i].descricao;
  
          tr_nome.classList.add('center');

        }
      }

    adicionar(produto) {
      this.arrayProdutos.push(produtos);
    }

    lerDados() { 
      let produto = {}

      produto.nome = document.getElementById('nome').value;
      produto.dtcadastro = document.getElementById('dtcadastro').value;
      produto.descricao = document.getElementById('descricao').value;

      return produto;
    }

  validaCampos(produto) {
    
    if(produto.produto.nome == '')  {
      msg += 'Informe o nome da funcionalidade \n';
    }
    if(produto.produto.dtcadastro == '') {
      msg += 'Informe a data do cadastro \n';
    }
    if(produto.produto.descricao == '') {
      msg += 'Informe a descricao \n';
    }
    if(msg != '') {
      alert(msg);

      return false;
    }

    return true;
  }

  cancelar() {
    document.getElementById('nome').value = '';
    document.getElementById('dtcadastro').value = '';
    document.getElementById('descricao').value = '';


  }


}