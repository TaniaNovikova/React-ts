import styled from "@emotion/styled";

export const RemoveButton = styled.button`
  width: 25px;
  height: 25px;
  border: 1px outset;
  border-radius: 50%;
  color: #6e3e2c;
  font: 14px bold helvetica;
  cursor: pointer;
  background: rgb(43, 41, 41);
  color: #fff;
  &:hover {
    background: orangered;
  }
`;



// export const RemoveButton = styled.button`
//   width: 50px;
//  height: 100px;
//  outline: none;
//   /* background: ${(props) =>
//     props.disabled ? "rgb(181, 166, 166)" : "rgb(100 81 53))"}; */
//   /* background-color: ${(props) => (props.disabled ? "red" : "blue)")}; */
//   background-color: rgb(100 81 53);
//   /* border-radius: 3px; */
//   color: bisque;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   writing-mode: vertical-rl;
//   text-orientation: upright;
//   text-align: center;
//   padding: 15px;
//   align-self: center;

//   &:hover {
//     background-color: rgb(160, 129, 49);
//     border: outset;
//   }
// background: rgb(43, 41, 41);
// color: #fff;
// &:hover {
//   background: orangered;
// }
// `;

// // export const StyledButtonLi = styled.li`
// //   font: 20px bold sans-serif;
// //   height: 70px;
// //   width: 70px;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;
