$(function(){
    //set taiwain city selector from 'tw-city-selector.min.js'
    new TwCitySelector({
        el: ".address",
        elCounty: "#city", // 在 el 裡查找 dom
        elDistrict: "#area"//, // 在 el 裡查找 dom
        // elZipcode: ".zipcode" // 在 el 裡查找 dom
    });

    $(".btn1").click(function(){
        if(loginTokenCheck()){
            console.log("SSS");
        }else{
            console.log("A");
        }
    });

    $(".btn2").click(function(){
        if($("#name").val()==""){
            alert("你尚未填寫姓名");
            eval("document.form1['name'].focus()");
        }else if(!isNaN($("#name").val())){
            alert("姓名不可輸入數字");
        }else if($("#sex").val()==""){
            alert("你尚未填寫性別");
            eval("document.form1['sex'].focus()");
        }else if($(".sel_month").val()==0||$(".sel_day").val()==0){
            alert("請選擇出生年月日");
            eval("document.form1['birthday'].focus()");
        }else if($("#phone").val()==""){
            alert("你尚未填寫電話");
            eval("document.form1['phone'].focus()");
        }else if($("#address").val()==""){
            alert("你尚未填寫地址");
            eval("document.form1['address'].focus()");
        }else if($("#country").val()=='taiwan'&&$("#city").val()==0||$("#area").val()==0){
            alert("請選擇行政區域");
            eval("document.form1['address'].focus()");
        }else if($("#email").val()=="") {
            alert("你尚未填寫E-mail");
            eval("document.form1['email'].focus()");
        }else if(!emailcheck($("#email").val())){
            alert("E-mail格式不正確");
            eval("document.form1['email'].focus()");
        }else{
            $("#step2").css("display","none");
            $("#step3").css("display","block");
            // document.form1.submit();
        }
    });

    $(".btn3").click(function(){
        window.open('http://vidol.tv/', '_blank');
    });

    $.ms_DatePicker({
        YearSelector: ".sel_year",
        MonthSelector: ".sel_month",
        DaySelector: ".sel_day"
    });

    $("#FB_share").click(function(){
        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'http://13.113.192.250/event_dev/backhome/index.html',
            picture: 'http://13.113.192.250/event_dev/backhome/image/main.png'
        }, function(response){});
    });

    $("#line_share").click(function(){
        event.preventDefault();
        window.open("http://line.naver.jp/R/msg/text/?哩永遠ㄟ後頭厝 http://13.113.192.250/event_dev/backhome/index.html");
    });

    $.fn.snow({
        minSize: 1,
        maxSize: 35,
        newOn: 487,
        flakeColor: '#ffffff'
    });
    $(window).resize(function(){
        snowingSet();
        var maxheight = $('#main').height()+$('.footer').height();
        $('body').css('max-height',maxheight);
    });

});

function snowingSet() {
    // 產生下雪效果
    // 每隔 100 毫秒(0.1 秒)產生一個介於 5~50px 且顏色為 #0099FF 的雪片
    $.fn.snow({
        minSize: 1,
        maxSize: 35,
        newOn: 10000,
        flakeColor: '#ffffff'
    });
}

function loginTokenCheck() {
    v_token = $('input[name=token]').val();
    if(v_token.length < 1){
        console.log('>>>請登入再投票!!');
        $("#login").dialog();
        return false;
    }else {
        $("#step1").css("display","none");
        $("#step2").css("display","block");
        return true;
    }
}

function numcheck(id,time){
    var re = /^[0-9]+$/;
    if (!re.test(time.value)){
        alert("只能輸入數字");
        document.getElementById(id).value="";
    }
}

function emailcheck(mail) {
    //please input the test email to see is valid
    var strEmail = mail;

    //Regular expression Testing
    emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

    //validate ok or not
    if(strEmail.search(emailRule)!= -1){
        return true;
    }else {
        return false;
    }
}

function setCountry(){
   // var countryValue = document.getElementsById("country").value;
    var country = $('#country').val();
    if(country=='foreign'){
        $('#city').hide();
        $('#area').hide();
    }else {
        $('#city').show();
        $('#area').show();
    }
}





