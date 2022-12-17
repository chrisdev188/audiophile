import { createContext, useContext, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface FormInfo {
  value: string;
  errorMessage?: string;
  invalid: boolean;
}
interface FormInputAttributes extends FormInfo {
  id: string;
  name: string;
  placeholder: string;
  label: string;
}
interface RadioAttributes
  extends Omit<
    FormInputAttributes,
    "placeholder" | "errorMessage" | "invalid"
  > {
  checked: boolean;
}

interface CheckoutFormContext {
  formObject: {
    name: FormInfo;
    email: FormInfo;
    phone: FormInfo;
    address: FormInfo;
    zipcode: FormInfo;
    city: FormInfo;
    country: FormInfo;
    eMoney: FormInfo;
    cash: FormInfo;
    paymentOption: { value: string };
  };
  billingInfo: FormInputAttributes[];
  shippingInfo: FormInputAttributes[];
  paymentInfo: FormInputAttributes[];
  paymentOptions: RadioAttributes[];
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  closeConfirmCheckoutModal: () => void;
  showConfirmCheckoutModal: boolean;
}

export const CheckoutFormContext = createContext({} as CheckoutFormContext);

interface CheckoutFormContextProps {
  children: React.ReactNode;
}
export const CheckoutFormContextProvider = ({
  children,
}: CheckoutFormContextProps) => {
  const { clearCart } = useShoppingCartContext();
  const [formObject, setFormObject] = useState({
    name: { value: "", errorMessage: "", invalid: false },
    email: { value: "", errorMessage: "", invalid: false },
    phone: { value: "", errorMessage: "", invalid: false },
    address: { value: "", errorMessage: "", invalid: false },
    zipcode: { value: "", errorMessage: "", invalid: false },
    city: { value: "", errorMessage: "", invalid: false },
    country: { value: "", errorMessage: "", invalid: false },
    eMoney: { value: "", errorMessage: "", invalid: false },
    cash: { value: "", errorMessage: "", invalid: false },
    paymentOption: { value: "e-money" },
  });
  const [showConfirmCheckoutModal, setShowConfirmCheckoutModal] =
    useState(false);

  const billingInfo = [
    {
      id: "name",
      name: "name",
      value: formObject.name.value,
      placeholder: "Alexei Ward",
      label: "name",
      errorMessage: formObject.name.errorMessage,
      invalid: formObject.name.invalid,
    },
    {
      id: "email",
      name: "email",
      value: formObject.email.value,
      placeholder: "alexei@mail.com",
      label: "email address",
      errorMessage: formObject.email.errorMessage,
      invalid: formObject.email.invalid,
    },
    {
      id: "phone",
      name: "phone",
      value: formObject.phone.value,
      placeholder: "+1 202-555-0136",
      label: "phone number",
      errorMessage: formObject.phone.errorMessage,
      invalid: formObject.phone.invalid,
    },
  ];

  const shippingInfo = [
    {
      id: "address",
      name: "address",
      value: formObject.address.value,
      placeholder: "1137 Williams Avenue",
      label: "address",
      errorMessage: formObject.address.errorMessage,
      invalid: formObject.address.invalid,
    },
    {
      id: "zipcode",
      name: "zipcode",
      value: formObject.zipcode.value,
      placeholder: "10001",
      label: "zip code",
      errorMessage: formObject.zipcode.errorMessage,
      invalid: formObject.zipcode.invalid,
    },
    {
      id: "city",
      name: "city",
      value: formObject.city.value,
      placeholder: "New York",
      label: "city",
      errorMessage: formObject.city.errorMessage,
      invalid: formObject.city.invalid,
    },
    {
      id: "country",
      name: "country",
      value: formObject.country.value,
      placeholder: "United States",
      label: "country",
      errorMessage: formObject.country.errorMessage,
      invalid: formObject.country.invalid,
    },
  ];

  const paymentOptions = [
    {
      id: "e-money",
      name: "paymentOption",
      value: "e-money",
      label: "e-Money",
      checked: formObject.paymentOption.value === "e-money",
    },
    {
      id: "cash",
      name: "paymentOption",
      value: "cash",
      label: "Cash on Delivery",
      checked: formObject.paymentOption.value === "cash",
    },
  ];

  const paymentInfo = [
    {
      id: "e-money",
      name: "eMoney",
      value: formObject.eMoney.value,
      placeholder: "238521993",
      label: "e-Money Number",
      errorMessage: formObject.eMoney.errorMessage,
      invalid: formObject.eMoney.invalid,
    },
    {
      id: "cash",
      name: "cash",
      value: formObject.cash.value,
      placeholder: "6891",
      label: "Cash Number",
      errorMessage: formObject.cash.errorMessage,
      invalid: formObject.cash.invalid,
    },
  ];

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (e.currentTarget.type !== "radio") {
      const errorMessage = validate(name, value);
      setFormObject((currentFormObject) => {
        return Object.assign({}, currentFormObject, {
          ...currentFormObject,
          [name]: { value, errorMessage, invalid: errorMessage ? true : false },
        });
      });
    } else if (e.currentTarget.type === "radio") {
      setFormObject((currentFormObject) => {
        return Object.assign({}, currentFormObject, {
          ...currentFormObject,
          [name]: { value },
        });
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formObj = Object.fromEntries(new FormData(e.currentTarget));

    const names = Object.keys(formObj) as Array<string>;
    const values = Object.values(formObj) as Array<string>;

    const booleans = names.map((name, index) => {
      const value = values[index];
      const errorMessage = validate(name, value);

      setFormObject((currentFormObject) => {
        return Object.assign({}, currentFormObject, {
          ...currentFormObject,
          [name]: {
            value,
            errorMessage,
            invalid: errorMessage ? true : false,
          },
        });
      });

      return errorMessage ? true : false;
    });

    if (booleans.find((b) => b === true)) return;
    else {
      openConfirmCheckoutModal();
      resetFormObject();
    }
  };

  const validate = (name: string, value: string = "") => {
    if (!value.trim()) return "Empty input";
    if (name === "name") {
      const nameRegExp = /^[a-zA-Z\s]+$/;
      if (!nameRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "email") {
      const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "phone") {
      const phoneRegExp = /^\+[1](\s)\([0-9]{3}\)(\s)[0-9]{3}(-)[0-9]{4}$/;
      if (!phoneRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "address") {
      const addressRegExp = /^[a-zA-Z\s0-9]+$/;
      if (!addressRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "zipcode") {
      const zipcodeRegExp = /^[0-9]{5}$/;
      if (!zipcodeRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "city") {
      const cityRegExp = /^[A-Za-z\s]+$/;
      if (!cityRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "country") {
      const countryRegExp = /^[A-Za-z\s]+$/;
      if (!countryRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "eMoney") {
      const eMoneyRegExp = /^[0-9]{9}$/;
      if (!eMoneyRegExp.test(value)) return "Wrong format";
      else return "";
    }
    if (name === "cash") {
      const cashRegExp = /^[0-9]{4}$/;
      if (!cashRegExp.test(value)) return "Wrong format";
      else return "";
    }
  };

  const closeConfirmCheckoutModal = () => {
    setShowConfirmCheckoutModal(false);
  };
  const openConfirmCheckoutModal = () => {
    setShowConfirmCheckoutModal(true);
  };

  const resetFormObject = () => {
    setFormObject({
      name: { value: "", errorMessage: "", invalid: false },
      email: { value: "", errorMessage: "", invalid: false },
      phone: { value: "", errorMessage: "", invalid: false },
      address: { value: "", errorMessage: "", invalid: false },
      zipcode: { value: "", errorMessage: "", invalid: false },
      city: { value: "", errorMessage: "", invalid: false },
      country: { value: "", errorMessage: "", invalid: false },
      eMoney: { value: "", errorMessage: "", invalid: false },
      cash: { value: "", errorMessage: "", invalid: false },
      paymentOption: { value: "e-money" },
    });
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        formObject,
        handleChange,
        handleSubmit,
        billingInfo,
        shippingInfo,
        paymentOptions,
        paymentInfo,
        closeConfirmCheckoutModal,
        showConfirmCheckoutModal,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};

export const useCheckoutFormContext = () => {
  return useContext(CheckoutFormContext);
};
