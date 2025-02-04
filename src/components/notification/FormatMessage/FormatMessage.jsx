import { Button, Flex } from 'antd';
import style from './FormatMessage.module.css';

const FormatMessage = ({ input, value, onChange }) => {
  const inputElem = input?.current?.resizableTextArea?.textArea;

  const handleClick = tag => {
    if (!inputElem) return;

    console.dir(inputElem);

    const start = inputElem.selectionStart || 0;
    const end = inputElem.selectionEnd || 0;
    const selectedText = value.slice(start, end);
    const beforeText = value.slice(0, start);
    const afterText = value.slice(end);
    const props = tag === 'a' ? ' href=""' : '';

    const wrappedText = `<${tag}${props}>${selectedText}</${tag}>`;
    const newValue = beforeText + wrappedText + afterText;

    onChange(newValue);

    setTimeout(() => {
      inputElem.focus();
      inputElem.setSelectionRange(
        start + tag.length + props.length + 2,
        start + tag.length + props.length + 2 + selectedText.length,
      );
    }, 0);
  };

  return (
    <Flex className={style.container}>
      <Button onClick={() => handleClick('b')}>Жирний</Button>
      <Button onClick={() => handleClick('s')}>Закреслений</Button>
      <Button onClick={() => handleClick('u')}>Підкреслений</Button>
      <Button onClick={() => handleClick('i')}>Курсив</Button>
      <Button onClick={() => handleClick('a')}>Посилання</Button>
    </Flex>
  );
};

export default FormatMessage;
