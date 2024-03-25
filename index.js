const url = 'https://spotify-web-api3.p.rapidapi.com/v1/social/spotify/uritoid?uri=spotify%3Atrack%3A7MXVkk9YMctZqd1Srtv4MB';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '97318223a4msh86c08b3faabdb34p1d712ejsn194f574ac00b',
		'X-RapidAPI-Host': 'spotify-web-api3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}