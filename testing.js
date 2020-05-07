
//source : http://coreymaynard.com/blog/extending-a-javascript-function/

(function () {
    var old_getPeopleData = getPeopleData;

    getPeopleData = function () {

        var result = old_getPeopleData.apply(this, arguments);
        var temp = result.html.split('<br />');
        if (temp[1].length) {
            temp[1] = '👻' + temp[1];
        }
        console.log(getValue(arguments[0]['P7085']));
        if (arguments[0]['P7085']) {
            temp[2] = '<img src="https://s16.tiktokcdn.com/tiktok/falcon/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg"/> : ' + getValue(arguments[0]['P7085']) + ' ';
            temp[3] = `<a class="btn btn-primary float-right text-white" target="_blank" href ="https://www.tiktok.com/@${getValue(arguments[0]['P7085'])}">${getValue(arguments[0]['P7085'])}</a><br />`;
        }
        if (arguments[0]['P106']) {
            temp[4] = '<br />Profession : {' + getValueQidAndAddLabel(arguments[0]['P106']) + '}';
        }
        result.html = temp.join('<br />');
        return result;
    }
})();