export interface CountriesInterface {
  // Source for these code's values : https://www.iban.com/country-codes
  //   to use an API to read from IBAN servers use this link : https://www.iban.com/developers
  code_alpha_2: string;  // CA=Canada, United States = US
  code_alpha_3: string;  // CAN=Canada, United States = USA
  code_numeric: number;  // 124=Canada, 840=United States
  name: string;
  price_usd: number;
  highlight_points: string[];
  image_flag: string;
}
