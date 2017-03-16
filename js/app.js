/*var persons = "Joseph,Tressa,Other,People";
var names = persons.split(',');

// ["Joseph", "Tressa", "Other", "People"]
var lowercase = names.map(function(n) { return n.toLowerCase() });
// ["joseph", "tressa", "other", "people"]
var uppercase = names.map(function(n) { return n.toUpperCase() });
// ["JOSEPH", "TRESSA", "OTHER", "PEOPLE"]

console.log(persons, names, lowercase, uppercase);

*/

var student_master_list = [
    {
        id: 1001,
        first_name : "Joseph",
        last_name : "Dicdican",
        gender: 'male',
        subjects: [
            {name: "Programming", marks: 70}
        ],
        fullName : function() {
            return this.first_name + " " + this.last_name;
        }
    },
    {
        id: 1002,
        first_name : "Tressa",
        last_name : "Pradilla",
        gender: "female",
        subjects: [
            {name: "Web", marks: 70},
            {name: "Angular", marks: 76}
        ],
        fullName : function() {
            return this.first_name + " " + this.last_name;
        }
    },
    {
        id: 1003,
        first_name : "Another Dev",
        last_name : "Hmmm",
        gender: 'male',
        subjects: [
            {name: "Programming", marks: 70}
        ],
        fullName : function() {
            return this.first_name + " " + this.last_name;
        }
    },
    {
        id: 1004,
        first_name : "Lorem",
        last_name : "Ipsum",
        gender: "female",
        subjects: [
            {name: "Web", marks: 70},
            {name: "Angular", marks: 76}
        ],
        fullName : function() {
            return this.first_name + " " + this.last_name;
        }
    },
];

var learnAngular = angular.module('learnAngular', []);

learnAngular.controller('CodeFun', function($scope){
        $scope.student_list = student_master_list;
        $scope.student_list_computed = $scope.student_list;

        $scope.student = false; // holds the current student
        $scope.new_student = {
            first_name : "",
            last_name : "",
            gender: "male",
            subjects: [],
            fullName : function() {
                return this.first_name + " " + this.last_name;
            }
        };
        $scope.edit_student = {};

        $scope.screen = false;
        $scope.query = "";

        $scope.hasStudent = function() {
            return $scope.student;
        };

        $scope.viewStudent = function(student) {
            $scope.student = student;
        };

        $scope.addStudent = function() {
            if($scope.isStudentValid()) {
                var new_student = $scope.new_student;
                $scope.student_list.push(new_student);
                $scope.new_student = {
                    first_name : "",
                    last_name : "",
                    gender: "male",
                    subjects: [],
                    fullName : function() {
                        return this.first_name + " " + this.last_name;
                    }
                };
                $scope.show(false);
            } else {
                alert('Not valid');
            }
        };

        $scope.editStudent = function(student) {
            $scope.edit_student = student;
            $scope.student = {};
        };

        $scope.saveStudent = function(student) {
            $scope.student = student;
            $scope.editStudent({});
            $scope.show(0);
        }

        $scope.searchStudent = function() {
            var list = $scope.query != "" ? $scope.student_list_computed.filter(function(student) {
                return student.first_name.includes($scope.query) || student.last_name.includes($scope.query);
            }) : $scope.student_list;

            $scope.student_list_computed = list;
        };

        $scope.isStudentValid = function() {
            var new_student = $scope.new_student;

            return new_student.first_name !== "" && new_student.last_name !== "";
        };

        $scope.show = function(screen) {
            $scope.screen = screen;
        };

        $scope.isScreen = function(screen) {
            return $scope.screen == screen;
        };

        $scope.isGrade = function(mark, ok) {
            if(ok) {
                return mark >= 75;
            } else {
                return mark < 75;
            }
        };
        
    });