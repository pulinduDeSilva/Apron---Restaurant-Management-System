export const ActiveStatus = {
    ROOT: "",
    FOODS: "foods",
    ORDER: "orders",
    CART: "cart"

} as const;


export type ActiveStatusType = typeof ActiveStatus[keyof typeof ActiveStatus];