var lq_datetimepick = false;
$.fn.lqdatetimepicker = function (options) {
    lq_datetimepick = true;
    return this.each(function () {
        var $this = $(this);
        if ($("#lq-datetimepick").length > 0) $("#lq-datetimepick").remove();
        var _this = {
            css: "datetime-day", //datetime-hour 鏃跺垎鏍峰紡 锛宒atetime-day 鏃ユ湡鏍峰紡
            offset: {
                left : 0,
                top : 10
            },
            dateType: 'H', //H閫夋嫨鏃跺垎锛孌閫夋嫨鏃ユ湡
            date: {
                'H' : {
                    begin : '00:00', //寮€濮嬫椂鍒�
                    end : '23:30', //缁撴潫鏃跺垎
                    step : "30" //鏃跺垎姝ラ暱
                },
                'D' : {
                    month : new Date(), //鏃ユ湡榛樿鏃堕棿
                    selected : (new Date()).getDate()
                },
                'M' : {
                    begin : 1, //鏈堜唤寮€濮�
                    end : 12, //鏈堜唤缁撴潫
                    selected : (new Date()).getMonth()+1  //鏈堜唤鍒濆
                },
                'Y' : {
                    begin : 2001, //骞翠唤寮€濮�
                    end : (new Date()).getFullYear(), //骞翠唤缁撴潫
                    selected : (new Date()).getFullYear() //骞翠唤鍒濆
                }
            },
            selectback : function(){}, //閫夋嫨鏃堕棿鐨勪簨浠跺洖璋�
            callback : function () { } //鍒濆鍖栨椂闂翠簨浠跺洖璋�
        };
        $.extend(_this, options);

        var _obj = $("<div class=\"lq-datetimepick\" id=\"lq-datetimepick\" />");
        var _arr = $("<div class=\"datetime-arr\" />");
        var _container = $("<div class=\"select-datetime\" />");
        var _selectitem = $("<div class=\"datetime-select\" />");
        var _header = $("<dl class=\"datetime-time\"></dl>");
        var _item = $("<dl class=\"datetime-time\"></dl>");


        var _day;

        var _datevalue = $this.val() == '' ? new Date() : new Date($this.val().replace(/-/g, "/"));
        var _dateyear = _datevalue.getFullYear();
        var _datemonth = _datevalue.getMonth()+1;
        var _datedate = _datevalue.getDate();

        var _x = $this.offset().left + _this.offset.left,
            _y = $this.offset().top + $this.outerHeight() + _this.offset.top;

        if(_this.css != undefined || _this.css != ''){
            _header.addClass(_this.css);
            _item.addClass(_this.css);
        }

        if($this.val() != ''){
            _this.date.D.month = new Date($this.val().replace(/-/g, "/"));
        }


        $.fn.lqdatetimepicker.setDateData($this,_obj,_item,_this);

        //鏃ユ湡
        if(_this.dateType == 'D'){

            //骞翠唤
            var _select_year = $.fn.lqdatetimepicker.setSelectData(_this,'Y');
            var _selectul_year = $("<div class=\"selectul\" id=\"lqyear\" />");
            var _select_year_t = $("<div class=\"selectfocus\"></div>");
            if(_dateyear != '') _select_year_t.attr("data-value",_dateyear);
            _select_year_t.html("<em>閫夋嫨骞翠唤</em>");
            _select_year_t.appendTo(_selectul_year);
            _select_year.appendTo(_selectul_year);
            _selectul_year.appendTo(_selectitem);
            _selectitem.appendTo(_container);


            //鏈堜唤
            var _select_month = $.fn.lqdatetimepicker.setSelectData(_this,'M');
            var _selectul_month = $("<div class=\"selectul\" id=\"lqmonth\" />");
            var _select_month_t = $("<div class=\"selectfocus\"></div>");
            if(_datemonth != '') _select_month_t.attr("data-value",_datemonth);
            _select_month_t.html("<em>閫夋嫨鏈堜唤</em>");
            _select_month_t.appendTo(_selectul_month);
            _select_month.appendTo(_selectul_month);
            _selectul_month.appendTo(_selectitem);
            _selectitem.appendTo(_container);

            //鏄熸湡
            _week = $.fn.lqdatetimepicker.intWeek();
            for(var i=0; i<7; i++){
                _day = $("<dt><span>"+_week[i]+"</span></dt>");
                _day.appendTo(_header);
            }
            _header.appendTo(_container);
        }

        _arr.appendTo(_obj);
        _container.appendTo(_obj);
        _item.appendTo(_container);
        _obj.appendTo("body").css({
            left : _x + 'px',
            top : _y  + 'px'
        }).show();
        _this.callback();

        LQ.selectUi.show({
            id:"lqyear",
            hiddenInput:"selectYear",
            pulldown:function(){
                var _year = $("#selectYear").val();
                var _month = $("#selectMonth").val();
                var _day = $(".datetime-time>dd.selected").attr("data-value");
                _day = _day==undefined ? _this.date.D.selected : _day;
                _this.date.D.month = new Date(_year+'/'+_month+'/'+_day);
                $.fn.lqdatetimepicker.setDateData($this,_obj,_item,_this);
            }
        });
        LQ.selectUi.show({
            id:"lqmonth",
            hiddenInput:"selectMonth",
            pulldown:function(){
                var _year = $("#selectYear").val();
                var _month = $("#selectMonth").val();
                var _day = $(".datetime-time>dd.selected").attr("data-value");
                _day = _day==undefined ? _this.date.D.selected : _day;
                _this.date.D.month = new Date(_year+'/'+_month+'/'+_day);
                $.fn.lqdatetimepicker.setDateData($this,_obj,_item,_this);
            }
        });

        _obj.on("click",function(e){
            e.stopPropagation();
        });

        $(document).on("click",function(e){
            if(lq_datetimepick){
                _obj.remove();
            }
        });

    })

};

