import { Button, Flex, Input } from 'antd';
import style from './CreatePage.module.css';
import TextArea from 'antd/es/input/TextArea';
import MarkdownView from 'react-showdown';
import Line from '../../../components/custom/Line/Line';
import { useDispatch, useSelector } from 'react-redux';
import { selectUnsavedDraft } from '../../../redux/posts/selector';
import { updateUnsavedDraft } from '../../../redux/posts/slice';
import { createPost, updatePostById } from '../../../api/postService';

const CreatePage = () => {
  const dispatch = useDispatch();
  const unsavedDraft = useSelector(selectUnsavedDraft);

  const title = unsavedDraft.title || '';
  const content = unsavedDraft.body || '';
  const hashtags = unsavedDraft.hashtags || '';
  const topic = unsavedDraft.topic || '';

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateUnsavedDraft({ ...unsavedDraft, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (unsavedDraft._id) {
      updatePostById(unsavedDraft._id, unsavedDraft);
      dispatch(updateUnsavedDraft({}));
    } else {
      createPost(unsavedDraft);
      dispatch(updateUnsavedDraft({}));
    }
  };

  const onClearForm = () => {
    dispatch(updateUnsavedDraft({}));
  };

  return (
    <Flex vertical gap="20px" className={style.container}>
      <form
        className={style.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <Input placeholder="Title" value={title} name="title" />
        <Input placeholder="Topic" value={topic} name="topic" />
        <Input
          placeholder="Hashtags (PastSimple, PresentSimple, ...)"
          value={hashtags}
          name="hashtags"
        />
        <TextArea placeholder="Content" value={content} name="body"></TextArea>
        <Flex wrap align="center" justify="center" gap="10px">
          <Button onClick={handleSubmit}>Зберегти до чорнеток</Button>
          <Button onClick={onClearForm}>Очистити форму</Button>
        </Flex>
      </form>
      <Line />
      <div className={style.preview}>
        <h1 className={style.title}>{title}</h1>
        <MarkdownView markdown={content} />
      </div>
    </Flex>
  );
};

export default CreatePage;
