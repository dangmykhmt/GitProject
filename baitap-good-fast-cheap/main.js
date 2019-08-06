//bat good tat fast
//bat fast atat cheap
//bat cheap tat good
function switchFunny (serial) {
    let good = document.getElementById('good');
    let cheap = document.getElementById('cheap');
    let fast = document.getElementById('fast');
    switch (serial) {
        case 1: {
            if (cheap.checked==true && fast.checked==true) fast.checked= false;
            break;
        }
        case 2: {
            if (fast.checked==true && good.checked==true) good.checked= false;
            break;
        }
        case 3: {
            if (good.checked==true && cheap.checked==true) cheap.checked= false;
                break;
        }
    }
}