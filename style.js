var css = {
  bg: '#111',
  col: '#fff',
  bg: 'lightblue',
  col: '#333',
  size: 48,
  unit: 'px',
}

styleToSheet.addRule('body', `
background: ` + css.bg + `;
color: ` + css.col + `;
`);

styleToSheet.prefix = '.edita '

styleToSheet.addRule('', `
background: ` + css.bg + `;
color: ` + css.col + `;
font-size: ` + css.size + css.unit + `;
`);

styleToSheet.addRule('.cursor', `
outline: 1px solid red;
`);
/*
*/
styleToSheet.addRule('*', `
outline: 1px solid;
`);

