import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:content";
import { SendMail } from "../../mailersend";
import { TestDriveEmail } from "../emails";

export const server = {
  testDrive:  defineAction({
    accept: 'form',
    input: z.object({
        "full_name": z.string(),
    }),
    handler: async ({  }) => {
        try {
            await SendMail("Nueva Solicitud de Test Drive", TestDriveEmail(""));
            return {
                title: '"Muchas Gracias”',
                description: 'Muy pronto nuestros asesores se pondrán en contacto.'
            };
        } catch (error) {
            throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "No se pudo enviar el correo.",
            });
        }
    },
})
}