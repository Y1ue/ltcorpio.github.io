l("1", "1", "a", "微信公众平台开发", "东校区 东 3#418 移动互联实训室", "周军强");
l("1", "2", "b", "Java 程序设计", "东校区 东 3#418 移动互联实训室", "陈磊");
l("1", "3", "c", "机器学习", "东校区 东 3#426 大数据实训室", "陶剑文");
l("2", "1-2", "d", "大数据基础", "东校区 东 3#426 大数据实训室", "何颂颂");
l("2", "3", "e", "计算机网络基础", "东校区 东 3#411 系统集成实训室", "竺士蒙");
l("3", "3", "f", "数据可视化", "东校区 东 3#426 大数据实训室", "何颂颂");
l("4", "2", "b", "Java 程序设计", "东校区 东 3#418 移动互联实训室", "陈磊");
l("4", "5", "c", "机器学习", "东校区 东 3#426 大数据实训室", "陶剑文");
l("5", "1-2", "g", "数据采集与处理", "东校区 东 3#426 大数据实训室", "但雨芳");

function l(c, t, n, clsname, intext, tech) {
    var id = "info" + c + t,
        clsid = "info " + n;
    var elm = document.getElementById(id);
    if (t == "1") {
        var time = "08:30—09:55";
    } else if (t == "1-2") {
        var time = "08:30—11:30";
    } else if (t == "2") {
        var time = "10:05—11:30";
    } else if (t == "3") {
        var time = "13:30—14:55";
    } else if (t == "3-4") {
        var time = "13:30—16:35";
    } else if (t == "4") {
        var time = "15:05—16:35";
    } else if (t == "5") {
        var time = "18:20—19:45";
    } else {
        var time = "~";
    };
    elm.innerHTML = "<div class='maininfo'>" + clsname + '</div>' +
        "<div class='intext'><span class='int-ttl'>【时间】</span>" + time + "</div>" +
        "<div class='intext'><span class='int-ttl'>【地点】</span>" + intext + "</div>" +
        "<div class='intext'><span class='int-ttl'>【教师】</span>" + tech + "</div>";
    elm.className = clsid;
    elm.style.color = "#fff";
    elm.style.display = "block"
};
