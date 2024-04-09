import { Box } from "@mui/material";

import ContactsHero from "../sections/contacts/contactsHero";
import ContactUs from "../sections/contacts/contactUs";
import SocialNetwork from "../sections/contacts/socialNetwork";
import FAQ from "../sections/contacts/FAQ";
import { useInfoColors } from "../hooks/useInfoColors";

function Contacts() {
  const colors = useInfoColors();

  return (
    <Box>
      <ContactsHero light={colors.light} />
      <ContactUs />
      <SocialNetwork />
      <FAQ />
    </Box>
  );
}

export default Contacts;
