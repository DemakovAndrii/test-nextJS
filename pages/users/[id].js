import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "./../../components/MainContainer";

export default function ({ user }) {
	const { query } = useRouter();

	return (
		<MainContainer keywords={user.name}>
			<div className={styles.user}>
				<h1>Пользователь с id {query.id}</h1>
				<div>Имя пользователя - {user.name}</div>
			</div>
		</MainContainer>
	);
}

export async function getServerSideProps({ params }) {
	const respons = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await respons.json();
	return {
		props: { user },
	};
}
