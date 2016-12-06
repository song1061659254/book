app.directive("lunbo",[function(){
	return{
		restrict:'AE',
		replace:true,
		templateUrl:'module/lunbo/lunbo.html',
		scope:{
			pics:"=",
			time:"="
		},
		link:function($scope,el){
//			console.log(1)
			var change=$(el).find(".uls");
			var t=-500;
			setInterval(function(){
				change.css("transform","translate3d("+t+"px,0,0)")
				t-=500;
				if(t===-500*$scope.pics.length){
					t=0;
				}
				
				
			},$scope.time)
		}
		
		
		
	}
	
	
	
	
	
}])