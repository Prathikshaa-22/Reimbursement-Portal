export interface LoginRequest {
  email: string;
  password: string;
}
 
export interface LoginResponse {
  message: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    managerName: string;
  };
}