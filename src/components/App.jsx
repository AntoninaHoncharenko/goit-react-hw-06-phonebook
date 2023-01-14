import { GlobalStyle } from 'GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Box } from './Box';
import { Title, Subtitle } from './App.styled';

export const App = () => {
  return (
    <Box width="800px" m="0 auto" p="30px">
      <Title>Phonebook</Title>
      <Box display="flex" justifyContent="space-around">
        <Box>
          <Subtitle>Contacts</Subtitle>
          <Filter />
          <ContactList />
          {/* {filteredContacts.length < 1 && <Notification />} */}
        </Box>
        <Box>
          <Subtitle>Add contact</Subtitle>
          <ContactForm />
        </Box>
      </Box>
      <GlobalStyle />
    </Box>
  );
};
