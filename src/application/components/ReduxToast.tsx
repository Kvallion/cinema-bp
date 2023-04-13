import ReduxToastr from "react-redux-toastr"

const ReduxToast: React.FC = () => {
	return (
		<ReduxToastr
			position="bottom-right"
			newestOnTop={true}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast
