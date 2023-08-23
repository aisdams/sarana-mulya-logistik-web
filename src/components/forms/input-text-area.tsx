// import { lowerCase, startCase } from 'lodash';
// import { useController, useFormContext } from 'react-hook-form';

// import { cn } from '@/lib/utils';

// type InputTextAreaProps = {
//   type?: 'text' | 'number';
//   label?: string;
//   name: string;
//   id?: string;
//   placeholder?: string;
//   disabled?: boolean;
//   onChange?: () => void;
//   mandatory?: boolean;
//   containerCN?: string;
//   inputWrapperCN?: string;
//   inputClassName?: string;
//   rows?: number;
// };

// export default function InputTextArea({
//   label,
//   name,
//   id,
//   placeholder,
//   disabled,
//   onChange,
//   mandatory,
//   containerCN,
//   inputWrapperCN,
//   inputClassName,
//   rows,
//   ...props
// }: InputTextAreaProps) {
//   const { register } = useFormContext();
//   const {
//     field,
//     fieldState: { error },
//   } = useController({ name });

//   return (
//     <div className={cn('relative', containerCN)}>
//       <label htmlFor={id || name} className='mb-1 inline-block tracking-wider'>
//         {label || startCase(name)}
//         {mandatory && <span className='text-primary'>*</span>}
//       </label>

//       <div
//         className={cn(
//           'relative flex items-center rounded-lg border-2 border-white/20 transition-all focus-within:border-yellow-500',
//           disabled && 'cursor-not-allowed bg-zinc-800',
//           inputWrapperCN
//         )}
//       >
//         <textarea
//           {...register(name)}
//           value={field.value}
//           id={id || name}
//           className={cn(
//             'peer w-full bg-transparent px-3 py-2 outline-none placeholder:text-sm placeholder:text-white/50',
//             disabled && 'cursor-not-allowed text-white/80',
//             inputClassName
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
//           rows={rows || 5}
//           {...props}
//         />
//       </div>
//       {error?.message && (
//         <p className='text-sm tracking-wide text-primary'>{error.message}</p>
//       )}
//     </div>
//   );
// }
