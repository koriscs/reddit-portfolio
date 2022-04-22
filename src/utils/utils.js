export function created(was_created) {
    let currentTime = Date.now() / 1000;
	let elapsedTimeHour = (currentTime - was_created) / 60 / 60;
	let timePassed;

	if (elapsedTimeHour < 24) {
		return timePassed = Math.floor(elapsedTimeHour) + 'h ago';
	} else {
		return timePassed = Math.floor(elapsedTimeHour / 24) + 'd ago';
	}
}
export function truncateText (text, limit) {
    const shortened = text.indexOf(' ', limit);
    if(shortened === -1 ) return text;
    return text.substring(0, shortened);
  }
 