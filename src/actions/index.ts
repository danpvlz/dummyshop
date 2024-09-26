import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { TestDriveEmail } from "../emails";
import { SendMail } from "../../mailersend";

export const server = {
  testDrive:  defineAction({
    accept: 'form',
    input: z.object({
        full_name: z.string(),
    }),
    handler: async ({ full_name }) => {
        try {
            const response = await SendMail("Nueva Solicitud de Test Drive", TestDriveEmail(""));
            return response || "response...";
        } catch (error) {
            console.log(error)
            throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "No se pudo enviar el correo.",
            });
        }
    },
})
}