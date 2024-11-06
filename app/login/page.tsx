import Image from "next/image";
import { Button } from "../components/ui/button";
import { LogInIcon } from "lucide-react";
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* Esquerda */}
      <div className="flex flex-col p-8 justify-center h-full max-w-[550px] mx-auto">
        <Image src={"/logo.svg"} alt="Finance AI" width={173} height={39} />
        <div className="flex flex-col mt-8 mb-8 gap-3">
          <h1 className="text-4xl font-bold"> Bem Vindo </h1>
          <p className="text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do seu orçamento
          </p>
        </div>

        <Button variant={"outline"} > 
            <LogInIcon className="mr-2" />
            Faça Login ou criar conta
        </Button>
      </div>

      {/* Direita */}
      <div className="relative h-full w-full">
        <Image
          src={"/login.png"}
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
