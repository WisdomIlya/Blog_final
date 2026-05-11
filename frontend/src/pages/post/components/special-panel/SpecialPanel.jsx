import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { checkAccess } from '../../../../utils';
import { selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, postId, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() =>
						navigate('/'),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						inactive={true}
						id="fa-calendar-o"
						size="18px"
						margin="0 7px 0 0"
					/>
				)}
				{publishedAt}
			</div>

			{isAdmin && (
				<>
					<div className="buttons">
						{editButton}
						{publishedAt && (
							<Icon
								id="fa-trash-o"
								size="21px"
								margin="0 0 0 7px"
								onClick={() => onPostRemove(postId)}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
		align-items: center;
		gap: 7px;
	}
`;

SpecialPanel.propTypes = {
	postId: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};
