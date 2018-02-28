class NegociacaoController {
    
    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    limpa(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = Number.parseFloat(0.0).toFixed(1);
    }

    adiciona(event){
        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((value, index) => value - index % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        
        this.limpa();
        this._inputData.focus();
    }
}