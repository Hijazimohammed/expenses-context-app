import React, { forwardRef } from 'react';

const InputForm = forwardRef(({ text, type, textClassName }, ref) => {
  return (
    <div className='mb-3 col-md-6'>
      <label className='form-label'>{text}</label>
      <input
        type={type}
        className={`form-control ${textClassName}`}
        aria-describedby=''
        ref={ref}
      />
    </div>
  );
});

// function InputForm({ text, type, textClassName }) {
//   return (
//     <div className='mb-3 col-md-6'>
//       <label className='form-label'>{text}</label>
//       <input
//         type={type}
//         className={`form-control ${textClassName}`}
//         aria-describedby=''
//       />
//     </div>
//   );
// }

export default InputForm;
