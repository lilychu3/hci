
function toggleCheckOne(i) {
	const metas = document.getElementsByTagName('meta');

	if (metas[i].getAttribute('content') === '0') {
		metas[i].setAttribute('content', '1');
	} else {
		metas[i].setAttribute('content', '0');
	}

	changeImage(metas[2].getAttribute('content'), metas[3].getAttribute('content'));
}

function changeImage(one, two) {
	var src = 'img/register-saved.png'

	if (one === '0' && two === '0') {
		//console.log("both unchecked");
		src = 'img/blank-calendar.png';
	} else if (one === '1' && two === '0') {
		//console.log("one checked, two unchecked");
		src = 'img/register-schedule.png';
	} else if (one === '0' && two === '1') {
		//console.log("one unchecked, two checked");
		src = 'img/saved-schedule.png';
	}

	document.getElementById('calendar').src = src;
}

function pictureChange()
    {
    document.getElementById('calendar').src="img/after-register.png";
    }