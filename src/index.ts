import Funcionario from "./classes/Funcionario";
import Horatrabalhada from "./classes/Horatrabalhada";
import HoraTrabalhada from "./classes/Horatrabalhada";
const prompt = require("prompt-sync")();

console.log("Bem-vindo aa Sistema de Folha de Pagamentos");

let continuar = "s";

const funcionarios: Funcionario[] = [];
let listHorasTrabalhadas: HoraTrabalhada[] = [];
const funcionario: Funcionario = new Funcionario("", "", 0);
const horasTrabalhadas: Horatrabalhada = new HoraTrabalhada(0);

while (continuar === "s" || continuar === "S") {
    const opcao = prompt(
        "Digite o número correspondente a opção desejada: \n1 - Cadastrar Funcionário\n2 - Registrar Horas Trabalhadas\n3 - Listar Funcionários\n4 - Calcular Folha de Pagamento\n5 - Imprimir Relatorio de Pagamento\n6 - Sair\n"
    );

    switch (opcao) {
        case "1":
            console.log("\nCadastrar Funcionário");
            console.log("\n------------------------");
            console.log("\nPreencha os campos abaixo:");

            let nome = prompt("Digite o nome do funcionário: ");
            const cargo = prompt("Digite o cargo do funcionário: ");
            const taxaHoraria = +prompt(
                "Digite a taxa horária do funcionário: "
            );

            const novoFuncionario = new Funcionario(nome, cargo, taxaHoraria);

            console.log(novoFuncionario.getDetalhesFuncionario());

            funcionarios.push(novoFuncionario);

            console.log("\n\nFuncionário cadastrado com sucesso!");

            break;

        case "2":
            console.log("\nRegistrar Horas Trabalhadas");
            console.log("------------------------");
            console.log("\nPreencha os campos abaixo:");

            let funcionarioEncontrado =
                funcionario.localizarFuncionarioPorNome(funcionarios);

            if (funcionarioEncontrado === null) {
                break;
            }

            listHorasTrabalhadas =
                funcionarioEncontrado.getHorasTrabalhadas() || [];

            const horas = +prompt(
                "\nDigite a quantidade de horas trabalhadas: "
            );

            const novaHoraTrabalhada = new HoraTrabalhada(horas);

            listHorasTrabalhadas.push(novaHoraTrabalhada);

            funcionarioEncontrado.setHorasTrabalhadas(listHorasTrabalhadas);

            console.log(listHorasTrabalhadas);

            console.log("\nHoras registradas com sucesso!");

            break;
        case "3":
            console.log("\nListar Funcionários");
            console.log("\n------------------------");
            console.log("\nLista de Funcionários:");

            if (funcionarios.length === 0) {
                console.log("\nNão há funcionários cadastrados");
                break;
            }

            funcionarios.forEach((funcionario) => {
                console.log(funcionario.getDetalhesFuncionario());
            });

            break;
        case "4":
            console.log("\nCalcular salario Mensal");
            console.log("\n------------------------");
            console.log("Preencha os campos abaixo:");

            funcionarioEncontrado =
                funcionario.localizarFuncionarioPorNome(funcionarios);

            if (funcionarioEncontrado === null) {
                break;
            }

            if (funcionarioEncontrado.getHorasTrabalhadas() === undefined) {
                console.log(
                    "\nFuncionário não possui horas trabalhadas registradas"
                );
                break;
            }

            console.log(
                "Salario mensal de R$" +
                    funcionarioEncontrado.calcularSalarioMensal()
            );

            break;
        case "5":
            console.log("\nImprimir Relatorio de Pagamento");
            console.log("\n------------------------");
            console.log("Preencha os campos abaixo:");

            funcionarioEncontrado =
                funcionario.localizarFuncionarioPorNome(funcionarios);

            if (funcionarioEncontrado === null) {
                break;
            }

            console.log("\nRelatório de Pagamento");
            console.log("\n------------------------");
            console.log(funcionarioEncontrado.gerarRelatorioPagamento());

            break;
        case "6":
            console.log("\nSair");
            continuar = "n";
            break;
        default:
            console.log("\nOpção inválida");
            break;
    }

    continuar = prompt("\nDeseja continuar? (s/n) ");
}
