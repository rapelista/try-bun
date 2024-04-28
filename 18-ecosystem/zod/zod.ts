import { z } from "zod";

const loginValidation = z.object({
    email: z.string().min(1).max(50).email(),
    password: z.string().min(1).max(50),
});

const request = {
    email: "farih@akmal.test",
    password: "12",
};

loginValidation.parse(request);
