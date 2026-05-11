import { H2, Icon } from '../../../../components';
import { SpecialPanel } from '../special-panel/SpecialPanel';
import { useNavigate } from 'react-router-dom';
import { PROP_TYPE } from '../../../../constants';
import styled from 'styled-components';

const PostContentContainer = ({ className, post }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			{post.imageUrl && (
				<img src={post.imageUrl} alt={post.title} />
			)}
			<H2>{post.title}</H2>
			<SpecialPanel
				postId={post.id}
				publishedAt={post.publishedAt}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={() => navigate(`/post/${post.id}/edit`)}
					/>
				}
			/>
			<div className="post-text">{post.content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;

PostContent.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};
