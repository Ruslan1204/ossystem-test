// const biomarkers = [
//   "11_14_translocation",
//   "11q_deletion",
//   "13q_deletion",
//   "15_17_translocation",
//   "17p_deletion",
//   "bcr_abl1",
//   "c_met",
//   "cd303_bdca_1",
//   "cyclin_e_ccne1",
// ];

// Ну и в зависимости от тайпа возвращать biomarkersDbMappingFields  или biomarkersModelProfileTableFields или biomarkersModelProfileTableFields



// const genResult = (type) =>
//   biomarkers.reduce((previousValue, biomarker) => {
//     // let propName =
//     //   "biomarkers" +
//     //   biomarker
//     //     .replace(/^[^a-zа-яё]*([a-zа-яё])/gi, function (m) {
//     //       return m.toUpperCase();
//     //     })
//     //     .replace(/_/gi, "");

//     // console.log(...previousValue)
//     // console.log([`biomarkers_${biomarker}`])

//     const parts = biomarker.split("_");
//     // console.log(parts)
//     const transformedString = parts
//       .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//       .join("");

//     // console.log(transformedString)

//     const res1 = {
//       ["biomarkers" + transformedString]: [
//         {
//           field: "biomarkers",
//           value: biomarker,
//         },
//       ],
//     };

//     const res2 = {
//       ["biomarkers" + transformedString]: [
//         {
//           type: "string10",
//           value: "biomarkers" + biomarker,
//         },
//       ],
//     };

//     const res3 = {
//       ["biomarkers" + transformedString]: {
//         name: "biomarkers",
//         fields: {
//           ["biomarkers" + biomarker]: "biomarkers" + biomarker,
//         },
//       },
//     };

//     switch (type) {
//       case "type1":
//         previousValue.push(res1);
//         break;

//       case "type2":
//         previousValue.push(res2);
//         break;

//       case "type3":
//         previousValue.push(res3);
//         break;

//       default:
//         console.log("Invalid type");
//     }

//     if (previousValue.length === 3) {
//       console.log(previousValue);

//       return;
//     }

//     return previousValue;
//   }, []);

// console.log(genResult("type1"));


// const generateFieldMappingKey = (biomarker) => {
//   const parts = biomarker.split('_');
//   const transformedString = parts
//       .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//       .join('');

//   return `biomarkers${transformedString}`;
// }

// const res1 = {
//   biomarkers1114Translocation: [
//     { field: "biomarkers", value: "11_14_translocation" },
//   ],
//   biomarkers11qDeletion: [{ field: "biomarkers", value: "11q_deletion" }],
//   biomarkers13qDeletion: [{ field: "biomarkers", value: "13q_deletion" }],
// };

// const biomarkersModelProfileTableFields = biomarkers.reduce(
//   (prev, curr) => ({
//     ...prev,
//     [generateFieldMappingKey(curr)]: {
//       type: "string10",
//       field: `biomarkers_${curr}`,
//     },
//   }),
//   {}
// );

// console.log(biomarkersModelProfileTableFields)

// const rer2 = {
//   biomarkers1114Translocation: {
//     type: "string10",
//     field: "biomarkers_11_14_translocation",
//   },
//   biomarkers11qDeletion: { type: "string10", field: "biomarkers_11q_deletion" },
//   biomarkers13qDeletion: { type: "string10", field: "biomarkers_13q_deletion" },
// };

// const biomarkersDbMappingFields = biomarkers.reduce(
//   (prev, curr) => ({
//     ...prev,
//     [generateFieldMappingKey(curr)]: [{ field: "biomarkers", value: curr }],
//   }),
//   {}
// );

// console.log(biomarkersModelProfileTableFields)


// const res3 = {
//   name: "biomarkers",
//   fields: {
//     biomarkers_11_14_translocation: "biomarkers_11_14_translocation",
//     biomarkers_11q_deletion: "biomarkers_11q_deletion",
//     biomarkers_13q_deletion: "biomarkers_13q_deletion",
//   },
// };

// const biomarkersQueriesMatchesFields = {
//   name: 'biomarkers',
//   fields: biomarkers.reduce((prev, curr) => ({
//       ...prev,
//       [`biomarkers_${curr}`]:` biomarkers_${curr}`,
//   }), {}),
// };

// console.log(biomarkersQueriesMatchesFields)

// genResult("type3");

// biomarkers.forEach((biomarker, index) => {
//   const result = biomarker.replace(/_/gi, "")

//   // parseInt(result)

//   // const explode = x => {
//   //   console.log(x)
//   //   return x.reduce((pre, val) => (typeof val === 'number' ? val : 0) + pre, 0);
//   // }

//   // console.log(explode(result));

//   // console.log(result)

//   // const newResult = result.charAt(0).toUpperCase() + result.slice(1)

//   // console.log(newResult)

//   let res;

//   switch (type) {
//     case "type1":
//       res = {
//         ["biomarkers" + result.replace(/_/gi, "")]: [
//           {
//             field: "biomarkers",
//             value: biomarker,
//           },
//         ],
//       };
//       break;

//     case "type2":
//       res = {
//         ["biomarkers" + result.replace(/_/gi, "")]: {
//           type: "string10",
//           value: "biomarkers" + biomarker,
//         },
//       };
//       break;

//     case "type3":
//       res = {
//         name: "biomarkers",
//         fields: {
//           ["biomarkers" + result]: "biomarkers" + result,
//         },
//       };
//       break;

//     default:
//     // console.log("Invalid type");
//   }

//   // console.log(res);
// });


