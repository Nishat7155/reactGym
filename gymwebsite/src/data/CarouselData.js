export const data = [
	{
		title: 'What our clients say',
		description:
			'Our clients happily stay with our services for more several years now. See real reviews from our clients.',
		image: './assets/client.jpg',
	},
	{
		title: 'Our Trainers ',
		description: 'Our trainers are certified and experienced. They can even help you to build your confident, train your mind.',
		image: './assets/team2.jpg',
	},
	{
		title: 'Our Team',
		description: 'Our team is you, together we can built the strongest team.',
		image: './assets/group2.jpg',
	},
	{
		title: 'Our services',
		description: 'Find more about our services, classes and group classes.',
		image: './assets/train1.jpg',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/train2.jpg',
	}
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
