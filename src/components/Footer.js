import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<footer>
				<ul>
					<li>
						<Link to="https://www.facebook.com/bingz.real/" target="_blank">
							<i className="fa-brands fa-facebook"></i>
						</Link>
					</li>
					<li>
						<Link to="" target="_blank">
							<i className="fa-brands fa-twitter"></i>
						</Link>
					</li>
					<li>
						<Link to="" target="_blank">
							<i className="fa-brands fa-instagram"></i>
						</Link>
					</li>
					<li>
						<Link to="https://github.com/bingzz" target="_blank">
							<i className="fa-brands fa-github"></i>
						</Link>
					</li>
				</ul>
        <p>&copy; by Irving Craig Real. All rights reserved.</p>
			</footer>
		</>
	);
}
