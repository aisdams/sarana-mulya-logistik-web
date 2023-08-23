// // @ts-nocheck

// import { IS_DEV } from '@/constants';
// import { clsx, type ClassValue } from 'clsx';
// import { format } from 'date-fns';
// import { id } from 'date-fns/locale';
// import he from 'he';
// import { jwtVerify } from 'jose';
// import { twMerge } from 'tailwind-merge';

// import { QueryString } from '@/types/global.type';

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export function getErrMessage(err: any) {
//   const errMsg =
//     err?.response?.data?.message || err?.message || 'Something went wrong!';

//   if (IS_DEV) {
//     console.log('err =>', errMsg);
//   }

//   return errMsg;
// }

// export const generateQueryStrings = ({
//   queryStrings,
// }: {
//   queryStrings?: QueryString[];
// }) => {
//   let strings = '';

//   if (!queryStrings) return { strings };

//   if (
//     !Array.isArray(queryStrings) &&
//     !!queryStrings.key &&
//     !!queryStrings.value
//   ) {
//     strings = `&${queryStrings.key}=${queryStrings.value}`;
//     return { strings };
//   }

//   if (Array.isArray(queryStrings)) {
//     queryStrings.forEach((q: any, idx: number) => {
//       if (!q?.key || !q?.value) return;

//       //! generate the query params
//       strings += `&${q.key}=${q.value}${
//         idx + 1 < queryStrings.length ? '&' : ''
//       }`;
//     });
//   }

//   return { strings };
// };

// export async function verifyJwt(token: any, secret: any) {
//   const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
//   // run some checks on the returned payload, perhaps you expect some specific values

//   // if its all good, return it, or perhaps just return a boolean
//   return payload;
// }

// export const expiresInSeconds = (seconds: any) => {
//   const date = new Date();
//   date.setTime(date.getTime() + seconds * 1000);
//   return date;
// };

// export const getCookie = (key: any) => {
//   const b = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
//   return b ? b.pop() : '';
// };

// export const dateFormat = (date: any) =>
//   format(new Date(date), 'dd MMMM yyyy', { locale: id });

// export const dateHourFormat = (date: any) =>
//   format(new Date(date), 'dd MMMM yyyy HH:mm', { locale: id });

// export const convertHtmlToText = (htmlString: any): any => {
//   if (!htmlString) return false;

//   return he.decode(htmlString.replace(/(<([^>]+)>)/gi, ''));
// };

// export const formatRupiah = (number: any) =>
//   new Intl.NumberFormat('id-ID', {
//     style: 'currency',
//     currency: 'IDR',
//   }).format(number);

// export const rupiahToDollar = (amount: any) =>
//   Math.round(Number.parseFloat(amount * 0.000068).toFixed(2));

// export const filterTwoArray = (
//   firstArray: any,
//   secondArray: any,
//   uniqueField: any
// ) =>
//   firstArray.filter(
//     (first: any) =>
//       !secondArray.some(
//         (second: any) => second[uniqueField] === first[uniqueField]
//       )
//   );

// export const isTipTapContentEmpty = (string: any) => {
//   return (
//     string === '<p style="margin-left: 0px!important;"></p>' ||
//     string === '' ||
//     !!string === false
//   );
// };

// export const isBookBought = ({
//   orders,
//   bookId,
//   selectedBookTypeName,
// }: {
//   orders: any;
//   bookId: any;
//   selectedBookTypeName?: any;
// }) => {
//   return Boolean(
//     orders?.find(
//       (order: any) =>
//         order.bookId === bookId &&
//         order.bookTypeName === selectedBookTypeName &&
//         (order.transactionStatus === 'SUCCESS' ||
//           order.transactionStatus === 'CAPTURE' ||
//           order.transactionStatus === 'SETTLEMENT')
//     )
//   );
// };

// export const toRoman = (str: any) => {
//   const g = [
//     ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
//     ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'LC'],
//     ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
//     [
//       '',
//       'M',
//       'MM',
//       'MMM',
//       'MMMM',
//       'V\u0305',
//       'V\u0305M',
//       'V\u0305MM',
//       'V\u0305MMM',
//       'MX\u0305',
//     ],
//   ];
//   const a = str.toString();
//   console.assert(a.length < 5, 'Number must be less than 10000 was %o', { a });
//   // eslint-disable-next-line no-restricted-globals
//   return isNaN(a) ? NaN : [...a].map((s, i) => g[a.length - i - 1][s]).join('');
// };

// export const formatCash = (number: any) => {
//   return Intl.NumberFormat('en', {
//     notation: 'compact',
//     maximumSignificantDigits: 3,
//   }).format(number);
// };

// export const calculateGrandTotal = ({
//   voucher,
//   price,
// }: {
//   voucher: any;
//   price: any;
// }) => {
//   if (!voucher || !price) return null;

//   if (voucher.discType === 'PERCENT') {
//     const discount = (price * voucher.discPercent) / 100;
//     return price - discount;
//   }
//   if (voucher.discType === 'NOMINAL') {
//     return price - voucher.discNominal;
//   }

//   return null;
// };
