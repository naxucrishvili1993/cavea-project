import CaveaLogo from "../../images/cavea-logo.jpg";

const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid justify-content-start">
				<a className="navbar-brand" href="https://www.cavea.ge/" target="blank">
					<img
						src={CaveaLogo}
						alt="Logo"
						width="225"
						height="56"
						className="d-inline-block align-text-top"
					/>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
