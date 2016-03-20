var app = angular.module('myApp', [])

app.controller('myContactsController', function ($scope) {
    $scope.contacts = [
        { "firstName": "Ram", "lastName": "Kumar", "birthDay": "01/01/1981", "Company": "ABC", "emailAddress": "ramkumar@abc.com", "mobileNumer":1234567890 },
        { "firstName": "John", "lastName": "Butler", "birthDay": "11/01/1983", "Company": "XYZ", "emailAddress": "johnbutler@xyz.com", "mobileNumer": 2222222222 },
        { "firstName": "Crystal", "lastName": "Hall", "birthDay": "01/12/1985", "Company": "OPR", "emailAddress": "crystalhall@opr.com", "mobileNumer": 9999999999 }        
    ];

    $scope.upload = function () {
        $("#fileUpload").click();
    }

    $scope.uploadImage = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $scope.edit = function (index,currentrow) {
        $scope.key = index;
        $scope.rowUnderEdit = angular.copy(currentrow);
    }

    $scope.addNew = function () {
        delete $scope.key;
        $scope.rowUnderEdit = {};

    }

    $scope.delete = function (index) {
        $scope.contacts.splice(index, 1);
    }

    $scope.save = function () {
        if (angular.isDefined($scope.key)) {
            $scope.contacts[$scope.key].firstName = $scope.rowUnderEdit.firstName;
            $scope.contacts[$scope.key].lastName = $scope.rowUnderEdit.lastName;
            $scope.contacts[$scope.key].birthDay = $scope.rowUnderEdit.birthDay;
            $scope.contacts[$scope.key].Company = $scope.rowUnderEdit.Company;
            $scope.contacts[$scope.key].emailAddress = $scope.rowUnderEdit.emailAddress;
            $scope.contacts[$scope.key].mobileNumer = $scope.rowUnderEdit.mobileNumer;
        }
        else {
            $scope.contacts.push({ "firstName": $scope.rowUnderEdit.firstName, "lastName": $scope.rowUnderEdit.lastName, "birthDay": $scope.rowUnderEdit.birthDay, "Company": $scope.rowUnderEdit.Company, "emailAddress": $scope.rowUnderEdit.emailAddress, "mobileNumer": $scope.rowUnderEdit.mobileNumer });
        }
        
    };


});