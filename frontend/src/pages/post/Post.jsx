import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, PostForm, Comments } from './components';
import { Error, PrivateContent } from '../../components';
import { RESET_POST_DATA } from '../../actions';
import { loadPostAsync } from '../../actions/load-post-async';
import { selectPost } from '../../selectors';
import { ROLE } from '../../constants';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		if (params.id && post.id !== params.id) {
			dispatch(loadPostAsync(params.id)).then((postData) => {
				setError(postData.error);
				setIsLoading(false);
			});
		}
	}, [isCreating, dispatch, params.id, post.id]);

	if (isLoading) return null;

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
