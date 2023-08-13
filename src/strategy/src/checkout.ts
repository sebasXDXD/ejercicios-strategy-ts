import { PaymentResponse, PaymentStrategy, User } from "./interfaces/payment-strategy.interface";

export class Checkout {
    private paymentStrategies: Map<string, PaymentStrategy> = new Map();

    constructor(paymentStrategiesObj: { [key: string]: PaymentStrategy }) {
        Object.keys(paymentStrategiesObj).forEach(key => {
            this.paymentStrategies.set(key, paymentStrategiesObj[key]);
        });
    }

    public ejecutarPago(paymentType: string, user: User): PaymentResponse {
        const strategy = this.paymentStrategies.get(paymentType);
        if (!strategy) {
            throw new Error(`Payment strategy for '${paymentType}' not found.`);
        }

        return strategy.ejecutarPago(user);
    }
}