

function startTime() {
  var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    foxReminder(h, m, s)
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML = today.toDateString();
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


//reminder activities in a function
function foxReminder (h, m, s) {

  if (h==04 && m==00 && s==00) {;
    var options = {
    body: 'Wake Up !!!',
    icon: 'logo.png'
    }
    var notif = new Notification("04.00",options);
  }
  else if (h==07 && m==00 && s==00) {
    var options = {
    body: 'Have your breakfast',
    icon: 'logo.png'
    }
    var notif = new Notification("07.00", options);
  }
  else if (h==08 && m==00 && s==00) {
    var options = {
    body: 'Get ready to campus, dont forget to clean yourself',
    icon: 'logo.png'
    }
    var notif = new Notification("08.00", options);
  }
  else if (h==10 && m==00 && s==00) {
    var options = {
    body: 'Prepare your stuff and attend the Lecture Session',
    icon: 'logo.png'
    }
    var notif = new Notification("10.00", options);
  }
  else if (h==11 && m==00 && s==00) {
    var options = {
    body: 'Its Coding Time',
    icon: 'logo.png'
    }
    var notif = new Notification("11.00", options);
  }
  else if (h==12 && m==00 && s==00) {
    var options = {
    body: 'Hufft..take a breath get some lunch, dont forget to pray',
    icon: 'logo.png'
    }
    var notif = new Notification("12.00", options);
  }
  else if (h==13 && m==00 && s==00) {
    var options = {
    body: 'Prepare for coding again',
    icon: 'logo.png'
    }
    var notif = new Notification("13.00", options);
  }
  else if (h==15 && m==00 && s==00) {
    var options = {
    body: 'Hufft..take a breath get some rest, dont forget to pray',
    icon: 'logo.png'
    }
    var notif = new Notification("15.00", options);
  }
  else if (h==16 && m==00 && s==00) {
    var options = {
    body: 'Coding time in last session',
    icon: 'logo.png'
    }
    var notif = new Notification("16.00", options);
  }
  else if (h==18 && m==00 && s==00) {
    var options = {
    body: 'Enough for today, prepare to go home',
    icon: 'logo.png'
    }
    var notif = new Notification("18.00", options);
  }
  else if (h==23 && m==00 && s==00) {
    var options = {
    body: 'Come on..time to go sleep',
    icon: 'logo.png'
    }
    var notif = new Notification("23.00", options);
  }
}
