import img1 from "../assets/IMG_2910.png";
import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import {Card, CardContent, CardHeader, Container, List, ListItem, ListItemText, Typography} from "@mui/material";

const Kranio = () => {
  const { selectedLanguage } = useGlobalContext();
  return (
    // <Element name="kranio">
    //   <section className="section kranio" id="kranio">
    //     <h3>{texts[selectedLanguage].h_kranio}</h3>
    //     {texts[selectedLanguage].p_kranio.map((p, i) => (
    //       <article key={i}>
    //         <p key={i}>{p}</p>
    //       </article>
    //     ))}
    //     <div className="cranio-ul">
    //       {texts[selectedLanguage].ul_kranio.map((list, i) => (
    //         <div key={i}>
    //           <h4 key={i}>{list.title}</h4>
    //           <ul>
    //             {list.items.map((item, i) => (
    //               <li key={i}>{item}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </Element>
      <Container name="kranio" className={'kranioContainer'} >
        <div>
          <p><h3>{texts[selectedLanguage].h_kranio}</h3></p>
          <p>{texts[selectedLanguage].p_kranio}</p>
        </div>
        <Container sx={{display: 'flex'}}>
          {texts[selectedLanguage].ul_kranio.map((list, i) => (
              <Card key={i} sx={{'margin-right': '8px'}}>
                <CardHeader
                    title={list.title}
                    // subheader="September 14, 2016"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <ul>
                      {list.items.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
          ))}
        </Container>

      </Container>
  );
};
export default Kranio;
