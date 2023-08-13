//import { PaymentCard } from "./interfaces/payment-card.strategy.interface";
import { PaymentResponse, PaymentStrategy, User } from "./interfaces/payment-strategy.interface";

export class form1Strategy implements PaymentStrategy{
    // constructor(public cardNumber: string, public ccv: string) { }
   
    ejecutarPago(user:User): PaymentResponse {
        console.log(`La forma de pago 1  usa la id de usuario ${user.userId},${user.dni}  con un monto de ${user.amount}`);
        return { isSucces: true };
    }
}

