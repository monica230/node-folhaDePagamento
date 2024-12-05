Sistema de Gestão de Pagamentos em Node.js
Bem-vindo ao Sistema de Gestão de Pagamentos, uma aplicação simples em Node.js que permite controlar os dados dos colaboradores, registrar as horas trabalhadas e calcular os salários mensais.

Funcionalidades
Cadastro de Colaboradores: Inclua novos colaboradores no sistema.
Registro de Horas Trabalhadas: Registre as horas trabalhadas por cada colaborador.
Consulta de Colaboradores: Visualize todos os colaboradores cadastrados no sistema.
Cálculo de Remuneração Mensal: Calcule o salário mensal com base nas horas registradas.
Relatório de Pagamento: Gere um relatório detalhado sobre os pagamentos realizados.
Interação Simples: Interface via linha de comando (CLI) para fácil interação.
Requisitos
Node.js (versão 14 ou superior) instalado no seu computador.
Como Instalar
Clone este repositório:

bash
Copiar código
git clone https://github.com/mrcomputer2018/node-folhaDePagamento
cd folha-de-pagamento
Instale as dependências necessárias:

bash
Copiar código
npm install
Verifique se os módulos Funcionario.js, Pagamento.js e Salario.js estão implementados corretamente.

Estrutura do Projeto
bash
Copiar código
src/
│
├── Funcionario.js       # Funções para gerenciamento de colaboradores
├── Pagamento.js         # Funções para pagamentos e geração de relatórios
├── Salario.js           # Funções para cálculo de salários
├── index.js             # Arquivo principal com a lógica da aplicação
/
├── package.json         # Configuração do projeto e dependências
└── README.md            # Documentação do projeto
Como Utilizar
Inicie o sistema:

bash
Copiar código
npm run start
Selecione uma das opções disponíveis no menu principal:

1 - Adicionar Colaborador: Insira os dados necessários para registrar um novo colaborador.
2 - Registrar Horas Trabalhadas: Informe o nome do colaborador e a quantidade de horas trabalhadas.
3 - Exibir Colaboradores: Mostre a lista de colaboradores cadastrados.
4 - Calcular Remuneração: Calcule o valor do salário mensal de um colaborador.
5 - Gerar Relatório de Pagamento: Crie um relatório detalhado sobre os pagamentos.
6 - Sair: Finalize o programa.
Após cada operação, o sistema perguntará se você deseja continuar utilizando o sistema.

Exemplo de Uso
bash
Copiar código
Escolha a opção desejada:
1 - Adicionar Colaborador
2 - Registrar Horas Trabalhadas
3 - Exibir Colaboradores
4 - Calcular Remuneração
5 - Gerar Relatório de Pagamento
6 - Sair
Como Contribuir
Contribuições são bem-vindas! Para contribuir, siga os seguintes passos:

Faça um fork do repositório.
Crie uma nova branch para sua funcionalidade:
bash
Copiar código
git checkout -b minha-nova-funcionalidade
Realize as modificações e faça commits.
Envie um pull request.