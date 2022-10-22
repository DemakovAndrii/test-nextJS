import MainContainer from "./../components/MainContainer";

const index = () => {
	return (
		<>
			<MainContainer keywords={"main page"}>
				<h1>Главная Страница</h1>
				<style jsx>
					{`
						.navbar {
							background: black;
							padding: 16px;
						}
					`}
				</style>
			</MainContainer>
		</>
	);
};

export default index;
