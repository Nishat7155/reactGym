import React from 'react';
import { FaPeopleCarry } from 'react-icons/fa';
import { AiTwotoneTrophy } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import { GrReddit } from 'react-icons/gr';
import { GrYoga } from 'react-icons/gr';
import { GrSwim } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Certified personal trainers',
		description: 'We offer the best trainer to our clients. Our trainer not only help you to train your body but also help to train your mind',
		icon: iconStyle(FaPeopleCarry),
		imgClass: 'one',
	},
	{
		name: 'Group class',
		description: 'We offer different group classes',
		icon: iconStyle(GrYoga ),
		imgClass: 'two',
	},
	{
		name: 'Digital training sessions',
		description: 'You can train from home',
		icon: iconStyle(AiTwotoneTrophy),
		imgClass: 'three',
	},
	{
		name: 'Spa & Sauna',
		description: 'We have sauna and spa service.',
		icon: iconStyle(GrSwim),
		imgClass: 'four',
	},
	{
		name: 'Physical Therapist',
		description: 'We offer physical therapist',
		icon: iconStyle(BiDonateHeart),
		imgClass: 'five',
	},
	{
		name: 'Kids Care',
		description:
			'We provide kids care service, so the parents can train without any stress ',
		icon: iconStyle(GrReddit),
		imgClass: 'six',
	},
];
