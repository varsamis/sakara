import { Element } from "react-scroll";
import { texts } from "../data";
import { useGlobalContext } from "../context";
import {Container, List, ListItem, ListItemText} from "@mui/material";

const Qualification = () => {
  const { selectedLanguage } = useGlobalContext();

  const listItems = texts[selectedLanguage].core_qualification.items.map(item =>
      <li key={item.key}>
          <strong>{item.title}</strong>
          <br />
          {item.text}
      </li>
  )

  return (
      <Container className={'qualificationContainer'} >
          <h3>{texts[selectedLanguage].core_qualification.description}</h3>
          <List>

                      {texts[selectedLanguage].core_qualification.items.map(item =>
                          <ListItem key={item.key}>
                          <ListItemText key={item.key} primary={item.title} secondary={item.text}>
                              {/*<strong>{item.title}</strong>*/}
                              {/*<br />*/}
                              {/*{item.text}*/}
                          </ListItemText>
                          </ListItem>
                      )}
                      {/*<ListItemText*/}
                      {/*    primary="Single-line item"*/}
                      {/*    secondary="se"*/}
                      {/*/>*/}
                  ,
          </List>
      </Container>
    // <Element name="qualification">
    //   <section className="section qualification" id="qualification">
    //     <h3>{texts[selectedLanguage].h_qualification}</h3>
    //     <h4>{texts[selectedLanguage].core_qualification.description}</h4>
    //     <ol>
    //       {listItems}
    //     </ol>
    //     {texts[selectedLanguage].other_qualification.map((item, i) => (
    //       <h4 key={item.key}>{item.title}</h4>
    //     ))}
    //   </section>
    // </Element>
  );
};
export default Qualification;
