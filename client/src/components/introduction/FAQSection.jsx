import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is Bot Flow Builder?",
    answer:
      "Bot Flow Builder is a drag-and-drop interface that helps you visually create chatbot workflows using different types of nodes like Message, Condition, etc.",
  },
  {
    question: "Can I edit node settings after placing them?",
    answer:
      "Yes, clicking on any node opens a settings panel where you can modify its properties like message content, conditions, or logic.",
  },
  {
    question: "Is the node connection system flexible?",
    answer:
      "Absolutely! You can connect any nodes together to define the logic and structure of your bot flow.",
  },
  {
    question: "Will it show errors if some settings are missing?",
    answer:
      "Yes. The system validates node fields and shows error messages when required fields are missing before allowing Save.",
  },
  {
    question: "Can I use this in production or extend it?",
    answer:
      "The architecture is modular and extendable, making it easy to integrate into larger platforms or add more node types later.",
  },
];

const FAQSection = () => {
  return (
    <Stack
      bgcolor={"#f9f9f9"}
      width={"100%"}
      borderRadius={2}
      mt={4}
      padding={2}
    >
      <Typography variant="h4" fontWeight={600} color="#333" mb={2}>
        FAQ
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default FAQSection;
