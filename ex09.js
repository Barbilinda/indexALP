let  quantidade = number(prompt("Digite a quantidade do produto"))
let valor = number(prompt(" insira o preço do produto"))

if (quantidade >= 10
    function calcularPrecoFinal(quantidade, precoUnitario) {
        let desconto = 0;
    
        if (quantidade > 20) {
            desconto = 10/100; // 10% de desconto
        } else if (quantidade > 10) {
            desconto = 5/100; // 5% de desconto
        }
    
        const precoTotal = quantidade * precoUnitario;
        const precoComDesconto = precoTotal * (1 - desconto);
    
        return precoComDesconto;
    }
    
    // Exemplo de uso:
    const quantidadeComprada = 25;
    const precoUnitarioProduto = 10; // Preço unitário do produto
    
    const precoFinal = calcularPrecoFinal(quantidadeComprada, precoUnitarioProduto);
    console.log('Preço final com desconto:', precoFinal);
    )