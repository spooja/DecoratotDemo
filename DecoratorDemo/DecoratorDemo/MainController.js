
app.controller('MainController', ['$scope', '$log', function ($scope, $log) {
    $scope.users =
        [
            { Name: 'pooja', Designation: 'Project Manager', Location: 'Noida India' },
            { Name: 'Jigu', Designation: 'Database Administrator', Location: 'Florida USA' },
            { Name: 'Himani', Designation: 'Search Engine', Location: 'Banglora India' },
            { Name: 'Dhruti', Designation: 'Senior Software Engineer', Location: 'Mumbai India' },
            { Name: 'Nikita', Designation: 'Project Manager', Location: 'Banglora India' },
            { Name: 'Shailee', Designation: 'Project Manager', Location: 'Brisbane Australia' },
            { Name: 'Krupa', Designation: 'Tester', Location: 'Delhi India' },
            { Name: 'Avani', Designation: 'Fresher', Location: 'Delhi India' },
        ];
    $scope.isEdit = false;

    var addMessage = "Succeessfully Added User";
    var errorMessage = "This is error";
    var warnMessage = "This is warning";

    $scope.addUsers = function () {

        $scope.users.push({ Name: $scope.inputData.Name, Designation: $scope.inputData.Designation, Location: $scope.inputData.Location });
        $log.debug("UserName:" + " " + $scope.inputData.Name, Date(), [addMessage]);
        // $log.getInstance("MainController");
        $log.info("Info Of UserName:" + " " + $scope.inputData.Name, [addMessage]);
        $log.warn([warnMessage]);
        $log.log("User UserName:" + " " + $scope.inputData.Name, [addMessage]);
        $log.error([errorMessage]);
        $scope.clearInput();
    };

    $scope.removeUser = function (userToRemove) {
        var index = this.users.indexOf(userToRemove);
        this.users.splice(index, 1);
    };

    //$scope.clearUser = function (user) {
    //    user.Name = '';
    //    user.Designation = '';
    //    user.Location = '';

    //};

    $scope.clearInput = function () {
        $scope.inputData.Name = '';
        $scope.inputData.Designation = '';
        $scope.inputData.Location = '';

    };

    $scope.editUser = function (id) {
        $scope.isEdit = true;
        $scope.inputData = id;
        //for (i in $scope.users)
        //{
        //    if ($scope.users[i] == id) {
        //        $scope.newUser = $scope.users[i];
        //        $scope.inputData.Name = $scope.newUser.Name;
        //        $scope.inputData.Designation = $scope.newUser.Designation;
        //        $scope.inputData.Location = $scope.newUser.Location;


        //    }
        // }
    };

    $scope.updateUser = function (id) {
        $scope.inputData = id;
        $scope.isEdit = false;

    };

    $scope.names = ["john", "bill", "charlie", "robert", "alban", "oscar", "marie", "celine", "brad", "drew", "rebecca", "michel", "francis", "jean", "paul", "pierre", "nicolas", "alfred", "gerard", "louis", "albert", "edouard", "benoit", "guillaume", "nicolas", "joseph"];





}]).directive('abc', function () {
    return {
        replace: true,
        template: '<div>This is foo directive</div>'
    };
});



