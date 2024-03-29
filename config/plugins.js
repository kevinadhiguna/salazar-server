module.exports = ({ env }) => ({
	// Strapi Upload provider : Cloudinary set up
	upload: {
		provider: 'cloudinary',
		providerOptions: {
			cloud_name: env('CLOUDINARY_NAME'),
			api_key: env('CLOUDINARY_KEY'),
			api_secret: env('CLOUDINARY_SECRET'),
		},
		actionOptions: {
			upload: {},
			delete: {},
		},
	},
});
