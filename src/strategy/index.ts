import { Checkout } from "./src/checkout";
import { form1Strategy } from "./src/formaP1.strategy";
import { forma2Strategy } from "./src/formaP2.strategy";
import { forma3Strategy } from "./src/formaP3.strategy";
import { User } from "./src/interfaces/payment-strategy.interface";

const obj = {
    visa: new form1Strategy(),
    mastercard: new form1Strategy(),
    paypal: new forma2Strategy(),
    stripe: new forma3Strategy(),
};

const user: User = {
    userId: "12345",
    amount: 100.0,
    email: "example@example.com",
    ccv: "123",
    cardNumber: 1234567890123456,
    dni: 1231568856
};
enum PaymentType {
    Visa = "visa",
    Mastercard = "mastercard",
    Paypal = "paypal",
    Stripe = "stripe"
}

function isValidPaymentType(type: any): type is PaymentType {
    return Object.values(PaymentType).includes(type);
}

// Ejemplo de uso
const cardType: any = "stripe";

if (isValidPaymentType(cardType)) {
    const compra = new Checkout(obj)
    compra.ejecutarPago(cardType, user)
} else {
    console.log(`Tipo de tarjeta inválido: ${cardType}`);
}


