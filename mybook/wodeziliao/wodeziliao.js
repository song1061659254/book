app.controller("wodeziliaoCtrl",["$scope",function($scope){
	
}])

app.directive("ziliao",[function(){
	return{
		restrict:"A",
		replace:true,
		template:'<div><div ng-transclude></div></div>',
		transclude:true,
		link:function($scope,el){

			var lis1=$(el).find(".mainer .ziliao .lis1");
		    lis1.on("click",function(){
		        $(".zhe").css("display","block");
		        $(".tan1").css("display","block");
		        $(".tan2").css("display","none");
		    })
		    var lis4=$(el).find(".mainer .ziliao .lis4");
		    lis4.on("click",function(){
		        $(".zhe").css("display","block");
		        $(".tan2").css("display","block");
		        $(".tan1").css("display","none");
		    })
		    $(".zhe").on("click",function(){
		        $(".zhe").css("display","none");
		    })
		}
	}
}])