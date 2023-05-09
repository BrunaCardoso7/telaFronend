class Produto{
    constructor(){
        this.id = 1;
        this.arrayprodutos = [];

    }   
    salvar(){
        let produto = this.lerDados();

        if(this.validaCampo(produto)){
            this.adicionar(produto)
        }

        this.listaTabela(produto)
    }
    lerDados(){
        let produto = {};

        produto.id = this.id
        produto.nomeproduto = document.getElementById("nomeProduto").value;
        produto.valorproduto = document.getElementById("valorProduto").value;

        return produto
    }
    validaCampo(produto){
        let msg = '';

        if (produto.nomeproduto == ''){
            msg += 'Preencha o campo produto\n';
        }
        if(produto.valorproduto == ''){
            msg+= 'Preencha o campo valor';
        }
        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
    }
    adicionar(produto){
        this.arrayprodutos.push(produto)
        this.id++
    }
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = ''
        for(let i = 0; i < this.arrayprodutos.length; i++){
            
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acao = tr.insertCell()

            td_id.innerText = this.arrayprodutos[i].id
            td_produto.innerText = this.arrayprodutos[i].nomeproduto
            td_valor.innerText = this.arrayprodutos[i].valorproduto

            td_id.classList.add('center')

            let acaoEdit = document.createElement('img')
            acaoEdit.src = 'edit.png'
            
            acaoEdit.classList.add('img_size')
            
            td_acao.appendChild(acaoEdit)

        }
    }
    cancelar(){
        alert('removido')
    }

}
var produto = new Produto();