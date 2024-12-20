import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionPaymentMethod.CREDIT_CARD]: "credit-card.svg",
  [TransactionPaymentMethod.DEBIT_CARD]: "debit-card.svg",
  [TransactionPaymentMethod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionPaymentMethod.BANK_SLIP]: "bank-slip.svg",
  [TransactionPaymentMethod.CASH]: "money.svg",
  [TransactionPaymentMethod.PIX]: "pix.svg",
  [TransactionPaymentMethod.OTHER]: "other.svg",
};

export const TRANSACTION_CATEGORIES_LABELS = {
  HOUSING: "Moradia",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Lazer",
  HEALTH: "Saude",
  EDUCATION: "Educacao",
  SALARY: "Salario",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHODS_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: "Depositar",
  },
  {
    value: TransactionType.EXPENSE,
    label: "Gastar",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investir",
  },
];

export const PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionPaymentMethod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.BANK_SLIP],
  },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHODS_LABELS[
        TransactionPaymentMethod.BANK_TRANSFER
      ],
  },
  {
    value: TransactionPaymentMethod.CASH,
    label: TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.CASH],
  },
  {
    value: TransactionPaymentMethod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.CREDIT_CARD],
  },
  {
    value: TransactionPaymentMethod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.DEBIT_CARD],
  },

  {
    value: TransactionPaymentMethod.PIX,
    label: TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.PIX],
  },
  {
    value: TransactionPaymentMethod.OTHER,
    label: TRANSACTION_PAYMENT_METHODS_LABELS[TransactionPaymentMethod.OTHER],
  },
];

export const TRANSACTION_CATEGORIES_OPTION = [
  {
    value: TransactionCategory.HOUSING,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.HOUSING],
  },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.ENTERTAINMENT],
  },
  {
    value: TransactionCategory.EDUCATION,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.EDUCATION],
  },
  {
    value: TransactionCategory.SALARY,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.SALARY],
  },
  {
    value: TransactionCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.TRANSPORTATION],
  },
  {
    value: TransactionCategory.OTHER,
    label: TRANSACTION_CATEGORIES_LABELS[TransactionCategory.OTHER],
  },
];
