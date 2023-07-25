import { Element } from "react-scroll";
import {Box, IconButton} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place.js";
import PhoneIcon from "@mui/icons-material/Phone.js";
import EmailIcon from "@mui/icons-material/Email.js";

const Footer = () => {
  return (
      <Box sx={{'background-color': '#1976d2',display: 'flex','justify-content': 'center'}}>
          <IconButton target={'_blank'} href={'https://goo.gl/maps/Y5ivAinHCLg56yUf6'}>
            <PlaceIcon sx={{ fontSize: 40 }}></PlaceIcon>
          </IconButton>
          <IconButton href={'tel:+420 775 232 633'}>
            <PhoneIcon sx={{ fontSize: 40 }}></PhoneIcon>
          </IconButton>
          <IconButton href={'mailto:test@example.com'}>
            <EmailIcon sx={{ fontSize: 40 }}></EmailIcon>
          </IconButton>
      </Box>
    // <section className="section footer" id="footer">
    //   Footer
    // </section>
  );
};
export default Footer;
