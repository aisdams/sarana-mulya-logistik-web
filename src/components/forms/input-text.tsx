// import React from 'react';
// import { lowerCase, startCase } from 'lodash';
// import { useController, useFormContext } from 'react-hook-form';

// type InputTextProps = {
//   type?: 'text' | 'number';
//   label?: string;
//   name: string;
//   id?: string;
//   placeholder?: string;
//   disabled?: boolean;
//   onChange?: () => void;
//   mandatory?: boolean;
//   className?: string;
//   inputWrapperCN?: string;
//   inputCN?: string;
// };

// const InputText = ({
//   type,
//   label,
//   name,
//   id,
//   placeholder,
//   disabled,
//   onChange,
//   mandatory,
//   className,
//   inputWrapperCN,
//   inputCN,
//   ...props
// }: InputTextProps) => {
//   const methods = useFormContext();
//   const {
//     field,
//     fieldState: { error },
//   } = useController({ name });

//   // Extract the register function from methods
//   const { register } = methods;

//   return (
//     <div className={`relative ${className}`}>
//       <label htmlFor={id || name} className="mb-1 inline-block tracking-wider">
//         {label || startCase(name)}
//         {mandatory && <span className="text-primary">*</span>}
//       </label>

//       <div
//         className={`relative flex items-center rounded-lg border-2 border-white/20 transition-all focus-within:border-yellow-500 ${
//           disabled ? 'disabled:cursor-not-allowed disabled:bg-zinc-800' : ''
//         } ${inputWrapperCN || ''}`}
//       >
//         <input
//           {...register(name)}
//           type={type || 'text'}
//           value={field.value}
//           id={id || name}
//           className={`peer w-full bg-transparent px-3 py-2 outline-none placeholder:text-sm placeholder:text-white/50 ${
//             disabled ? 'disabled:cursor-not-allowed disabled:text-white/80' : ''
//           } ${inputCN || ''}`}
//           placeholder={
//             !disabled
//               ? placeholder ||
//                 label ||
//                 `Enter ${lowerCase(name)}...` ||
//                 'Type something...'
//               : undefined
//           }
//           disabled={disabled}
//           onChange={onChange || field.onChange}
//           {...props}
//         />
//       </div>
//       {error?.message && (
//         <p className="text-sm tracking-wide text-primary">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default InputText;
