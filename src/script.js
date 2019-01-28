let btnEventHidden = 0;

function btnEvent() {
    btnEventHidden = 0;
    faqVisi();
}

function btnApps() {
    btnEventHidden = 1;
    faqVisi();
}

function btnVol() {
    btnEventHidden = 2;
    faqVisi();
}

function btnOthers() {
    btnEventHidden = 3;
    faqVisi();
}

function faqVisi() {
    switch(btnEventHidden) {
        case 0:
            document.getElementById('inf-event').style.visibility = 'visible';

            document.getElementById('inf-btnApps').style.visibility = 'hidden';
            document.getElementById('inf-vol').style.visibility = 'hidden';
            document.getElementById('inf-others').style.visibility = 'hidden';

            break;
        case 1:
            document.getElementById('inf-apps').style.visibility = 'hidden';

            break;
        case 2:
            document.getElementById('inf-vol').style.visibility = 'hidden';

            break;
        case 3:
            document.getElementById('inf-others').style.visibility = 'hidden';

            break;
    }
}