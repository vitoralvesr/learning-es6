class DateHelper{
    
    constructor(){
        
        throw new Error('Esta classe não pode ser instanciada!');
    }
    
    static dataParaTexto(data){
        //template string => interpolação de variaveis
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {
        //fail fast
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Deve estar no formato yyyy-mm-dd')
        
        //spread operator => desmembrando um array
        return new Date(...texto.split('-').map((value, index) => value - index % 2));
    }
}