app.controller("successCtrl",["$scope",function($scope){
	$scope.focus=function(){
		$("body").on("click",".text",function(){
			$(".jianpan").addClass("jp-active");
		})
	}
	
	$scope.xiaoshi=function(){
		$("body").on("click",".jianpan",function(){
			$(this).removeClass("jp-active");
		})
	}
	
	$scope.addclass=function(){
		$("body").on("click",".fabu-btn",function(){
			$(".success").addClass('success-active')
			$(".heizz").addClass('heizz-active')
		})
	}
	$scope.removeclass=function(){
		$("body").on("click","#quxiao",function(){
			$(".success").removeClass('success-active')
			$(".heizz").removeClass('heizz-active')
		})
	}
}])