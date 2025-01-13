import axios from "axios";

const deliveryAddressSlice = (set) => ({
  address: [],
  selectedDeliveryAddress: null,
  setSelectedDeliveryAddress: (deliveryAddressId, deliveryAddress) => {
    set({
      selectedDeliveryAddress: { deliveryAddressId, deliveryAddress },
    });
  },
  setAddress: (updatedAddress) => {
    console.log(updatedAddress);
    set({
      address: updatedAddress,
    });
  },
  fetchAddress: async (userId) => {
    console.log("API Hit");
    const response = await axios.get(
      `https://portal.captainchef.net/public/contact/get-contact-addresses?contact_id=${userId}`
    );
    const data = await response.data.data;
    if (response.data.status === "success") {
      set({
        address: data,
      });
    }
    return { message: "success" };
  },
  deleteAddress: async (contactId, addressId) => {
    try {
      const response = await axios.get(
        `https://appv2.captainchef.net/AppV2/public/contact/delete-contact-addresses?contact_id=${contactId}&address_id=${addressId}`
      );
      return response.data.status;
    } catch (error) {
      console.log(error);
    }
  },
});

export default deliveryAddressSlice;
