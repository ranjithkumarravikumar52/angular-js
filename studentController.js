<!--each controller accepts $scope as a parameter, this scope  refers to the application/module that we need to handle-->
//this will load up the angular module
//Here, we declare an application mainApp module using angular.module function and pass an empty array to it.
//This array generally contains dependent modules.
var mainApp = angular.module("mainApp", []);

//define our studentController function
mainApp.controller('studentController', function($scope){

    $scope.student = {
        firstName : "Ranjith Kumar",
        lastName : "Ravikumar",

        fees: 500, //default value can be overridden in the input field

        //subjects is an array here
        subjects:[
            "Maths", "Physics", "Chemistry"
        ],

        //to demonstrate that our scope object can contain functions too
        fullName : function(){
            var studentObject;
            studentObject = $scope.student;
            return "Mr. "+studentObject.firstName +" "+ studentObject.lastName;
        }
    };

    $scope.resultArray = [];

    $scope.selectSubjectFunction = function (val) {
        //if val not present in result, then add
        console.log(val);
        if($scope.resultArray.includes("Sociology")){
            $scope.resultArray = [];
        }
        if(!$scope.resultArray.includes(val)){
            $scope.resultArray.push(val);
        }else{
            var index = $scope.resultArray.indexOf(val);
            if(index > -1){
                $scope.resultArray.splice(index, 1);
            }
        }
    };

    $scope.reset = function(){
        $scope.student.firstName  = "John";
        $scope.student.lastName  = "Doe";
        $scope.student.fees = 100;
        $scope.resultArray = ["Sociology"];
    }
});
