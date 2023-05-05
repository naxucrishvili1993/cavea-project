import CaveaLogo from "../../images/cavea-logo.jpg";

const Navbar = () => {
	return (
		<nav className="navbar d-flex justify-content-between p-2 bg-body-tertiary">
			<div className="container m-0 w-25">
				<a
					className="navbar-brand w-25"
					href="https://www.cavea.ge/"
					target="blank"
				>
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
