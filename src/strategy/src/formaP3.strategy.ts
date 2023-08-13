import { PaymentResponse, PaymentStrategy, User } from "./interfaces/payment-strategy.interface";

export class forma3Strategy  implements PaymentStrategy{


    // constructor(public email: string, public name: string) { }

    ejecutarPago(user:User): PaymentResponse {
        console.log(`La forma de pago 2 usa la id de usuario ${user.userId}  con un monto de ${user.amount} con el dni ${user.dni}`);
        return { isSucces: true }
    }

} 