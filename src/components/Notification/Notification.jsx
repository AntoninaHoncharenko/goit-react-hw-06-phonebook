import { Message } from './Notification.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';

export const Notification = () => {
  const filter = useSelector(getFilter);
  return <Message>{filter} not found</Message>;
};
