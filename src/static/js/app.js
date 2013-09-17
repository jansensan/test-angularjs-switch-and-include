function appCtrl ($scope) {
	var model = {
		// DEFAULT MENU ID
		defaultId: 'item2',

		// MENU LABELS
		menuItems:
		[
			{
				id: 'item1',
				label: 'Item 01'
			},
			{
				id: 'item2',
				label: 'Item 02'
			},
			{
				id: 'item3',
				label: 'Item 03'
			}
		]
	};

	$scope.data = {};
	$scope.data.isListVisible = false;
	$scope.data.defaultId = model.defaultId;
	$scope.data.selectedId = $scope.data.defaultId;
	$scope.data.menuItems = model.menuItems;

	$scope.getLabelWithId = function (menuId) {
		var label = '';
		var i = 0;
		var numItems = $scope.data.menuItems.length;
		for (i; i < numItems; i++) {
			if (menuId === $scope.data.menuItems[i].id) {
				label = $scope.data.menuItems[i].label;
				break;
			}
		}
		return label;
	}

	$scope.getSelectedMenuLabel = function () {
		return $scope.getLabelWithId($scope.data.selectedId);
	}

	$scope.selectMenuItem = function (menuId) {
		$scope.data.selectedId = menuId;
		$scope.hideSelectionMenu();
	}

	$scope.showSelectionMenu = function () {
		$scope.data.isListVisible = true;
	}

	$scope.hideSelectionMenu = function () {
		$scope.data.isListVisible = false;
	}

}