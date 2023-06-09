import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    alert(`Welcome, ${data.email}`);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 flex flex-col items-center rounded border-2 border-gray-600 p-10"
    >
      <div
        className={`relative z-0 w-full ${!errors.email ? "mb-11" : "mb-5"}`}
      >
        <input
          type="text"
          {...register("email", { required: true, pattern: /^.+@.+\..+$/i })}
          name="email"
          placeholder=" "
          className="mt-0 block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent px-0 pb-2 pt-3 focus:border-blue-400 focus:outline-none focus:ring-0"
        />
        <label
          htmlFor="email"
          className="-z-1 origin-0 absolute top-3 text-gray-700 duration-300"
        >
          Email
        </label>
        {errors.email && (
          <span className="text-sm text-red-600" id="error">
            Email is required
          </span>
        )}
      </div>

      <div
        className={`relative z-0  w-full ${!errors.email ? "mb-11" : "mb-5"}`}
      >
        <input
          type="password"
          {...register("password", {
            required: "password is required",
            minLength: { value: 8, message: "min 8 character" },
          })}
          name="password"
          placeholder=" "
          className="mt-0 block w-full appearance-none border-0 border-b-2 border-gray-600 bg-transparent px-0 pb-2 pt-3 focus:border-blue-400 focus:outline-none focus:ring-0"
        />
        <label
          htmlFor="password"
          className="-z-1 origin-0 absolute top-3 text-gray-700 duration-300"
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
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
