import React from "react"
import styled from "styled-components"
import { ToastContainer } from "react-toastify"

import { theme } from "../../../../theme/index"

export default function AdminToast() {
	return (
		<AdminToastStyled>
			<ToastContainer className="toaster" bodyClassName="body-toast" />
		</AdminToastStyled>
	)
}

const AdminToastStyled = styled.div`
	.toaster {
		max-width: 300px;
	}

	.Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
		background: ${theme.colors.background_dark};
	}

	.body-toast {
		.Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
			margin-right: 20px;
			margin-left: 5px;
		}
		div {
			line-height: 1.3em;
		}
	}
`
