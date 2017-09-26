angular.module('researchControllers',[])

.controller('resCtrl',function($scope,$http){
    
    $scope.nomeDisciplinas = 'Lista de Disciplinas';

    $scope.listaDisciplinas1Sem = [];

    $scope.disciplina1Sem1 = {
                                "id":"calc1",
                                "nome":"Cálculo I",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
            
    $scope.disciplina1Sem2 = {
                                "id":"algprog",
                                "nome":"Algoritmos e Programação",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };

    $scope.disciplina1Sem3 = {
                                "id":"epist",
                                "nome":"Epistemologia",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":30,
                                "creditos":"2"
                            };
            
    $scope.disciplina1Sem4 = {
                                "id":"prodtext",
                                "nome":"Produção Textual",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
    $scope.disciplina1Sem5 = {
                                "id":"alga",
                                "nome":"Álgebra Linear e Geometria Analítica",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
            
    $scope.disciplina1Sem6 = {
                                "id":"logcomp",
                                "nome":"Lógica para Computação",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };

    $scope.disciplina1Sem7 = {
                                "id":"arq1",
                                "nome":"Arquitetura de Computadores I",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
            
    $scope.disciplina1Sem8 = {
                                "id":"inteng",
                                "nome":"Introdução à Engenharia de Computação",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":30,
                                "creditos":"2"
                            };

    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem1);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem2);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem3);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem4);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem5);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem6);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem7);
    $scope.listaDisciplinas1Sem.push($scope.disciplina1Sem8);

    $scope.listaDisciplinas2Sem = [];
    
    $scope.disciplina2Sem1 = {
                                "id":"calc2",
                                "nome":"Cálculo II",
                                "prerequisito":"Cálculo I; Álgebra Linear e Geometria Analítica.",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
    
    $scope.disciplina2Sem2 = {
                                "id":"estrdad",
                                "nome":"Estrutura de Dados",
                                "prerequisito":"Lógica para Computação; Algoritmos e Programação",
                                "cargahoraria":60,
                                "creditos":"4"
                            };

    $scope.disciplina2Sem3 = {
                                "id":"fis1",
                                "nome":"Física 1",
                                "prerequisito":"Cálculo I; Álgebra Linear e Geometria Analítica",
                                "cargahoraria":60,
                                "creditos":"4"
                            };

    $scope.disciplina2Sem4 = {
                                "id":"labfis1",
                                "nome":"Laboratório de Física 1",
                                "prerequisito":"Co-Requisito: Física I",
                                "cargahoraria":30,
                                "creditos":"2"
                            };
    $scope.disciplina2Sem5 = {
                                "id":"tecdig",
                                "nome":"Técnicas Digitais",
                                "prerequisito":"Arquitetura de Computadores I",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
    $scope.disciplina2Sem6 = {
                                "id":"arq2",
                                "nome":"Arquitetura de Computadores II",
                                "prerequisito":"Arquitetura de Computadores I",
                                "cargahoraria":60,
                                "creditos":"4"
                            };
            
    $scope.disciplina2Sem7 = {
                                "id":"metcient",
                                "nome":"Metodologia Científica",
                                "prerequisito":"Epistemologia",
                                "cargahoraria":30,
                                "creditos":"2"
                            };

    $scope.disciplina2Sem8 = {
                                "id":"tecAmb",
                                "nome":"Tecnologia, Ambiente e Sociedade",
                                "prerequisito":"Sem pré-requisitos",
                                "cargahoraria":30,
                                "creditos":"2"
                            };


    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem1);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem2);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem3);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem4);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem5);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem6);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem7);
    $scope.listaDisciplinas2Sem.push($scope.disciplina2Sem8);

    $scope.selection = {
        ids: {"iduser": 102030}
    };
    this.resUser = function(resData){

    $http.post('/destination', function(req,res){
        //res.send('testing users route');
        res.json(req);
	});
        // app.loading = true;
        // app.errorMsg = false;
        // console.log('testing new thing');
        //console.log(this.regData);
        // User.create(app.regData).then(function(data){
        //     if(data.data.success){
        //         app.loading = false;
        //         app.successMsg = data.data.message;
        //         $timeout(function(){
        //             $location.path('/');
        //         },2000);
                
        //     }
        //     else{
        //         app.loading = false;
        //         app.errorMsg = data.data.message;
        //     }
        // });
   };
});