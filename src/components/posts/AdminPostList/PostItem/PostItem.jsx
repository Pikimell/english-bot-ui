import { Button, Card, Flex } from 'antd';
import style from './PostItem.module.css';
import { useNavigate } from 'react-router-dom';
import { deletePostById, updatePostById } from '../../../../api/postService';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  removePost,
  updatePost,
  updateUnsavedDraft,
} from '../../../../redux/posts/slice';

const PostItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPublished = item.isPosted;

  const handlePublish = () => {
    toast
      .promise(updatePostById(item._id, { isPosted: !isPublished }), {
        loading: 'Оновлюємо данні...',
        success: 'Статус було змінено!',
        error: 'Щось пішло не так((',
      })
      .then(() => {
        const newData = { isPosted: !isPublished };
        dispatch(updatePost([item._id, newData]));
      });
  };

  const handleRemove = () => {
    toast
      .promise(deletePostById(item._id), {
        loading: 'Видаляємо...',
        success: 'Успішно видалено!',
        error: 'Щось пішло не так((',
      })
      .then(() => {
        dispatch(removePost(item._id));
      });
  };

  const handleOpen = () => {
    navigate(`/posts/${item._id}`);
  };
  const handleEdit = () => {
    dispatch(updateUnsavedDraft(item));
    navigate(`/posts/create`);
  };

  return (
    <Card className={style.item} title={item.topic}>
      {item.title}
      <Flex className={style.controls} gap="5px" wrap>
        <Button onClick={handlePublish}>
          {!isPublished ? 'Опублікувати' : 'До чорнеток'}
        </Button>
        <Button onClick={handleOpen}>Переглянути</Button>
        <Button onClick={handleEdit}>Редагувати</Button>
        <Button onClick={handleRemove}>Видалити</Button>
      </Flex>
    </Card>
  );
};

export default PostItem;
