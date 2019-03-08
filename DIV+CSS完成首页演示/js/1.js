		//书写函数
		var i=0;
		function init(){
			//书写轮播图显示的时间
			setInterval("changeImg()",3000);
			//设置广告图片的定时操作
			time=setInterval("showAd()",3000);
		}
		//书写函数
		function changeImg(){
			i++;
			document.getElementById("img").src=""+i+".jpg";
			if(i==3){
				i=0;
			}
		}
		
		//书写显示广告图片的函数
		function showAd(){
			//3.获取广告图片的位置
			var  adEle=document.getElementById("img2")
			//4.修改广告图片元素里面的属性 让其显示
			adEle.style.dispaly="block";
			//5.清除显示图片的定时操作
			clearInterval(time);
			//6.设置隐藏图片的定时操作
			time=setInterval("hiddenAd()",3000);
		}
		//7.书写隐藏图片的定时操作
		function hiddenAd(){
//			8.获取广告图片并设置style属性的display值
			document.getElementById("img2").style.display="none";
//			9.清除隐藏广告图片的定时操作
		 	clearInterval(time);
		}