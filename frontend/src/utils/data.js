export const categories = [
	{
		name: 'websites',
		image:
			'https://i.pinimg.com/750x/66/b1/29/66b1296d36598122e6a4c5452b5a7149.jpg',
	},
	{
		name: 'cats',
		image:
			'https://i.pinimg.com/236x/6c/3c/52/6c3c529e8dadc7cffc4fddedd4caabe1.jpg',
	},
	{
		name: 'others',
		image:
			'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
	},
];

export const userQuery = userId => {
	const query = `*[_type == "user" && _id == '${userId}']`;
	return query;
};
