import { Button, Flex, Input } from 'antd';
import style from './CreatePage.module.css';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import MarkdownView from 'react-showdown';
import Line from '../../../components/custom/Line/Line';

const CreatePage = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  return (
    <Flex vertical gap="20px" className={style.container}>
      <form className={style.form}>
        <Input value={title} onChange={e => setTitle(e.target.value)} />
        <TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
        ></TextArea>
        <Button>Зберегти до чорнеток</Button>
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
