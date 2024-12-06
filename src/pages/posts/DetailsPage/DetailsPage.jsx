import { useParams } from 'react-router-dom';
import style from './DetailsPage.module.css';
import { useEffect, useState } from 'react';
import { getPostById } from '../../../api/postService';
import MarkdownView from 'react-showdown';
import Loading from '../../../components/custom/Loading/Loading';

const DetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPostById(id)
      .then(setPost)
      .then(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <Loading />;

  return (
    <div className={style.preview}>
      <h1 className={style.title}>{post.title}</h1>
      <MarkdownView markdown={post.body} />
    </div>
  );
};

export default DetailsPage;
