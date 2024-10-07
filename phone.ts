import libphonenumber from "google-libphonenumber";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export const validatePhoneNumber = (phoneNumber: string, region: string) => {
  try {
    const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(
      phoneNumber,
      region,
    );

    if (!phoneUtil.isPossibleNumber(parsedPhoneNumber)) {
      return false;
    }

    return phoneUtil.isValidNumber(parsedPhoneNumber);
  } catch {
    return false;
  }
};

export const isPhoneNumberValid = (
  phoneNumber?: string | undefined,
  countryCode?: string | undefined,
) => {
  if (!phoneNumber || !countryCode) return false;

  return validatePhoneNumber(phoneNumber, countryCode);
};
