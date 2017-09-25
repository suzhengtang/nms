$(function () {
	//默认设备是Android还是ios
	moApp();
	//点击安装方法
	$('#btn').click(downApp);

	function moApp() {
		u = navigator.userAgent,
			isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
			isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			urls = {
				'android': 'http://ftp-apk.pcauto.com.cn/pub/autoclub-5000-autowapDL1.apk',
				'ios': 'https://itunes.apple.com/cn/app/zhong-guo-che-you-hui/id640447959',
				'other': 'https://www.pgyer.com/a71130faf47708e8c51a006fbf4c7101'
			};
		if (isAndroid) {
			$('#p_change').text('适用于Android设备');
		} else if (isiOS) {
			$('#p_change').text('适用于ios设备');
		} else {
			$('#p_change').text('使用于Android设备和ios设备');
		}
	}

	function downApp() {
		if (isAndroid) {
			window.location.href = urls.android;
		} else if (isiOS) {
			window.location.href = urls.ios;
		} else {
			window.location.href = urls.other;
		}
	};

	//在微信中打开需提示在浏览器中打开
	var winHeight = $(window).height(20);
	function is_weixin() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	}

	var isWeixin = is_weixin();
	if (isWeixin) {
		$(".weixin-tip").css("height", winHeight);
		$(".weixin-tip").show();
	}

	//微信提示内容动画显示
	$(document).ready(function () {
		$('.weixin-tip').animate({top: '0'}, 1000);
	})
})
