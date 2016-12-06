app.controller("inreadingCtrl",["$scope",function($scope){
			$scope.color = ["#FFE7A7", "green", "yellow", "brown", "pink", "orange", "purple"];
		if(localStorage.reminder) {
			$scope.lists = JSON.parse(localStorage.reminder)
		} else {
			$scope.lists = []
		}
		$scope.save2local = function() {
				localStorage.reminder = JSON.stringify($scope.lists)
			}

		$scope.cu = 0;
		//		点击添加
		$scope.additem = function() {

			var len = $scope.lists.length
			var index = len % 7;
			var m = {
				id: findId() + 1,
				name: "新列表" + (len + 1),
				theme: $scope.color[index],
				todos:[]
			}
			$scope.lists.push(m)
		}
	
}])
app.directive("myreading",[function(){
	return{
		restrict:"A",
		replace:true,
		template: '<div><ul ng-transclude></></div>',
		transclude:true,
		link:function($scope,el){
				var first;
	var inNub=0;
	

	$(el).find(".out-by").on("touchstart",false);
//	$(el).find(".page-opacity").on("touchstart",false);
//	$(el).find(".header-eight").on("touchstart",false);
	
	$(el).on("click",function(){
		if(inNub%2==0){
			$(el).find(".out-by").addClass("out-act").removeClass("out-act2")
			$(el).find(".header-eight").addClass("head-act").removeClass("head-act2")
			if($(el).find(".back-op").hasClass("ftstact")){
				$(el).find(".back-op").removeClass("ftstact").addClass("ftstact2")
				nub+=1
				return
			}if($(el).find(".font-set").hasClass("font-act")){
				$(el).find(".font-set").removeClass("font-act").addClass("font-act2")
				nub+=1
				return
			}
			
			$(el).find(".page-opacity").removeClass("fontSet-act2").addClass("fontSet-act")
				}else{
					if($(el).find(".back-op").hasClass("ftstact")){
						  inNub+=1
						return
					}else if($(el).find(".font-set").hasClass("font-act")){
						 inNub+=1
						return 
						
					}
					$(el).find(".header-eight").removeClass("head-act").addClass("head-act2");
					$(el).find(".out-by").removeClass("out-act").addClass("out-act2")
					$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2")
//			$(el).find(".font-set").css("display","none")
				}
				inNub+=1
	})
////	調節字號大小
	$(el).find(".pro-cir1").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;
		console.log(proF)
		$(el).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX*2-$(el).find(".pro-cir1").offset().left-($(el).find(".pro-cir1").outerWidth()/2-200)	
				if(progo>=0 && progo<566){
					$(el).find(".pro-cir1").css("left",progo);
//					$(el).find(".pro-cir3").css("left",progo)
				}else{
					return
				}
			})
	})
$(el).on("touchend", function() {
				$(el).off("touchmove")
				$(el).off("touchend")
			})
$(el).find(".pro-cir3").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;
		console.log(proF)
		$(el).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX*2-$(el).find(".pro-cir3").offset().left-($(el).find(".pro-cir3").outerWidth()/2-200)	
				if(progo>=0 && progo<466){
//					$(el).find(".pro-cir1").css("left",progo);
					$(el).find(".pro-cir3").css("left",progo-10)
				}else{
					return
				}
			})
	})
$(el).on("touchend", function() {
				$(el).off("touchmove")
				$(el).off("touchend")
			})
//------------------------------?
$(el).find(".pro-cir5").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;
		console.log(proF)
		$(el).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX*2-$(el).find(".pro-cir5").offset().left-($(el).find(".pro-cir5").outerWidth()/2-200)	
				if(progo>=0 && progo<566){
					$(el).find(".pro-cir5").css("left",progo);
//					$(el).find(".pro-cir3").css("left",progo)
				}else{
					return
				}
			})
	})
$(el).on("touchend", function() {
				$(el).off("touchmove")
				$(el).off("touchend")
			})
//--------------------------
$(el).find(".pro-cir6").on("touchstart",function(e){
		e.preventDefault();
		var proF=e.originalEvent.changedTouches[0].clientX;
		console.log(proF)
		$(el).on("touchmove",function(e){
			var progo=e.originalEvent.changedTouches[0].clientX*2-$(el).find(".pro-cir6").offset().left-($(el).find(".pro-cir6").outerWidth()/2-200)	
				if(progo>=0 && progo<566){
					$(el).find(".pro-cir6").css("left",progo);
//					$(el).find(".pro-cir3").css("left",progo)
				}else{
					return
				}
			})
	})
$(el).on("touchend", function() {
				$(el).off("touchmove")
				$(el).off("touchend")
			})



//..............constructor
$(el).find(".shezhi").on("click",function(){
	$(el).find(".back-op").removeClass("ftstact").addClass("ftstact2")
	$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2");	$(el).find(".font-set").removeClass("font-act2").addClass("font-act")
})
$(el).find(".liang").on("click",function(){
	$(el).find(".page-opacity").removeClass("fontSet-act").addClass("fontSet-act2");	$(el).find(".font-set").removeClass("font-act").addClass("font-act2")

	$(el).find(".back-op").removeClass("ftstact2").addClass("ftstact")
})
//////////////////////////////////拖动///////////////////////////////////////


		}
	}
}])

