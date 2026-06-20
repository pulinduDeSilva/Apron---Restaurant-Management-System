export const Role = {
    CUSTOMER: "CUSTOMER",
    ADMIN: "ADMIN"
} as const;

export type RoleType = typeof Role[keyof typeof Role];