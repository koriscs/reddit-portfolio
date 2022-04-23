export function created(was_created) {
    let currentTime = Date.now() / 1000;
	let elapsedTimeHour = (currentTime - was_created) / 60 / 60;

	if (elapsedTimeHour < 24) {
		return  Math.floor(elapsedTimeHour) + 'h ago';
	} else {
		return  Math.floor(elapsedTimeHour / 24) + 'd ago';
	}
}
export function truncateText (text, limit) {
    const shortened = text.indexOf(' ', limit);
    if(shortened === -1 ) return text;
    return text.substring(0, shortened);
  }
  export const decode = html => {
    const text = document.createElement('span');
    text.innerHTML = html;
    return text.textContent || text.innerText;
  }

export const getVideoURL = link => {
    let url = link.match(/(?:youtube(?:-nocookie)?\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if(url){
      return `https://www.youtube-nocookie.com/embed/${url[1]}`;
    }
}