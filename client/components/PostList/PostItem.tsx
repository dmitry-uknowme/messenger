import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReplyIcon from '@material-ui/icons/Reply';

import styles from './index.module.sass';

const PostItem = ({ text, images }) => {
	return (
		<div className={styles.postList__item}>
			<div className='post-list__item-header'>
				<AccountCircleIcon className={styles.postList__itemProfile} /> Дима Богатырев
			</div>
			<div className='post-list__item-body'>
				{images?.map((img: string) => (
					<img className={styles.postList__itemImg} src={img} />
				))}
				{text}
			</div>
			<hr />
			<div className={styles.postList__itemFooter}>
				<div className='post-list__item-like'>
					<FavoriteBorderIcon />
					<span>1</span>
				</div>
				<div className='post-list__item-comment'>
					<ChatBubbleOutlineIcon />
					<span>1</span>
				</div>
				<ReplyIcon className='post-list__item-reply' />
			</div>
		</div>
	);
};

export default PostItem;