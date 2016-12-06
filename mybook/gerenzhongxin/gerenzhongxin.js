app.controller("gerenzhongxinCtrl",["$scope",function($scope){
	
}])

app.directive("zhongxin",[function(){
	return{
		restrict:"A",
		replace:true,
		template:'<div><div ng-transclude></div></div>',
		transclude:true,
		link:function($scope,el){
			
			var lis2=$(el).find(".main .lis2");
			
		    lis2.on("click",function(){
		        $(".zhe").css("display","block");
		    })
		    $(".zhe").on("click",function(){
		        $(".zhe").css("display","none");
		    })
		}
	}
}])

