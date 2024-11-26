    // 获取模态框和关闭按钮的引用
    const modal = document.getElementById("modal");
    const qrCodeImage = document.getElementById("qrcode");


    // 显示模态框并设置二维码图片
    function showQRCode(paymentMethod) {
        // 放图床上图片URL
        const imageUrls = {
            'wechat': 'https://s2.loli.net/2024/11/22/Kbs8kTPv5AuapzC.jpg',
            'alipay': 'https://s2.loli.net/2024/11/20/lj7eAIgKSvG4CaB.png'
        };

        if (imageUrls[paymentMethod]) {
            qrCodeImage.src = imageUrls[paymentMethod];
            modal.style.display = "block";
        }
    }

    // 关闭二维码框的函数
    function closeModal() {
        modal.style.display = "none";
    }

    // 当点击二维码框以外的区域时关闭模态框
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

      // 确保赞助人数超过10人时，列表可以横向滚动
      document.addEventListener('DOMContentLoaded', function() {
        var sponsorsList = document.getElementById('sponsorsList');
        var sponsors = sponsorsList.querySelectorAll('.sponsor');
        
        if (sponsors.length > 9) {
            sponsorsList.style.justifyContent = 'flex-start';
            sponsorsList.style.overflowX = 'scroll';
        } else {
            sponsorsList.style.justifyContent = 'center';
        }
    });

    // 处理拖动效果
    var isDown = false;
    var startX;
    var scrollLeft;

    sponsorsList.addEventListener('mousedown', (e) => {
        isDown = true;
        sponsorsList.classList.add('active');
        startX = e.pageX - sponsorsList.offsetLeft;
        scrollLeft = sponsorsList.scrollLeft;
    });

    sponsorsList.addEventListener('mouseleave', () => {
        isDown = false;
        sponsorsList.classList.remove('active');
    });

    sponsorsList.addEventListener('mouseup', () => {
        isDown = false;
        sponsorsList.classList.remove('active');
    });

    sponsorsList.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        var x = e.pageX - sponsorsList.offsetLeft;
        var walk = (x - startX) * 3; //scroll-fast
        sponsorsList.scrollLeft = scrollLeft - walk;
    });

右键时恶搞一下的小彩蛋
document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('不许按！！＼(；￢_￢)！');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('你不许看人家😠！');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('哎哟~你干嘛~~~(•̩̩̩̩＿•̩̩̩̩)！');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('不要看了啦！');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('你想干嘛呀？？((╬ಠิ﹏ಠิ))');
    return false;
}
