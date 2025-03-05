import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  borderBottomLeftRadius: "24px",
  borderBottomRightRadius: "24px",
  overflow: "hidden",
  textAlign: "center",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  backgroundColor: "#F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
  backgroundColor: "white",
});

const productsTitle = style({
  fontSize: "22px",
});

const products = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const product = style({
  position: "relative",
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const status = style({
  position: "absolute",
  right: "40%",
  top: "-17px",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const productIcon = style({
  // transform: "scale(1.1)",
});

const productText = style({
  marginBottom: 0,
});

const warning = style({
  backgroundColor: "#1EA2FF",
  padding: "0.5rem 1rem",
  borderRadius: "1rem",
  width: "fit-content",
  margin: "0 auto",
});

const pay = style({
  border: "2px solid #F3F4F5",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "24px",
  padding: "1rem 1rem 0.8rem 1rem",
});

const badge = style({
  backgroundColor: "black !important",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  status,
  warning,
  pay,
  badge,
};
