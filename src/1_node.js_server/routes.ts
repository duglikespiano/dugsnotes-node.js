import fs from 'fs';
import { IncomingMessage, ServerResponse } from 'http';

export function requestHandler(req: IncomingMessage, res: ServerResponse) {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter Message</title></head>');
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
		);
		res.write('</html>');
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		const body: any[] = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			console.log(parsedBody);
			console.log(message);
			fs.writeFile('message.txt', message, 'utf8', () => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		});
	}
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hi, This is my first SSR!</h1></body>');
	res.write('</html>');
	res.end();
}
