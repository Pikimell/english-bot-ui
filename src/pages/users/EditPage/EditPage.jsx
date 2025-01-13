import { useEffect, useRef, useState } from 'react';
import UserSelector from '../../../components/custom/UserSelector/UserSelector';
import style from './EditPage.module.css';
import { useSearchParams } from 'react-router-dom';
import { getUser, updateUser, updateUserLevel } from '../../../api/userService';
import { Button, Flex, Input, InputNumber, Select } from 'antd';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/users/slice';

const EditPage = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const timerRef = useRef();
  const [params] = useSearchParams();
  const [selectUserId, setSelectUserId] = useState();
  const [user, setUser] = useState({});
  const [level, setLevel] = useState();
  const userId = params.get('userId');
  const [money, setMoney] = useState(0);

  useEffect(() => {
    setSelectUserId(userId);
  }, [userId]);

  useEffect(() => {
    if (selectUserId && selectUserId !== 'none') {
      getUser(selectUserId).then(data => {
        setUser(data);
        setLevel(data.level);
      });
      return;
    }

    if (selectUserId === 'none') {
      setUser({});
      return;
    }
  }, [selectUserId]);

  const handleSelect = userId => {
    setSelectUserId(userId);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleChangeBalance = e => {
    clearTimeout(timerRef.current);
    const value = +e.target.value;
    setMoney(value);
    timerRef.current = setTimeout(() => {
      setUser({ ...user, balance: user.balance + value });
      setMoney(0);
    }, 2000);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!selectUserId || selectUserId === 'none') return;
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    const { username, first_name, ...otherProps } = data;

    const contactInfo = {
      ...user.contactInfo,
      username,
      first_name,
    };

    const newUser = {
      ...user,
      ...otherProps,
      contactInfo,
    };

    newUser.balance *= 1;

    const promise = updateUser(selectUserId, newUser);
    toast
      .promise(promise, {
        loading: 'Зберігаємо...',
        success: 'Дані збережено',
        error: 'Упс( Щось пішло не так',
      })
      .then(() => {
        console.log(newUser.level, level);

        if (newUser.level !== level)
          updateUserLevel(newUser.userId, newUser.level);
      });
    setSelectUserId('none');
    formRef.current.reset();
    dispatch(updateUserInfo({ userId: selectUserId, data: newUser }));
  };

  const handleChangeFullName = e => {
    const value = e.target.value;

    const copy = {
      ...user,
      contactInfo: {
        ...user.contactInfo,
        first_name: value,
      },
    };

    setUser(copy);
  };

  const handleLevelChange = value => {
    setUser({ ...user, level: value });
  };
  return (
    <div className={style.container}>
      <UserSelector value={selectUserId} onChange={handleSelect} />

      <form ref={formRef} className={style.form} onSubmit={handleSubmit}>
        <Input addonBefore="ID" value={user.userId} readOnly />
        <Input
          addonBefore="username"
          name="username"
          value={user?.contactInfo?.username}
          readOnly
        />
        <Input
          addonBefore="fullname"
          name="first_name"
          value={user.contactInfo?.first_name}
          onChange={handleChangeFullName}
        />
        <Flex>
          <Input
            type="number"
            addonBefore="balance"
            name="balance"
            value={user.balance}
            onChange={handleChange}
            min={0}
            step={50}
          />
          <Input
            type="number"
            onChange={handleChangeBalance}
            addonBefore=" + "
            min={0}
            value={money}
          />
        </Flex>

        <Select
          name="level"
          placeholder="level"
          onChange={handleLevelChange}
          value={user.level}
        >
          <Select.Option key={'A0'}>A0</Select.Option>
          <Select.Option key={'A1'}>A1</Select.Option>
          <Select.Option key={'A2'}>A2</Select.Option>
          <Select.Option key={'B1'}>B1</Select.Option>
          <Select.Option key={'B2'}>B2</Select.Option>
          <Select.Option key={'C1'}>C1</Select.Option>
          <Select.Option key={'C2'}>C2</Select.Option>
        </Select>
        <Button onClick={handleSubmit}>Зберегти зміни</Button>
      </form>
    </div>
  );
};

export default EditPage;
