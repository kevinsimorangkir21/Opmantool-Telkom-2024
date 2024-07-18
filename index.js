var target_mili_sec = new Date("Aug 09, 2024 15:59:00").getTime();

function timer() {
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

    if (remaining_sec < 0) {
        remaining_sec = 0;
    }

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;
}

setInterval(timer, 1000); // 1000 it means 1 sec

window.$crisp=[];window.CRISP_WEBSITE_ID="cbc805c6-c48a-423d-bafe-c5b7fae4c33c";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();