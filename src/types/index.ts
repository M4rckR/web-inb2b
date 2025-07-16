import { z } from "zod"
import { formContactHomeSchema } from "@/schemas"

export type FormContactHomeType = z.infer<typeof formContactHomeSchema>