import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // Replace with your desired login logic
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center mt-8"
    >
      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          {...register('email', { required: true, pattern: '/^S+@S+$/i' })}
          name="email"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          for="email"
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-sm text-red-600" id="error">
            Email is required
          </span>
        )}
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="password"
          {...register('password', {
            required: 'password is required',
            minLength: { value: '8', message: 'min 8 character' },
          })}
          name="password"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          for="password"
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          Password
        </label>
        {errors.password && (
          <span className="text-sm text-red-600 " id="error">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
