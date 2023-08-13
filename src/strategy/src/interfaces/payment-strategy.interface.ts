export interface PaymentResponse {
    isSucces: boolean;
    errorMessage?: string;
}

export class User {
    userId:string;
    amount:number;
    email:string;
    ccv:string;
    cardNumber:number;
    dni:number;
}

export interface PaymentStrategy {
  
    ejecutarPago(user:User): PaymentResponse;
}