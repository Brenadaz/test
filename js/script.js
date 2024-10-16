function toggleCalculator() {
    const tipoCalculadora = document.getElementById("tipo-calculadora").value;

    document.getElementById("juros-calculator").style.display = "none";
    document.getElementById("mensal-calculator").style.display = "none";
    document.getElementById("orcamento-calculator").style.display = "none";

    if (tipoCalculadora === "juros") {
        document.getElementById("juros-calculator").style.display = "block";
    } else if (tipoCalculadora === "mensal") {
        document.getElementById("mensal-calculator").style.display = "block";
    } else if (tipoCalculadora === "orcamento") {
        document.getElementById("orcamento-calculator").style.display = "block";
    }
}

function calcularJuros() {
    const valorInicial = parseFloat(document.getElementById("valor-inicial").value);
    const taxaJuros = parseFloat(document.getElementById("taxa-juros").value) / 100;
    const numeroMeses = parseInt(document.getElementById("numero-meses").value);

    if (isNaN(valorInicial) || isNaN(taxaJuros) || isNaN(numeroMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const montante = valorInicial * Math.pow(1 + taxaJuros, numeroMeses);
    document.getElementById("resultado-display").innerText = `R$ ${montante.toFixed(2)}`;
}

function calcularInvestimentoMensal() {
    const valorMensal = parseFloat(document.getElementById("valor-mensal").value);
    const taxaMensal = parseFloat(document.getElementById("taxa-mensal").value) / 100;
    const numeroMeses = parseInt(document.getElementById("numero-meses-mensal").value);

    if (isNaN(valorMensal) || isNaN(taxaMensal) || isNaN(numeroMeses)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const montante = valorMensal * ((Math.pow(1 + taxaMensal, numeroMeses) - 1) / taxaMensal);
    document.getElementById("resultado-mensal-display").innerText = `R$ ${montante.toFixed(2)}`;
}

function calcularOrcamento() {
    const rendaMensal = parseFloat(document.getElementById("renda-mensal").value);
    const despesasFixas = parseFloat(document.getElementById("despesas-fixas").value);
    const despesasVariaveis = parseFloat(document.getElementById("despesas-variaveis").value);

    if (isNaN(rendaMensal) || isNaN(despesasFixas) || isNaN(despesasVariaveis)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const totalDespesas = despesasFixas + despesasVariaveis;
    const saldo = rendaMensal - totalDespesas;

    document.getElementById("resultado-orcamento-display").innerText = `R$ ${saldo.toFixed(2)}`;
}

