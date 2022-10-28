export const state = () => ({
  reservationCheckInDate: '',
  reservationCheckOutDate: '',

  reservationAdultCount: 0,
  reservationChildCount: 0,

  specialoperType: '',
});

export const mutations = {
  checkinDateChange(state, checkInDate) {
    state.reservationCheckInDate = checkInDate;
  },

  checkoutDateChange(state, checkOutDate) {
    state.reservationCheckOutDate = checkOutDate;
  },

  adultChange(state, adultCount) {
    state.reservationAdultCount = adultCount;
  },

  childChange(state, childCount) {
    state.reservationChildCount = childCount;
  },

  specialoperTypeChange(state, type) {
    state.specialoperType = type;
  },
};

