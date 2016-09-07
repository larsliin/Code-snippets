function myfunction (obj) {
    var defaultsettings = { param1: 'value1', param2: 'value2', param3: 'value3', param4 : 'value4' };
    var settings = $.extend(defaultsettings, obj || {});
    console.log(settings.param1);
    console.log(settings.param2);
    console.log(settings.param3);
    console.log(settings.param4);
};

myfunction({ param1: 'some-value', param3: 'another-value' });
