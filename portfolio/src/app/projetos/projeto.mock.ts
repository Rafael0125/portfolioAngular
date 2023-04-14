import { Projeto } from "./projeto.model";

export const PROJETOS:Projeto[] = [
    {    
        titulo: 'App Controle de Tarefas',
        imagem: '../../assets/imgProjetos/controleTarefas.png',
        icoTec: [
            "../../assets/icones/angular.svg",
            "../../assets/icones/bootstrap.svg",
            '../../assets/icones/css.svg',
            '../../assets/icones/typeScript.svg'
        ],
        descricao: 'Uma aplicação web desenvolvida em Angular, com o objetivo de auxiliar no gerenciamento de tarefas. Com ele, o usuário pode facilmente registrar suas atividades agendadas, bem como manter um histórico de tarefas já concluídas. Destaca-se pela lista dinâmica com as tarefas ativas, permitindo uma visualização clara do que precisa ser feito em cada momento. ',
        links:[{
            deploy:'http://app-lista-tarefas.s3-website-sa-east-1.amazonaws.com/tela-inicial',
            repositorioGitHub:'https://github.com/Rafael0125/app-controle-tarefa'
        }]
    },
    {    
        titulo: 'Game Jokenpo',
        imagem: '../../assets/imgProjetos/jokenpo.png',
        icoTec: [
            "../../assets/icones/angular.svg",
            "../../assets/icones/bootstrap.svg",
            '../../assets/icones/css.svg',
            '../../assets/icones/typeScript.svg'
        ],
        descricao: 'O projeto é um jogo de Jokenpo desenvolvido com Angular e Bootstrap, com uma interface responsiva e atraente para os usuários. O jogo é uma versão web do clássico jogo de mãos, com a possibilidade de adicionar recursos adicionais, como pontuações. ',
        links:[{
            deploy:'http://jokenpo-v2.s3-website-sa-east-1.amazonaws.com/',
            repositorioGitHub:'https://github.com/Rafael0125/Jokenpo'
        }]
    },

]