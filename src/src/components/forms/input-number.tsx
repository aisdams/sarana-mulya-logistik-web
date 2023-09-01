// import { lowerCase, startCase } from 'lodash';
// import { useController, useFormContext } from 'react-hook-form';

// import { cn } from '@/lib/utils';

// type InputNumberProps = {
//   name: string;
//   id?: string;
//   label?: string;
//   placeholder?: string;
//   disabled?: boolean;
//   onChange?: () => void;
//   mandatory?: boolean;
// };

// const InputNumber = ({
//   label,
//   name,
//   id,
//   placeholder,
//   disabled,
//   onChange,
//   mandatory,
// }: InputNumberProps) => {
//   const { register } = useFormContext();
//   const {
//     field,
//     fieldState: { error },
//   } = useController({ name });

//   return (
//     <div className="relative">
//       <label htmlFor={id || name} className="mb-1 inline-block tracking-wider">
//         {label || startCase(name)}
//         {mandatory && <span className="text-primary">*</span>}
//       </label>

//       <div
//         className={cn(
//           'relative flex items-center rounded-lg border-2 border-white/20 transition-all focus-within:border-yellow-500',
//           disabled && 'cursor-not-allowed bg-zinc-800'
//         )}
//       >
//         <input
//           {...register(name)}
//           type="number"
//           value={field.value}
//           id={id || name}
//           className={cn(
//             'peer w-full bg-transparent px-3 py-2 outline-none placeholder:text-sm placeholder:text-white/50',
//             disabled && 'cursor-not-allowed text-white/80'
//           )}
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
//         />
//       </div>
//       {error?.message && (
//         <p className="text-sm tracking-wide text-primary">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default InputNumber;
