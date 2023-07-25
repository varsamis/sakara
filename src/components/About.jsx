import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import {Avatar, Box, Container, IconButton} from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const About = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    <Container className={'aboutContainer'} name="about">
      {/*<section className="section about" id="about">*/}
      {/*  <h3>{texts[selectedLanguage].h_about}</h3>*/}
      {/*    <Avatar*/}
      {/*        alt="Sabrina"*/}
      {/*        src={img1}*/}
      {/*        sx={{ width: 200, height: 200 }}*/}
      {/*    />*/}
      {/*  /!*<img className="grid-item" src={img1} alt="" />*!/*/}
      {/*  {texts[selectedLanguage].p_about.map((p, i) => (*/}
      {/*    <article key={i}>*/}
      {/*      <p key={i}>{p}</p>*/}
      {/*    </article>*/}
      {/*  ))}*/}
      {/*</section>*/}
        <Box className={'aboutBox'} sx={{display: 'flex'}}>
                {/*<Avatar*/}
                {/*    alt="Sabrina"*/}
                {/*    src={img1}*/}
                {/*    sx={{ width: 200, height: 200 }}*/}
                {/*/>*/}
            <Box sx={{display: 'flex', 'flex-direction': 'column'}}>
                <div><p className={'paragraph'}>{texts[selectedLanguage].p_about}</p></div>
                <Box sx={{display: 'flex'}}>
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
            </Box>

            <img src={img1} alt="Sabrina" height="650"/>
            {/*{texts[selectedLanguage].p_about.map((p, i) => (*/}
            {/*    <article key={i}>*/}
            {/*      <p key={i}>{p}</p>*/}
            {/*    </article>*/}
            {/*  ))}*/}
        </Box>

    </Container>

  );
};
export default About;
