app.directive("tab",[function(){
	return{
		restrict:"E",
		replace:"true",
		templateUrl:"compoents/tab/tab.html",
		scope:{
			content:"=",
			con:"="		
		},
		link:function($scope,el){
			$(el).on("click",".tab-head li",function(){
				var lis=$(el).find(".con li");
				lis.removeClass("active");
				var index=$(this).index();
				lis.eq(index).addClass("active")
			})	
//			lunbo
		}
	}
}])