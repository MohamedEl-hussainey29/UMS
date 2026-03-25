import { useForm } from "react-hook-form";

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
}

interface UserFormProps {
  onSubmit?: (data: UserFormData) => void;
  defaultValues?: UserFormData;
  readOnly?: boolean;
}

export default function UserForm({ onSubmit, defaultValues, readOnly }: UserFormProps) {

  const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>({defaultValues});

  return (
    <>
      <form onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined} className="m-5 shadow-lg p-3 rounded-4">
        <div className="my-5">
          <div className="row">
          <div className="col-md-6">
            <label>First Name</label>
              <input className="form-control"  type="text" placeholder='Enter First Name' disabled={readOnly}
                {...register('firstName',{required:'First Name is required!!!' , setValueAs: (value) => value.trim()})}
              />

              {errors.firstName && <span className='text-danger d-block'>{errors.firstName.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
              <input className="form-control"  type="text" placeholder='Enter Last Name' disabled={readOnly}
                {...register('lastName',{required:'Last Name is required!!!',setValueAs: (value) => value.trim()})}
              />

              {errors.lastName && <span className='text-danger d-block'>{errors.lastName.message}</span>}
          </div>
        </div>
         <div className="row my-4">
          <div className="col-md-6">
            <label>Email</label>
              <input className="form-control"  type="text" placeholder='Enter Email' disabled={readOnly}
                {...register('email',{required:'Email is required!!!' , pattern:{
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Email should be valid!'
                } ,setValueAs: (value) => value.trim()})}
              />

              {errors.email && <span className='text-danger d-block'>{errors.email.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Age</label>
              <input className="form-control"  type="number" placeholder='Enter Age' disabled={readOnly}
                {...register('age',{required:'Age is required!!!',max:{value: 60 , message: 'sorry, max age is 60'} , 
                min:{value: 1 , message: 'age cannot be zero or -ve !'},setValueAs: (value) => value.trim()})}
              />

              {errors.age && <span className='text-danger d-block'>{errors.age.message}</span>}
          </div>
        </div>
         <div className="row mb-5">
          <div className="col-md-6">
            <label>Phone Number</label>
              <input className="form-control"  type="text" placeholder='Enter Phone Number' disabled={readOnly}
                {...register('phone',{required:'Phone Number is required!!!' ,setValueAs: (value) => value.trim()})}
              />

              {errors.phone && <span className='text-danger d-block'>{errors.phone.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Birth Date</label>
              <input className="form-control"  type="text" placeholder='Enter Birth Date' disabled={readOnly}
                {...register('birthDate',{required:'Birth Date is required!!!',setValueAs: (value) => value.trim()})}
              />

              {errors.birthDate && <span className='text-danger d-block'>{errors.birthDate.message}</span>}
          </div>
        </div>
        {!readOnly &&
            <div className="text-center">
            <button className='btn btn-warning text-white w-50 my-3'>Save</button>
            </div>
        }
        </div>
      </form>
    </>
  )
}
