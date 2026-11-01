export const ELEMENT_DEFAULTS = {
  text: {
    text: "Edit this text",
    fontSize: 16,
    color: "#222222"
  },
  heading: {
    text: "Your heading",
    level: 2,
    fontSize: 32
  },
  image: {
    src: "",
    alt: "Image",
    objectFit: "cover"
  },
  button: {
    text: "Click me",
    variant: "primary"
  },
  container: {
    maxWidth: 1200,
    padding: 16
  }
} as const;
