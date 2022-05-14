
interface UserRequest{
    name: string;
    email: string;
    password: string;
  }
  
  class CreateUserService{
    async execute({name, email, password}: UserRequest){
  
      console.log(email);
  
      return { email: email }
    }
  }
  
  export { CreateUserService }
