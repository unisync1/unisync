import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ReactMarkdown from 'react-markdown'

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    marginBottom: "15px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#000",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    borderRadius: 3.88681,

    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#000",
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions(props) {
  const panel = props.news.news_updates[0].title;
  const [expanded, setExpanded] = React.useState(`${panel}`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {props.news.news_updates.map((d) => (
        <Accordion
          square
          expanded={expanded === `${d.title}`}
          onChange={handleChange(`${d.title}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" key={d.id}>
            <h3>{d.title}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <ReactMarkdown>
             {d.description}
            </ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
