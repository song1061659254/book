app.controller("wodexinxiCtrl",["$scope",function($scope){
	
}])
app.directive("xinxi",[function(){
	return{
		restrict:"A",
		replace:true,
		template:'<div><div ng-transclude></div></div>',
		transclude:true,
		link:function($scope,el){

			$(".xuanze").on("click",".xu",function(){
		        var index=$(this).index();
		        $(".xuanze").find(".xu").removeClass("active");
		        $(".xuanze").find(".xu").eq(index).addClass("active");
		
		        $(".mainer").find("ul").css('display','none');
		        $(".mainer").find("ul").eq(index).css('display','block');
		    })
		}
	}
}])