import { Token } from "interface/token";

const CheckToken = (token: Token | null) => {
    if (!token) {
        throw new Error("No token provided");
    }

    if (Date.now() >= token.exp * 1000) {
        throw new Error("Token expired");
    }
};

export default CheckToken;
