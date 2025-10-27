class Payment {
    process(amount){
        console.log();
    }
}

class CreditCardPayment extends Payment {
    process(amount){
        console.log(`Membayar Rp${amount} dengan kartu kredit.`);
    }
}
class EWalletPayment extends Payment {
    process(amount){
        console.log(`Membayar Rp${amount} dengan e-wallet.`);
    }
}
class BankTransferPayment extends Payment {
    process(amount){
        console.log(`Membayar Rp${amount} lewat transfer bank.`);
    }
}

const creditcard = new CreditCardPayment();
creditcard.process(500);
const ewallet = new EWalletPayment();
ewallet.process(400);
const banktransfer = new BankTransferPayment();
banktransfer.process(300);