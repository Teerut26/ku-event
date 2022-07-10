import { JWT } from "next-auth/jwt";

export interface Token extends JWT {
    exp: number;
    jti: string;
}
