import { GlobalStyle } from 'GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <Box width="480px" m="0 auto" p="30px">
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
      {/* {filteredContacts.length < 1 && <Notification />} */}
      <GlobalStyle />
    </Box>
  );
};
