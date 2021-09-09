import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/states';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

type FormData = {
  id: string;
  title: string;
  text: string;
  isComplete: boolean;
};

const Edit: React.FC = () => {
  const setTodoList = useSetRecoilState(todoListState);

  // react-hook-formを設定
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      id: format(new Date(2020, 9, 1, 0, 0, 0), 'yyyy-MM-dd-hh-mm-ss'),
      title: '',
      text: '',
      isComplete: false,
    },
  });

  // Submitアクション Todoを追加
  const addTodo = (data: FormData) => {
    setTodoList((oldTodoList) => [...oldTodoList, data]);
    reset();
  };

  const TitleForm = () => {
    return (
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="題名"
        {...register('title', {
          required: '必須項目です',
          maxLength: {
            value: 20,
            message: '20文字以内で入力してください',
          },
        })}
      />
    );
  };

  const TextForm = () => {
    return (
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="やることを書く"
        {...register('text', {
          required: '必須項目です',
          maxLength: {
            value: 20,
            message: '20文字以内で入力してください',
          },
        })}
      />
    );
  };
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit(addTodo)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            title
          </label>
          <TitleForm />
          {/* 入力要素とvalidationを設定 */}
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="text"
          >
            text
          </label>
          <TextForm />
          {errors.text && (
            <p className="text-red-500 text-xs italic">{errors.text.message}</p>
          )}
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Edit;
