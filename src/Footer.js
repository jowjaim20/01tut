

const Footer = () => {
	const today = new Date()
	return(
		<footer>
			<hr/>
			<p>
				copyright &copy;<b>{today.getFullYear()}</b>
			</p>
		</footer>
		);
};
export default Footer;