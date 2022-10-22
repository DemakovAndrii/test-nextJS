import Link from "next/link";
import MainContainer from "./../components/MainContainer";

const users = ({ users }) => {
	return (
		<MainContainer keywords={"user page"}>
			<h1>Список пользователей</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a> {user.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</MainContainer>
	);
};

export default users;

export async function getStaticProps(context) {
	const respons = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await respons.json();
	return {
		props: { users },
	};
}
