import React, { useState } from "react";
import { Box, Modal, Typography, Divider } from "@mui/material";
import useAppStore from "../../store/store";

const SubscribeFirst = ({
  subscribeFirstModalOpen,
  setSubscribeFirstModalOpen,
}) => {
  const handleClose = () => setSubscribeFirstModalOpen(false);
  const { language } = useAppStore();

  return (
    <Modal
      open={subscribeFirstModalOpen}
      onClose={handleClose}
      aria-labelledby="subscribe-modal-title"
      aria-describedby="subscribe-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
        ml: { xs: "5px", sm: "0", md: "0", lg: "0" },
        mr: { xs: "5px", sm: "0", md: "0", lg: "0" },
        pl: "12px",
        pr: "12px",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: { xs: "250px", sm: "296px", md: "296px", lg: "296px" },
          backgroundColor: "white",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          textAlign: "center",
          outline: "none",
        }}
      >
        <Typography
          id="subscribe-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "26px",
            marginBottom: "16px",
          }}
        >
          {language === "en" ? "Subscribe Now" : "اشترك الآن"}
          <br />
          {language === "en" ? "Select Later" : "اختر لاحقاً"}
        </Typography>

        <Divider
          sx={{
            width: "100%",
            borderColor: "#ccc",
            marginBottom: "16px",
          }}
        />

        <Typography
          id="subscribe-modal-description"
          variant="body2"
          sx={{
            fontSize: "14px",
            color: "#757575",
          }}
        >
          {language === "en"
            ? "You can not select meals before buying Plan subscription, To Select, meals Subscribe the plan then select meals"
            : "لا يمكنك اختيار الوجبات قبل شراء اشتراك الخطة لاختيار الوجبات اشترك في الخطة ثم اختر الوجبات"}
        </Typography>
      </Box>
    </Modal>
  );
};

export default SubscribeFirst;
