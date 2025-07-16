import { z } from "zod"

export const formContactHomeSchema = z.object({
    nombre: z
        .string()
        .min(2, { message: "Mínimo 2 caracteres" })
        .max(50, { message: "Máximo 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/, { message: "Solo letras y espacios" }),
    apellido: z
        .string()
        .min(2, { message: "Mínimo 2 caracteres" })
        .max(50, { message: "Máximo 50 caracteres" })
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/, { message: "Solo letras y espacios" }),
    empresa: z
        .string()
        .min(1, { message: "Empresa requerida" })
        .max(100, { message: "Máximo 100 caracteres" }),
    telefono: z
        .string()
        .length(9, { message: "Debe tener 9 dígitos" })
        .regex(/^9\d{8}$/, { message: "Debe empezar con 9" }),
    mensaje: z
        .string()
        .min(10, { message: "Mínimo 10 caracteres" })
        .max(1000, { message: "Máximo 1000 caracteres" }),
})

