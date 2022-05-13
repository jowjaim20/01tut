import {useEffect, useState} from 'react'

const Content= () => {
	const [x, setX]=useState(0)
	const [y, setY]=useState(0)
	const [int, setInt]=useState(0)
	const names=['Bob','Kevin', 'Dave'];
	
	const handleNameChange =() =>{
	
		const intRandom = Math.floor(Math.random() * 3);
		setInt(intRandom)
	}
	
	const setCoordinates = e =>{
		setX(e.clientX)
		setY(e.clientY)
		
	}
	
	useEffect(()=>{
		window.addEventListener("mousemove",setCoordinates )
	},[])
	
		
	
/*	const handleClick = () => {
		console.log('button Clicked')
	}
	*/
	return(
		<main>
			<p>
				x {x}
				y{y}
			</p>
			<button onClick={()=>handleNameChange()} >Button</button>
			<button onClick={()=>setCoordinates()} >Button</button>
		</main>
		);
};
export default Content;