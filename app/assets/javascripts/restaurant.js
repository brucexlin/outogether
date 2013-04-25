function Restaurant($scope) {
    $scope.restaurants = [
        { name: 'Dingpangzi', address: '117 N Lincoln Ave  Monterey Park CA 91755', phone: '626-288-2211', lat: 34.0632, lng: -118.121 },
        { name: 'Luweiju', address: '1408 E Valley Blvd  Alhambra CA 91801', phone: '626-300-8654', lat: 34.079, lng: -118.1095 },
        { name: 'Fengcheng', address: '208 E Valley Blvd  Alhambra CA 91801', phone: '626-299-1238', lat: 34.0787, lng: -118.1202 },
        { name: 'Kangkang Xiaomei', address: '27 E Valley Blvd  Alhambra, CA 91801', phone: '626-308-3898', lat: 34.0786, lng: -118.12284 }
    ];

    // get a random resturant 
    var randomIndex = function () {
        return Math.floor(Math.random()*$scope.restaurants.length);
    }

    $scope.randomRestaurant = { name: 'Dingpangzi', address: '117 N Lincoln Ave  Monterey Park CA 91755', phone: '626-288-2211' };

    $scope.getRestaurant = function () {
        $scope.randomRestaurant = $scope.restaurants[randomIndex()];
        // update map
        $scope.centerProperty.lat = $scope.randomRestaurant.lat;
        $scope.centerProperty.lng = $scope.randomRestaurant.lng;
        $scope.markersProperty[0].latitude = $scope.randomRestaurant.lat;
        $scope.markersProperty[0].longitude = $scope.randomRestaurant.lng;
    }
    // control whether to show the full list of resturants
    $scope.fullList = {
        ShowFullList: false,
        Action : "Show Full Resturant List"
    };

    $scope.hideList = function () {
        if ($scope.fullList.ShowFullList) {
            $scope.fullList.ShowFullList = false;
            $scope.fullList.Action = "Show Full Restaurant List"
        }
        else {
            $scope.fullList.ShowFullList = true;
            $scope.fullList.Action = "Hide Full Restaurant List"
        }
    }

    //Show Google Map
    angular.extend($scope, {

        /** the initial center of the map */
        centerProperty: {
            lat: 34.087,
            lng: -118.117
        },

        /** the initial zoom level of the map */
        zoomProperty: 16,

        /** list of markers to put in the map */
        markersProperty: [{
            latitude: 34.087,
            longitude: -118.117
        }],

        // These 2 properties will be set when clicking on the map
        clickedLatitudeProperty: null,
        clickedLongitudeProperty: null,
    });
}