$.fn.lqdatetimepicker.setDateData = function($this,_obj,_item,_this){
    var _time;
    var _datetime = $.fn.lqdatetimepicker.setDateTime(_this);
    if (typeof(_datetime) == 'object'){
        _item.empty();
        for (var i=0; i<_datetime.length; i++){
            _time = $("<dd data-value="+_datetime[i]+"><em>"+_datetime[i]+"</em></dd>");
            if(_this.dateType == 'D'){
                _time.attr('data-value',_this.date.D.month.getFullYear()+'-'+(_this.date.D.month.getMonth()+1)+'-'+_time.attr('data-value'))
            }
            _time.on("click",function(){
                $this.val($(this).attr("data-value"));
                _obj.remove();
                _this.selectback();
            });
            _time.hover(function(){
                $(this).addClass('over');
            },function(){
                $(this).removeClass('over');
            });
            if($this.val() == _datetime[i]){
                _time.addClass('selected')
            }
            if(($this.val() == '') && (_this.dateType == 'D') && (_this.date.D.month.getDate() == _datetime[i])){
                _time.addClass('current');
            }
            if((new Date($this.val()).getDate() == _datetime[i]) && (_this.dateType == 'D')){
                _time.addClass('current');
            }
            if(_datetime[i] == ''){
                _time.addClass('blank');
            }
            _time.appendTo(_item);
        }
    }
}

$.fn.lqdatetimepicker.setDateTime = function(_this){
    var dateTime;
    if(_this.dateType == 'H'){
        dateTime = $.fn.lqdatetimepicker.intHourTime(_this);
    }else if(_this.dateType == 'D') {
        dateTime = $.fn.lqdatetimepicker.intDayTime(_this);
    }
     return dateTime;
};

$.fn.lqdatetimepicker.setSelectData = function(_this,type){
    var _data;
    var _cell;
    var _select = $("<select></select>");
    if(type == 'Y'){
        _data = $.fn.lqdatetimepicker.intYearTime(_this);
        _cell = '骞�';
    }
    if(type == 'M'){
        _data = $.fn.lqdatetimepicker.intMonthTime(_this);
        _cell = '鏈�'
    }
    for(var i=0; i<_data.length; i++){
        $("<option></option>").text(_data[i]+_cell).attr("value",_data[i]).appendTo(_select);
    }
    return _select;

};

