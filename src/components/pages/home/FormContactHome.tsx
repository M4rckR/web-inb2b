"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formContactHomeSchema } from "@/schemas";
import { FormContactHomeType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export const FormContactHome = () => {
  const form = useForm<FormContactHomeType>({
    resolver: zodResolver(formContactHomeSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      mensaje: "",
      empresa: "",
      telefono: "",
    },
  });

  function onSubmit(data: FormContactHomeType) {
    console.log(data);
  }

  return (
    <div>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      className="placeholder:text-white aria-invalid:border-white border py-5 border-white text-white aria-invalid:ring-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Apellido"
                      className="placeholder:text-white aria-invalid:border-white border py-5 border-white text-white aria-invalid:ring-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
          <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Teléfono"
                      className="placeholder:text-white border py-5 aria-invalid:border-white border-white text-white aria-invalid:ring-none"
                      maxLength={9}
                      onKeyDown={(e) => {
                        // Permitir solo números y teclas de control
                        if (
                          !/[0-9]/.test(e.key) && // No es un número
                          e.key !== "Backspace" && // No es retroceso
                          e.key !== "Delete" && // No es eliminar
                          e.key !== "ArrowLeft" && // No es flecha izquierda
                          e.key !== "ArrowRight" && // No es flecha derecha
                          e.key !== "Tab" && // No es tab
                          !e.ctrlKey && // No es control + algo
                          !e.metaKey // No es comando + algo
                        ) {
                          e.preventDefault();
                        }
                      }}
                      onPaste={(e) => {
                        // Prevenir pegar contenido no numérico
                        const pastedData = e.clipboardData.getData('text');
                        if (!/^\d+$/.test(pastedData)) {
                          e.preventDefault();
                        }
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="empresa"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Empresa"
                      className="placeholder:text-white border py-5 aria-invalid:border-white border-white text-white aria-invalid:ring-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <textarea
                    placeholder="Mensaje"
                    className="placeholder:text-white border aria-invalid:border-white px-4 rounded-lg py-4 border-white text-white resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-in-cyan text-black hover:bg-in-cyan/80 cursor-pointer font-in-poppins"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
};
