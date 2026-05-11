import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, onChange, searchPhrase }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" margin="4px 3px 0 0" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 5px;
	}
`;

Search.propTypes = {
	onChange: PropTypes.func.isRequired,
	searchPhrase: PropTypes.string.isRequired,
};
