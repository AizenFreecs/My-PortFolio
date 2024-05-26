import blogimg from '../assets/images/blogapp.png'
import odImage from '../assets/images/objectdetection.png'
import chessImg from '../assets/images/chess.png'
import todoImg from '../assets/images/todo.png'
import ddosImg from '../assets/images/ddos.jpeg'
import myPF from '../assets/images/myPortfolio.png'

export const projectsData = [
	{
		id: 1,
		title: 'Zen-Blog',
		category: 'Web Application',
		img: blogimg,
		liveLink: "https://zen-blog-eta.vercel.app/",
		description: "A Complete blogging app with user authentcation and login and the fully CRUDenables allowing user to create , view , edit and delete posts.",
		github:"https://github.com/AizenFreecs/Blog-App-React"
	},
	{
		id: 2,
		title: 'Computer Vision Project',
		category: 'Machine Learning',
		img: odImage,
		liveLink:"",
		github: "https://github.com/AizenFreecs/CoputerVisionProject",
		description:"This project focuses on computer vision-based object detection, specifically targeting offensive hand gestures in images. Various models have been trained to accomplish this task, aiming to detect and classify offensive gestures accurately."
	},
	{
		id: 3,
		title: 'Freecs Chat',
		category: 'Web Development',
		img: "",
		liveLink:"https://freecs-chat.vercel.app/",
		github: "https://github.com/AizenFreecs/Full-Stack-Chat-App",
		description:"A FullStack social chat application where you can make friends and chat with them in real time within single or group chats"
	},
	{
		id: 4,
		title: 'Chess Game from Scratch',
		category: 'Other',
		img: chessImg,
		liveLink:"",
		github: "https://github.com/AizenFreecs/ChessProject",
		description:"A chess engine made from scratch using python and pygame with animations and sound and a computer opponent based on min max algorithm."
	},
	{
		id: 5,
		title: 'Todo WebApp',
		category: 'Web Application',
		img: todoImg,
		liveLink: "",
		github: "https://github.com/AizenFreecs/Todos_With_Redux",
		description:"A Todo app made with React using React Redux for State Management"
	},
	{
		id: 6,
		title: 'DDoS Attack Prediction using ML',
		category: 'Machine Learning',
		img: ddosImg,
		liveLink: "",
		github: "https://github.com/AizenFreecs/DDoS-attack-Detection-using-ML",
		description:"A ML project where I have applied different feature selection algorithms on a progressive DDoS attack dataset to train ML models using the different selected Features."
	},
	{
		id: 7,
		title: 'My PortFolio',
		category: 'Web Development',
		img: myPF,
		liveLink:"",
		github: "https://github.com/AizenFreecs/My-PortFolio",
		description:"My Portfolio website made with React Js and tailwind CSS along with the use of custom and ShadCN components."
	},
	{
		id: 8,
		title: 'Notes App',
		category: 'Mobile Application',
		img: "MobileImage1",
		liveLink: "",
		github: "https://github.com/AizenFreecs/NotesApp",
		description:"A notes app project made with android studio and makes use of firebase real time database for storage with user registration and authentication."
	},
];