/*鏃跺垎*/
$.fn.lqdatetimepicker.intHourTime = function(_this){
    var begindate = _this.date.H.begin;
    var enddate = _this.date.H.end;
    var stepdate = _this.date.H.step;
    var _a = [];
    var _date = new Date();
    var _now = _date.getFullYear()+"/"+(_date.getMonth()+1)+"/"+_date.getDate();
    var _begindate = new Date(_now+" "+begindate);
    var _enddate = new Date(_now+" "+enddate);

    var _hours = _enddate.getHours() - _begindate.getHours();
    var _minutes = _enddate.getMinutes() - _begindate.getMinutes();
    var _len = (_hours*60 + _minutes)/stepdate;

    for(var i=0; i<=_len; i++){
        var _t = $.fn.lqdatetimepicker.dateAdd('M',stepdate*i,_begindate);
        _a.push(_t.getHours()+":"+(_t.getMinutes() >= 10 ? _t.getMinutes() : '0'+_t.getMinutes()));
    }
    return _a;
};

/*鏃ユ湡*/
$.fn.lqdatetimepicker.intDayTime = function(_this){
    var _a = [];
    var _date = _this.date.D.month;
    var _year = _date.getFullYear();
    var _month = _date.getMonth();
    var _week = new Date(_year+'/'+(_month+1)+'/1').getDay(); // 褰撳墠鏈堢殑绗竴澶�
    var _day = 32-new Date(_year,_month,32).getDate();
    var _cell = Math.ceil((_week + _day)/7)*7 - (_week + _day);

    for(var w=0; w<_week; w++){
        _a.push('');
    }
    for(var i=0; i<_day; i++){
        _a.push(i+1);
    }
    for(var w=0; w<_cell; w++){
        _a.push('');
    }
    return _a;
};

/*鏈堜唤*/
$.fn.lqdatetimepicker.intMonthTime = function(_this){
    var _a = [];
    var _month_begin = _this.date.M.begin;
    var _month_end = _this.date.M.end;
    for(var i=_month_begin,j=_month_end+1; i<j; i++){
        _a.push(i);
    }
    return _a;
}

/*骞翠唤*/
$.fn.lqdatetimepicker.intYearTime = function(_this){
    var _a = [];
    var _year_begin = _this.date.Y.begin;
    var _year_end = _this.date.Y.end;
    for(var i=_year_begin,j=_year_end+1; i<j; i++){
        _a.push(i);
    }
    return _a;
}

$.fn.lqdatetimepicker.intWeek = function(){
    return ['鏄熸湡鏃�','鏄熸湡涓€','鏄熸湡浜�','鏄熸湡涓�','鏄熸湡鍥�','鏄熸湡浜�','鏄熸湡鍏�']
}

$.fn.lqdatetimepicker.dateAdd = function(interval, NumDay, dtDate){
    var dtTmp = new Date(dtDate);
    if(isNaN(dtTmp)) dtTmp = new Date();
    switch(interval.toUpperCase())  {
        case "S" : return new Date(Date.parse(dtTmp) + (1000 * NumDay));
        case "M" : return new Date(Date.parse(dtTmp) + (60000 * NumDay));
        case "H" : return new Date(Date.parse(dtTmp) + (3600000 * NumDay));
        case "D" : return new Date(Date.parse(dtTmp) + (86400000 * NumDay));
        case "W" : return new Date(Date.parse(dtTmp) + ((86400000 * 7) * NumDay));
        case "M" : return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + NumDay, dtTmp.getDate(),  dtTmp.getHours(),  dtTmp.getMinutes(),  dtTmp.getSeconds());
        case "Y" : return new Date((dtTmp.getFullYear()  +  NumDay),  dtTmp.getMonth(),  dtTmp.getDate(),  dtTmp.getHours(),  dtTmp.getMinutes(),  dtTmp.getSeconds());
    }
};
