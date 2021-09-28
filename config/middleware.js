module.exports = ({ env }) => ({
  settings: {
		cors: {
			enabled: true,
			// http://localhost:1337 and http://localhost:3000 are allowed origins by default. 
			// Please specify allowed origins in the .env file.
			origin: env('CORS_ORIGIN', 'http://localhost:1337, http://localhost:3000').split(',')
		}
	}
});
