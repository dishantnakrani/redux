export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementBy10 = () => {
  return {
    type: "INCREMENTBY10",
  };
};

export const submitForm = (formData) => {
  return {
    type: "SUBMIT_FORM",
    payload: formData,
  };
};

export const deleteRow = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const editRow = (formData) => {
  return {
    type: "EDIT",
    payload: formData,
  };
};
