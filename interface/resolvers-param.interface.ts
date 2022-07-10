import { NextApiRequest } from "next";
import { Token } from "./token";

export interface ResolversParam {
    req: NextApiRequest;
    token: Token;
}